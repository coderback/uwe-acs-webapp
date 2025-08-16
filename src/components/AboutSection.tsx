'use client'

import { motion } from 'framer-motion'
import { HeartIcon, GlobeAltIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Unity',
    description: 'Building bridges between diverse cultures and fostering understanding within our community.',
    icon: HeartIcon,
  },
  {
    name: 'Cultural Pride',
    description: 'Celebrating the rich heritage and traditions of African and Caribbean communities.',
    icon: SparklesIcon,
  },
  {
    name: 'Academic Excellence',
    description: 'Supporting our members in achieving their educational goals and career aspirations.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Global Impact',
    description: 'Creating positive change that extends beyond our university into the wider community.',
    icon: GlobeAltIcon,
  },
]

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
                  "To be the leading voice for African and Caribbean students at UWE Bristol, 
                  fostering a community where every member feels valued, supported, and proud 
                  of their heritage while building bridges to a brighter, more inclusive future."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-acs-black-900 mb-4">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <p className="text-lg text-acs-black-600 max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we make
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              className="bg-acs-black-50 rounded-2xl p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-acs-red-500 to-acs-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-acs-black-900 mb-3">{value.name}</h4>
              <p className="text-acs-black-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}