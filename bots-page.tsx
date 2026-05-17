'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiPlay, FiPause, FiTrash2, FiPlus, FiSettings, FiTrendingUp, FiBarChart3 } from 'react-icons/fi'

export default function BotsPage() {
  const [bots] = useState([
    {
      id: 1,
      name: 'Bitcoin Scalper',
      strategy: 'Scalping',
      status: 'running',
      profit: '+$2,450.50',
      roi: '12.4%',
      trades: 145,
      uptime: '98.5%',
      dailyAvg: '$89.50',
    },
    {
      id: 2,
      name: 'Ethereum Grid',
      strategy: 'Grid Trading',
      status: 'running',
      profit: '+$1,890.20',
      roi: '9.2%',
      trades: 82,
      uptime: '99.2%',
      dailyAvg: '$63.50',
    },
    {
      id: 3,
      name: 'ALT Pump Hunter',
      strategy: 'Momentum',
      status: 'paused',
      profit: '+$1,240.80',
      roi: '6.1%',
      trades: 34,
      uptime: '95.1%',
      dailyAvg: '$36.50',
    },
    {
      id: 4,
      name: 'DCA Bot',
      strategy: 'Dollar Cost Avg',
      status: 'running',
      profit: '+$3,120.40',
      roi: '15.8%',
      trades: 120,
      uptime: '99.8%',
      dailyAvg: '$104.00',
    },
  ])

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-4xl font-bold text-white">Trading Bots</h1>
            <p className="text-gray-400 mt-1">AI-powered automated trading strategies</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-bold hover:shadow-glow transition-all"
          >
            <FiPlus size={20} /> Create Bot
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Profit', value: '$8,701.90', icon: '💰' },
          { label: 'Avg ROI', value: '10.9%', icon: '📈' },
          { label: 'Active Bots', value: '3/4', icon: '🤖' },
          { label: 'Total Trades', value: '381', icon: '📊' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-neon-blue">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Active Bots */}
      <div className="grid gap-6">
        {bots.map((bot, idx) => (
          <motion.div
            key={bot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{bot.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    bot.status === 'running'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {bot.status === 'running' ? '● Running' : '⏸ Paused'}
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{bot.strategy}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400 mb-1">{bot.profit}</div>
                <p className="text-gray-400 text-xs">Total Profit</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 pb-6 border-b border-neon-blue/10">
              {[
                { label: 'ROI', value: bot.roi },
                { label: 'Trades', value: bot.trades },
                { label: 'Uptime', value: bot.uptime },
                { label: 'Daily Avg', value: bot.dailyAvg },
                { label: 'Last Trade', value: '5 mins ago' },
              ].map((stat, sidx) => (
                <div key={sidx}>
                  <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                  <p className="font-bold text-white text-sm">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  bot.status === 'running'
                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                }`}
              >
                {bot.status === 'running' ? (
                  <>
                    <FiPause size={16} /> Pause
                  </>
                ) : (
                  <>
                    <FiPlay size={16} /> Start
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-dark-800/50 text-gray-400 hover:text-neon-blue hover:bg-dark-800 transition-all"
              >
                <FiSettings size={16} /> Configure
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
              >
                <FiTrash2 size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create New Bot CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-8 rounded-2xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 backdrop-blur-md text-center"
      >
        <div className="text-5xl mb-4">🤖</div>
        <h3 className="text-2xl font-bold text-white mb-2">Create a New Trading Bot</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Design custom trading strategies with our AI-powered bot builder. Choose from predefined strategies or create your own.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-bold rounded-lg hover:shadow-glow transition-all"
        >
          <FiPlus className="inline mr-2" /> Create New Bot
        </motion.button>
      </motion.div>
    </div>
  )
}
