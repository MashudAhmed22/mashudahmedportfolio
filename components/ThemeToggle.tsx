'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Avoid hydration mismatch by only rendering the icon after mounting on client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder button with the same dimensions to avoid layout shift
    return (
      <div className="relative h-9 w-9 inline-flex items-center justify-center rounded-md border border-foreground/10 bg-muted transition" aria-hidden="true" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative h-9 w-9 inline-flex items-center justify-center rounded-md border border-foreground/10 bg-muted hover:bg-muted-foreground/10 transition"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  )
}