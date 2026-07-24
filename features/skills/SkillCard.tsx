import type { SkillGroup } from '@/data/skills'

// Each card gets a unique accent color based on the group name
const GROUP_ACCENT: Record<string, { stripe: string; icon: string; ring: string; count: string }> = {
  Languages:                    { stripe: 'from-amber-400 via-orange-400 to-red-400',           icon: 'bg-amber-500/10 text-amber-500 dark:text-amber-300 border-amber-500/20',         ring: 'hover:border-amber-500/30',    count: 'bg-amber-500/10 text-amber-600 dark:text-amber-300'     },
  Frontend:                     { stripe: 'from-cyan-400 via-blue-400 to-violet-400',           icon: 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-300 border-cyan-500/20',             ring: 'hover:border-cyan-500/30',     count: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300'       },
  Backend:                      { stripe: 'from-emerald-400 via-teal-400 to-cyan-400',          icon: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-300 border-emerald-500/20', ring: 'hover:border-emerald-500/30',  count: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300' },
  Databases:                    { stripe: 'from-blue-400 via-indigo-400 to-purple-400',         icon: 'bg-blue-500/10 text-blue-500 dark:text-blue-300 border-blue-500/20',             ring: 'hover:border-blue-500/30',     count: 'bg-blue-500/10 text-blue-600 dark:text-blue-300'       },
  'DevOps & Cloud':             { stripe: 'from-violet-400 via-fuchsia-400 to-pink-400',        icon: 'bg-violet-500/10 text-violet-500 dark:text-violet-300 border-violet-500/20',     ring: 'hover:border-violet-500/30',   count: 'bg-violet-500/10 text-violet-600 dark:text-violet-300' },
  Testing:                      { stripe: 'from-rose-400 via-pink-400 to-fuchsia-400',          icon: 'bg-rose-500/10 text-rose-500 dark:text-rose-300 border-rose-500/20',             ring: 'hover:border-rose-500/30',     count: 'bg-rose-500/10 text-rose-600 dark:text-rose-300'       },
  'APIs & Authentication':      { stripe: 'from-sky-400 via-cyan-400 to-teal-400',              icon: 'bg-sky-500/10 text-sky-500 dark:text-sky-300 border-sky-500/20',                 ring: 'hover:border-sky-500/30',      count: 'bg-sky-500/10 text-sky-600 dark:text-sky-300'         },
  Payments:                     { stripe: 'from-green-400 via-emerald-400 to-teal-400',         icon: 'bg-green-500/10 text-green-500 dark:text-green-300 border-green-500/20',         ring: 'hover:border-green-500/30',    count: 'bg-green-500/10 text-green-600 dark:text-green-300'   },
  'Performance & Optimization': { stripe: 'from-orange-400 via-amber-400 to-yellow-400',       icon: 'bg-orange-500/10 text-orange-500 dark:text-orange-300 border-orange-500/20',     ring: 'hover:border-orange-500/30',   count: 'bg-orange-500/10 text-orange-600 dark:text-orange-300' },
  Methodologies:                { stripe: 'from-fuchsia-400 via-purple-400 to-indigo-400',      icon: 'bg-fuchsia-500/10 text-fuchsia-500 dark:text-fuchsia-300 border-fuchsia-500/20', ring: 'hover:border-fuchsia-500/30',  count: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300' },
}

const FALLBACK_ACCENT = {
  stripe: 'from-violet-400 via-fuchsia-400 to-cyan-400',
  icon:   'bg-fuchsia-500/10 text-fuchsia-500 dark:text-fuchsia-300 border-fuchsia-500/20',
  ring:   'hover:border-fuchsia-500/30',
  count:  'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300',
}

export function SkillCard({ group, icon: Icon, items }: SkillGroup) {
  const accent = GROUP_ACCENT[group] ?? FALLBACK_ACCENT

  return (
    <div
      className={`group relative h-full rounded-2xl border border-foreground/10 bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.ring}`}
    >
      {/* Gradient top stripe */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.stripe}`} />

      <div className="p-6 flex flex-col h-full gap-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Icon bubble */}
            <div className={`h-10 w-10 rounded-xl border flex items-center justify-center shrink-0 ${accent.icon}`}>
              <Icon className="h-[18px] w-[18px]" />
            </div>
            <h3 className="font-semibold text-foreground text-[0.95rem] leading-tight">{group}</h3>
          </div>

          {/* Item count badge */}
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${accent.count}`}>
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
              className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium bg-muted border border-foreground/8 text-foreground/75 hover:bg-muted-foreground/20 hover:text-foreground transition-colors duration-150 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}