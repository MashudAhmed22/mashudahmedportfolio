import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { TESTIMONIALS } from '@/data/testimonials'
import { TestimonialCard } from './TestimonialCard'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container">
        <SectionHeader
          kicker="Kind Words"
          title="What people say."
          description="Feedback from the teams and people I've worked with."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}