'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { FiArrowUpRight, FiArrowDownLeft, FiDownload } from 'react-icons/fi'

const allocationData = [
  { name: 'Bitcoin', value: 38.7, color: '#F7931A' },
  { name: 'Ethereum', value: 32.8, color: '#627EEA' },
  { name: 'Stables', value: 21.3, color: '#00D9FF' },
  { name: 'Altcoins', value: 7.2, color: '#7C3AED' },
]

const performanceData = [
  { month: 'Jan', profit: 2400 },
  { month: 'Feb', profit: 1398 },
  { month: 'Mar', profit: 9800 },
  { month: 'Apr', profit: 3908 },
  { month: 'May', profit: 4800 },
  { month: 'Jun', profit: 8821 },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-gray-400">Comprehensive analysis of your holdings</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Value', value: '$47,821.50', change: '+22.8%', positive: true },
          { label: '24h P&L', value: '+$1,245.80', change: '+2.7%', positive: true },
          { label: 'Total Gain', value: '+$8,821.50', change: '+22.8%', positive: true },
          { label: 'Best Asset', value: 'Bitcoin', change: '+35.2%', positive: true },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
          >
            <p className="text-gray-400 text-sm mb-2">{card.label}</p>
            <div className="text-2xl font-bold text-white mb-1">{card.value}</div>
            <span className={`text-sm font-semibold ${card.positive ? 'text-green-400' : 'text-red-400'}`}>
              {card.change}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Allocation & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-6">Asset Allocation</h3>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {allocationData.map((asset, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }} />
                    <span className="text-sm text-gray-300">{asset.name}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{asset.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profit Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-6">Profit Over Time</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15, 15, 30, 0.9)',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="profit" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Holdings Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md overflow-x-auto"
      >
        <h3 className="text-xl font-bold text-white mb-6">Your Holdings</h3>
        <table className="w-full text-sm">
          <thead className="text-gray-400 text-xs uppercase font-semibold border-b border-neon-blue/10">
            <tr>
              <th className="text-left py-3 px-4">Asset</th>
              <th className="text-right py-3 px-4">Holdings</th>
              <th className="text-right py-3 px-4">Entry Price</th>
              <th className="text-right py-3 px-4">Current Price</th>
              <th className="text-right py-3 px-4">Gain/Loss</th>
              <th className="text-right py-3 px-4">% Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              { asset: 'Bitcoin', amount: 0.25, entry: 38000, current: 44200, gain: 1550, pct: 16.3 },
              { asset: 'Ethereum', amount: 5.5, entry: 2500, current: 2850, gain: 1925, pct: 14.0 },
              { asset: 'Solana', amount: 50, entry: 98, current: 110, gain: 600, pct: 12.2 },
              { asset: 'USDC', amount: 10200, entry: 1.0, current: 1.0, gain: 0, pct: 0.0 },
            ].map((holding, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="border-b border-neon-blue/10 hover:bg-dark-900/50 transition-colors"
              >
                <td className="py-4 px-4 text-white font-semibold">{holding.asset}</td>
                <td className="py-4 px-4 text-right text-gray-300">{holding.amount}</td>
                <td className="py-4 px-4 text-right text-gray-400">${holding.entry.toLocaleString()}</td>
                <td className="py-4 px-4 text-right text-gray-300 font-semibold">${holding.current.toLocaleString()}</td>
                <td className={`py-4 px-4 text-right font-semibold flex items-center justify-end gap-1 ${holding.gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {holding.gain >= 0 ? <FiArrowUpRight size={16} /> : <FiArrowDownLeft size={16} />}
                  ${holding.gain.toLocaleString()}
                </td>
                <td className={`py-4 px-4 text-right font-semibold ${holding.pct >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {holding.pct >= 0 ? '+' : ''}{holding.pct}%
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
