'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Bar } from 'recharts'
import { FiTrendingUp, FiTrendingDown, FiBell, FiX } from 'react-icons/fi'

const chartData = [
  { time: '08:00', price: 42500, volume: 1200 },
  { time: '10:00', price: 42800, volume: 1400 },
  { time: '12:00', price: 42200, volume: 1300 },
  { time: '14:00', price: 43100, volume: 1600 },
  { time: '16:00', price: 43500, volume: 1800 },
  { time: '18:00', price: 42900, volume: 1500 },
  { time: '20:00', price: 44200, volume: 2000 },
]

export default function TradingPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-white">Trading Terminal</h1>
        <p className="text-gray-400 mt-2">Professional trading interface</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">BTC/USDT</h2>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-neon-blue">$44,200.50</span>
              <span className="text-green-400 font-semibold flex items-center gap-1">
                <FiTrendingUp size={16} /> +1.2% (24h)
              </span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00D9FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
              <XAxis dataKey="time" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15, 15, 30, 0.9)',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="price" stroke="#00D9FF" dot={false} strokeWidth={2} />
              <Bar dataKey="volume" fill="rgba(124, 58, 237, 0.2)" />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Order Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-4">Place Order</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Order Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 px-3 rounded-lg bg-neon-blue/20 text-neon-blue font-semibold text-sm">Buy</button>
                <button className="py-2 px-3 rounded-lg bg-dark-800 text-gray-400 font-semibold text-sm hover:bg-dark-700">Sell</button>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Amount</label>
              <input type="number" placeholder="0.00" className="w-full px-4 py-2 bg-dark-900/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue" />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Price</label>
              <input type="number" placeholder="44200.50" className="w-full px-4 py-2 bg-dark-900/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue" />
            </div>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-bold hover:shadow-glow transition-all">
              Buy BTC
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
