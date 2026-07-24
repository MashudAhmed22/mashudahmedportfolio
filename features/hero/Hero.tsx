'use client'

import { motion } from 'framer-motion'
import { Download, Send, Mail, ChevronDown } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button'
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-150 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_60%)]" />
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,127,127,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.06)_1px,transparent_1px)] bg-size:[48px_48px] mask-[radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-4">
        {/* Left: copy */}
        <motion.div
          className="lg:col-span-7 flex flex-col"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-foreground/10 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Hi, I&apos;m{' '}
            <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Mashud Ahmed
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-xl sm:text-2xl text-muted-foreground font-medium"
          >
            I build fast, scalable{' '}
            <span className="text-foreground font-semibold">web &amp; mobile</span> apps.
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {PROFILE.summary}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" download>
              <Button
                size="lg"
                className="bg-linear-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0 shadow-lg shadow-fuchsia-500/25 transition-opacity"
              >
                <Download className="h-4 w-4 mr-2" /> Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/10 bg-muted hover:bg-muted-foreground/10"
              >
                <Send className="h-4 w-4 mr-2" /> Get in touch
              </Button>
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-muted hover:bg-muted-foreground/10 hover:border-foreground/20 transition-all"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-muted hover:bg-muted-foreground/10 hover:border-foreground/20 transition-all"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-muted hover:bg-muted-foreground/10 hover:border-foreground/20 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
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
            <div className="absolute -inset-4 bg-linear-to-br from-violet-500/30 via-fuchsia-500/30 to-cyan-400/30 blur-2xl rounded-3xl" />
            <motion.div
              className="relative rounded-2xl border border-foreground/10 bg-card/60 backdrop-blur-2xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Subtle glass reflection */}
              <div className="absolute inset-0 bg-linear-to-tr from-foreground/5 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              {/* Window Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-foreground/5 relative z-10">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/90 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/90 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/90 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-muted border border-foreground/10 text-[11px] font-medium text-muted-foreground font-mono shadow-sm">
                  <FiGithub className="w-3.5 h-3.5" /> profile.ts
                </div>
              </div>

              {/* Code Payload */}
              <pre className="text-sm leading-[1.8] font-mono relative z-10 overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">export const</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">mashud</span> = {'{'}{'\n'}
                  {'  '}role: <span className="text-emerald-600 dark:text-emerald-400">&apos;Full Stack Developer&apos;</span>,{'\n'}
                  {'  '}stack: [<span className="text-emerald-600 dark:text-emerald-400">&apos;React&apos;</span>, <span className="text-emerald-600 dark:text-emerald-400">&apos;Next.js&apos;</span>,{'\n'}
                  {'          '}<span className="text-emerald-600 dark:text-emerald-400">&apos;Node.js&apos;</span>, <span className="text-emerald-600 dark:text-emerald-400">&apos;React Native&apos;</span>],{'\n'}
                  {'  '}location: <span className="text-emerald-600 dark:text-emerald-400">&apos;Bengaluru, IN&apos;</span>,{'\n'}
                  {'  '}hireable: <span className="text-amber-600 dark:text-amber-400 font-medium">true</span>,{'\n'}
                  {'}'};
                </code>
              </pre>
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