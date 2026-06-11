'use client'

import { useMotionValue, useMotionTemplate } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

export type MouseSpotlightReturn = {
  spotlightBg: MotionValue<string>
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

export function useMouseSpotlight(): MouseSpotlightReturn {
  const spotlightX = useMotionValue(50)
  const spotlightY = useMotionValue(50)
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(168,85,247,0.18), transparent 60%)`

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100)
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const onMouseLeave = () => {
    spotlightX.set(50)
    spotlightY.set(50)
  }

  return { spotlightBg, onMouseMove, onMouseLeave }
}