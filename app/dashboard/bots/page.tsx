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
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-white">Trading Bots</h1>
          <p className="text-gray-400 mt-2">Manage your automated trading strategies</p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-bold rounded-lg hover:shadow-glow transition-all"
        >
          <FiPlus /> Create Bot
        </motion.button>
      </div>

      <div className="space-y-4">
        {bots.map((bot, idx) => (
          <motion.div
            key={bot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{bot.name}</h3>
                  <div className={`w-3 h-3 rounded-full ${bot.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                </div>
                <p className="text-gray-400 text-sm">{bot.strategy}</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 transition-colors"
                >
                  {bot.status === 'running' ? <FiPause size={20} /> : <FiPlay size={20} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 transition-colors"
                >
                  <FiSettings size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                >
                  <FiTrash2 size={20} />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div>
                <p className="text-gray-400 text-xs mb-1">Total Profit</p>
                <p className="text-lg font-bold text-green-400">{bot.profit}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">ROI</p>
                <p className="text-lg font-bold text-neon-blue">{bot.roi}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Trades</p>
                <p className="text-lg font-bold text-white">{bot.trades}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Uptime</p>
                <p className="text-lg font-bold text-white">{bot.uptime}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Daily Avg</p>
                <p className="text-lg font-bold text-green-400">{bot.dailyAvg}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Status</p>
                <p className={`text-lg font-bold capitalize ${bot.status === 'running' ? 'text-green-400' : 'text-yellow-400'}`}>{bot.status}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
