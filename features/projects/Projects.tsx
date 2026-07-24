'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { PROJECTS } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3)
  const hasMore = PROJECTS.length > 3

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <SectionHeader
          kicker="Selected Work"
          title="Projects I'm proud of."
          description="A snapshot of recent products I've designed, built and shipped."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
        
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="bg-muted hover:bg-muted-foreground/10 border-foreground/10"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
              ) : (
                <>Show More <ChevronDown className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}