'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Committee', href: '#committee' },
  { name: 'Events', href: '#events' },
  { name: 'Membership', href: '#membership' },
  { name: 'Suggestions', href: '/suggestions' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
      
      // Check which section is currently in view
      const sections = ['hero', 'about', 'committee', 'events', 'membership', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
        // Update line position
        updateLinePosition(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to update line position based on active section
  const updateLinePosition = (section: string) => {
    const activeIndex = navigation.findIndex(item => 
      item.href === `#${section}` || (section === 'hero' && item.href === '#hero')
    )
    
    if (activeIndex !== -1 && navRefs.current[activeIndex] && containerRef.current) {
      const activeElement = navRefs.current[activeIndex]
      const container = containerRef.current
      
      const elementRect = activeElement.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      
      setLineStyle({
        left: elementRect.left - containerRect.left,
        width: elementRect.width
      })
    }
  }

  // Initialize line position on mount
  useEffect(() => {
    updateLinePosition('hero')
  }, [])

  return (
    <motion.nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-black/70 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center h-16 lg:h-20 bg-transparent">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-acs-red-500 to-acs-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">
                  ACS
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-white">
                  UWE <span className="gradient-text">ACS</span>
                </h1>
                <p className="text-xs text-white/80 -mt-1">
                  African Caribbean Society
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block ml-auto">
            <div ref={containerRef} className="flex items-baseline space-x-8 relative">
              {/* Moving Line */}
              <motion.div
                className="absolute -top-8 h-2.5 bg-gradient-to-r from-acs-red-500 to-acs-green-500 rounded-full"
                animate={{
                  x: lineStyle.left,
                  width: lineStyle.width,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.5
                }}
              />
              
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
                      ref={(el) => (navRefs.current[index] = el)}
                      href={item.href}
                      className={cn(
                        'relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-out',
                        'text-white hover:text-acs-red-500',
                        // Active state styling
                        activeSection === item.href.replace('#', '') || (item.href === '#hero' && activeSection === 'hero')
                          ? 'text-acs-red-500'
                          : 'hover:scale-105'
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-acs-red-500 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-acs-red-500"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md shadow-lg">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-acs-red-500 hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}