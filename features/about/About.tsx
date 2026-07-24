'use client'

import { MapPin, Mail, Phone, Code2, Layers, Smartphone } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { PROFILE } from '@/data/profile'
import { InfoRow } from './InfoRow'

const HIGHLIGHTS = [
  { icon: Code2, text: 'Clean architecture & reusable components', color: 'text-fuchsia-500' },
  { icon: Layers, text: 'End-to-end fullstack — UI to cloud infra', color: 'text-cyan-500' },
  { icon: Smartphone, text: 'Cross-platform mobile with React Native', color: 'text-violet-500' },
]

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <SectionHeader kicker="About" title="A developer who cares about the details." />

        <div className="grid lg:grid-cols-3 gap-6 mt-2">

          {/* ── Bio Card ── */}
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="relative h-full rounded-2xl border border-foreground/10 bg-card overflow-hidden">
              {/* top gradient stripe */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

              <div className="p-8 flex flex-col h-full gap-6">
                {/* Paragraphs — flex-1 pushes highlights to bottom */}
                <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
                  <p>
                    I&apos;m a{' '}
                    <span className="text-foreground font-medium">Full Stack Developer</span> based in{' '}
                    <span className="inline-flex items-center gap-1 text-foreground font-medium">
                      <MapPin className="h-3.5 w-3.5 text-fuchsia-500" />
                      Bengaluru, India
                    </span>
                    , with 3+ years building production apps for startups and remote teams across{' '}
                    <span className="text-foreground font-medium">India and the Middle East</span>.
                  </p>
                  <p>
                    My sweet spot is the modern JS stack —{' '}
                    <span className="text-foreground font-medium">React, Next.js, TypeScript, Node.js</span> — and I
                    also ship cross-platform mobile apps in{' '}
                    <span className="text-foreground font-medium">React Native</span>. I obsess about clean
                    architecture, reusable components, and that crisp UI feel.
                  </p>
                  <p>
                    Beyond code, I enjoy turning fuzzy product ideas into shipped features, working closely with
                    designers and PMs to make sure what we build is actually useful.
                  </p>
                </div>

                {/* Highlights — pinned to bottom */}
                <div className="grid sm:grid-cols-3 gap-3 pt-2 border-t border-foreground/6">
                  {HIGHLIGHTS.map(({ icon: Icon, text, color }) => (
                    <div
                      key={text}
                      className="flex items-start gap-2.5 rounded-xl border border-foreground/8 bg-muted px-3.5 py-3"
                    >
                      <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${color}`} />
                      <span className="text-xs text-muted-foreground leading-snug">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Contact Card ── */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-2xl border border-foreground/10 bg-card overflow-hidden flex flex-col">
              {/* top gradient stripe */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 via-fuchsia-500 to-violet-500" />

              <div className="p-8 flex flex-col gap-5 flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Get in touch</p>

                <div className="flex flex-col gap-3.5">
                  <InfoRow icon={MapPin} label="Location" value={PROFILE.location} />
                  <InfoRow icon={Mail} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
                  <InfoRow icon={Phone} label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone}`} />
                  <InfoRow
                    icon={FaLinkedin}
                    label="LinkedIn"
                    value="linkedin.com/in/mashudahmed"
                    href={PROFILE.linkedin}
                  />
                  <InfoRow
                    icon={FiGithub}
                    label="GitHub"
                    value="github.com/mashudahmed"
                    href={PROFILE.github}
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />

                {/* Availability badge */}
                <div className="rounded-xl bg-emerald-500/8 border border-emerald-500/20 px-4 py-3 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                      Open to opportunities
                    </p>
                    <p className="text-[11px] text-emerald-700/70 dark:text-emerald-400/70">
                      Full-time &amp; freelance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}