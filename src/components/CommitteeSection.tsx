'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const committee = [
  {
    id: 1,
    name: 'Dahlya',
    role: 'President',
    bio: 'As the President of UWE Bristol ACS, I’m passionate about creating a community that uplifts and celebrates Black excellence on campus. My creative side comes out through henna art, content creation, and reading. My focus this year is to make ACS a space where everyone feels seen, valued, and empowered.',
    course: 'Law',
    year: '1st Year',
    interests: ['Henna', 'Reading', 'Content Creation'],
    linkedin: 'https://www.linkedin.com/in/dahlyaab/',
    imageUrl: '/Dahlya.jpg',
  },
  {
    id: 2,
    name: 'Success',
    role: 'Vice President',
    bio: 'As Vice President of ACS, I’m dedicated to building a welcoming and supportive environment for everyone. I enjoy painting, dancing, and unwinding with movies. My goal is to help create memorable experiences that bring our community closer together.',
    course: 'Biomedical Sciences',
    year: 'Final Year',
    interests: ['Painting', 'Watching Movies', 'Dancing'],
    linkedin: 'https://www.linkedin.com/in/success-izekor-ekoma-92510a340/',
    imageUrl: '/Success.jpg',
  },
  {
    id: 3,
    name: 'Muscuta',
    role: 'Social Media Officers',
    bio: 'As an Interior Design student and Social Media Officer, I love using creativity to connect with people and share our community’s stories. I enjoy anime, movies, playing piano, and supporting others. I aim to make ACS’s online presence as vibrant and inspiring as the people behind it.',
    course: 'Interior Design',
    year: '2nd Year',
    interests: ['Watching Movies', 'Anime', 'Piano', 'Community Support'],
    linkedin: 'https://www.linkedin.com/in/muscuta-man%C3%A9-70413a248/',
    imageUrl: '/Muscuta.jpg',
  },
  {
    id: 4,
    name: 'Faith',
    role: 'Events Officer',
    bio: 'I’m the Events Officer and I have a passion for bringing people together through creative and inclusive events. My interests in music, makeup, and DIY projects help me add a personal touch to every ACS event I plan.',
    course: 'Interior Design',
    year: '2nd Year',
    interests: ['Music', 'Makeup', 'DIY'],
    linkedin: 'treasurer@uweacs.org',
    imageUrl: '/Faith.jpg',
  },
  {
    id: 5,
    name: 'Hakeem',
    role: 'Sports Officer',
    bio: 'I’m a final-year Cyber Security student serving as the Sports Officer for ACS. I’m passionate about sports, especially football, and believe in the power of teamwork and community. When I’m not organizing games, I enjoy video games and spending time with friends.',
    course: 'Cyber Security',
    year: 'Final Year',
    interests: ['Video Games', 'Football', 'Hanging Out with Friends'],
    linkedin: 'https://www.linkedin.com/in/ibrahim-baba-mohammed-665378301/',
    imageUrl: '/Hakeem.jpg',
  },
  {
    id: 6,
    name: 'Femi',
    role: 'Sports Officer',
    bio: 'I’m one of the ACS Sports Officers and a final-year IT & Business Management student. I’m passionate about using sports to build confidence, unity, and fun within our community. I’m also a big fan of American football and believe a good nap can solve almost anything.',
    course: 'IT & Business Management',
    year: 'Final Year',
    interests: ['Sleeping', 'American Football'],
    linkedin: 'https://www.linkedin.com/in/oluomoshuli/',
    imageUrl: '/Femi.jpg',
  },
  {
    id: 7,
    name: 'Joshua',
    role: 'Treasurer',
    bio: 'As Treasurer and a final-year Mechanical Engineering student, I manage the society’s finances and help ensure everything runs smoothly behind the scenes. I’m passionate about organization, teamwork, and creativity. Outside of ACS, I enjoy anime, music, reading, and playing piano.',
    course: 'Mechanical Engineering',
    year: 'Final Year',
    interests: ['Watching Movies', 'Anime', 'Piano', 'Reading'],
    linkedin: 'https://www.linkedin.com/in/joshua-pepple/',
    imageUrl: '/Joshua.jpg',
  },
  {
    id: 8,
    name: 'Shentai',
    role: 'Caribbean Officer',
    bio: 'I’m the Caribbean Officer and a final-year Computer Science student. I’m proud to represent Caribbean culture and bring that energy to ACS. I’m passionate about music, football, gaming, and content creation, and I aim to make ACS a place where our culture shines through everything we do.',
    course: 'Computer Science',
    year: 'Final Year',
    interests: ['Football', 'Music', 'Video Games', 'Content Creation'],
    linkedin: 'https://www.linkedin.com/in/joshua-pepple/',
    imageUrl: '/shentai.jpg',
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
      className={`group relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto rounded-[1.6rem] p-[2px] overflow-visible
                 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_60px_rgba(0,0,0,0.55)]
                 ${isActive ? 'ring-2 ring-[#e11d47]/50' : ''}`}
      style={{
        background: 'conic-gradient(from 0deg at 50% 50%, #e11d47 0deg, #b01636 120deg, #e11d47 240deg, #b01636 360deg)',
        animation: 'rotate-border 4s linear infinite'
      }}
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
            <div className="absolute inset-0 h-full w-full flex items-center justify-center" style={{ backgroundColor: '#e11d47' }}>
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-xs sm:text-sm opacity-80">{member.role}</div>
              </div>
            </div>
          )}

          {/* bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Glass overlay content - Minimal */}
          <div
            className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 lg:inset-x-4 lg:bottom-4 rounded-2xl
                       bg-white/5 backdrop-blur-xl ring-1 ring-white/10
                       p-3 sm:p-3.5 lg:p-4 text-white"
          >
            <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight">{member.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-200">{member.role}</p>
              </div>
            </div>

            {/* CTA Buttons - Compact */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full text-white
                           hover:shadow-lg transform hover:scale-105 transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-white/20"
                style={{ backgroundColor: '#e11d47' }}
              >
                {open ? 'Hide' : 'Details'}
              </button>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full
                           bg-white/10 hover:bg-white/20 ring-1 ring-white/15 text-white
                           transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="hidden sm:inline text-xs">LinkedIn</span>
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
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0" style={{ backgroundColor: '#e11d47' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-lg font-semibold text-white truncate">{member.name}</h4>
                <p className="text-xs sm:text-sm text-neutral-300 truncate">{member.role}</p>
              </div>
            </div>

            {/* Course and Year chips */}
            <div className="mb-3 sm:mb-4 flex flex-wrap gap-1 sm:gap-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-white/10 ring-1 ring-white/15">
                <i className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#ef4444]" />
                <span className="truncate max-w-[100px] sm:max-w-none">{member.course}</span>
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-white/10 ring-1 ring-white/15">
                <i className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#22c55e]" />
                {member.year}
              </span>
            </div>

            <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-neutral-300 leading-5 sm:leading-6">{member.bio}</p>

            {member.interests.length > 0 && (
              <div className="mb-3 sm:mb-4">
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

            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-[10px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-300 transition-all duration-200"
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
    <div id="committee" className="py-0">
      <div className="max-w-7xl mx-auto">
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
                  left: -maxIndex * (100 / cardsPerView),
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
                      ? 'scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  style={index === currentIndex ? { backgroundColor: '#e11d47' } : {}}
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
    </div>
  )
}