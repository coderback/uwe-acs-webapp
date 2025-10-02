'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

const contactInfo: never[] = []

const socialLinks = [
  { name: 'WhatsApp', href: '#', color: 'from-green-500 to-green-600' },
  { name: 'Instagram', href: '#', color: 'from-pink-500 to-purple-500' },
  { name: 'TikTok', href: '#', color: 'from-black to-gray-800' }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20" style={{backgroundColor: '#0b0b0b'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions, ideas, or just want to say hello? 
            We&apos;d love to hear from you and connect with our community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership Question</option>
                  <option value="events">Event Information</option>
                  <option value="committee">Committee Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200 resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-full font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-acs-black-300 text-acs-black-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-acs-red-500 to-acs-green-500 text-white hover:from-acs-red-600 hover:to-acs-green-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-acs-black-600 mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Media & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
              <p className="text-gray-100 mb-6">
                Stay connected with us on social media for the latest updates, 
                behind-the-scenes content, and community highlights.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white font-semibold hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Quick Questions?</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white text-sm">How can I join ACS?</p>
                  <p className="text-gray-100 text-sm">Visit the UWE Students&apos; Union website or contact us directly.</p>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">When are events held?</p>
                  <p className="text-gray-100 text-sm">We host events throughout the academic year, typically 2-3 times per month.</p>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Can non-students join?</p>
                  <p className="text-gray-100 text-sm">Yes! We welcome alumni and community members through our special membership tiers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}