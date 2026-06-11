import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  CreditCard,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type SkillGroup = {
  group: string
  icon: LucideIcon
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  { group: 'Languages', icon: Code2, items: ['JavaScript', 'TypeScript'] },
  {
    group: 'Frontend',
    icon: Layers,
    items: [
      'React.js', 'Next.js', 'React Native', 'Vue.js', 'Redux',
      'Tailwind CSS', 'MUI', 'Bootstrap', 'HTML', 'CSS', 'Webpack',
    ],
  },
  {
    group: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    group: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    group: 'Dev Tools & Cloud',
    icon: Wrench,
    items: ['Git', 'AWS', 'GCP', 'Firebase', 'CI/CD', 'Jest', 'VS Code', 'WebStorm', 'Windsurf'],
  },
  {
    group: 'Payments',
    icon: CreditCard,
    items: ['Stripe.js', 'Razorpay'],
  },
]