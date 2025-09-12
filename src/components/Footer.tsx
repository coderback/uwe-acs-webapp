'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.5 2.5a2 2 0 11.001 3.999A2 2 0 018.5 2.5zm3.5 16.5a6 6 0 110-12 6 6 0 010 12z"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  }
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Membership', href: '/membership' },
  { name: 'Gallery', href: '/gallery' },
]

const supportLinks = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'Suggestion Box', href: '/suggestions' },
  { name: 'Survey', href: '/survey' },
  { name: 'UWE Bristol', href: 'https://www.uwe.ac.uk', external: true },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pattern-overlay" style={{backgroundColor: '#0b0b0b'}}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Description */}
          <div className="space-y-8 xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-acs-red-500 to-acs-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ACS</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    UWE <span className="gradient-text">ACS</span>
                  </h2>
                  <p className="text-sm text-acs-black-300">
                    African Caribbean Society
                  </p>
                </div>
              </Link>
              <p className="text-acs-black-300 text-sm mt-4 max-w-md">
                Celebrating and promoting African and Caribbean culture at UWE Bristol. 
                Join our vibrant community for events, networking, and cultural exchange.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-acs-black-400 hover:text-acs-red-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  {quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-acs-black-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                className="mt-12 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {supportLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-acs-black-300 hover:text-white transition-colors duration-200"
                        {...(item.external && { 
                          target: "_blank", 
                          rel: "noopener noreferrer" 
                        })}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              className="mt-12 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Contact Info
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <MapPinIcon className="flex-shrink-0 h-6 w-6 text-acs-red-400 mt-0.5" />
                  <span className="ml-3 text-base text-acs-black-300">
                    University of the West of England<br />
                    Bristol, UK
                  </span>
                </li>
                <li className="flex items-center">
                  <EnvelopeIcon className="flex-shrink-0 h-6 w-6 text-acs-red-400" />
                  <span className="ml-3 text-base text-acs-black-300">
                    contact@uweacs.org
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-acs-red-400" />
                  <span className="ml-3 text-base text-acs-black-300">
                    +44 (0)117 123 4567
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 border-t border-acs-black-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-acs-black-400">
              &copy; {currentYear} UWE African Caribbean Society. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-acs-black-500">
                Built with ❤️ for the community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}