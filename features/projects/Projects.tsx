import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { PROJECTS } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <SectionHeader
          kicker="Selected Work"
          title="Projects I'm proud of."
          description="A snapshot of recent products I've designed, built and shipped."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}