"use client"

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface PalmLeafDividerProps {
  flip?: boolean
  className?: string
}

/**
 * Decorative stylized palm-leaf inspired curved divider between sections.
 * Uses layered SVG paths with subtle gradients matching brand palette.
 */
export function PalmLeafDivider({ flip = false, className }: PalmLeafDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'relative select-none pointer-events-none -mt-px',
        flip ? 'rotate-180' : '',
        className
      )}
    >
      <motion.svg
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        role="img"
        aria-label="Palm leaf decorative divider"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="140"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="w-full h-[140px] block"
      >
        <defs>
          <linearGradient id="leafGradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#16A34A" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#E11D48" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="leafGradientAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#E11D48" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="leafGradientThin" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.7" />
          </linearGradient>
          <clipPath id="fadeClip">
            <rect x="0" y="0" width="1440" height="140" />
          </clipPath>
        </defs>
        <g clipPath="url(#fadeClip)">
          {/* Base dark background curve to blend with sections */}
          <path
            d="M0 60 C240 110 480 10 720 60 C960 110 1200 10 1440 60 L1440 140 L0 140 Z"
            fill="#0b0b0b"
          />
          {/* Main palm leaf fronds (stylized layered curves) */}
          <path
            d="M0 70 C180 120 360 20 540 70 C720 120 900 20 1080 70 C1260 120 1350 40 1440 80 L1440 140 L0 140 Z"
            fill="url(#leafGradientMain)"
            opacity="0.55"
          />
          <path
            d="M0 85 C200 135 400 45 600 85 C800 125 1000 45 1200 85 C1320 110 1380 80 1440 95 L1440 140 L0 140 Z"
            fill="url(#leafGradientAccent)"
            opacity="0.65"
          />
          {/* Thin vein-like strokes */}
          <path
            d="M0 90 Q360 40 720 90 T1440 90"
            stroke="url(#leafGradientThin)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M0 104 Q360 54 720 104 T1440 104"
            stroke="url(#leafGradientThin)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />
          {/* Subtle highlight overlay */}
            <path
              d="M0 70 C180 120 360 20 540 70 C720 120 900 20 1080 70 C1260 120 1350 40 1440 80"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.05"
              strokeWidth="8"
              strokeLinecap="round"
            />
        </g>
      </motion.svg>
      {/* Soft shadow fade below divider */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent via-[#0b0b0b]/40 to-[#0b0b0b]" />
    </div>
  )
}

export default PalmLeafDivider

