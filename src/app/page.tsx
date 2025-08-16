'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CalendarIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AboutSection from '@/components/AboutSection'
import CommitteeSection from '@/components/CommitteeSection'
import EventsSection from '@/components/EventsSection'
import MembershipSection from '@/components/MembershipSection'
import ContactSection from '@/components/ContactSection'

const stats = [
  { id: 1, name: 'Active Members', value: 150, suffix: '+' },
  { id: 2, name: 'Events This Year', value: 25, suffix: '+' },
  { id: 3, name: 'Years Active', value: 8, suffix: '' },
  { id: 4, name: 'Cultural Events', value: 100, suffix: '+' },
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Simulate image carousel for hero background
  const heroImages = [
    'linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(34, 197, 94, 0.9))',
    'linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(15, 23, 42, 0.9))',
    'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(239, 68, 68, 0.9))',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pattern-overlay">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br"
          style={{ background: heroImages[currentImageIndex] }}
          animate={{ 
            background: heroImages[currentImageIndex],
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{' '}
              <span className="block mt-2">
                UWE <span className="gradient-text bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">African Caribbean</span>
              </span>
              <span className="block mt-2 gradient-text bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Society
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Celebrating our rich heritage, building lasting connections, and creating unforgettable experiences 
              at the heart of UWE Bristol's vibrant community.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#membership"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-acs-red-500 rounded-full hover:bg-acs-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl btn-acs"
              >
                <UsersIcon className="w-6 h-6 mr-2" />
                Join Our Community
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#events"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-acs-green-500 rounded-full hover:bg-acs-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl btn-acs"
              >
                <CalendarIcon className="w-6 h-6 mr-2" />
                Upcoming Events
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.a
                href="#stats"
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-white rounded-full mt-2"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-3xl lg:text-4xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-acs-black-600 font-medium">{stat.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Committee Section */}
      <CommitteeSection />

      {/* Events Section */}
      <EventsSection />

      {/* Membership Section */}
      <MembershipSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

// Animated Counter Component
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepValue = target / steps
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.round(currentStep * stepValue), target))
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count}{suffix}</span>
}
