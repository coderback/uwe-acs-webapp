'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
]


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const navBackdrop = useTransform(scrollY, [0, 100], [0, 0.8])
  const navBlur = useTransform(scrollY, [0, 100], [0, 20])

  // Enhanced line position update with smooth transitions
  const updateLinePosition = useCallback((section: string) => {
    const activeIndex = navigation.findIndex(item =>
      item.href === `#${section}` || (section === 'hero' && item.href === '#hero')
    )

    if (activeIndex !== -1 && navRefs.current[activeIndex] && containerRef.current) {
      // Line position logic can be implemented here if needed
      console.log('Active section:', section, 'Index:', activeIndex)
    }
  }, [])

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20
    setScrolled(isScrolled)

    // Check which section is currently in view with improved logic
    const sections = ['hero', 'about', 'committee', 'events', 'membership', 'contact']
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        return rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.3
      }
      return false
    })

    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection)
      updateLinePosition(currentSection)
    }
  }, [activeSection, updateLinePosition])

  useEffect(() => {
    let rafId: number
    const throttledScroll = () => {
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      cancelAnimationFrame(rafId)
    }
  }, [handleScroll])

  // Initialize line position on mount
  useEffect(() => {
    updateLinePosition('hero')
  }, [updateLinePosition])

  return (
    <>
    <motion.nav
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${navBackdrop.get()})`,
        backdropFilter: `blur(${navBlur.get()}px)`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Enhanced background with gradient overlay */}
      <div className={cn(
        'absolute inset-0 transition-all duration-500',
        scrolled
          ? 'bg-gradient-to-r from-black/80 via-black/70 to-black/80 shadow-xl'
          : 'bg-transparent'
      )} />
      {/* Seamless border that fades in/out */}
      <div className={cn(
        'absolute inset-x-0 bottom-0 h-px bg-white/10 transition-opacity duration-500',
        scrolled ? 'opacity-100' : 'opacity-0'
      )} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              {/* Enhanced logo with gradient ring */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" style={{ backgroundColor: '#e11d47' }} />
                <div className="relative bg-black/20 rounded-full p-1 backdrop-blur-sm">
                  <Image 
                    src="/logo.png"
                    alt="UWE African Caribbean Society Logo"
                    width={48}
                    height={48}
                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain rounded-full"
                    priority
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight">
                  UWE <span className="font-extrabold" style={{ color: '#e11d47' }}>ACS</span>
                </h1>
                <p className="text-xs text-white/70 -mt-0.5 font-medium">
                  African Caribbean Society
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block ml-auto">
            <div ref={containerRef} className="flex items-center space-x-1 relative">
              
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      scale: activeSection === item.href.replace('#', '') || (item.href === '#hero' && activeSection === 'hero') ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      ref={(el) => {
                        navRefs.current[index] = el
                      }}
                      href={item.href}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-out rounded-full',
                        'text-white/90 hover:text-white hover:bg-white/10',
                        activeSection === item.href.replace('#', '') || (item.href === '#hero' && activeSection === 'hero')
                          ? 'text-white bg-white/15 shadow-lg'
                          : 'hover:scale-105'
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Active state glow effect */}
                      {(activeSection === item.href.replace('#', '') || (item.href === '#hero' && activeSection === 'hero')) && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: 'rgba(225,29,72,0.2)' }}
                          layoutId="activeNav"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 text-white hover:text-white focus:outline-none transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{isOpen ? 'Close' : 'Open'} main menu</span>
              <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current"
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current"
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

    </motion.nav>

    {/* Enhanced Mobile Navigation Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className="h-full px-6 pt-8 pb-6 space-y-4 bg-black backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    activeSection === item.href.replace('#', '') || (item.href === '#hero' && activeSection === 'hero')
                      ? "text-white border border-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                  style={activeSection === item.href.replace('#', '') || (item.href === '#hero' && activeSection === 'hero') ? { backgroundColor: 'rgba(225,29,72,0.2)' } : {}}
                  onClick={() => setIsOpen(false)}
                >
                  <SparklesIcon className="w-4 h-4 mr-3 opacity-60" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile CTA */}
            <motion.div
              className="pt-4 mt-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigation.length * 0.08 + 0.2 }}
            >
              <Link
                href="#membership"
                className="flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#e11d47' }}
                onClick={() => setIsOpen(false)}
              >
                Join Our Community
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}