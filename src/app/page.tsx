'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import Image from 'next/image'
import AboutSection from '@/components/AboutSection'
import CommitteeSection from '@/components/CommitteeSection'
import EventsSection from '@/components/EventsSection'
import MembershipSection from '@/components/MembershipSection'
import ContactSection from '@/components/ContactSection'
import PalmLeafDivider from '@/components/PalmLeafDivider'

const palette = {
  red: '#E11D48',
  green: '#16A34A', 
  black: '#0B0B0B',
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  
  // Enhanced gradient with better performance
  const heroBackground = useMemo(() => 
    `radial-gradient(1200px 600px at 20% -10%, rgba(225,29,72,0.25), transparent 60%), radial-gradient(1000px 600px at 80% 10%, rgba(22,163,74,0.25), transparent 60%), linear-gradient(180deg, rgba(11,11,11,0.95), rgba(11,11,11,1))`
  , [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        id="hero" 
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center pattern-overlay"
      >
        {/* Enhanced Background with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            background: heroBackground,
            y,
            opacity
          }}
        />
        
        {/* Enhanced Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${palette.red}20, transparent)`,
            }}
            animate={{ 
              x: [0, 80, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${palette.green}15, transparent)`,
            }}
            animate={{ 
              x: [0, -60, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.6, 1]
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-2xl"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.1), transparent)`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Column - Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  UWE African Caribbean Society
                </span>
              </motion.h1>

              <motion.p 
                className="text-lg md:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Celebrating our rich heritage, building lasting connections, and creating unforgettable experiences 
                at the heart of UWE Bristol&apos;s vibrant community. Join us in embracing culture, creativity, and community.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.a
                  href="#membership"
                  className="group inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold text-white rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e11d47]"
                  style={{ backgroundColor: '#e11d47' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join Our Community</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#events"
                  className="group relative inline-flex items-center justify-center pl-6 pr-18 py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 border-2 text-[#ffffff] hover:bg-[#e11d47]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e11d47] overflow-visible"
                  style={{ borderColor: '#e11d47' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="pointer-events-none">View Events</span>
                  <span className="pointer-events-none absolute right-[2px] top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#e11d47] text-white shadow-md ring-2 ring-[#e11d47] ring-offset-0 transition-transform group-hover:translate-x-0.5 group-hover:rotate-3">
                    <ArrowRightIcon className="w-5 h-5" />
                  </span>
                </motion.a>
              </motion.div>

              {/* Statistics */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-10 mt-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span style={{ color: '#e11d47' }}>500</span>
                    <span className="text-white">+</span>
                  </span>
                  <span className="text-white text-base md:text-lg font-medium mt-1">Members Joined</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span style={{ color: '#e11d47' }}>4</span>
                    <span className="text-white">+</span>
                  </span>
                  <span className="text-white text-base md:text-lg font-medium mt-1">Events Hosted</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Hero Image */}
            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative group">
                {/* Decorative rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-transparent to-green-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" aria-hidden="true" />
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/10 to-green-500/10 rounded-3xl" aria-hidden="true" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/hero.jpg"
                    alt="UWE African Caribbean Society community celebration"
                    width={800}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4 text-yellow-400" />
                      Authenticity • Culture • Solidarity
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Palm Leaf Divider */}
      <PalmLeafDivider />

      {/* About Section */}
      <AboutSection />

      {/* Palm Leaf Divider */}
      <PalmLeafDivider flip />

      {/* Committee Section */}
      <CommitteeSection />

      {/* Palm Leaf Divider */}
      <PalmLeafDivider />

      {/* Events Section */}
      <EventsSection />

      {/* Palm Leaf Divider */}
      <PalmLeafDivider flip />

      {/* Membership Section */}
      <MembershipSection />

      {/* Palm Leaf Divider */}
      <PalmLeafDivider />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

// Enhanced Animated Counter Component with Intersection Observer
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const animateCounter = useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)
    
    const duration = 2500
    const start = performance.now()
    
    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smoother animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutCubic * target)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(target)
      }
    }
    
    requestAnimationFrame(updateCount)
  }, [target, hasStarted])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(animateCounter, 200) // Small delay for better UX
      return () => clearTimeout(timer)
    }
  }, [isInView, animateCounter])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}
