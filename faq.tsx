'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const faqItems = [
  {
    question: 'How do AI trading bots work?',
    answer: 'Our AI bots analyze market patterns, historical data, and real-time indicators to execute trades automatically. You can customize strategies, risk levels, and set stop-loss limits for complete control.'
  },
  {
    question: 'Is my crypto secure on the platform?',
    answer: 'Yes. We use military-grade encryption, multi-signature wallets, and never store your private keys. All funds remain in your personal wallet with full custody.'
  },
  {
    question: 'What trading pairs are available?',
    answer: 'We support 500+ trading pairs including Bitcoin, Ethereum, and thousands of altcoins. Access major exchanges through our unified interface.'
  },
  {
    question: 'Can I withdraw my funds anytime?',
    answer: 'Absolutely. Withdraw instantly without fees or waiting periods. Direct transfers to your personal wallet with full transaction transparency.'
  },
  {
    question: 'What are the pricing plans?',
    answer: 'We offer flexible plans: Free (basic features), Pro ($29/month), and Enterprise (custom). No hidden fees, cancel anytime.'
  },
  {
    question: 'Is there a minimum deposit?',
    answer: 'No minimum required. Start with any amount and scale up as you grow. Even $10 can be traded with our platform.'
  },
]

function FAQItem({ item, isOpen, onToggle }: any) {
  return (
    <motion.div
      className="border border-neon-blue/20 rounded-xl overflow-hidden backdrop-blur-md"
      layout
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between bg-dark-800/30 hover:bg-dark-800/50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-left text-white">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-neon-blue flex-shrink-0"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-dark-900/50 text-gray-300 border-t border-neon-blue/10">
          {item.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Everything you need to know about CryptoAI Trading
        </motion.p>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
