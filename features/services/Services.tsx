'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/data/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      {/* Ambient background glow matching the Contact section's approach */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
      </div>

      <div className="container">
        <SectionHeader
          kicker="What I Do"
          title="Building products that are fast, usable, and built to last."
          description="From responsive interfaces to production-ready web and mobile applications, I help turn ideas and designs into reliable digital products."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.36}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-muted-foreground text-sm sm:text-base">
              Have a project in mind?
            </p>
            <a href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0 group"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
