import {
  Globe,
  Smartphone,
  Plug,
  Layers,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  number: string
  title: string
  description: string
  tech: string[]
  bullets: string[]
  icon: LucideIcon
  accent: string
  glowColor: string
}

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Modern, responsive web applications built with React and Next.js, with reusable components and production-ready architecture.',
    tech: ['React.js', 'Next.js', 'TypeScript'],
    bullets: [
      'Responsive web applications',
      'Dashboards and admin panels',
      'Reusable component systems',
      'Performance-focused frontend development',
    ],
    icon: Globe,
    accent: 'from-violet-500/20 to-fuchsia-500/20',
    glowColor: 'group-hover:shadow-violet-500/10',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications built with React Native, focused on smooth user experiences and reliable application performance.',
    tech: ['React Native', 'JavaScript', 'SQLite'],
    bullets: [
      'Android & iOS applications',
      'Responsive mobile UI',
      'Local data persistence',
      'API-driven mobile experiences',
    ],
    icon: Smartphone,
    accent: 'from-cyan-500/20 to-blue-500/20',
    glowColor: 'group-hover:shadow-cyan-500/10',
  },
  {
    number: '03',
    title: 'API Integration',
    description:
      'Reliable frontend-to-backend integrations that connect applications with secure and scalable APIs and third-party services.',
    tech: ['REST APIs', 'RTK Query', 'Node.js'],
    bullets: [
      'REST API integration',
      'Authentication flows',
      'Data fetching and caching',
      'Third-party API integrations',
    ],
    icon: Plug,
    accent: 'from-emerald-500/20 to-teal-500/20',
    glowColor: 'group-hover:shadow-emerald-500/10',
  },
  {
    number: '04',
    title: 'UI Development & Enhancement',
    description:
      'Clean, responsive interfaces implemented from designs or improved from existing applications with attention to usability and consistency.',
    tech: ['TypeScript', 'Tailwind CSS', 'Framer Motion'],
    bullets: [
      'Figma/design to code',
      'Responsive UI implementation',
      'Existing UI improvements',
      'Animations and interactions',
    ],
    icon: Layers,
    accent: 'from-amber-500/20 to-orange-500/20',
    glowColor: 'group-hover:shadow-amber-500/10',
  },
]
