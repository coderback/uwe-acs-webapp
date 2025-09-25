'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const committee = [
  {
    id: 1,
    name: 'Dahlya Abdullah',
    role: 'President',
    bio: 'Second year Law student passionate about building bridges between cultures and creating inclusive spaces for all.',
    course: 'Law',
    year: '2nd Year',
    interests: ['Leadership', 'Community Building', 'Event Planning', 'Cultural Advocacy'],
    linkedin: 'president@uweacs.org',
    imageUrl: '/test-card-1.jpg',
  },
  {
    id: 2,
    name: 'Success Ekoma',
    role: 'Vice President',
    bio: 'Biomed student with a love for technology and community outreach. Dedicated to supporting academic excellence.',
    course: 'Biomedical Science',
    year: 'Final Year',
    interests: ['Technology', 'Mentorship', 'Innovation', 'Digital Solutions'],
    linkedin: 'vicepresident@uweacs.org',
    imageUrl: '/test-card-2.jpg',
  },
  {
    id: 3,
    name: 'Muscuta',
    role: 'Social Media Officers',
    bio: 'Interior Design student committed to mental health awareness and creating safe spaces for open dialogue within our community.',
    course: 'Interior Design',
    year: '2nd Year',
    interests: ['Mental Health', 'Communication', 'Wellness', 'Community Support'],
    linkedin: 'secretary@uweacs.org',
    imageUrl: '/test-card-3.jpg',
  },
  {
    id: 4,
    name: 'Faith',
    role: 'Events Officer',
    bio: 'Interior Design student ensuring our society\'s financial health while maximizing opportunities for our members.',
    course: 'Interior Design',
    year: '2nd Year',
    interests: ['Finance', 'Planning', 'Sustainability', 'Resource Management'],
    linkedin: 'treasurer@uweacs.org',
    imageUrl: '/test-card-4.jpg',
  },
  {
    id: 5,
    name: 'Hakeem Ibrahim',
    role: 'Sports Officer',
    bio: 'Cyber Security student ensuring our society\'s financial health while maximizing opportunities for our members.',
    course: 'Cyber Security',
    year: 'Final Year',
    interests: ['Finance', 'Planning', 'Sustainability', 'Resource Management'],
    linkedin: 'treasurer@uweacs.org',
    imageUrl: '/test-card-5.jpg',
  },
  {
    id: 6,
    name: 'Femi Omoshuli',
    role: 'Sports Officer',
    bio: 'Accounting & Finance student ensuring our society\'s financial health while maximizing opportunities for our members.',
    course: 'IT & Business Management',
    year: 'Final Year',
    interests: ['Finance', 'Planning', 'Sustainability', 'Resource Management'],
    linkedin: 'treasurer@uweacs.org',
    imageUrl: '/test-card-6.jpg',
  },
  {
    id: 7,
    name: 'Joshua Pepple',
    role: 'Treasurer',
    bio: 'Mechanical Engineering student ensuring our society\'s financial health while maximizing opportunities for our members.',
    course: 'Mechanical Engineering',
    year: 'Final Year',
    interests: ['Finance', 'Planning', 'Sustainability', 'Resource Management'],
    linkedin: 'treasurer@uweacs.org',
    imageUrl: '/test-card-7.jpg',
  },
  {
    id: 8,
    name: 'Aissatou Diallo',
    role: 'Equality and Participation Officer',
    bio: 'Biomedical Science student ensuring our society\'s financial health while maximizing opportunities for our members.',
    course: 'Biomedical Science',
    year: 'Final Year',
    interests: ['Finance', 'Planning', 'Sustainability', 'Resource Management'],
    linkedin: 'treasurer@uweacs.org',
    imageUrl: '/test-card-8.jpg',
  },
]

type CommitteeCardProps = {
  member: typeof committee[0];
  index: number;
  isActive?: boolean;
}

function CommitteeCard({ member, isActive = false }: CommitteeCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.section
      initial={{ y: 0, scale: 1 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto rounded-[1.6rem] p-[2px]
                 bg-[conic-gradient(at_10%_10%,#ef4444,black_120deg,#22c55e_240deg,#ef4444_360deg)]
                 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_60px_rgba(0,0,0,0.55)]
                 ${isActive ? 'ring-2 ring-[#ef4444]/50' : ''}`}
    >
      <div className="relative rounded-[1.5rem] overflow-hidden bg-neutral-950">
        {/* Full-bleed image */}
        <div className="relative aspect-[3/4] w-full">
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={`${member.name} portrait`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#ef4444] to-[#22c55e] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-xs sm:text-sm opacity-80">{member.role}</div>
              </div>
            </div>
          )}

          {/* bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Glass overlay content */}
          <div
            className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 lg:inset-x-4 lg:bottom-4 rounded-2xl
                       bg-white/5 backdrop-blur-xl ring-1 ring-white/10
                       p-3 sm:p-4 lg:p-5 text-white"
          >
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight">{member.name}</h3>
                <p className="text-sm sm:text-base text-neutral-200">{member.role}</p>
              </div>
              {/* Hover hint pill (desktop only) */}
              <span className="hidden lg:inline text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/10 ring-1 ring-white/15 flex-shrink-0">
                Hover for more
              </span>
            </div>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-5 sm:leading-6 text-neutral-200 line-clamp-3 sm:line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
              {member.bio}
            </p>

            {/* Course and Year chips */}
            <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-white/10 ring-1 ring-white/15">
                <i className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#ef4444]" />
                <span className="truncate max-w-[80px] sm:max-w-none">{member.course}</span>
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-white/10 ring-1 ring-white/15">
                <i className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#22c55e]" />
                {member.year}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full
                           bg-gradient-to-r from-[#ef4444] to-[#22c55e] text-white
                           hover:shadow-lg transform hover:scale-105 transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                {open ? 'Hide' : 'Details'}
              </button>
              <a
                href={`mailto:${member.linkedin}`}
                className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full
                           bg-white/10 hover:bg-white/20 ring-1 ring-white/15 text-white
                           transition-all duration-200"
              >
                <EnvelopeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* Details drawer */}
        <motion.div
          initial={false}
          animate={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden bg-neutral-900/90 backdrop-blur-sm"
        >
          <div className="p-3 sm:p-4 lg:p-5 border-t border-white/10">
            <div className="flex items-start gap-3 sm:gap-4">
              {member.imageUrl ? (
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl overflow-hidden ring-2 ring-white/10 flex-shrink-0">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name} portrait`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#22c55e] flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-lg font-semibold text-white truncate">{member.name}</h4>
                <p className="text-xs sm:text-sm text-neutral-300 truncate">{member.role}</p>
              </div>
            </div>

            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-neutral-300 leading-5 sm:leading-6">{member.bio}</p>

            {member.interests.length > 0 && (
              <div className="mt-3 sm:mt-4">
                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-neutral-400 mb-2">
                  Interests
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {member.interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-white/5 ring-1 ring-white/10 text-neutral-200
                                 hover:bg-white/10 transition-colors duration-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-3 sm:mt-4 flex items-center justify-between">
              <div className="flex gap-2 sm:gap-3 text-[10px] sm:text-xs text-neutral-400">
                <span className="inline-flex items-center gap-1 sm:gap-1.5">
                  <i className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#ef4444]" />
                  <span className="truncate max-w-[80px] sm:max-w-none">{member.course}</span>
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5">
                  <i className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#22c55e]" />
                  {member.year}
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-300"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default function CommitteeSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerView(3) // xl: 3 cards for better spacing
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) // md: 2 cards
      } else {
        setCardsPerView(1) // sm: 1 card
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, committee.length - cardsPerView)

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
  }

  return (
    <section id="committee" className="py-12 sm:py-16 lg:py-20" style={{backgroundColor: '#0b0b0b'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Meet the <span className="gradient-text">Committee</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            The passionate leaders dedicated to making ACS a vibrant and inclusive community for all.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Only show if we have more cards than can fit */}
          {maxIndex > 0 && committee.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                         flex items-center justify-center text-white
                         hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                         flex items-center justify-center text-white
                         hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden">
            {committee.length <= cardsPerView ? (
              // Static centered layout when all cards fit
              <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
                {committee.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CommitteeCard
                      member={member}
                      index={index}
                      isActive={true}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              // Carousel layout when scrolling is needed
              <motion.div
                ref={carouselRef}
                className="flex"
                style={{ x }}
                animate={{ x: `${-currentIndex * (100 / cardsPerView)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{
                  left: `${-maxIndex * (100 / cardsPerView)}%`,
                  right: 0
                }}
                onDragEnd={(_, info) => {
                  const offset = info.offset.x
                  const velocity = info.velocity.x

                  if (Math.abs(offset) > 50 || Math.abs(velocity) > 500) {
                    if (offset > 0 && currentIndex > 0) {
                      prevSlide()
                    } else if (offset < 0 && currentIndex < maxIndex) {
                      nextSlide()
                    }
                  }
                }}
              >
                {committee.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                    style={{ width: `${100 / cardsPerView}%` }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center">
                      <CommitteeCard
                        member={member}
                        index={index}
                        isActive={index >= currentIndex && index < currentIndex + cardsPerView}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Dots Indicator - Only show if we have more cards than can fit */}
          {maxIndex > 0 && committee.length > cardsPerView && (
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-[#ef4444] to-[#22c55e] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Committee count indicator */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm text-gray-400">
              Showing {Math.min(currentIndex + cardsPerView, committee.length)} of {committee.length} committee members
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}