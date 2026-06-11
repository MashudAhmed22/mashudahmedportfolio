
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { SKILLS } from '@/data/skills'
import { SkillCard } from './SkillCard'

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <SectionHeader
          kicker="Skills"
          title="Tools I build with."
          description="A curated stack I've used in production across the last 2+ years."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06}>
              <SkillCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}