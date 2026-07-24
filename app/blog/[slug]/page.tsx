import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS, POST_BODY } from '@/data/posts'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = POSTS.find((p) => p.slug === resolvedParams.slug)
  if (!post) return { title: 'Not found' }
  return { title: `${post.title} — Mashud Ahmed`, description: post.excerpt }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = POSTS.find((p) => p.slug === resolvedParams.slug)
  if (!post) return notFound()
  const body = POST_BODY[post.slug as keyof typeof POST_BODY] || []

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl pt-28 pb-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</span>
        </div>

        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-muted border border-foreground/10">{t}</span>
          ))}
        </div>

        <div className="mt-10 space-y-5">
          {body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i} className="text-2xl font-semibold mt-8 tracking-tight">{block.text}</h2>
            return <p key={i} className="text-base sm:text-lg leading-relaxed text-foreground/85">{block.text}</p>
          })}
        </div>

        <div className="mt-14 pt-8 border-t border-foreground/10 flex items-center justify-between text-sm">
          <Link href="/blog" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Back to writings</Link>
          <Link href="/#contact" className="text-fuchsia-500 dark:text-fuchsia-300 hover:underline">Have feedback? Say hi →</Link>
        </div>
      </div>
    </main>
  )
}