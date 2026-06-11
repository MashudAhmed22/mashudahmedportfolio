import { SectionHeader } from '@/components/SectionHeader'
import { EXPERIENCE } from '@/data/experience'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <SectionHeader
          kicker="Experience"
          title="Where I've been shipping."
          description="My journey building products across India and the Middle East — newest first."
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute md:left-1/2 left-4 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-fuchsia-500/50 via-foreground/10 to-transparent" aria-hidden />
          <div className="space-y-12 md:space-y-20">
            {EXPERIENCE.map((e, idx) => (
              <ExperienceCard key={e.company} item={e} isLeft={idx % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}