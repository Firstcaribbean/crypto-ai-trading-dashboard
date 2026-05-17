'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiArrowUpRight, FiArrowDownLeft, FiCopy, FiEye, FiEyeOff } from 'react-icons/fi'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Animated counter component
function AnimatedValue({ value, prefix = '', suffix = '', decimals = 2 }: any) {
  const [display, setDisplay] = useState(0)
  const numValue = parseFloat(value)

  useEffect(() => {
    const duration = 1500
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(numValue * progress)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [numValue])

  return (
    <span>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

// Wallet Balance Card
function WalletCard() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Wallet Balance</h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowBalance(!showBalance)}
          className="text-neon-cyan hover:text-neon-blue transition-colors"
        >
          {showBalance ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </motion.button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">Total Balance</p>
          <div className="text-4xl font-bold text-neon-blue">
            {showBalance ? '$47,821.50' : '••••••'}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-xs mb-1">Available</p>
            <p className="text-xl font-semibold text-green-400">
              {showBalance ? '$32,150.00' : '••••••'}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">In Orders</p>
            <p className="text-xl font-semibold text-yellow-400">
              {showBalance ? '$15,671.50' : '••••••'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 rounded-lg bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 transition-colors text-sm font-semibold"
          >
            Deposit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 rounded-lg bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 transition-colors text-sm font-semibold"
          >
            Withdraw
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Portfolio Performance Card
function PortfolioCard() {
  const chartData = [
    { time: '0d', value: 38000 },
    { time: '7d', value: 41000 },
    { time: '14d', value: 39500 },
    { time: '21d', value: 44000 },
    { time: '30d', value: 47821 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Portfolio Performance</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-green-400">+$8,821.50</span>
          <span className="text-green-400 text-sm font-semibold">+22.8%</span>
        </div>
        <p className="text-gray-400 text-sm mt-1">Last 30 days</p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00D9FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              background: 'rgba(15, 15, 30, 0.8)',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00D9FF"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Trading Activity Card
function TradingActivityCard() {
  const transactions = [
    { symbol: 'BTC/USDT', type: 'buy', amount: 0.25, price: 42500, time: '2 min ago', profit: '+$1,250' },
    { symbol: 'ETH/USDT', type: 'sell', amount: 5.5, price: 2850, time: '45 min ago', profit: '+$850' },
    { symbol: 'SOL/USDT', type: 'buy', amount: 50, price: 110, time: '2 hours ago', profit: '+$2,100' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Recent Trades</h3>

      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-dark-900/50 border border-neon-blue/10 hover:border-neon-blue/30 transition-all"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`p-2 rounded-lg ${tx.type === 'buy' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                {tx.type === 'buy' ? (
                  <FiArrowDownLeft className="text-green-400" />
                ) : (
                  <FiArrowUpRight className="text-red-400" />
                )}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{tx.symbol}</p>
                <p className="text-xs text-gray-400">{tx.time}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{tx.amount} @ ${tx.price}</p>
              <p className="text-xs text-green-400">{tx.profit}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Asset Allocation Card
function AssetAllocationCard() {
  const assets = [
    { name: 'Bitcoin', value: 18500, percentage: 38.7, color: '#F7931A' },
    { name: 'Ethereum', value: 15680, percentage: 32.8, color: '#627EEA' },
    { name: 'Stables', value: 10200, percentage: 21.3, color: '#00D9FF' },
    { name: 'Altcoins', value: 3441, percentage: 7.2, color: '#7C3AED' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Asset Allocation</h3>

      <div className="space-y-3">
        {assets.map((asset, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">{asset.name}</span>
              <span className="text-sm font-semibold text-white">${asset.value.toLocaleString()}</span>
            </div>
            <div className="w-full bg-dark-900/50 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${asset.percentage}%` }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                style={{ backgroundColor: asset.color }}
                className="h-full rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// AI Bots Status Card
function BotsStatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md hover:border-neon-blue/50 transition-all"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Active Trading Bots</h3>
        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">5 ACTIVE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: 'Bitcoin Scalper', status: 'running', profit: '+$2,450', roi: '12.4%' },
          { name: 'Ethereum Grid', status: 'running', profit: '+$1,890', roi: '9.2%' },
          { name: 'ALT Pump Hunter', status: 'paused', profit: '+$1,240', roi: '6.1%' },
        ].map((bot, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="p-4 rounded-xl bg-dark-900/50 border border-neon-blue/10 hover:border-neon-blue/30 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-white text-sm">{bot.name}</h4>
              <div className={`w-2 h-2 rounded-full ${bot.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
            </div>
            <p className="text-xs text-gray-400 mb-3">{bot.status}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-green-400">{bot.profit}</span>
              <span className="text-xs text-gray-400">{bot.roi}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Main Dashboard Page
export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Welcome back, Trader
        </h1>
        <p className="text-gray-400 mt-2">Here's your trading overview for today</p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WalletCard />
        <PortfolioCard />
        <TradingActivityCard />
        <AssetAllocationCard />
        <BotsStatusCard />
      </div>
    </div>
  )
}
