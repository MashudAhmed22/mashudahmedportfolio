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
          <div className="space-y-12 md:space-y-20">
            {EXPERIENCE.map((e, idx) => (
              <ExperienceCard
                key={e.company}
                item={e}
                isLeft={idx % 2 === 0}
                isLast={idx === EXPERIENCE.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}