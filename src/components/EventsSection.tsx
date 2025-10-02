'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  TicketIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

const palette = {
  red: '#E11D48',
  green: '#16A34A',
  black: '#0B0B0B',
}

const events = [
  {
    id: 1,
    title: 'African Cultural Night',
    description: 'Experience the vibrant traditions of Africa through music, dance, food, and storytelling. Join us for an evening celebrating our rich heritage.',
    date: new Date('2024-09-15'),
    time: '18:00',
    location: 'UWE Students\' Union',
    price: 'Free',
    category: 'cultural',
    status: 'upcoming',
    imageUrl: '/poster.jpg',
    highlights: ['Live Music', 'Traditional Dance', 'Food Tasting', 'Storytelling']
  },
  {
    id: 2,
    title: 'Caribbean Food Festival',
    description: 'Taste authentic Caribbean cuisine prepared by our talented community members. A culinary journey through the islands.',
    date: new Date('2024-09-22'),
    time: '12:00',
    location: 'UWE Campus Green',
    price: '£8',
    category: 'food',
    status: 'upcoming',
    imageUrl: '/poster.jpg',
    highlights: ['Authentic Cuisine', 'Cooking Demos', 'Live DJ', 'Cultural Music']
  },
  {
    id: 3,
    title: 'Networking & Career Fair',
    description: 'Connect with successful professionals from African and Caribbean backgrounds. Build your network and explore career opportunities.',
    date: new Date('2024-10-05'),
    time: '14:00',
    location: 'UWE Business School',
    price: 'Free',
    category: 'professional',
    status: 'upcoming',
    imageUrl: '/poster.jpg',
    highlights: ['Industry Leaders', 'CV Reviews', 'Mock Interviews', 'Workshops']
  },
]

const categories = [
  { id: 'all', name: 'All Events', icon: SparklesIcon },
  { id: 'cultural', name: 'Cultural', icon: CalendarIcon },
  { id: 'food', name: 'Food & Drink', icon: SparklesIcon },
  { id: 'professional', name: 'Professional', icon: UsersIcon },
  { id: 'social', name: 'Social', icon: UsersIcon },
]

type EventCardProps = {
  event: typeof events[0];
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      cultural: 'from-rose-500/20 to-red-500/20 text-rose-200',
      food: 'from-green-500/20 to-emerald-500/20 text-green-200',
      professional: 'from-blue-500/20 to-indigo-500/20 text-blue-200',
      social: 'from-purple-500/20 to-pink-500/20 text-purple-200'
    }
    return colors[category as keyof typeof colors] || 'from-gray-500/20 to-slate-500/20 text-gray-200'
  }


  return (
    <motion.div
      className="relative w-full max-w-[400px] mx-auto rounded-[1.6rem] p-[2px]
                bg-[conic-gradient(at_10%_10%,#ef4444,black_120deg,#22c55e_240deg,#ef4444_360deg)]
                shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_60px_rgba(0,0,0,0.55)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative rounded-[1.5rem] overflow-hidden bg-neutral-950">
        {/* Event Image - Full visibility */}
        <div className="relative aspect-[3/2] w-full">
          {event.imageUrl ? (
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#ef4444] to-[#22c55e] flex items-center justify-center">
              <div className="text-center text-white">
                <CalendarIcon className="w-12 h-12 mx-auto mb-2 opacity-60" />
                <div className="text-lg font-semibold">{event.category}</div>
              </div>
            </div>
          )}

          {/* Category and Price badges - positioned to not block poster */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-gradient-to-r ${getCategoryColor(event.category)} border border-white/20`}>
              {categories.find(c => c.id === event.category)?.name}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-black backdrop-blur-md border border-white/20">
              {event.price}
            </span>
          </div>
        </div>

        {/* Separate Glass card with event information */}
        <div className="p-4 bg-neutral-900/90 backdrop-blur-sm">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
            <p className="text-sm text-neutral-200 line-clamp-2">
              {event.description}
            </p>
          </div>

          {/* Event details */}
          <div className="space-y-2 mb-4 text-sm text-neutral-200">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
              <span className="truncate">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          {/* Action button */}
          <button
            className="w-full px-4 py-2.5 rounded-full text-sm font-semibold
                     bg-gradient-to-r from-[#ef4444] to-[#22c55e] text-white"
          >
            <div className="flex items-center justify-center gap-2">
              <TicketIcon className="w-4 h-4" />
              Register Now
            </div>
          </button>
        </div>

        {/* Highlights section */}
        <div className="p-4 border-t border-white/10 bg-neutral-900/90 backdrop-blur-sm">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <SparklesIcon className="w-4 h-4 text-yellow-400" />
            Event Highlights
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {event.highlights?.map((highlight, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-white/10 text-neutral-200 border border-white/10"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredEvents = events.filter(event =>
    selectedCategory === 'all' || event.category === selectedCategory
  )

  // Enhanced background with animated shapes
  const backgroundShapes = useMemo(() => (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${palette.red}15, transparent)`,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${palette.green}10, transparent)`,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.08), transparent)`,
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  ), [])

  return (
    <section id="events" className="relative py-20 pattern-overlay" style={{backgroundColor: '#0b0b0b'}}>
      {backgroundShapes}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Join us for unforgettable experiences that celebrate our culture,
            build community, and create lasting memories.
          </p>
        </motion.div>

        {/* Enhanced Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2 bg-black/40 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-white/10">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#ef4444] to-[#22c55e] text-white shadow-lg ring-2 ring-white/20'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced View All Events Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/events"
              className="group relative inline-flex items-center px-8 py-4 text-white border-2 border-white/20 rounded-full
                       bg-white/5 backdrop-blur-xl hover:bg-gradient-to-r hover:from-[#ef4444] hover:to-[#22c55e]
                       hover:border-transparent transition-all duration-300 font-semibold shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ef4444]/20 to-[#22c55e]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View All Events</span>
              <CalendarIcon className="relative z-10 w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}