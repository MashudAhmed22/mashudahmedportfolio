'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS } from '@/data/skills'
import type { SkillGroup } from '@/data/skills'

/* ── Per-group colour tokens ──────────────────────────────────────── */
const GROUP_TOKENS: Record<
  string,
  {
    tab: string          // active tab bg + text
    pill: string         // pill bg + border + text
    glow: string         // subtle section glow
    icon: string         // icon wrapper
    bar: string          // gradient for the decorative bar
  }
> = {
  Languages:                    { tab: 'bg-amber-500/15 text-amber-400 border-amber-500/40',   pill: 'bg-amber-500/8 border-amber-500/20 text-amber-400/90 hover:bg-amber-500/20 hover:border-amber-500/40',    glow: 'from-amber-500/6',   icon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',  bar: 'from-amber-400 via-orange-400 to-red-400'       },
  Frontend:                     { tab: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40',     pill: 'bg-cyan-500/8 border-cyan-500/20 text-cyan-400/90 hover:bg-cyan-500/20 hover:border-cyan-500/40',        glow: 'from-cyan-500/6',    icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',    bar: 'from-cyan-400 via-blue-400 to-violet-400'       },
  Backend:                      { tab: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40', pill: 'bg-emerald-500/8 border-emerald-500/20 text-emerald-400/90 hover:bg-emerald-500/20 hover:border-emerald-500/40', glow: 'from-emerald-500/6', icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', bar: 'from-emerald-400 via-teal-400 to-cyan-400' },
  Databases:                    { tab: 'bg-blue-500/15 text-blue-400 border-blue-500/40',     pill: 'bg-blue-500/8 border-blue-500/20 text-blue-400/90 hover:bg-blue-500/20 hover:border-blue-500/40',        glow: 'from-blue-500/6',    icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',    bar: 'from-blue-400 via-indigo-400 to-purple-400'     },
  'DevOps & Cloud':             { tab: 'bg-violet-500/15 text-violet-400 border-violet-500/40', pill: 'bg-violet-500/8 border-violet-500/20 text-violet-400/90 hover:bg-violet-500/20 hover:border-violet-500/40', glow: 'from-violet-500/6',  icon: 'bg-violet-500/10 text-violet-400 border-violet-500/20', bar: 'from-violet-400 via-fuchsia-400 to-pink-400' },
  Testing:                      { tab: 'bg-rose-500/15 text-rose-400 border-rose-500/40',     pill: 'bg-rose-500/8 border-rose-500/20 text-rose-400/90 hover:bg-rose-500/20 hover:border-rose-500/40',        glow: 'from-rose-500/6',    icon: 'bg-rose-500/10 text-rose-400 border-rose-500/20',    bar: 'from-rose-400 via-pink-400 to-fuchsia-400'      },
  'APIs & Authentication':      { tab: 'bg-sky-500/15 text-sky-400 border-sky-500/40',       pill: 'bg-sky-500/8 border-sky-500/20 text-sky-400/90 hover:bg-sky-500/20 hover:border-sky-500/40',            glow: 'from-sky-500/6',     icon: 'bg-sky-500/10 text-sky-400 border-sky-500/20',      bar: 'from-sky-400 via-cyan-400 to-teal-400'          },
  Payments:                     { tab: 'bg-green-500/15 text-green-400 border-green-500/40',  pill: 'bg-green-500/8 border-green-500/20 text-green-400/90 hover:bg-green-500/20 hover:border-green-500/40',   glow: 'from-green-500/6',   icon: 'bg-green-500/10 text-green-400 border-green-500/20', bar: 'from-green-400 via-emerald-400 to-teal-400'     },
  'Performance & Optimization': { tab: 'bg-orange-500/15 text-orange-400 border-orange-500/40', pill: 'bg-orange-500/8 border-orange-500/20 text-orange-400/90 hover:bg-orange-500/20 hover:border-orange-500/40', glow: 'from-orange-500/6', icon: 'bg-orange-500/10 text-orange-400 border-orange-500/20', bar: 'from-orange-400 via-amber-400 to-yellow-400' },
  Methodologies:                { tab: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/40', pill: 'bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-400/90 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/40', glow: 'from-fuchsia-500/6', icon: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20', bar: 'from-fuchsia-400 via-purple-400 to-indigo-400' },
}

const FALLBACK = {
  tab:  'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/40',
  pill: 'bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-400/90 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/40',
  glow: 'from-fuchsia-500/6',
  icon: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
  bar:  'from-fuchsia-400 via-purple-400 to-indigo-400',
}

const totalSkills = SKILLS.reduce((acc, g) => acc + g.items.length, 0)

/* ── Pill animation variants ──────────────────────────────────────── */
const pillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.28, ease: 'easeOut' as const },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
}

const contentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export function SkillCard({ group, icon: Icon, items }: SkillGroup) {
  const tokens = GROUP_TOKENS[group] ?? FALLBACK

  return (
    <div
      className={`
        group relative rounded-2xl border border-foreground/10 bg-card
        overflow-hidden transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-foreground/20
      `}
    >
      {/* Top gradient stripe */}
      <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${tokens.bar}`} aria-hidden />

      {/* Ambient glow behind card on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tokens.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden
      />

      <div className="relative p-5 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-9 w-9 rounded-xl border flex items-center justify-center shrink-0 ${tokens.icon}`}>
              <Icon className="h-4 w-4" />
            </div>
            <span className="font-semibold text-sm text-foreground/90">{group}</span>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tokens.tab}`}>
            {items.length}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />

        {/* Skill pills */}
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <span
              key={item}
              className={`
                inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium
                border transition-all duration-200 cursor-default select-none
                ${tokens.pill}
              `}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main interactive Skills showcase ────────────────────────────── */
export function SkillsShowcase() {
  const [active, setActive] = useState<string>(SKILLS[0].group)

  const activeGroup = SKILLS.find((s) => s.group === active) as SkillGroup
  const tokens = GROUP_TOKENS[active] ?? FALLBACK
  const Icon = activeGroup.icon

  return (
    <div className="relative">
      {/* Stat strip */}
      <div className="flex flex-wrap gap-6 mb-10">
        {[
          { label: 'Total skills', value: totalSkills },
          { label: 'Categories', value: SKILLS.length },
          { label: 'Years building', value: '3+' },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold tracking-tight text-foreground">{value}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* Layout: tabs left, content right */}
      <div className="flex flex-col lg:flex-row gap-4">

        {/* ── Left: category tabs ─────────────────────────────────── */}
        <nav
          aria-label="Skill categories"
          className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 lg:w-52 shrink-0 scrollbar-hide"
        >
          {SKILLS.map((s) => {
            const t = GROUP_TOKENS[s.group] ?? FALLBACK
            const isActive = s.group === active
            return (
              <button
                key={s.group}
                onClick={() => setActive(s.group)}
                className={`
                  relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-200 whitespace-nowrap shrink-0 text-left
                  border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  ${isActive
                    ? `${t.tab} shadow-sm`
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  }
                `}
                aria-pressed={isActive}
              >
                {/* Active indicator bar (left, on desktop) */}
                {isActive && (
                  <motion.div
                    layoutId="active-bar"
                    className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-gradient-to-b ${t.bar}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <s.icon className="h-3.5 w-3.5 shrink-0" />
                {s.group}
                <span className={`ml-auto hidden lg:inline-flex text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-background/30' : 'bg-muted text-muted-foreground'}`}>
                  {s.items.length}
                </span>
              </button>
            )
          })}
        </nav>

        {/* ── Right: skill content panel ──────────────────────────── */}
        <div className="flex-1 min-w-0">
          <div
            className={`
              relative rounded-2xl border border-foreground/10 bg-card
              overflow-hidden transition-colors duration-300
              hover:border-foreground/20
            `}
          >
            {/* Top stripe */}
            <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${tokens.bar}`} aria-hidden />

            {/* Ambient glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tokens.glow} to-transparent`} aria-hidden />

            <div className="relative p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Panel header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`h-11 w-11 rounded-xl border flex items-center justify-center ${tokens.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">{active}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {activeGroup.items.length} {activeGroup.items.length === 1 ? 'skill' : 'skills'}
                      </p>
                    </div>
                  </div>

                  {/* Animated skill pills */}
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {activeGroup.items.map((item, i) => (
                        <motion.span
                          key={item}
                          custom={i}
                          variants={pillVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className={`
                            inline-flex items-center px-3.5 py-1.5 rounded-xl text-[13px] font-medium
                            border transition-all duration-200 cursor-default select-none
                            ${tokens.pill}
                          `}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}