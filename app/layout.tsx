import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const squadaOne = localFont({
  src: "../public/fonts/SquadaOne-Regular.ttf",
  variable: "--font-squada-one",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://voxity.com'),
  title: "Voxity | Web3 Growth, Community & Go-To-Market Partner",
  description:
    "Web3-native growth team delivering ambassador programs, community management, influencer and affiliate marketing, fundraising support, UI/UX, 3D animation, presales, and performance marketing for crypto, DeFi, NFT, and gaming projects.",
  keywords: [
    "Web3 growth",
    "go-to-market",
    "community building",
    "community management",
    "ambassador programs",
    "influencer marketing",
    "affiliate marketing",
    "performance marketing",
    "presales",
    "fundraising",
    "UI/UX design",
    "3D animation",
    "social media management",
    "content marketing",
    "crypto marketing",
    "DeFi",
    "NFT",
    "gaming",
    "dApp",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Voxity | Web3 Growth, Community & Go-To-Market Partner",
    description:
      "Web3-native growth team delivering ambassador programs, community management, influencer and affiliate marketing, fundraising support, UI/UX, 3D animation, presales, and performance marketing for crypto, DeFi, NFT, and gaming projects.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://voxity.com',
    siteName: "Voxity",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Voxity Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxity | Web3 Growth, Community & Go-To-Market Partner",
    description:
      "Web3-native growth team delivering ambassador programs, community management, influencer and affiliate marketing, fundraising support, UI/UX, 3D animation, presales, and performance marketing for crypto, DeFi, NFT, and gaming projects.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Voxity Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={squadaOne.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

