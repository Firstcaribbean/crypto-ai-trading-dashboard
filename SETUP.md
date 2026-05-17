# Setup Guide - CryptoAI Trading Dashboard

## Quick Start (5 minutes)

### Step 1: Install Node.js
- Download Node.js 18+ from [nodejs.org](https://nodejs.org)
- Verify installation: `node --version && npm --version`

### Step 2: Install Dependencies
```bash
npm install
```

This installs all required packages:
- Next.js 14 (React framework)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Recharts (charts)
- React Icons (icon library)

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:3000
```

## Project File Structure

```
crypto-trading-dashboard/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page (/)
│   └── dashboard/         # Dashboard routes
│       ├── layout.tsx     # Dashboard wrapper layout
│       ├── page.tsx       # Dashboard overview (/dashboard)
│       ├── trading/       # Trading page
│       ├── portfolio/     # Portfolio page
│       ├── bots/          # Bots management
│       └── settings/      # User settings
├── components/            # Reusable React components
│   ├── landing/          # Landing page components
│   ├── dashboard/        # Dashboard components
│   └── common/           # Shared components
├── lib/                   # Utilities and helpers
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Utility functions
├── styles/               # Global CSS
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Creating New Pages

### 1. Create Route Folder
```bash
mkdir -p app/dashboard/my-page
```

### 2. Create page.tsx
```typescript
'use client'

import { motion } from 'framer-motion'

export default function MyPage() {
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold"
      >
        My Page
      </motion.h1>
    </div>
  )
}
```

### 3. Access Route
```
http://localhost:3000/dashboard/my-page
```

## Creating Reusable Components

### Example: Custom Card Component
```typescript
// components/common/Card.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-2xl bg-dark-800/40 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all ${className}`}
    >
      {children}
    </motion.div>
  )
}
```

### Usage
```typescript
import Card from '@/components/common/Card'

export default function Page() {
  return (
    <Card className="col-span-2">
      <h2 className="text-xl font-bold">Content</h2>
    </Card>
  )
}
```

## Styling Guide

### Using Tailwind Classes

#### Colors
```tsx
// Text colors
<span className="text-neon-blue">Blue text</span>
<span className="text-neon-purple">Purple text</span>
<span className="text-dark-900">Dark text</span>

// Background colors
<div className="bg-neon-blue/20">Background</div>
<div className="bg-gradient-to-r from-neon-blue to-neon-purple">Gradient</div>
```

#### Responsive Design
```tsx
// Mobile first
<div className="col-span-1 md:col-span-2 lg:col-span-3">
  Responsive columns
</div>

<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

#### Glassmorphism
```tsx
<div className="bg-dark-800/40 backdrop-blur-md border border-neon-blue/20">
  Glassmorphic card
</div>
```

## Using Animations

### Framer Motion Basics

#### Simple Animation
```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### Hover Effects
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

#### Staggered Animation
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

## Chart Integration

### Recharts Example
```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { time: '0d', value: 38000 },
  { time: '7d', value: 41000 },
  { time: '14d', value: 39500 },
]

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid stroke="rgba(0, 217, 255, 0.1)" />
    <XAxis dataKey="time" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#00D9FF" />
  </LineChart>
</ResponsiveContainer>
```

## Icons (React Icons)

### Common Usage
```typescript
import { FiHome, FiTrendingUp, FiBell, FiUser } from 'react-icons/fi'

<FiHome size={24} className="text-neon-blue" />
<FiTrendingUp size={20} />
<FiBell />
<FiUser size={18} className="hover:text-neon-cyan transition-colors" />
```

### Icon Library Sources
- `react-icons/fi` - Feather icons
- `react-icons/bi` - Bootstrap icons
- `react-icons/fa` - Font Awesome
- `react-icons/md` - Material Design
- `react-icons/ai` - Ant Design

## Type Checking

### Run Type Check
```bash
npm run type-check
```

### Create Typed Component
```typescript
interface MyComponentProps {
  title: string
  onClick: () => void
  disabled?: boolean
}

export default function MyComponent({
  title,
  onClick,
  disabled = false,
}: MyComponentProps) {
  return <button onClick={onClick}>{title}</button>
}
```

## Building for Production

### Build
```bash
npm run build
```

### Test Production Build Locally
```bash
npm start
```

### Analyze Bundle Size
```bash
npm run analyze
```

## Deploying to Vercel

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Select your GitHub repository
- Click "Deploy"

### 3. Set Environment Variables
- Go to Project Settings → Environment Variables
- Add your `.env` variables
- Redeploy

## Common Tasks

### Add New Trading Chart
1. Create component in `components/dashboard/Charts/`
2. Import Recharts components
3. Add to dashboard grid
4. Style with Tailwind

### Add New Page to Sidebar
1. Create route folder
2. Add icon import
3. Update `navigation` array in `dashboard-layout.tsx`
4. Create `page.tsx`

### Add New Animation
1. Define variants in component
2. Use `motion.div` wrapper
3. Add `initial`, `animate`, `transition`
4. Test in browser

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti :3000 | xargs kill -9
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applying
```bash
# Check if Tailwind config is correct
# Restart development server
npm run dev
```

### Type Errors
```bash
# Run type check to see all errors
npm run type-check
```

## Next Steps

1. ✅ Setup is complete
2. 📖 Review the file structure
3. 🎨 Customize colors in `tailwind.config.ts`
4. 🚀 Create your first feature
5. 📦 Deploy to Vercel

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Recharts Documentation](https://recharts.org/en-US/)

## Support

For issues or questions:
- Check existing issues on GitHub
- Create a new issue with details
- Join our Discord community

Happy coding! 🚀
