'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LightBulbIcon,
  PaperAirplaneIcon,
  EyeSlashIcon,
  UserIcon,
  CalendarIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const suggestionCategories = [
  { id: 'event', name: 'Event Ideas', icon: CalendarIcon },
  { id: 'improvement', name: 'Society Improvements', icon: SparklesIcon },
  { id: 'activity', name: 'New Activities', icon: LightBulbIcon },
  { id: 'feedback', name: 'General Feedback', icon: ChatBubbleLeftRightIcon },
  { id: 'other', name: 'Other', icon: UserIcon }
]

export default function Suggestions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    title: '',
    description: '',
    anonymous: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      title: '',
      description: '',
      anonymous: false
    })
    setIsSubmitting(false)
    
    alert('Thank you for your suggestion! We really appreciate your input.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-acs-green-500 via-acs-red-500 to-acs-black-900 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <LightBulbIcon className="w-10 h-10 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Suggestion</span> Box
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your voice matters! Share your ideas, feedback, and suggestions to help us 
              make ACS even better for our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Suggest Section */}
      <section className="py-20" style={{backgroundColor: '#0b0b0b'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Your <span className="gradient-text">Ideas Matter</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              ACS is built by and for our community. Your suggestions help us create better experiences for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: LightBulbIcon,
                title: 'Innovation',
                description: 'Fresh ideas lead to exciting new events and experiences that keep our community vibrant and engaged.'
              },
              {
                icon: SparklesIcon,
                title: 'Improvement',
                description: 'Your feedback helps us identify areas where we can enhance our services and better serve our members.'
              },
              {
                icon: ChatBubbleLeftRightIcon,
                title: 'Community Voice',
                description: 'Every suggestion ensures that ACS truly represents the diverse needs and interests of our community.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-acs-red-500 to-acs-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-100 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestion Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Share Your <span className="gradient-text">Ideas</span>
            </h2>
            <p className="text-xl text-gray-100">
              Fill out the form below to submit your suggestion. You can choose to remain anonymous if you prefer.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anonymous Option */}
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                <div className="flex items-center">
                  <EyeSlashIcon className="w-6 h-6 text-acs-red-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-white">Submit Anonymously</h3>
                    <p className="text-sm text-gray-100">Your identity will not be shared with anyone</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-acs-black-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-acs-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-acs-red-500"></div>
                </label>
              </div>

              {/* Name and Email (hidden if anonymous) */}
              {!formData.anonymous && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required={!formData.anonymous}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-gray-900 text-white focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required={!formData.anonymous}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-gray-900 text-white focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              )}

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-100 mb-2">
                  Suggestion Category *
                </label>
                <select
                  name="category"
                  id="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-gray-900 text-white focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                >
                  <option value="">Select a category</option>
                  {suggestionCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-100 mb-2">
                  Suggestion Title *
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-acs-black-200 focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200"
                  placeholder="Brief title for your suggestion"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-100 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={6}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-gray-900 text-white focus:border-acs-red-500 focus:ring-2 focus:ring-acs-red-500/20 outline-none transition-all duration-200 resize-vertical"
                  placeholder="Please provide as much detail as possible about your suggestion. Include any specific ideas, benefits, or implementation thoughts you might have."
                ></textarea>
              </div>

              {/* Submit Button */}
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
                    Submitting Suggestion...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                    Submit Suggestion
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20" style={{backgroundColor: '#0b0b0b'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Ideas</span> That Became Reality
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Here are some suggestions from our community that we&apos;ve successfully implemented
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Monthly Cultural Nights',
                description: 'A member suggested rotating cultural spotlights each month, which became one of our most popular event series.',
                category: 'Event Ideas',
                impact: '500+ attendees per event'
              },
              {
                title: 'Mentorship Program',
                description: 'The idea for pairing new students with experienced members came from a first-year student suggestion.',
                category: 'Society Improvements',
                impact: '50+ mentor-mentee pairs'
              },
              {
                title: 'Study Groups',
                description: 'Subject-specific study groups were suggested to help members excel academically while building community.',
                category: 'New Activities',
                impact: '15+ active study groups'
              }
            ].map((story, index) => (
              <motion.div
                key={story.title}
                className="bg-gray-900 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-acs-red-100 text-acs-red-800 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                  <LightBulbIcon className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                <p className="text-gray-100 mb-4 leading-relaxed">{story.description}</p>
                <div className="flex items-center text-sm text-acs-green-600 font-semibold">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Impact: {story.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-acs-red-500 to-acs-green-500 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Every Great Idea Starts with You
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don&apos;t hesitate to share your thoughts, no matter how big or small. 
              Your suggestion could be the next big thing that transforms our community!
            </p>
            <motion.a
              href="#suggestion-form"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-acs-red-500 bg-white rounded-full hover:bg-acs-black-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Idea
              <LightBulbIcon className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}