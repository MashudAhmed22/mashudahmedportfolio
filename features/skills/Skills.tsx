'use client'

import { SectionHeader } from '@/components/SectionHeader'
import { SkillsShowcase } from './SkillCard'

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <SectionHeader
          kicker="Skills"
          title="Tools I build with."
          description="A curated stack I've used in production across the last 3+ years."
        />
        <SkillsShowcase />
      </div>
    </section>
  )
}