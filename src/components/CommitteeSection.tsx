'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const committee = [
  {
    id: 1,
    name: 'Amara Johnson',
    role: 'President',
    bio: 'Final year Business Management student passionate about building bridges between cultures and creating inclusive spaces for all.',
    course: 'Business Management',
    year: '3rd Year',
    interests: ['Leadership', 'Community Building', 'Event Planning'],
    email: 'president@uweacs.org',
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'Vice President',
    bio: 'Computer Science student with a love for technology and community outreach. Dedicated to supporting academic excellence.',
    course: 'Computer Science',
    year: '2nd Year',
    interests: ['Technology', 'Mentorship', 'Innovation'],
    email: 'vicepresident@uweacs.org',
  },
  {
    id: 3,
    name: 'Zara Williams',
    role: 'Secretary',
    bio: 'Psychology student committed to mental health awareness and creating safe spaces for open dialogue within our community.',
    course: 'Psychology',
    year: '3rd Year',
    interests: ['Mental Health', 'Communication', 'Wellness'],
    email: 'secretary@uweacs.org',
  },
  {
    id: 4,
    name: 'David Clarke',
    role: 'Treasurer',
    bio: 'Accounting & Finance student ensuring our society\'s financial health while maximizing opportunities for our members.',
    course: 'Accounting & Finance',
    year: '2nd Year',
    interests: ['Finance', 'Planning', 'Sustainability'],
    email: 'treasurer@uweacs.org',
  },
]

export default function CommitteeSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <section id="committee" className="py-20" style={{backgroundColor: '#0b0b0b'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Meet the <span className="gradient-text">Committee</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            The passionate leaders dedicated to making ACS a vibrant and inclusive community for all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committee.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative h-80 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setFlippedCard(member.id)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              <div className="relative w-full h-full preserve-3d transition-transform duration-700 transform-gpu">
                {/* Front of Card */}
                <motion.div
                  className={`absolute inset-0 w-full h-full backface-hidden ${
                    flippedCard === member.id ? 'rotate-y-180' : ''
                  }`}
                  style={{ transform: flippedCard === member.id ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden h-full">
                    {/* Profile Image */}
                    <div className="relative h-32 bg-gradient-to-br from-acs-red-500 to-acs-green-500">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-2 left-4 right-4">
                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-white/90 text-sm font-medium">{member.role}</p>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <AcademicCapIcon className="w-4 h-4 text-acs-red-500 mr-2" />
                        <span className="text-xs text-gray-100">{member.course}</span>
                      </div>
                      <div className="text-xs text-gray-100 mb-3">{member.year}</div>
                      <p className="text-acs-black-700 text-xs leading-relaxed line-clamp-4">
                        {member.bio}
                      </p>
                      <div className="mt-3 text-center">
                        <span className="text-xs text-acs-red-500 font-medium">Hover for more</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                  className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${
                    flippedCard === member.id ? 'rotate-y-0' : ''
                  }`}
                  style={{ 
                    transform: flippedCard === member.id ? 'rotateY(0deg)' : 'rotateY(-180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="bg-gradient-to-br from-acs-red-500 to-acs-green-500 rounded-2xl shadow-lg p-4 h-full flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-xs leading-relaxed mb-4 text-white/90">
                        {member.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Interests:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-gray-900/20 rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs">
                        <p className="text-white/80">{member.course}</p>
                        <p className="text-white/80">{member.year}</p>
                      </div>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-1 bg-gray-900/20 hover:bg-gray-900/30 px-3 py-1 rounded-full transition-colors duration-200"
                      >
                        <EnvelopeIcon className="w-3 h-3" />
                        <span className="text-xs">Email</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}