'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-acs-black-900 mb-6">
              About <span className="gradient-text">UWE ACS</span>
            </h2>
            <p className="text-lg text-acs-black-600 mb-6 leading-relaxed">
              The UWE African Caribbean Society exists to create an inclusive space where students 
              can connect with their roots, celebrate their heritage, and build lasting relationships 
              that extend far beyond university life.
            </p>
            <p className="text-lg text-acs-black-600 mb-8 leading-relaxed">
              We strive to bridge cultural gaps, promote understanding, and showcase the vibrant 
              traditions that make our community unique. Through events, mentorship, and advocacy, 
              we empower our members to succeed academically while staying connected to their cultural identity.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-acs-red-500 to-acs-green-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-acs-black-900 mb-4">Our Mission</h3>
                <p className="text-acs-black-600 italic leading-relaxed">
                  &ldquo;To be the leading voice for African and Caribbean students at UWE Bristol, 
                  fostering a community where every member feels valued, supported, and proud 
                  of their heritage while building bridges to a brighter, more inclusive future.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}