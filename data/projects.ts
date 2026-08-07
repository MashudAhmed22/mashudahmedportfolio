import { GraduationCap, Globe, Smartphone, HeartPulse, ShieldCheck, FileSearch } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  icon: LucideIcon
  accent: string
  link?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Workforce360 LMS',
    tagline: 'Role-based Learning Management System',
    description:
      'Led frontend of a multi-role LMS (Admin, Instructor, Learner) with a scalable feature-based architecture. Integrated REST APIs via RTK Query with caching, auth flows and centralised error handling. Built complex modules - course management, learning paths, user management, analytics.',
    tech: ['React', 'TypeScript', 'RTK Query', 'REST APIs', 'Tailwind'],
    icon: GraduationCap,
    accent: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    name: 'ITCart.ai',
    tagline: 'AI-powered IT marketplace',
    description:
      'Built the company main website - a production-ready Next.js platform with SSR, SEO optimisation, fully responsive layouts, and secure API routes. Focused on performance, accessibility, and clean component architecture to deliver a fast, polished user experience.',
    tech: ['Next.js', 'TypeScript', 'RTK Query', 'Tailwind CSS', 'SEO', 'SSR', 'Vercel'],
    icon: Globe,
    accent: 'from-sky-500/20 to-indigo-500/20',
    link: 'https://itcart.ai/',
  },
  {
    name: 'AIX Identity',
    tagline: 'Enterprise identity & access control platform',
    description:
      'Built the company\'s suite of web applications including a centralised control panel for SSO management, tenant provisioning, and role-based access control. Integrated REST APIs across all apps with a shared auth layer, delivering a consistent and secure multi-tenant experience.',
    tech: ['React', 'TypeScript', 'RTK Query', 'REST APIs', 'Tailwind CSS'],
    icon: ShieldCheck,
    accent: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    name: 'TechNetME Website',
    tagline: 'High-performance corporate site',
    description:
      "Built the company's main website using Next.js - SEO-optimised, fully responsive, with secure API routes powering contact forms and email submissions.",
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
      'SSR',
    ],
    icon: Globe,
    accent: 'from-cyan-500/20 to-blue-500/20',
    link: "https://www.technetme.com/"
  },
  {
    name: 'Flexora — Physiotherapy Clinic Website',
    tagline: 'Better Care. Better Experience.',
    description:
      'Built a production-ready healthcare website with Next.js 15 and App Router, featuring 11 responsive routes, centralized typed content configuration, SEO and accessibility optimizations, responsive design, image optimization, and code splitting, achieving 90+ Lighthouse scores.',
    tech: [
      'Next.js 15',
      'React',
      'TypeScript',
      'App Router',
      'Tailwind CSS',
      'SEO',
      'Accessibility',
      'Responsive Design',
      'Image Optimization',
    ],
    icon: HeartPulse,
    accent: 'from-emerald-500/20 to-teal-500/20',
    link: "https://flexora-physiotherapy-center-seven.vercel.app/"
  },
  {
    name: 'Car Washer Mobile App',
    tagline: 'Schedule. Track. Pay. On the go.',
    description:
      'A React Native app to schedule, track and manage car-washing services. Firebase Auth, real-time booking, status updates, SQLite offline data. Integrated Razorpay for secure payments.',
    tech: ['React Native', 'Firebase Auth', 'SQLite', 'Razorpay'],
    icon: Smartphone,
    accent: 'from-cyan-500/20 to-blue-500/20',
    link: "https://www.unclecarwasher.com/"
  },
  {
    name: 'VidFlow Mobile App',
    tagline: 'Secure. Organize. Access. Anywhere.',
    description:
      'A cloud-based file storage and content management mobile application that enables users to securely upload, organize, access, and manage digital assets. Developed reusable mobile UI screens, integrated REST APIs for file operations and authentication, and implemented SQLite for local caching and offline access.',
    tech: [
      'React Native',
      'TypeScript',
      'SQLite',
      'REST APIs',
    ],
    icon: Smartphone,
    accent: 'from-cyan-500/20 to-blue-500/20',
    link: 'https://vidflow.co/',
  },
  {
  name: 'Plagiarism Doctor — Academic Research Platform',

  tagline: 'Smarter Academic Research. Better Results.',

  description:
    'Built a comprehensive academic research platform with a project dashboard, document upload workflows, plagiarism and AI detection reports, plagiarism removal services, project tracking, and an interactive cost calculator. The platform also includes responsive service pages, form handling, document management workflows, and a structured user experience for managing academic projects.',

  tech: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'REST APIs',
    'Responsive Design',
    'File Upload',
    'Dashboard',
    'Data Visualization',
  ],

  icon: FileSearch,

  accent: 'from-violet-500/20 to-indigo-500/20',

  link: 'https://plagiarism-doctor.vercel.app/',
},
]