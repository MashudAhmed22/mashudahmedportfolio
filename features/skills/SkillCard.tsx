import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { SkillGroup } from '@/data/skills'
export function SkillCard({ group, icon: Icon, items }: SkillGroup) {
  return (
    <Card className="group bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-foreground/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-fuchsia-500 dark:text-fuchsia-300" />
          </div>
          <CardTitle className="text-lg">{group}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="bg-foreground/5 border border-foreground/10 text-foreground/90 hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30 transition"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}