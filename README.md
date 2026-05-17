# CryptoAI Trading Dashboard

A futuristic, premium AI-powered cryptocurrency trading dashboard with ultra-modern UI/UX design, real-time analytics, and automated trading bot management.

## 🚀 Features

### Landing Page
- **Cinematic Hero Section** - Animated hero with gradient text and floating elements
- **Statistics Counter** - Animated number counters showing platform stats
- **Features Showcase** - Grid layout highlighting key capabilities
- **Pricing Plans** - Three-tier pricing with feature comparison
- **FAQ Section** - Collapsible accordion with common questions
- **Social Proof** - Testimonials and partner logos
- **Premium Footer** - Complete footer with links and social media

### Dashboard
- **Real-Time Trading** - Live market data, interactive charts, and order book
- **Portfolio Analytics** - Asset allocation, performance tracking, holdings table
- **AI Trading Bots** - Create, manage, and monitor automated trading strategies
- **Wallet Management** - Deposit, withdraw, and balance tracking
- **Notifications** - Real-time alerts and trading notifications
- **Advanced Charts** - Interactive Recharts with candlestick and area charts
- **Market Ticker** - Live cryptocurrency price feeds

### Design Features
- **Dark Mode** - Premium dark theme with neon accents (blue, purple, cyan)
- **Glassmorphism** - Semi-transparent cards with backdrop blur effects
- **Neon Glow** - Glowing borders and shadows for premium feel
- **Smooth Animations** - Framer Motion for fluid UI transitions
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark mode
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: React Icons
- **State Management**: Zustand (optional)
- **HTTP Client**: Axios (for API calls)
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
crypto-trading-dashboard/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── dashboard/
│       ├── layout.tsx          # Dashboard layout with sidebar
│       ├── page.tsx            # Dashboard overview
│       ├── trading/
│       │   └── page.tsx        # Trading terminal
│       ├── portfolio/
│       │   └── page.tsx        # Portfolio analytics
│       ├── bots/
│       │   └── page.tsx        # Bot management
│       └── settings/
│           └── page.tsx        # User settings
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── dashboard/
│   │   ├── WalletBalance.tsx
│   │   ├── TradingChart.tsx
│   │   ├── PortfolioAnalytics.tsx
│   │   ├── BotManager.tsx
│   │   └── TransactionTracker.tsx
│   └── common/
│       ├── GlassmorphismCard.tsx
│       ├── AnimatedButton.tsx
│       └── NeonBorder.tsx
├── lib/
│   ├── hooks/
│   │   ├── useAnimations.ts
│   │   ├── useChartData.ts
│   │   └── useWalletData.ts
│   └── utils/
│       ├── animations.ts
│       ├── constants.ts
│       └── formatters.ts
├── styles/
│   └── globals.css
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repo-url>
cd crypto-trading-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🎨 Design System

### Color Palette
- **Dark Background**: `#0F0F1E` (dark-900)
- **Neon Blue**: `#00D9FF` (cyan)
- **Neon Purple**: `#7C3AED` (purple)
- **Neon Cyan**: `#00F0FF` (bright cyan)
- **Success Green**: `#10B981` (emerald)

### Typography
- **Display**: 32-64px, Bold (700)
- **Heading**: 24-32px, Bold (700)
- **Subheading**: 18-20px, Semibold (600)
- **Body**: 14-16px, Regular (400)
- **Caption**: 12-13px, Regular (400)

### Spacing
- **Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px
- **Extra Large**: 20px-24px

## 🎬 Animations

### Key Animations
- **Float**: 6s ease-in-out infinite
- **Glow**: 2s ease-in-out infinite
- **Shimmer**: 2s infinite
- **Slide In**: 0.5s ease-out
- **Fade In**: 0.5s ease-out

### Hover Effects
- **Scale**: 1.05 on hover
- **Y Translate**: -10px on hover
- **Glow Shadow**: Dynamic neon glow

## 📊 Dashboard Pages

### 1. Overview Dashboard (`/dashboard`)
- Wallet balance with visibility toggle
- Portfolio performance chart
- Recent transactions
- Asset allocation breakdown
- Active trading bots status

### 2. Trading Terminal (`/dashboard/trading`)
- Real-time price charts with volume
- Order book display
- Trade execution panel
- Market ticker with live prices

### 3. Portfolio Analytics (`/dashboard/portfolio`)
- Asset allocation pie chart
- Profit over time bar chart
- Holdings table with P&L
- Performance metrics

### 4. Trading Bots (`/dashboard/bots`)
- Bot listing with stats
- Start/pause bot controls
- Bot configuration interface
- Performance metrics per bot

## 🔧 Configuration

### Tailwind CSS
Customize colors, animations, and theme in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      neon: {
        blue: '#00D9FF',
        purple: '#7C3AED',
        // ...
      }
    }
  }
}
```

### Next.js Config
Configure image optimization, API routes in `next.config.js`:
```javascript
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'api.example.com'],
  },
}
```

## 🔐 Security Considerations

- Input validation on all forms
- CSRF protection ready
- XSS protection with React/Next.js defaults
- Environment variables for sensitive data
- SSL/TLS for production
- Multi-step verification UI ready
- Secure authentication patterns

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel
```

### Deploy to Other Platforms
- Docker ready with Node environment
- Supports traditional Node.js hosting
- Static export available with `next export`

## 🎯 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minified CSS and JS
- Font optimization
- API route caching
- Browser caching headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@cryptoai.app or join our Discord community.

## 🙏 Acknowledgments

- Inspired by Binance, Bybit, and TradingView
- Animation patterns from Apple and Tesla
- Design methodology from Stripe and Vercel

---

**Built with ❤️ for crypto traders worldwide**
