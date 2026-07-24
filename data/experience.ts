export type AccentColor = 'cyan' | 'violet'

export type ExperienceItem = {
  company: string
  role: string
  dates: string
  location: string
  accent: AccentColor
  points: string[]
  tech: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'iTCart',
    role: 'SDE 1',
    dates: 'Aug 2025 — Present',
    location: 'Bangalore, India',
    accent: 'cyan',
    points: [
      'Architected scalable React.js and TypeScript applications using modular, feature-based architecture across 10+ product modules.',
      'Led frontend development of Workforce360, a role-based LMS supporting Admin, Instructor, and Learner workflows.',
      'Built key LMS modules including Course Management, Learning Paths, User Management, Analytics, Reports, and Role-Based Access Control.',
      'Integrated REST APIs using RTK Query with caching, authentication, optimistic updates, and centralized error handling.',
      'Developed 40+ reusable UI components and shared utilities, reducing code duplication and accelerating feature delivery.',
      'Optimized performance with React Hooks, memoization, lazy loading, and rendering optimization for faster load times.'
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'REST APIs', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Axios'],
  },
  {
    company: 'TechNetME',
    role: 'Full Stack Developer',
    dates: 'Jun 2024 — Jun 2025',
    location: 'Dubai (Remote)',
    accent: 'violet',
    points: [
      'Developed and maintained a high-performance marketing website using Next.js and TypeScript, achieving 90+ Lighthouse scores.',
      'Built 30+ reusable UI components with a scalable component-driven architecture, improving development speed and design consistency.',
      'Implemented secure Next.js API routes for contact forms, customer inquiries, and email workflows with validation and error handling.',
      'Optimized performance with image optimization, code splitting, lazy loading, SSR, SEO, and Core Web Vitals improvements.',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'REST APIs',
      'Node.js',
      'Git',
      'Vercel',
      'SEO',
      'Server-Side Rendering (SSR)',
    ],
  },
  {
    company: 'Clouwood Studio Pvt Ltd',
    role: 'Full Stack Developer',
    dates: 'Feb 2024 — May 2024',
    location: 'Noida, UP (Remote)',
    accent: 'cyan',
    points: [
      'Developed cross-platform mobile applications using React Native with responsive and consistent experiences across Android and iOS.',
      'Implemented Firebase Authentication with secure session management and streamlined user onboarding workflows.',
      'Built RESTful APIs using Express.js and MongoDB to support secure and scalable application features.',
      'Implemented offline-first data persistence using SQLite with Firebase Firestore for cloud synchronization.',
      'Managed end-to-end app releases for Google Play Store and Apple App Store, including builds, versioning, testing, and compliance.',
    ],
    tech: [
      'React Native',
      'JavaScript',
      'Firebase Authentication',
      'Firebase Firestore',
      'SQLite',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Git',
    ],
  },
]