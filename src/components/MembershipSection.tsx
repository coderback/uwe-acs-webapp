'use client'

import { motion } from 'framer-motion'
import { 
  CheckIcon, 
  UsersIcon, 
  GiftIcon, 
  AcademicCapIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: CalendarIcon,
    title: 'Exclusive Events',
    description: 'Priority booking and member-only events'
  },
  {
    icon: UsersIcon,
    title: 'Networking',
    description: 'Connect with like-minded individuals'
  },
  {
    icon: AcademicCapIcon,
    title: 'Academic Support',
    description: 'Study groups and mentorship programs'
  },
  {
    icon: GiftIcon,
    title: 'Cultural Experiences',
    description: 'Authentic cultural events and workshops'
  },
]

const membershipTiers = [
  {
    name: 'Non-Member',
    price: 'Free',
    description: 'Perfect for anyone interested in our society',
    features: [
      'Social media community access',
      'Attend free events',
      'Basic event notifications',
      'Pathway to membership',
    ],
    popular: false,
    buttonText: 'Join for Free',
    buttonUrl: 'https://chat.whatsapp.com/DkW3l3jegl4A2Xjcolz4cW',
  },
  {
    name: 'Student Member',
    price: '£5',
    description: 'Enhanced membership with exclusive benefits',
    features: [
      'Discounts on paid events',
      'Exclusive networking & professional development',
      'Voting rights in society decisions',
      'Giveaways and prizes',
    ],
    popular: true,
    buttonText: 'Upgrade Membership',
    buttonUrl: 'https://www.thestudentsunion.co.uk/organisation/africancaribbean/',
  },
]

export default function MembershipSection() {
  return (
    <section id="membership" className="py-20" style={{backgroundColor: '#0b0b0b'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join <span className="gradient-text">ACS</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Become part of a vibrant community that celebrates African and Caribbean culture 
            while supporting your academic and personal growth.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#e11d47' }}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-100 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 text-white text-center py-2 text-xs font-semibold uppercase tracking-wide" style={{ backgroundColor: '#e11d47' }}>
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${tier.popular ? 'pt-14' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold gradient-text">{tier.price}</span>
                  <span className="text-gray-400 ml-2">/ Academic Year</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-acs-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={tier.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-block text-center ${
                    tier.popular
                      ? 'text-white shadow-lg'
                      : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                  }`}
                  style={tier.popular ? { backgroundColor: '#e11d47' } : {}}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our <span className="gradient-text">Community?</span>
          </h3>
          <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
            Become part of something bigger. Connect with your heritage, build lasting friendships, 
            and create memories that will last a lifetime.
          </p>
          <motion.a
            href="https://www.thestudentsunion.co.uk/organisation/africancaribbean/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{ backgroundColor: '#e11d47' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join ACS Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}