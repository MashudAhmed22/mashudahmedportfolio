import { GraduationCap, Globe, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  icon: LucideIcon
  accent: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Workforce360 LMS',
    tagline: 'Role-based Learning Management System',
    description:
      'Led frontend of a multi-role LMS (Admin, Instructor, Learner) with a scalable feature-based architecture. Integrated REST APIs via RTK Query with caching, auth flows and centralised error handling. Built complex modules — course management, learning paths, user management, analytics.',
    tech: ['React', 'TypeScript', 'RTK Query', 'REST APIs', 'Tailwind'],
    icon: GraduationCap,
    accent: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    name: 'TechNetME Website',
    tagline: 'High-performance corporate site',
    description:
      "Built the company's main website using Next.js — SEO-optimised, fully responsive, with secure API routes powering contact forms and email submissions.",
    tech: ['Next.js', 'Tailwind CSS', 'API Routes'],
    icon: Globe,
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    name: 'Car Washer Mobile App',
    tagline: 'Schedule. Track. Pay. On the go.',
    description:
      'A React Native app to schedule, track and manage car-washing services. Firebase Auth, real-time booking, status updates, SQLite offline data. Integrated Razorpay for secure payments.',
    tech: ['React Native', 'Firebase Auth', 'SQLite', 'Razorpay'],
    icon: Smartphone,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
]