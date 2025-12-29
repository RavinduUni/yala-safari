# Yala Safari - Next.js Website

This is a fully converted Next.js TypeScript website for Yala National Park Safari Tours, converted from HTML with all existing styles preserved.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── about/              # About Yala National Park
│   ├── book/               # Safari booking page
│   ├── contact/            # Contact page
│   ├── pricing/            # Pricing plans
│   ├── faqs/               # Frequently asked questions
│   ├── services/           # Safari services
│   └── gallery/            # Wildlife photo gallery
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## 🎨 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom theme
- **Dark mode** enabled by default
- **Responsive design** for all devices
- **Google Fonts** integration (Plus Jakarta Sans, Playfair Display, Noto Sans)
- **Material Symbols** icons
- **Image optimization** with Next.js Image component support
- **All existing styles preserved** from original HTML

## 📄 Pages

- **Home** (`/`) - Main landing page with hero, highlights, packages
- **About** (`/about`) - About Yala National Park
- **Services** (`/services`) - Safari services and packages
- **Gallery** (`/gallery`) - Wildlife photo gallery
- **Pricing** (`/pricing`) - Pricing plans and comparison
- **FAQs** (`/faqs`) - Frequently asked questions
- **Book** (`/book`) - Safari booking form
- **Contact** (`/contact`) - Contact information and form

## 🛠️ Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
The easiest way to deploy is using [Vercel Platform](https://vercel.com):
```bash
vercel
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`:
- **Primary**: `#f4c025` (Golden yellow)
- **Background Dark**: `#231e10`
- **Surface Dark**: `#342d18`
- **Border Dark**: `#493f22`

### Fonts
- **Display**: Plus Jakarta Sans (headings, body)
- **Serif**: Playfair Display (decorative)
- **Body**: Noto Sans (alternative body text)

## 📦 Dependencies

- **next**: 14.0.4
- **react**: ^18
- **tailwindcss**: ^3.3.0
- **typescript**: ^5
- **@tailwindcss/forms**: For form styling

## 📝 Notes

- All images are loaded from Google's CDN as per original HTML
- Dark mode is enabled by default in the root layout
- Custom scrollbar styles are preserved in global CSS
- Material Symbols font is loaded from Google Fonts CDN

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

All rights reserved © 2023 Yala Safari Tours
