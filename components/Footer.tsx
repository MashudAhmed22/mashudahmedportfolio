import {  Mail, Phone } from 'lucide-react'
import { PROFILE } from '@/data/profile'
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
export function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Mashud Ahmed. Built with Next.js &amp; Tailwind.</div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition" aria-label="GitHub">
            <FiGithub className="h-4 w-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition" aria-label="LinkedIn">
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground transition" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href={`tel:${PROFILE.phone}`} className="hover:text-foreground transition" aria-label="Phone">
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}