'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiStar, FiUser, FiMessageCircle } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Professional Trader',
    avatar: '👨‍💼',
    content: 'CryptoAI has transformed my trading. The AI bots are incredibly accurate and the dashboard is the best I\'ve used.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Crypto Investor',
    avatar: '👩‍💼',
    content: 'Finally a platform that looks premium AND performs perfectly. The interface is intuitive and powerful.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Day Trader',
    avatar: '👨‍🔬',
    content: 'The real-time analytics and automated bots have increased my profitability by 40%. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Portfolio Manager',
    avatar: '👩‍💻',
    content: 'Managing multiple crypto portfolios has never been easier. This is enterprise-grade software.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const goToSlide = (idx: number) => {
    setActiveSlide(idx % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Loved by Traders Worldwide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Join thousands of successful traders using CryptoAI
        </motion.p>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeSlide === idx ? 1 : 0.5,
                  scale: activeSlide === idx ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveSlide(idx)}
                className={`p-6 rounded-2xl backdrop-blur-md cursor-pointer transition-all ${
                  activeSlide === idx
                    ? 'bg-gradient-to-br from-neon-blue/20 to-neon-purple/10 border-2 border-neon-blue/50 shadow-lg'
                    : 'bg-dark-800/40 border border-neon-blue/20 hover:border-neon-blue/30'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === idx
                    ? 'bg-neon-blue w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
