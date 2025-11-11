# SolArena Landing Page

Standalone landing page for SolArena - The first fully on-chain, trustless betting protocol on Solana.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 What's Included

- **Full Logo** - Neon cyberpunk branding
- **About Section** - Project description
- **Social Links** - Discord, Twitter/X, Telegram
- **Demo Video** - Auto-playing Phase 1 showcase
- **Development Checklist** - Public progress tracker (70% complete)
- **CTA Button** - "Enter The Arena" (links to main app)

## 🎨 Features

- Cyberpunk neon theme (purple/cyan gradient)
- Animated gradient backgrounds
- Responsive design
- Auto-playing looping video
- Interactive progress tracker
- Social media integration

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Manual Deployment

```bash
# Build
npm run build

# Upload the `dist` folder to your hosting provider
```

## 📁 Structure

```
landing-page-standalone/
├── public/
│   ├── fulllogo.png          # SolArena logo
│   ├── demo-video.mp4        # Phase 1 demo
│   └── favicon.png           # Site icon
├── src/
│   ├── components/ui/        # UI components (button, toast, tooltip)
│   ├── hooks/                # React hooks (use-toast)
│   ├── lib/                  # Utilities
│   ├── pages/
│   │   └── Landing.tsx       # Main landing page
│   ├── App.tsx               # App wrapper
│   ├── main.tsx              # Entry point
│   └── index.css             # Cyberpunk theme styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🔗 Links

- **Discord**: https://discord.gg/GmG6xrnUm8
- **Twitter/X**: https://x.com/SOLArenaLabs
- **Telegram**: https://t.me/+a8QoNIahl5Q5MTEx

## 🎯 Main App

This landing page links to the main SolArena application at `/dashboard`. Update the CTA button URL in `src/pages/Landing.tsx` to point to your deployed app.

## 📝 Customization

### Update Social Links

Edit `src/pages/Landing.tsx` lines 59-104 to update Discord, Twitter, and Telegram URLs.

### Update Progress Checklist

Edit `src/pages/Landing.tsx` lines 7-19 to update the development checklist items and statuses.

### Change Theme Colors

Edit `src/index.css` to customize the neon purple/cyan color scheme.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Wouter** - Routing (lightweight)

## 📄 License

MIT License - See main SolArena repository for details.

---

**Built with ⚡ on Solana**

*"Where speculation becomes sport."*
