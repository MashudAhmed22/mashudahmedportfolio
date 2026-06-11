import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

import type { Project } from '@/data/projects'

export function ProjectCard({ name, tagline, description, tech, icon: Icon, accent }: Project) {
  return (
    <Card className="group relative overflow-hidden bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 h-full">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60 group-hover:opacity-100 transition`} aria-hidden />
      <div className="relative">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="h-11 w-11 rounded-xl bg-foreground/10 border border-foreground/10 backdrop-blur flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition" />
          </div>
          <CardTitle className="mt-4 text-xl">{name}</CardTitle>
          <CardDescription className="text-foreground/70">{tagline}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="bg-background/60 border border-foreground/10 text-foreground/90">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}