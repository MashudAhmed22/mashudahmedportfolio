'use client'

import { motion } from 'framer-motion'

const ORBIT_TECHS = ['React', 'Next', 'TS', 'Node', 'RN', 'Mongo']

export function OrbitRing() {
  return (
    <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative h-105 w-105"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {ORBIT_TECHS.map((t, i) => {
          const angle = (i / ORBIT_TECHS.length) * Math.PI * 2
          const r = 200
          const x = Math.round(Math.cos(angle) * r)
          const y = Math.round(Math.sin(angle) * r)
          return (
            <motion.div
              key={t}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted border border-foreground/10 backdrop-blur-sm text-muted-foreground whitespace-nowrap">
                {t}
              </div>
            </motion.div>
          )
        })}
        <div className="absolute inset-0 rounded-full border border-dashed border-foreground/10" />
      </motion.div>
    </div>
  )
}