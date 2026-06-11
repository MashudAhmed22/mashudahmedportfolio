import { Reveal } from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { POSTS } from '@/lib/posts'
export function Writings() {
  return (
    <section id= "writings" className= "py-24 relative ">
      <div className= "container ">
        <div className= "flex items-end justify-between flex-wrap gap-4 mb-12 ">
          <div className= "max-w-2xl ">
            <div className= "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-500 dark:text-fuchsia-300 ">
              <BookOpen className= "h-3.5 w-3.5 " /> Writings
            </div>
            <h2 className= "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ">Notes on building.</h2>
            <p className= "mt-3 text-muted-foreground text-base sm:text-lg ">Short, practical posts on the things I learn while shipping.</p>
          </div>
          <Link href= "/blog " className= "text-sm text-fuchsia-500 dark:text-fuchsia-300 hover:underline inline-flex items-center gap-1 ">View all posts <ArrowRight className= "h-4 w-4 " /></Link>
        </div>
        <div className= "grid md:grid-cols-3 gap-6 ">
          {POSTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/blog/${p.slug}`} className= "group block h-full ">
                <Card className= "relative overflow-hidden bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 h-full ">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.cover} opacity-0 group-hover:opacity-100 transition`} />
                  <div className= "relative ">
                    <CardHeader>
                      <div className= "flex items-center gap-3 text-xs text-muted-foreground ">
                        <span className= "inline-flex items-center gap-1.5 "><CalendarDays className= "h-3 w-3 " /> {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>·</span>
                        <span className= "inline-flex items-center gap-1.5 "><Clock className= "h-3 w-3 " /> {p.readTime}</span>
                      </div>
                      <CardTitle className= "mt-2 text-lg leading-snug group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition ">{p.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className= "text-sm text-muted-foreground leading-relaxed ">{p.excerpt}</p>
                      <div className= "mt-4 flex flex-wrap gap-2 ">
                        {p.tags.map((t) => <span key={t} className= "px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10 ">{t}</span>)}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
