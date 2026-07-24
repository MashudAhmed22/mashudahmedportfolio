import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

export function TestimonialCard({ name, role, company, quote, initials, accent }: Testimonial) {
  return (
    <Card className="relative h-full bg-card border-foreground/10 hover:border-fuchsia-500/30 transition">
      <CardContent className="p-6 sm:p-7">
        <Quote className="h-7 w-7 text-fuchsia-500/40 dark:text-fuchsia-300/40 mb-4" />
        <p className="text-foreground/90 leading-relaxed">{quote}</p>
        <div className="mt-6 flex items-center gap-3 pt-5 border-t border-foreground/10">
          <div className={`h-11 w-11 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
            {initials}
          </div>
          <div>
            <div className="font-semibold leading-tight">{name}</div>
            <div className="text-xs text-muted-foreground">{role} · {company}</div>
          </div>
          <div className="ml-auto flex gap-0.5">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
