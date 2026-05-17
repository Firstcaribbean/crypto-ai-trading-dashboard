'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

function TradingChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">BTC/USDT</h3>
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
          <Bar dataKey="volume" fill="#7C3AED" opacity={0.3} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#00D9FF"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function OrderBook() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="col-span-1 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
    >
      <h3 className="text-xl font-bold text-white mb-4">Order Book</h3>

      <div className="space-y-2">
        <div className="text-xs text-gray-400 font-semibold flex gap-2">
          <span className="flex-1">Price</span>
          <span className="flex-1 text-right">Size</span>
          <span className="flex-1 text-right">Total</span>
        </div>

        {[
          { price: 44250, size: 2.45, color: 'text-red-400' },
          { price: 44200, size: 5.12, color: 'text-red-500' },
          { price: 44100, size: 8.34, color: 'text-red-400' },
          { price: 43900, size: 3.21, color: 'text-green-400' },
          { price: 43800, size: 6.78, color: 'text-green-500' },
          { price: 43750, size: 4.56, color: 'text-green-400' },
        ].map((item, idx) => (
          <div key={idx} className={`text-xs flex gap-2 py-1 ${item.color}`}>
            <span className="flex-1">${item.price}</span>
            <span className="flex-1 text-right">{item.size}</span>
            <span className="flex-1 text-right">${(item.price * item.size).toFixed(0)}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function TradePanel() {
  const [tradeType, setTradeType] = useState('buy')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
    >
      <h3 className="text-xl font-bold text-white mb-4">Place Order</h3>

      {/* Trade Type Toggle */}
      <div className="flex gap-2 mb-6">
        {['buy', 'sell'].map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            onClick={() => setTradeType(type)}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all uppercase text-sm ${
              tradeType === type
                ? type === 'buy'
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-900/50 text-gray-400 hover:text-white'
            }`}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Price Input */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 mb-2">Price (USDT)</label>
        <input
          type="number"
          placeholder="44200"
          className="w-full px-4 py-2 rounded-lg bg-dark-900/50 border border-neon-blue/20 text-white placeholder-gray-600 focus:border-neon-blue outline-none"
          defaultValue="44200"
        />
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 mb-2">Amount (BTC)</label>
        <input
          type="number"
          placeholder="0.5"
          className="w-full px-4 py-2 rounded-lg bg-dark-900/50 border border-neon-blue/20 text-white placeholder-gray-600 focus:border-neon-blue outline-none"
          defaultValue="0.5"
        />
      </div>

      {/* Total */}
      <div className="p-3 rounded-lg bg-dark-900/50 border border-neon-blue/10 mb-6">
        <div className="text-xs text-gray-400">Total</div>
        <div className="text-xl font-bold text-neon-blue">$22,100.00</div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
          tradeType === 'buy'
            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:shadow-green-500/50'
            : 'bg-gradient-to-r from-red-500 to-red-600 hover:shadow-red-500/50'
        } shadow-lg`}
      >
        {tradeType === 'buy' ? 'Buy' : 'Sell'} BTC
      </motion.button>
    </motion.div>
  )
}

export default function TradingPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Trading Terminal</h1>
        <p className="text-gray-400">Advanced trading interface with real-time market data</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TradingChart />
        <OrderBook />
        <TradePanel />
      </div>

      {/* Market Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
      >
        <h3 className="text-xl font-bold text-white mb-4">Market Ticker</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { symbol: 'BTC', price: 44200, change: '+1.2%', color: 'text-green-400' },
            { symbol: 'ETH', price: 2850, change: '-0.5%', color: 'text-red-400' },
            { symbol: 'SOL', price: 110, change: '+3.2%', color: 'text-green-400' },
            { symbol: 'XRP', price: 2.45, change: '+2.1%', color: 'text-green-400' },
          ].map((coin, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-4 rounded-lg bg-dark-900/50 border border-neon-blue/10 hover:border-neon-blue/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">{coin.symbol}</span>
                <span className={`text-sm font-semibold ${coin.color}`}>{coin.change}</span>
              </div>
              <span className="text-xl font-bold text-neon-blue">${coin.price}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
