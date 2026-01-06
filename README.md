# Voxity - Web3 Agency Website

A modern, futuristic Web3 agency website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark mode with glassmorphism effects, neon accents, and smooth animations
- **Fully Responsive**: Optimized for all devices
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Built with Next.js App Router for optimal performance
- **Type Safe**: Full TypeScript support

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📦 Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
voxity/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Footer.tsx           # Footer component
│   ├── GlassCard.tsx        # Glassmorphism card component
│   └── Navigation.tsx       # Navigation bar
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Customization

### Colors

Edit the gradient colors in `app/globals.css`:

```css
.gradient-text {
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #3b82f6 100%);
}
```

### Content

Update the content in `app/page.tsx`:
- Services array
- Projects array
- Partners array
- Section text content

## 📝 Sections

- **Hero**: Animated hero section with gradient background
- **Analytics**: Analytics showcase section
- **Partners**: Trusted partners grid
- **About**: Company information
- **Quote**: Inspirational quote section
- **Services**: 12 service cards with descriptions
- **Projects**: Project showcase grid
- **New Perspectives**: Insights section
- **Newsletter**: Proposal request form
- **Contact**: Contact information

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or support, contact: partnership.voxity@gmail.com

---

Built with ❤️ by Voxity

