'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiPlayCircle, FiChevronDown } from 'react-icons/fi'
import { useEffect, useState } from 'react'

// Hero Section
function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-block">
          <div className="px-4 py-2 bg-dark-800/50 border border-neon-blue/30 rounded-full backdrop-blur-md">
            <span className="text-neon-cyan text-sm font-semibold">🚀 AI-Powered Trading Revolution</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-cyan-300 to-neon-purple bg-clip-text text-transparent"
        >
          Trade Smarter With AI
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the future of cryptocurrency trading with our AI-powered dashboard. 
          Real-time analytics, automated bots, and premium trading tools in one elegant platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-cyan-400 text-dark-900 font-bold rounded-lg flex items-center gap-2 hover:shadow-glow transition-all duration-300 group"
            >
              Launch Dashboard <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-dark-800/50 border border-neon-purple/50 text-white font-bold rounded-lg flex items-center gap-2 hover:border-neon-purple hover:bg-dark-800 transition-all duration-300 group"
          >
            <FiPlayCircle /> Watch Demo
          </motion.button>
        </motion.div>

        {/* Feature cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { icon: '📊', title: 'Real-Time Analytics', desc: 'Live market data' },
            { icon: '🤖', title: 'AI Trading Bots', desc: 'Automated strategies' },
            { icon: '💰', title: 'Portfolio Tracking', desc: 'Asset management' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-6 bg-dark-800/40 border border-neon-blue/20 rounded-xl backdrop-blur-md hover:border-neon-blue/50 transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const [displayValues, setDisplayValues] = useState([0, 0, 0, 0])
  const stats = [
    { value: 500000, label: 'Active Traders', suffix: '+' },
    { value: 2500, label: 'M Daily Volume', suffix: '$' },
    { value: 9850, label: 'AI Bots', suffix: '+' },
    { value: 99.9, label: 'Uptime', suffix: '%' },
  ]

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()
    const finalValues = [500000, 2500, 9850, 99]

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      setDisplayValues(finalValues.map(v => Math.floor(progress * v)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-900/50 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-neon-blue">
                {displayValues[idx].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    { icon: '📈', title: 'Advanced Charts', desc: 'Professional-grade TradingView-style charts' },
    { icon: '🔒', title: 'Bank-Level Security', desc: 'Military-grade encryption & multi-sig' },
    { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-millisecond order execution' },
    { icon: '🌙', title: 'Always Available', desc: '24/7 trading with 99.9% uptime' },
    { icon: '💡', title: 'AI Insights', desc: 'Machine learning market predictions' },
    { icon: '🌍', title: 'Global Access', desc: 'Trade from anywhere in the world' },
  ]

  return (
    <section className="py-20 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Everything You Need to Trade
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-dark-800/40 border border-neon-blue/20 rounded-xl backdrop-blur-md hover:border-neon-blue/50 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      features: ['Basic trading', 'Manual trades', '1 API key', 'Community support'],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['AI trading bots', 'Advanced charts', '5 API keys', 'Priority support', 'Portfolio analytics'],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom bots', 'Dedicated manager', 'Unlimited API', '24/7 support', 'White-label option'],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-900 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl backdrop-blur-md transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-neon-blue/20 to-neon-purple/10 border-2 border-neon-blue/50 scale-105 shadow-2xl'
                  : 'bg-dark-800/40 border border-neon-blue/20 hover:border-neon-blue/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 text-sm font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-neon-blue">{plan.price}</span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-neon-cyan">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-neon-blue to-cyan-400 text-dark-900 hover:shadow-glow'
                  : 'bg-dark-800 border border-neon-blue/30 text-white hover:bg-dark-700'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqItems = [
    { question: 'How do AI trading bots work?', answer: 'Our AI bots analyze market patterns and execute trades automatically based on your settings.' },
    { question: 'Is my crypto secure?', answer: 'Yes. Military-grade encryption, multi-signature wallets, and we never store your private keys.' },
    { question: 'Can I withdraw anytime?', answer: 'Absolutely. Withdraw instantly without fees or waiting periods.' },
    { question: 'What trading pairs available?', answer: 'We support 500+ trading pairs including Bitcoin, Ethereum, and thousands of altcoins.' },
    { question: 'Is there a minimum deposit?', answer: 'No minimum required. Start trading with any amount.' },
    { question: 'What about customer support?', answer: 'We offer 24/7 support via chat, email, and phone for all plan tiers.' },
  ]

  return (
    <section className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="border border-neon-blue/20 rounded-xl overflow-hidden backdrop-blur-md"
              layout
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-6 flex items-center justify-between bg-dark-800/30 hover:bg-dark-800/50"
              >
                <h3 className="text-lg font-semibold text-left text-white">{item.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-neon-blue"
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </motion.button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openIndex === idx ? 'auto' : 0,
                  opacity: openIndex === idx ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-dark-900/50 text-gray-300 border-t border-neon-blue/10">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-neon-blue/10 bg-dark-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-neon-blue">CryptoAI</h4>
            <p className="text-gray-400 text-sm">Next-generation AI-powered cryptocurrency trading platform.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-white">Product</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition">Features</a></li>
              <li><a href="#" className="hover:text-neon-blue transition">Pricing</a></li>
              <li><a href="#" className="hover:text-neon-blue transition">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-white">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition">About</a></li>
              <li><a href="#" className="hover:text-neon-blue transition">Blog</a></li>
              <li><a href="#" className="hover:text-neon-blue transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-white">Legal</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition">Privacy</a></li>
              <li><a href="#" className="hover:text-neon-blue transition">Terms</a></li>
              <li><a href="#" className="hover:text-neon-blue transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-blue/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2024 CryptoAI Trading. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Twitter', 'Discord', 'Telegram', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-neon-blue transition text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
