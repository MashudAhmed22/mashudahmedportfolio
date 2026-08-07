'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Service } from '@/data/services'

export function ServiceCard({
  number,
  title,
  description,
  tech,
  bullets,
  icon: Icon,
  accent,
}: Service) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group h-full"
    >
      <Card
        className={`
          relative overflow-hidden bg-card border-foreground/10
          hover:border-fuchsia-500/40 transition-all duration-300
          shadow-lg hover:shadow-xl h-full
        `}
      >
        {/* Accent gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
          aria-hidden
        />

        {/* Subtle top border glow on hover */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/0 to-transparent group-hover:via-fuchsia-500/50 transition-all duration-500"
          aria-hidden
        />

        <CardContent className="relative p-6 sm:p-7 flex flex-col h-full">
          {/* Header row: number + icon */}
          <div className="flex items-start justify-between mb-5">
            <span className="text-xs font-mono font-semibold tracking-widest text-muted-foreground/60 group-hover:text-fuchsia-500/70 dark:group-hover:text-fuchsia-300/70 transition-colors duration-300">
              {number}
            </span>
            <motion.div
              className="h-10 w-10 rounded-xl bg-foreground/8 border border-foreground/10 backdrop-blur flex items-center justify-center group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-500/30 transition-all duration-300"
              whileHover={{ rotate: 6, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="h-4.5 w-4.5 text-foreground/70 group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold tracking-tight leading-snug mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {description}
          </p>

          {/* Capability bullets */}
          <ul className="space-y-1.5 mb-6 flex-1" aria-label={`${title} capabilities`}>
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-foreground/70">
                <span
                  className="h-1 w-1 rounded-full bg-fuchsia-500/50 dark:bg-fuchsia-400/50 flex-shrink-0"
                  aria-hidden
                />
                {b}
              </li>
            ))}
          </ul>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-background/60 border border-foreground/10 text-foreground/80 text-xs"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
