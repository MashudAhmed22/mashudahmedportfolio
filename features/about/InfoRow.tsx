import { ComponentType } from 'react'

type InfoRowProps = {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}

export function InfoRow({ icon: Icon, label, value, href }: InfoRowProps) {
  const Wrap = href ? 'a' : 'div'
  return (
    <Wrap
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="flex items-center gap-3.5 group"
    >
      {/* Icon bubble */}
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-foreground/8 to-foreground/4 border border-foreground/10 flex items-center justify-center shrink-0 group-hover:border-fuchsia-500/40 group-hover:from-fuchsia-500/10 group-hover:to-violet-500/5 transition-all duration-200">
        <Icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition-colors duration-200" />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-medium mb-0.5">
          {label}
        </div>
        <div className="text-sm text-foreground/80 truncate group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition-colors duration-200">
          {value}
        </div>
      </div>

      {/* External link arrow */}
      {href && (
        <svg
          className="h-3 w-3 text-muted-foreground/30 group-hover:text-fuchsia-400 shrink-0 transition-colors duration-200 -translate-x-1 group-hover:translate-x-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Wrap>
  )
}