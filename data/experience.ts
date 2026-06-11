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
    role: 'Frontend Developer',
    dates: 'Aug 2025 — Present',
    location: 'Bangalore, India',
    accent: 'cyan',
    points: [
      'Built scalable React.js + TypeScript frontend modules with clean, modular architecture for high-performance applications.',
      'Built a reusable component library, improving dev velocity and design consistency.',
      'Integrated REST APIs with optimized state management and robust error handling for a smooth user experience.',
      'Implemented responsive, modern UI with Tailwind CSS — seamless across all screen sizes.',
      'Optimised rendering using hooks, memoization, and efficient component lifecycle handling.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'REST APIs'],
  },
  {
    company: 'TechNetME',
    role: 'Full Stack Developer',
    dates: 'Jun 2024 — Jun 2025',
    location: 'Dubai (Remote)',
    accent: 'violet',
    points: [
      'Developed a fast, SEO-optimised and fully responsive company website using Next.js for production use.',
      'Built secure Next.js API routes for contact forms and email submissions with reliable backend processing.',
      'Created reusable UI components and optimised frontend performance for scalability and smooth UX.',
      'Implemented secure form validation and collaborated with teams to deliver a polished production product.',
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    company: 'Clouwood Studio Pvt Ltd',
    role: 'Full Stack Developer',
    dates: 'Feb 2024 — May 2024',
    location: 'Noida, UP',
    accent: 'cyan',
    points: [
      'Developed responsive cross-platform mobile apps using React Native for smooth and consistent user experience.',
      'Built scalable backend services with Express.js, ensuring secure and efficient server-side operations.',
      'Designed and managed databases using MongoDB, SQLite, and Firebase for real-time and structured data handling.',
      'Optimised app performance and handled end-to-end deployment to App Store and Google Play Store.',
    ],
    tech: ['React Native', 'Firebase', 'Express.js', 'SQLite', 'MongoDB'],
  },
]