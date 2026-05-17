'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface StatProps {
  value: string | number
  label: string
  suffix?: string
}

function AnimatedCounter({ value, label, suffix = '' }: StatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const finalValue = parseInt(String(value).replace(/[^0-9]/g, '')) || 0

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      setDisplayValue(Math.floor(progress * finalValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(finalValue)
      }
    }

    animate()
  }, [finalValue])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <p className="text-gray-400 text-sm md:text-base mt-2">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    { value: 500000, label: 'Active Traders', suffix: '+' },
    { value: 2500000000, label: 'Daily Trading Volume', suffix: '$' },
    { value: 9850, label: 'AI Bots Running', suffix: '+' },
    { value: 99.9, label: 'Platform Uptime', suffix: '%' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-900/50 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Trusted by Thousands
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Industry-leading statistics proving our platform's reliability
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedCounter 
              key={idx}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
