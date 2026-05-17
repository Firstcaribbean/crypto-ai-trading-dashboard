'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'

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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-4000" />
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
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent"
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
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-bold rounded-lg flex items-center gap-2 hover:shadow-glow transition-all duration-300 group"
            >
              Launch Dashboard <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-dark-800/50 border border-neon-purple/50 text-white font-bold rounded-lg flex items-center gap-2 hover:border-neon-purple hover:bg-dark-800 transition-all duration-300 group"
          >
            <FiPlayCircle /> Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating elements preview */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { icon: '📊', title: 'Real-Time Analytics', desc: 'Live market data and charts' },
            { icon: '🤖', title: 'AI Trading Bots', desc: 'Automated trading strategies' },
            { icon: '💰', title: 'Portfolio Tracking', desc: 'Complete asset management' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-6 bg-dark-800/40 border border-neon-blue/20 rounded-xl backdrop-blur-md hover:border-neon-blue/50 transition-all duration-300"
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
