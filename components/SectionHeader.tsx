import { Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

type SectionHeaderProps = {
  kicker: string
  title: string
  description?: string
}

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <Reveal className="max-w-2xl mb-12">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-500 dark:text-fuchsia-300">
        <Sparkles className="h-3.5 w-3.5" /> {kicker}
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground text-base sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}