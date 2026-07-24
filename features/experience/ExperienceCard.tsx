import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/Reveal'

import type { ExperienceItem, AccentColor } from '@/data/experience'

const accentMap: Record<AccentColor, {
  dot: string
  text: string
  badge: string
  border: string
  bullet: string
  line: string
}> = {
  cyan: {
    dot: 'bg-cyan-400 shadow-cyan-400/60 ring-cyan-400/20',
    text: 'text-cyan-500 dark:text-cyan-300',
    badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-200',
    border: 'hover:border-cyan-500/40',
    bullet: 'bg-cyan-400',
    line: 'bg-gradient-to-b from-cyan-400/50 to-cyan-400/10',
  },
  violet: {
    dot: 'bg-violet-400 shadow-violet-400/60 ring-violet-400/20',
    text: 'text-violet-500 dark:text-violet-300',
    badge: 'bg-violet-500/10 border-violet-500/30 text-violet-700 dark:text-violet-200',
    border: 'hover:border-violet-500/40',
    bullet: 'bg-violet-400',
    line: 'bg-gradient-to-b from-violet-400/50 to-violet-400/10',
  },
}

export function ExperienceCard({ item, isLeft, isLast }: { item: ExperienceItem; isLeft: boolean; isLast: boolean }) {
  const a = accentMap[item.accent]
  return (
    <Reveal delay={0.08}>
      <div className="relative md:grid md:grid-cols-2 md:gap-12">

        {/* ── Timeline dot ── */}
        <div className={`absolute md:left-1/2 left-4 -translate-x-1/2 top-6 z-10 h-4 w-4 rounded-full ${a.dot} shadow-[0_0_20px_var(--tw-shadow-color)] ring-8`} />

        {/* ── Connector line: only between cards, never after the last dot ── */}
        {!isLast && (
          <div
            className={`absolute md:left-1/2 left-4 -translate-x-1/2 w-px ${a.line}`}
            style={{ top: '2.25rem', bottom: '-6rem' }}
            aria-hidden
          />
        )}

        <div className={`${
          isLeft
            ? 'md:col-span-1 md:pr-12'
            : 'md:col-start-2 md:pl-12'
        } pl-12`}>
          <Card className={`bg-card border-foreground/10 ${a.border} transition-all duration-300 hover:-translate-y-1`}>
            <CardContent className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">{item.company}</h3>
                <Badge variant="outline" className={`shrink-0 ${a.badge} text-xs font-medium`}>
                  {item.dates}
                </Badge>
              </div>
              <div className={`text-xs uppercase tracking-widest font-semibold mb-5 ${a.text}`}>
                {item.role} · {item.location}
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {item.points.map((p, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full ${a.bullet} shrink-0`} />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-muted border border-foreground/10 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Reveal>
  )
}
