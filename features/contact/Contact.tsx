'use client'
import { Mail, Phone } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { PROFILE } from '@/data/profile'
import { ContactForm } from './ContactForm'
import { FiGithub } from 'react-icons/fi';

const CONTACT_LINKS = [
  { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mashudahmed', href: PROFILE.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/mashudahmed', href: PROFILE.github },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-[radial-gradient(ellipse_at_center,_rgba(217,70,239,0.15),_transparent_70%)]" />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeader
              kicker="Get in touch"
              title="Let's build something great together."
              description="Have a role, a project, or just want to say hi? Drop a message — I usually reply within a day."
            />
            <div className="space-y-3">
              {CONTACT_LINKS.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target={r.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-11 w-11 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-500/30 transition">
                    <r.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                    <div className="font-medium group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition">{r.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}