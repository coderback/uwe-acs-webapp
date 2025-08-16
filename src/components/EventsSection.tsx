'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UsersIcon,
  TicketIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const events = [
  {
    id: 1,
    title: 'African Cultural Night',
    description: 'Experience the vibrant traditions of Africa through music, dance, food, and storytelling.',
    date: new Date('2024-09-15'),
    time: '18:00',
    location: 'UWE Students\' Union',
    capacity: 200,
    registered: 145,
    price: 'Free',
    category: 'cultural',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Caribbean Food Festival',
    description: 'Taste authentic Caribbean cuisine prepared by our talented community members.',
    date: new Date('2024-09-22'),
    time: '12:00',
    location: 'UWE Campus Green',
    capacity: 150,
    registered: 89,
    price: '£8',
    category: 'food',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Networking & Career Fair',
    description: 'Connect with successful professionals from African and Caribbean backgrounds.',
    date: new Date('2024-10-05'),
    time: '14:00',
    location: 'UWE Business School',
    capacity: 100,
    registered: 67,
    price: 'Free',
    category: 'professional',
    status: 'upcoming',
  },
]

const categories = [
  { id: 'all', name: 'All Events' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'food', name: 'Food & Drink' },
  { id: 'professional', name: 'Professional' },
]

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  )

  const getCategoryColor = (category: string) => {
    const colors = {
      cultural: 'bg-red-100 text-red-800',
      food: 'bg-green-100 text-green-800',
      professional: 'bg-blue-100 text-blue-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="events" className="py-20 bg-acs-black-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-acs-black-900 mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-acs-black-600 max-w-2xl mx-auto">
            Join us for unforgettable experiences that celebrate our culture, 
            build community, and create lasting memories.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2 bg-white rounded-full p-2 shadow-lg">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-acs-red-500 text-white shadow-lg scale-105'
                    : 'text-acs-black-600 hover:bg-acs-black-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-acs-red-500 to-acs-green-500">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {categories.find(c => c.id === event.category)?.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-acs-black-800">
                      {event.price}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-acs-black-900 mb-3">{event.title}</h3>
                  <p className="text-acs-black-600 mb-4 line-clamp-2">{event.description}</p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-acs-black-600">
                      <CalendarIcon className="w-4 h-4 mr-2 text-acs-red-500" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-acs-black-600">
                      <ClockIcon className="w-4 h-4 mr-2 text-acs-red-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-acs-black-600">
                      <MapPinIcon className="w-4 h-4 mr-2 text-acs-red-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-acs-black-600">
                      <UsersIcon className="w-4 h-4 mr-2 text-acs-red-500" />
                      {event.registered}/{event.capacity} attending
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-acs-black-600 mb-2">
                      <span>Capacity</span>
                      <span>{Math.round((event.registered / event.capacity) * 100)}% full</span>
                    </div>
                    <div className="w-full bg-acs-black-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-acs-red-500 to-acs-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                      event.registered >= event.capacity
                        ? 'bg-acs-black-200 text-acs-black-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-acs-red-500 to-acs-green-500 text-white hover:from-acs-red-600 hover:to-acs-green-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                    }`}
                    disabled={event.registered >= event.capacity}
                    whileHover={event.registered < event.capacity ? { scale: 1.02 } : {}}
                    whileTap={event.registered < event.capacity ? { scale: 0.98 } : {}}
                  >
                    {event.registered >= event.capacity ? (
                      <>
                        <TicketIcon className="w-5 h-5 inline mr-2" />
                        Event Full
                      </>
                    ) : (
                      <>
                        <TicketIcon className="w-5 h-5 inline mr-2" />
                        Register Now
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Events Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 text-acs-red-500 border-2 border-acs-red-500 rounded-full hover:bg-acs-red-500 hover:text-white transition-all duration-200 font-semibold"
          >
            View All Events
            <CalendarIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}