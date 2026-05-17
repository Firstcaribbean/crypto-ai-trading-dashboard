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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-4">Asset Allocation</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={allocationData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-neon-blue/20 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-4">Monthly Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip contentStyle={{ background: 'rgba(15, 15, 30, 0.8)', border: '1px solid rgba(0, 217, 255, 0.2)', borderRadius: '8px' }} />
              <Bar dataKey="profit" fill="#00D9FF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}
