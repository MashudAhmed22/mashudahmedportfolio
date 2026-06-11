import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { PROFILE } from '@/data/profile'
import { InfoRow } from './InfoRow'
import { FiGithub } from 'react-icons/fi';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <SectionHeader kicker="About" title="A developer who cares about the details." />
        <div className="grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2" delay={0.05}>
            <Card className="bg-foreground/[0.03] border-foreground/10 h-full">
              <CardContent className="p-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a Full Stack Developer based in <span className="text-foreground">Bengaluru, India</span>, with 2+
                  years building production apps for startups and remote teams across India and the Middle East.
                </p>
                <p>
                  My sweet spot is the modern JS stack —{' '}
                  <span className="text-foreground">React, Next.js, TypeScript, Node.js</span> — and I also ship
                  cross-platform mobile apps in <span className="text-foreground">React Native</span>. I obsess about
                  clean architecture, reusable components, and that crisp UI feel.
                </p>
                <p>
                  Beyond code, I enjoy turning fuzzy product ideas into shipped features, working closely with
                  designers and PMs to make sure what we build is actually useful.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="bg-foreground/[0.03] border-foreground/10 h-full">
              <CardContent className="p-8 space-y-4 text-sm">
                <InfoRow icon={MapPin} label="Location" value={PROFILE.location} />
                <InfoRow icon={Mail} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
                <InfoRow icon={Phone} label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone}`} />
                <InfoRow icon={FaLinkedin} label="LinkedIn" value="linkedin.com/in/mashudahmed" href={PROFILE.linkedin} />
                <InfoRow icon={FiGithub} label="GitHub" value="github.com/mashudahmed" href={PROFILE.github} />
                <Separator className="bg-foreground/5" />
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" /> Open to full-time &amp; freelance
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}