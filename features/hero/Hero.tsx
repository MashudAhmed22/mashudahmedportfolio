'use client'

import { motion } from 'framer-motion'
import { Download, Send, Mail, ChevronDown } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROFILE, RESUME_URL } from '@/data/profile'
import { fadeUp, stagger } from '@/utils/motion'
import { useMouseSpotlight } from '@/hooks/useMouseSpotlight'
import { OrbitRing } from './OrbitRing'
import { HeroStats } from './HeroStats'
import { FiGithub } from 'react-icons/fi';
export function Hero() {
  const { spotlightBg, onMouseMove, onMouseLeave } = useMouseSpotlight()

  return (
    <section
      id="top"
      className="relative pt-32 pb-24 overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute inset-0" style={{ background: spotlightBg }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-150 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18),_transparent_60%)]" />
        <motion.div
          className="absolute top-32 left-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,127,127,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.06)_1px,transparent_1px)] bg-size:[48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: copy */}
        <motion.div className="lg:col-span-7" variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I&apos;m{' '}
            <span className=" from-violet-500 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Mashud Ahmed
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-2xl sm:text-3xl text-muted-foreground font-medium">
            I build fast, scalable <span className="text-foreground">web &amp; mobile</span> apps.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {PROFILE.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" download>
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0 shadow-lg shadow-fuchsia-500/25">
                <Download className="h-4 w-4 mr-2" /> Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-foreground/10 bg-foreground/5 hover:bg-foreground/10">
                <Send className="h-4 w-4 mr-2" /> Get in touch
              </Button>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition">
              <FiGithub className="h-4 w-4" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition">
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition">
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <HeroStats />
        </motion.div>

        {/* Right: code card */}
        <motion.div
          className="lg:col-span-5 relative"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <OrbitRing />
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-cyan-400/30 blur-2xl rounded-3xl" />
            <motion.div
              className="relative rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 to-foreground/[0.02] backdrop-blur-xl p-6 shadow-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs text-muted-foreground ml-auto">mashud.dev — about.tsx</span>
              </div>
              <pre className="text-sm leading-relaxed font-mono text-muted-foreground overflow-x-auto">
                <code>
                  <span className="text-fuchsia-500 dark:text-fuchsia-400">const</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-300">mashud</span> = {'{'}{'\n'}
                  {'  '}name: <span className="text-emerald-600 dark:text-emerald-300">&apos;Mashud Ahmed&apos;</span>,{'\n'}
                  {'  '}role: <span className="text-emerald-600 dark:text-emerald-300">&apos;Full Stack Dev&apos;</span>,{'\n'}
                  {'  '}stack: [<span className="text-emerald-600 dark:text-emerald-300">&apos;React&apos;</span>, <span className="text-emerald-600 dark:text-emerald-300">&apos;Next.js&apos;</span>,{'\n'}
                  {'          '}<span className="text-emerald-600 dark:text-emerald-300">&apos;Node&apos;</span>, <span className="text-emerald-600 dark:text-emerald-300">&apos;RN&apos;</span>],{'\n'}
                  {'  '}location: <span className="text-emerald-600 dark:text-emerald-300">&apos;Bengaluru, IN&apos;</span>,{'\n'}
                  {'  '}open_to_work: <span className="text-amber-600 dark:text-amber-300">true</span>,{'\n'}
                  {'}'};
                </code>
              </pre>
              <div className="mt-5 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((t) => (
                  <Badge key={t} variant="secondary" className="bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-16">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition flex flex-col items-center gap-1 text-xs">
          Scroll <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}