import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to create transporter
function createTransporter(port: number, secure: boolean) {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.voxity.io',
    port: port,
    secure: secure, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'mail.to@voxity.io',
      pass: process.env.SMTP_PASSWORD || '',
    },
    connectionTimeout: 15000, // 15 seconds
    greetingTimeout: 10000, // 10 seconds
    socketTimeout: 15000, // 15 seconds
    tls: {
      // Do not fail on invalid certificates
      rejectUnauthorized: false,
      // Allow legacy TLS versions if needed
      minVersion: 'TLSv1',
    },
    // Retry configuration
    pool: false,
    maxConnections: 1,
    maxMessages: 3,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, message, subject } = body;

    // Validate input
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Try primary port (465) first, then fallback to 587
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    let transporter = createTransporter(smtpPort, smtpPort === 465);
    let lastError: any = null;

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || 'mail.from@voxity.io',
      to: 'partnerships.voxity@gmail.com',
      subject: subject || `New Contact Form Submission from ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e21b1b;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'Contact Form'}</p>
          <hr style="border: 1px solid #e21b1b; margin: 20px 0;" />
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${email}
Subject: ${subject || 'Contact Form'}

Message:
${message}
      `,
    };

    // Send email - try primary port first
    try {
      const info = await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully',
          messageId: info.messageId 
        },
        { status: 200 }
      );
    } catch (primaryError: any) {
      lastError = primaryError;
      console.error('Error with primary SMTP port:', primaryError);
      
      // If primary port is 465 and it fails, try 587 as fallback
      if (smtpPort === 465 && (primaryError.code === 'ETIMEDOUT' || primaryError.code === 'ESOCKET' || primaryError.code === 'ECONNREFUSED')) {
        console.log('Attempting fallback to port 587 (STARTTLS)...');
        try {
          transporter = createTransporter(587, false);
          const info = await transporter.sendMail(mailOptions);
          return NextResponse.json(
            { 
              success: true, 
              message: 'Email sent successfully (via fallback port 587)',
              messageId: info.messageId 
            },
            { status: 200 }
          );
        } catch (fallbackError: any) {
          console.error('Error with fallback SMTP port:', fallbackError);
          lastError = fallbackError;
        }
      }
      
      // If we get here, both attempts failed
      throw lastError;
    }
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more helpful error messages
    let errorMessage = 'Failed to send email';
    if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
      errorMessage = 'Connection timeout: Unable to reach SMTP server. Please check your network connection and SMTP server settings.';
    } else if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed: Please check your SMTP username and password.';
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Connection refused: The SMTP server is not accepting connections. Please verify the server address and port.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.code || error.message,
        suggestion: error.code === 'ETIMEDOUT' || error.code === 'ESOCKET' 
          ? 'Try using port 587 with STARTTLS instead of port 465, or check if your firewall/network allows SMTP connections.'
          : undefined
      },
      { status: 500 }
    );
  }
}

