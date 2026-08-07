import { Hero } from '@/features/hero/Hero'
import { About } from '@/features/about/About'
import { Skills } from '@/features/skills/Skills'
import { Experience } from '@/features/experience/Experience'
import { Projects } from '@/features/projects/Projects'
import { Services } from '@/features/services/Services'
import { Testimonials } from '@/features/testimonials/Testimonials'
import { Contact } from '@/features/contact/Contact'
import { Navbar } from '@/components/Navbar'
import { ScrollProgress } from '@/components/ScrollProgress'
import { EducationCerts } from '@/features/educationCerts/EducationCerts'
import { Writings } from '@/features/writings/Writings'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-fuchsia-500/30">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <EducationCerts />
      <Writings />
      <Contact />
    </main>
  )
}

