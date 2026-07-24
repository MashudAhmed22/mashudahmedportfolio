export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  initials: string
  accent: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Abhay Singh',
    role: 'Tech Lead',
    company: 'iTCart',
    quote:
      'Mashud is one of those rare engineers who cares deeply about the user experience and the codebase. He shipped our most complex frontend module with elegance.',
    initials: 'PS',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'Ruhul Amin',
    role: 'Product Lead',
    company: 'TechNetME',
    quote:
      'Working remotely with Mashud felt like having a senior teammate in the next room. SEO and performance numbers on our site jumped after his rebuild.',
    initials: 'AK',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Vishal Ghoyal',
    role: 'Founder',
    company: 'Clouwood Studio',
    quote:
      'He took ownership end-to-end — from React Native UI to backend APIs and Play Store releases. We could move twice as fast with him on the team.',
    initials: 'RV',
    accent: 'from-emerald-500 to-teal-500',
  },
]