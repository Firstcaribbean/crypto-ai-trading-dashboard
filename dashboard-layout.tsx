'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import {
  FiHome,
  FiTrendingUp,
  FiPieChart,
  FiBot,
  FiSettings,
  FiBell,
  FiUser,
  FiMenu,
  FiX,
  FiLogOut,
} from 'react-icons/fi'

interface SidebarProps {
  children: ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: FiHome },
  { name: 'Trading', href: '/dashboard/trading', icon: FiTrendingUp },
  { name: 'Portfolio', href: '/dashboard/portfolio', icon: FiPieChart },
  { name: 'Bots', href: '/dashboard/bots', icon: FiBot },
  { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
]

export default function DashboardLayout({ children }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-dark-900 overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen w-72 bg-dark-950/95 border-r border-neon-blue/10 backdrop-blur-md z-40 lg:static lg:translate-x-0"
      >
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent mb-8"
          >
            CryptoAI
          </motion.div>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.name} whileHover={{ x: 5 }}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-800 hover:text-neon-blue transition-colors group"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="text-neon-blue group-hover:scale-110 transition-transform" />
                    {item.name}
                  </Link>
                </motion.div>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neon-blue/10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center gap-2 px-4 py-3 rounded-lg bg-dark-800/50 hover:bg-dark-800 text-red-400 transition-colors"
          >
            <FiLogOut /> Logout
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-dark-950/50 border-b border-neon-blue/10 backdrop-blur-md flex items-center justify-between px-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-neon-blue"
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="relative p-2 text-gray-400 hover:text-neon-blue transition-colors"
            >
              <FiBell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>

            {/* User Profile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-dark-800/50 text-gray-400 hover:text-neon-blue transition-colors"
            >
              <FiUser size={20} />
            </motion.button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-dark-900 to-dark-950">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </div>
  )
}
