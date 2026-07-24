import Link from 'next/link'
import { POSTS } from '@/data/posts'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'

export const metadata = {
  title: 'Writings — Mashud Ahmed',
  description: 'Notes on building web & mobile products with React, Next.js and React Native.',
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Notes on building.</h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl">Lessons from shipping web &amp; mobile products with React, Next.js and React Native.</p>

        <div className="mt-12 space-y-4">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <article className="relative overflow-hidden rounded-xl border border-foreground/10 bg-card p-6 hover:border-fuchsia-500/40 transition-all hover:-translate-y-0.5">
                <div className={`absolute inset-0 bg-linear-to-br ${p.cover} opacity-0 group-hover:opacity-100 transition`} />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {p.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-xl sm:text-2xl font-semibold group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition">{p.title}</h2>
                  <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-muted border border-foreground/10">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}