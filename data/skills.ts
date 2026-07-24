import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  CreditCard,
  Workflow,
  Gauge,
  ShieldCheck,
  TestTube,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type SkillGroup = {
  group: string
  icon: LucideIcon
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    group: 'Languages',
    icon: Code2,
    items: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    group: 'Frontend',
    icon: Layers,
    items: [
      'React.js',
      'Next.js (App Router)',
      'React Native',
      'Vue.js',
      'Redux Toolkit',
      'RTK Query',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI (MUI)',
      'Framer Motion',
      'Responsive Design',
    ],
  },
  {
    group: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js'],
  },
  {
    group: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'SQLite', 'Firebase (Firestore)'],
  },
  {
    group: 'DevOps & Cloud',
    icon: Wrench,
    items: [
      'Docker',
      'CI/CD Pipelines',
      'Git',
      'GitHub',
      'Vercel',
      'AWS',
      'GCP',
    ],
  },
  {
    group: 'Testing',
    icon: TestTube,
    items: [
      'Jest',
      'React Testing Library',
      'Manual Testing & Debugging',
    ],
  },
  {
    group: 'APIs & Authentication',
    icon: ShieldCheck,
    items: [
      'REST APIs',
      'JWT Authentication',
      'OAuth',
      'Third-Party API Integration',
      'Socket.IO',
      'WebSockets',
    ],
  },
  {
    group: 'Payments',
    icon: CreditCard,
    items: ['Razorpay', 'Stripe'],
  },
  {
    group: 'Performance & Optimization',
    icon: Gauge,
    items: [
      'Code Splitting',
      'Lazy Loading',
      'Memoization',
      'Bundle Optimization',
      'Rendering Optimization',
      'Core Web Vitals',
      'Lighthouse Optimization',
      'SEO',
    ],
  },
  {
    group: 'Methodologies',
    icon: Workflow,
    items: ['Agile', 'Scrum'],
  },
]