'use client'

import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { NAV } from '@/data/nav'
import { RESUME_URL } from '@/data/profile'
import { useScrolled } from '@/hooks/useScrolled'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-background/70 border-b border-foreground/5' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-fuchsia-500/20">
            M
          </div>
          <span className="font-semibold tracking-tight hidden sm:block">
            Mashud<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-md hover:bg-foreground/5"
            >
              {n.label}
            </a>
          ))}
          <div className="mx-2 h-6 w-px bg-foreground/10" />
          <ThemeToggle />
          <a href={RESUME_URL} target="_blank" rel="noreferrer" download className="ml-2">
            <Button size="sm" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0">
              <Download className="h-4 w-4 mr-1.5" /> Resume
            </Button>
          </a>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 rounded-md hover:bg-foreground/5" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-foreground/5 bg-background/95 backdrop-blur-xl">
          <div className="container py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-md hover:bg-foreground/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              download
              className="px-3 py-2 text-sm rounded-md hover:bg-foreground/5 flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}