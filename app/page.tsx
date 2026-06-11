
// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { motion, useScroll, useSpring, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion'
// import { useTheme } from 'next-themes'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Separator } from '@/components/ui/separator'
// import { POSTS } from '@/lib/posts'
// import {
//   Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download,
//   Code2, Database, Server, Wrench, CreditCard, Sparkles, ArrowRight,
//   GraduationCap, Award, Send, Menu, X, ChevronDown, Sun, Moon,
//   Smartphone, Globe, Layers, CheckCircle2, CalendarDays, Clock,
//   Quote, BookOpen, Star,
// } from 'lucide-react'

// const RESUME_URL = 'https://customer-assets.emergentagent.com/job_d20da146-a207-4123-a0ac-b0b85f87b76f/artifacts/n6todu3m_Mashud_Ahmed_Resume.pdf'

// const PROFILE = {
//   name: 'Mashud Ahmed',
//   role: 'Software Engineer · Full Stack Developer',
//   location: 'Bengaluru, India',
//   email: 'mashud.hojai@gmail.com',
//   phone: '+91 9678062213',
//   linkedin: 'https://linkedin.com/in/mashudahmed',
//   github: 'https://github.com/mashudahmed',
//   summary:
//     "Results-driven Full Stack Developer with 2+ years of hands-on experience building scalable, high-performance web and mobile applications. I specialise in React.js, Next.js, React Native and Node.js — crafting fast UIs, secure APIs, and shipping production-ready features in agile teams. ",
// }

// const SKILLS = [
//   { group: 'Languages', icon: Code2, items: ['JavaScript', 'TypeScript'] },
//   { group: 'Frontend', icon: Layers, items: ['React.js', 'Next.js', 'React Native', 'Vue.js', 'Redux', 'Tailwind CSS', 'MUI', 'Bootstrap', 'HTML', 'CSS', 'Webpack'] },
//   { group: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
//   { group: 'Databases', icon: Database, items: ['MongoDB', 'MySQL', 'SQLite'] },
//   { group: 'Dev Tools & Cloud', icon: Wrench, items: ['Git', 'AWS', 'GCP', 'Firebase', 'CI/CD', 'Jest', 'VS Code', 'WebStorm', 'Windsurf'] },
//   { group: 'Payments', icon: CreditCard, items: ['Stripe.js', 'Razorpay'] },
// ]

// // EXPERIENCE — newest first. Adding new at top will push others down.
// const EXPERIENCE = [
//   {
//     company: 'iTCart',
//     role: 'Frontend Developer',
//     dates: 'Aug 2025 — Present',
//     location: 'Bangalore, India',
//     accent: 'cyan',
//     points: [
//       'Built scalable React.js + TypeScript frontend modules with clean, modular architecture for high-performance applications.',
//       'Built a reusable component library, improving dev velocity and design consistency.',
//       'Integrated REST APIs with optimized state management and robust error handling for a smooth user experience.',
//       'Implemented responsive, modern UI with Tailwind CSS — seamless across all screen sizes.',
//       'Optimised rendering using hooks, memoization, and efficient component lifecycle handling.',
//     ],
//     tech: ['React', 'TypeScript', 'Tailwind', 'REST APIs'],
//   },
//   {
//     company: 'TechNetME',
//     role: 'Full Stack Developer',
//     dates: 'Jun 2024 — Jun 2025',
//     location: 'Dubai (Remote)',
//     accent: 'violet',
//     points: [
//        "Developed a fast, SEO-optimised and fully responsive company website using Next.js for production use. ",
//       'Built secure Next.js API routes for contact forms and email submissions with reliable backend processing.',
//       'Created reusable UI components and optimised frontend performance for scalability and smooth UX.',
//       'Implemented secure form validation and collaborated with teams to deliver a polished production product.',
//     ],
//     tech: ['Next.js', 'Node.js', 'MongoDB'],
//   },
//   {
//     company: 'Clouwood Studio Pvt Ltd',
//     role: 'Full Stack Developer',
//     dates: 'Feb 2024 — May 2024',
//     location: 'Noida, UP',
//     accent: 'cyan',
//     points: [
//       'Developed responsive cross-platform mobile apps using React Native for smooth and consistent user experience.',
//       'Built scalable backend services with Express.js, ensuring secure and efficient server-side operations.',
//       'Designed and managed databases using MongoDB, SQLite, and Firebase for real-time and structured data handling.',
//       'Optimised app performance and handled end-to-end deployment to App Store and Google Play Store.',
//     ],
//     tech: ['React Native', 'Firebase', 'Express.js', 'SQLite', 'MongoDB'],
//   },
// ]

// const PROJECTS = [
//   { name: 'Workforce360 LMS', tagline: 'Role-based Learning Management System',
//     description: 'Led frontend of a multi-role LMS (Admin, Instructor, Learner) with a scalable feature-based architecture. Integrated REST APIs via RTK Query with caching, auth flows and centralised error handling. Built complex modules  u2014 course management, learning paths, user management, analytics.',
//     tech: ['React', 'TypeScript', 'RTK Query', 'REST APIs', 'Tailwind'], icon: GraduationCap,
//     accent: 'from-violet-500/20 to-fuchsia-500/20' },
//   { name: 'TechNetME Website', tagline: 'High-performance corporate site',
//     description:  "Built the company's main website using Next.js  u2014 SEO-optimised, fully responsive, with secure API routes powering contact forms and email submissions. ",
//     tech: ['Next.js', 'Tailwind CSS', 'API Routes'], icon: Globe,
//     accent: 'from-cyan-500/20 to-blue-500/20' },
//   { name: 'Car Washer Mobile App', tagline: 'Schedule. Track. Pay. On the go.',
//     description: 'A React Native app to schedule, track and manage car-washing services. Firebase Auth, real-time booking, status updates, SQLite offline data. Integrated Razorpay for secure payments.',
//     tech: ['React Native', 'Firebase Auth', 'SQLite', 'Razorpay'], icon: Smartphone,
//     accent: 'from-emerald-500/20 to-teal-500/20' },
// ]

// const TESTIMONIALS = [
//   { name: 'Priya Sharma', role: 'Engineering Manager', company: 'iTCart',
//     quote: 'Mashud is one of those rare engineers who cares deeply about the user experience and the codebase. He shipped our most complex frontend module with elegance.',
//     initials: 'PS', accent: 'from-violet-500 to-fuchsia-500' },
//   { name: 'Ahmed Khalid', role: 'Product Lead', company: 'TechNetME',
//     quote: 'Working remotely with Mashud felt like having a senior teammate in the next room. SEO and performance numbers on our site jumped after his rebuild.',
//     initials: 'AK', accent: 'from-cyan-500 to-blue-500' },
//   { name: 'Rahul Verma', role: 'Founder', company: 'Clouwood Studio',
//     quote: 'He took ownership end-to-end  u2014 from React Native UI to backend APIs and Play Store releases. We could move twice as fast with him on the team.',
//     initials: 'RV', accent: 'from-emerald-500 to-teal-500' },
// ]

// const NAV = [
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Testimonials', href: '#testimonials' },
//   { label: 'Writings', href: '#writings' },
//   { label: 'Contact', href: '#contact' },
// ]

// // ---------- Motion helpers ----------
// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
// }
// const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

// function Reveal({ children, className = '', delay = 0, y = 28 }) {
//   return (
//     <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut', delay }}>
//       {children}
//     </motion.div>
//   )
// }

// function ThemeToggle() {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => setMounted(true), [])
//   if (!mounted) return <div className= "h-9 w-9 rounded-md border border-foreground/10 bg-foreground/5 " />
//   const isDark = theme === 'dark'
//   return (
//     <button onClick={() => setTheme(isDark ? 'light' : 'dark')}
//       className= "relative h-9 w-9 inline-flex items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition " aria-label= "Toggle theme ">
//       <Sun className={`h-4 w-4 transition-all ${isDark ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
//       <Moon className={`absolute h-4 w-4 transition-all ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
//     </button>
//   )
// }

// function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12)
//     onScroll(); window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])
//   return (
//     <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-background/70 border-b border-foreground/5' : 'bg-transparent'}`}>
//       <div className= "container flex items-center justify-between h-16 ">
//         <a href= "#top " className= "flex items-center gap-2 group ">
//           <div className= "h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-fuchsia-500/20 ">M</div>
//           <span className= "font-semibold tracking-tight hidden sm:block ">Mashud<span className= "text-muted-foreground ">.dev</span></span>
//         </a>
//         <nav className= "hidden lg:flex items-center gap-1 ">
//           {NAV.map((n) => (
//             <a key={n.href} href={n.href} className= "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-md hover:bg-foreground/5 ">{n.label}</a>
//           ))}
//           <div className= "mx-2 h-6 w-px bg-foreground/10 " />
//           <ThemeToggle />
//           <a href={RESUME_URL} target= "_blank " rel= "noreferrer " download className= "ml-2 ">
//             <Button size= "sm " className= "bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0 ">
//               <Download className= "h-4 w-4 mr-1.5 " /> Resume
//             </Button>
//           </a>
//         </nav>
//         <div className= "lg:hidden flex items-center gap-2 ">
//           <ThemeToggle />
//           <button className= "p-2 rounded-md hover:bg-foreground/5 " onClick={() => setOpen(!open)} aria-label= "menu ">
//             {open ? <X className= "h-5 w-5 " /> : <Menu className= "h-5 w-5 " />}
//           </button>
//         </div>
//       </div>
//       {open && (
//         <div className= "lg:hidden border-t border-foreground/5 bg-background/95 backdrop-blur-xl ">
//           <div className= "container py-3 flex flex-col gap-1 ">
//             {NAV.map((n) => (
//               <a key={n.href} href={n.href} onClick={() => setOpen(false)} className= "px-3 py-2 text-sm rounded-md hover:bg-foreground/5 ">{n.label}</a>
//             ))}
//             <a href={RESUME_URL} target= "_blank " rel= "noreferrer " download className= "px-3 py-2 text-sm rounded-md hover:bg-foreground/5 flex items-center gap-2 ">
//               <Download className= "h-4 w-4 " /> Download Resume
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

// function ScrollProgress() {
//   const { scrollYProgress } = useScroll()
//   const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })
//   return <motion.div style={{ scaleX }} className= "fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 z-[60] " />
// }

// // ---------- Hero with 3D-tilt + mouse spotlight ----------
// function Hero() {
//   const mouseX = useMotionValue(0.5)
//   const mouseY = useMotionValue(0.5)
//   const rotateX = useTransform(mouseY, [0, 1], [8, -8])
//   const rotateY = useTransform(mouseX, [0, 1], [-8, 8])
//   const spotlightX = useMotionValue(50)
//   const spotlightY = useMotionValue(50)
//   const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(168,85,247,0.18), transparent 60%)`

//   const onMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     const x = (e.clientX - rect.left) / rect.width
//     const y = (e.clientY - rect.top) / rect.height
//     mouseX.set(x); mouseY.set(y)
//     spotlightX.set(x * 100); spotlightY.set(y * 100)
//   }
//   const onMouseLeave = () => { mouseX.set(0.5); mouseY.set(0.5) }

//   return (
//     <section id= "top " className= "relative pt-32 pb-24 overflow-hidden " onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
//       <div className= "absolute inset-0 -z-10 ">
//         <motion.div className= "absolute inset-0 " style={{ background: spotlightBg }} />
//         <div className= "absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18),_transparent_60%)] " />
//         <motion.div className= "absolute top-32 left-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl "
//           animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
//         <motion.div className= "absolute top-40 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl "
//           animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
//         <div className= "absolute inset-0 bg-[linear-gradient(to_right,rgba(127,127,127,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] " />
//       </div>

//       <div className= "container grid lg:grid-cols-12 gap-10 items-center ">
//         <motion.div className= "lg:col-span-7 " variants={stagger} initial= "hidden " animate= "show ">
//           <motion.div variants={fadeUp} className= "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground ">
//             <span className= "h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse " />
//             Available for new opportunities
//           </motion.div>
//           <motion.h1 variants={fadeUp} className= "mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] ">
//             Hi, I'm <span className= "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-300 bg-clip-text text-transparent ">Mashud Ahmed</span>
//           </motion.h1>
//           <motion.p variants={fadeUp} className= "mt-4 text-2xl sm:text-3xl text-muted-foreground font-medium ">
//             I build fast, scalable <span className= "text-foreground ">web &amp; mobile</span> apps.
//           </motion.p>
//           <motion.p variants={fadeUp} className= "mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed ">{PROFILE.summary}</motion.p>
//           <motion.div variants={fadeUp} className= "mt-8 flex flex-wrap items-center gap-3 ">
//             <a href={RESUME_URL} target= "_blank " rel= "noreferrer " download>
//               <Button size= "lg " className= "bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0 shadow-lg shadow-fuchsia-500/25 ">
//                 <Download className= "h-4 w-4 mr-2 " /> Download Resume
//               </Button>
//             </a>
//             <a href= "#contact ">
//               <Button size= "lg " variant= "outline " className= "border-foreground/10 bg-foreground/5 hover:bg-foreground/10 ">
//                 <Send className= "h-4 w-4 mr-2 " /> Get in touch
//               </Button>
//             </a>
//             <a href={PROFILE.github} target= "_blank " rel= "noreferrer " className= "inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition " aria-label= "GitHub "><Github className= "h-4 w-4 " /></a>
//             <a href={PROFILE.linkedin} target= "_blank " rel= "noreferrer " className= "inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition " aria-label= "LinkedIn "><Linkedin className= "h-4 w-4 " /></a>
//             <a href={`mailto:${PROFILE.email}`} className= "inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition " aria-label= "Email "><Mail className= "h-4 w-4 " /></a>
//           </motion.div>
//           <motion.div variants={fadeUp} className= "mt-10 grid grid-cols-3 gap-6 max-w-md ">
//             <Stat value= "2+ " label= "Years exp " />
//             <Stat value= "3+ " label= "Companies " />
//             <Stat value= "10+ " label= "Shipped projects " />
//           </motion.div>
//         </motion.div>

//         {/* Right: 3D-tilt code card with orbital tech icons */}
//         <motion.div className= "lg:col-span-5 relative " style={{ perspective: 1200 }}
//           initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
//           <OrbitRing />
//           <motion.div className= "relative mx-auto w-full max-w-md " style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
//             <div className= "absolute -inset-4 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-cyan-400/30 blur-2xl rounded-3xl " />
//             <motion.div className= "relative rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 to-foreground/[0.02] backdrop-blur-xl p-6 shadow-2xl "
//               animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
//               <div className= "flex items-center gap-3 mb-4 ">
//                 <div className= "flex gap-1.5 ">
//                   <div className= "h-3 w-3 rounded-full bg-red-400/80 " />
//                   <div className= "h-3 w-3 rounded-full bg-yellow-400/80 " />
//                   <div className= "h-3 w-3 rounded-full bg-emerald-400/80 " />
//                 </div>
//                 <span className= "text-xs text-muted-foreground ml-auto ">mashud.dev — about.tsx</span>
//               </div>
//               <pre className= "text-sm leading-relaxed font-mono text-muted-foreground overflow-x-auto ">
// <code>
// <span className= "text-fuchsia-500 dark:text-fuchsia-400 ">const</span> <span className= "text-cyan-600 dark:text-cyan-300 ">mashud</span> = {'{'}
//   name: <span className= "text-emerald-600 dark:text-emerald-300 ">'Mashud Ahmed'</span>,
//   role: <span className= "text-emerald-600 dark:text-emerald-300 ">'Full Stack Dev'</span>,
//   stack: [<span className= "text-emerald-600 dark:text-emerald-300 ">'React'</span>, <span className= "text-emerald-600 dark:text-emerald-300 ">'Next.js'</span>,
//           <span className= "text-emerald-600 dark:text-emerald-300 ">'Node'</span>, <span className= "text-emerald-600 dark:text-emerald-300 ">'RN'</span>],
//   location: <span className= "text-emerald-600 dark:text-emerald-300 ">'Bengaluru, IN'</span>,
//   open_to_work: <span className= "text-amber-600 dark:text-amber-300 ">true</span>,
// {'}'};
// </code>
//               </pre>
//               <div className= "mt-5 flex flex-wrap gap-2 ">
//                 {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((t) => (
//                   <Badge key={t} variant= "secondary " className= "bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 ">{t}</Badge>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       <div className= "flex justify-center mt-16 ">
//         <a href= "#about " className= "text-muted-foreground hover:text-foreground transition flex flex-col items-center gap-1 text-xs ">
//           Scroll <ChevronDown className= "h-4 w-4 animate-bounce " />
//         </a>
//       </div>
//     </section>
//   )
// }

// function OrbitRing() {
//   const techs = ['React', 'Next', 'TS', 'Node', 'RN', 'Mongo']
//   return (
//     <div className= "absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none ">
//       <motion.div className= "relative h-[420px] w-[420px] " animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
//         {techs.map((t, i) => {
//           const angle = (i / techs.length) * Math.PI * 2
//           const r = 200
//           const x = Math.cos(angle) * r
//           const y = Math.sin(angle) * r
//           return (
//             <motion.div key={t} className= "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
//               style={{ x, y }} animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
//               <div className= "px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 border border-foreground/10 backdrop-blur-sm text-muted-foreground whitespace-nowrap ">{t}</div>
//             </motion.div>
//           )
//         })}
//         <div className= "absolute inset-0 rounded-full border border-dashed border-foreground/10 " />
//       </motion.div>
//     </div>
//   )
// }

// function Stat({ value, label }) {
//   return (
//     <div>
//       <div className= "text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent ">{value}</div>
//       <div className= "text-xs text-muted-foreground mt-1 ">{label}</div>
//     </div>
//   )
// }

// function SectionHeader({ kicker, title, description }) {
//   return (
//     <Reveal className= "max-w-2xl mb-12 ">
//       <div className= "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-500 dark:text-fuchsia-300 ">
//         <Sparkles className= "h-3.5 w-3.5 " /> {kicker}
//       </div>
//       <h2 className= "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ">{title}</h2>
//       {description && <p className= "mt-3 text-muted-foreground text-base sm:text-lg ">{description}</p>}
//     </Reveal>
//   )
// }

// function About() {
//   return (
//     <section id= "about " className= "py-24 relative ">
//       <div className= "container ">
//         <SectionHeader kicker= "About " title= "A developer who cares about the details. " />
//         <div className= "grid lg:grid-cols-3 gap-6 ">
//           <Reveal className= "lg:col-span-2 " delay={0.05}>
//             <Card className= "bg-foreground/[0.03] border-foreground/10 h-full ">
//               <CardContent className= "p-8 space-y-4 text-muted-foreground leading-relaxed ">
//                 <p>I'm a Full Stack Developer based in <span className= "text-foreground ">Bengaluru, India</span>, with 2+ years building production apps for startups and remote teams across India and the Middle East.</p>
//                 <p>My sweet spot is the modern JS stack — <span className= "text-foreground ">React, Next.js, TypeScript, Node.js</span> — and I also ship cross-platform mobile apps in <span className= "text-foreground ">React Native</span>. I obsess about clean architecture, reusable components, and that crisp UI feel.</p>
//                 <p>Beyond code, I enjoy turning fuzzy product ideas into shipped features, working closely with designers and PMs to make sure what we build is actually useful.</p>
//               </CardContent>
//             </Card>
//           </Reveal>
//           <Reveal delay={0.15}>
//             <Card className= "bg-foreground/[0.03] border-foreground/10 h-full ">
//               <CardContent className= "p-8 space-y-4 text-sm ">
//                 <InfoRow icon={MapPin} label= "Location " value={PROFILE.location} />
//                 <InfoRow icon={Mail} label= "Email " value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
//                 <InfoRow icon={Phone} label= "Phone " value={PROFILE.phone} href={`tel:${PROFILE.phone}`} />
//                 <InfoRow icon={Linkedin} label= "LinkedIn " value= "linkedin.com/in/mashudahmed " href={PROFILE.linkedin} />
//                 <InfoRow icon={Github} label= "GitHub " value= "github.com/mashudahmed " href={PROFILE.github} />
//                 <Separator className= "bg-foreground/5 " />
//                 <div className= "flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-300 ">
//                   <CheckCircle2 className= "h-4 w-4 " /> Open to full-time &amp; freelance
//                 </div>
//               </CardContent>
//             </Card>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   )
// }

// function InfoRow({ icon: Icon, label, value, href }) {
//   const Wrap = href ? 'a' : 'div'
//   return (
//     <Wrap href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel= "noreferrer " className= "flex items-start gap-3 group ">
//       <div className= "h-9 w-9 rounded-md bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 "><Icon className= "h-4 w-4 " /></div>
//       <div className= "min-w-0 ">
//         <div className= "text-xs text-muted-foreground ">{label}</div>
//         <div className= "truncate group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition ">{value}</div>
//       </div>
//     </Wrap>
//   )
// }

// function Skills() {
//   return (
//     <section id= "skills " className= "py-24 relative ">
//       <div className= "container ">
//         <SectionHeader kicker= "Skills " title= "Tools I build with. " description= "A curated stack I've used in production across the last 2+ years. " />
//         <div className= "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
//           {SKILLS.map((s, i) => (
//             <Reveal key={s.group} delay={i * 0.06}>
//               <Card className= "group bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 h-full ">
//                 <CardHeader className= "pb-3 ">
//                   <div className= "flex items-center gap-3 ">
//                     <div className= "h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-foreground/10 flex items-center justify-center ">
//                       <s.icon className= "h-5 w-5 text-fuchsia-500 dark:text-fuchsia-300 " />
//                     </div>
//                     <CardTitle className= "text-lg ">{s.group}</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className= "flex flex-wrap gap-2 ">
//                     {s.items.map((item) => (
//                       <Badge key={item} variant= "secondary " className= "bg-foreground/5 border border-foreground/10 text-foreground/90 hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30 transition ">{item}</Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ---------- Zigzag Experience ----------
// function Experience() {
//   return (
//     <section id= "experience " className= "py-24 relative ">
//       <div className= "container ">
//         <SectionHeader kicker= "Experience " title= "Where I've been shipping. " description= "My journey building products across India and the Middle East — newest first. " />

//         <div className= "relative max-w-6xl mx-auto ">
//           {/* Center rail (desktop) / left rail (mobile) */}
//           <div className= "absolute md:left-1/2 left-4 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-fuchsia-500/50 via-foreground/10 to-transparent " aria-hidden />

//           <div className= "space-y-12 md:space-y-20 ">
//             {EXPERIENCE.map((e, idx) => {
//               const isLeft = idx % 2 === 0
//               const accentDot = e.accent === 'cyan'
//                 ? 'bg-cyan-400 shadow-cyan-400/60 ring-cyan-400/20'
//                 : 'bg-violet-400 shadow-violet-400/60 ring-violet-400/20'
//               const accentText = e.accent === 'cyan' ? 'text-cyan-500 dark:text-cyan-300' : 'text-violet-500 dark:text-violet-300'
//               const accentBadge = e.accent === 'cyan'
//                 ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-200'
//                 : 'bg-violet-500/10 border-violet-500/30 text-violet-700 dark:text-violet-200'
//               const accentBorder = e.accent === 'cyan' ? 'hover:border-cyan-500/40' : 'hover:border-violet-500/40'

//               return (
//                 <Reveal key={e.company} delay={idx * 0.1}>
//                   <div className= "relative md:grid md:grid-cols-2 md:gap-12 ">
//                     {/* Glowing dot */}
//                     <div className={`absolute md:left-1/2 left-4 -translate-x-1/2 top-6 h-4 w-4 rounded-full ${accentDot} shadow-[0_0_20px_var(--tw-shadow-color)] ring-8`} />

//                     {/* Card on left (desktop), full width on mobile */}
//                     <div className={`${isLeft ? 'md:pr-12' : 'md:col-start-2 md:pl-12'} pl-12 md:pl-0`}>
//                       <Card className={`bg-foreground/[0.03] border-foreground/10 ${accentBorder} transition-all duration-300 hover:-translate-y-1`}>
//                         <CardContent className= "p-6 sm:p-7 ">
//                           {/* Header row */}
//                           <div className= "flex items-start justify-between gap-3 mb-2 ">
//                             <h3 className= "text-xl sm:text-2xl font-bold leading-tight ">{e.company}</h3>
//                             <Badge variant= "outline " className={`shrink-0 ${accentBadge} text-xs font-medium`}>
//                               {e.dates}
//                             </Badge>
//                           </div>
//                           <div className={`text-xs uppercase tracking-widest font-semibold mb-5 ${accentText}`}>
//                             {e.role} · {e.location}
//                           </div>

//                           <ul className= "space-y-2.5 text-sm text-muted-foreground ">
//                             {e.points.map((p, i) => (
//                               <li key={i} className= "flex gap-2.5 ">
//                                 <span className={`mt-2 h-1.5 w-1.5 rounded-full ${e.accent === 'cyan' ? 'bg-cyan-400' : 'bg-violet-400'} shrink-0`} />
//                                 <span className= "leading-relaxed ">{p}</span>
//                               </li>
//                             ))}
//                           </ul>

//                           <div className= "mt-5 flex flex-wrap gap-2 ">
//                             {e.tech.map((t) => (
//                               <span key={t} className= "px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10 text-muted-foreground ">{t}</span>
//                             ))}
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>
//                 </Reveal>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Projects() {
//   return (
//     <section id= "projects " className= "py-24 relative ">
//       <div className= "container ">
//         <SectionHeader kicker= "Selected Work " title= "Projects I'm proud of. " description= "A snapshot of recent products I've designed, built and shipped. " />
//         <div className= "grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//           {PROJECTS.map((p, i) => (
//             <Reveal key={p.name} delay={i * 0.08}>
//               <Card className= "group relative overflow-hidden bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 h-full ">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 group-hover:opacity-100 transition`} aria-hidden />
//                 <div className= "relative ">
//                   <CardHeader>
//                     <div className= "flex items-center justify-between ">
//                       <div className= "h-11 w-11 rounded-xl bg-foreground/10 border border-foreground/10 backdrop-blur flex items-center justify-center "><p.icon className= "h-5 w-5 " /></div>
//                       <ExternalLink className= "h-4 w-4 text-muted-foreground group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition " />
//                     </div>
//                     <CardTitle className= "mt-4 text-xl ">{p.name}</CardTitle>
//                     <CardDescription className= "text-foreground/70 ">{p.tagline}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className= "text-sm text-muted-foreground leading-relaxed ">{p.description}</p>
//                     <div className= "mt-5 flex flex-wrap gap-2 ">
//                       {p.tech.map((t) => <Badge key={t} variant= "secondary " className= "bg-background/60 border border-foreground/10 text-foreground/90 ">{t}</Badge>)}
//                     </div>
//                   </CardContent>
//                 </div>
//               </Card>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function Testimonials() {
//   return (
//     <section id= "testimonials " className= "py-24 relative ">
//       <div className= "container ">
//         <SectionHeader kicker= "Kind Words " title= "What people say. " description= "Feedback from the teams and people I've worked with. " />
//         <div className= "grid md:grid-cols-3 gap-6 ">
//           {TESTIMONIALS.map((t, i) => (
//             <Reveal key={t.name} delay={i * 0.08}>
//               <Card className= "relative h-full bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/30 transition ">
//                 <CardContent className= "p-6 sm:p-7 ">
//                   <Quote className= "h-7 w-7 text-fuchsia-500/40 dark:text-fuchsia-300/40 mb-4 " />
//                   <p className= "text-foreground/90 leading-relaxed ">{t.quote}</p>
//                   <div className= "mt-6 flex items-center gap-3 pt-5 border-t border-foreground/10 ">
//                     <div className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>{t.initials}</div>
//                     <div>
//                       <div className= "font-semibold leading-tight ">{t.name}</div>
//                       <div className= "text-xs text-muted-foreground ">{t.role} · {t.company}</div>
//                     </div>
//                     <div className= "ml-auto flex gap-0.5 ">
//                       {Array.from({ length: 5 }).map((_, k) => <Star key={k} className= "h-3.5 w-3.5 fill-amber-400 text-amber-400 " />)}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function EducationCerts() {
//   return (
//     <section className= "py-24 ">
//       <div className= "container grid md:grid-cols-2 gap-6 ">
//         <Reveal>
//           <Card className= "bg-foreground/[0.03] border-foreground/10 h-full ">
//             <CardHeader>
//               <div className= "flex items-center gap-3 ">
//                 <div className= "h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-foreground/10 flex items-center justify-center "><GraduationCap className= "h-5 w-5 text-cyan-500 dark:text-cyan-300 " /></div>
//                 <CardTitle>Education</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className= "text-lg font-semibold ">North-Eastern Hill University</div>
//               <div className= "text-muted-foreground ">Information Technology · Shillong, Meghalaya</div>
//               <div className= "mt-1 text-sm text-muted-foreground ">Graduated 2023</div>
//             </CardContent>
//           </Card>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <Card className= "bg-foreground/[0.03] border-foreground/10 h-full ">
//             <CardHeader>
//               <div className= "flex items-center gap-3 ">
//                 <div className= "h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-foreground/10 flex items-center justify-center "><Award className= "h-5 w-5 text-amber-500 dark:text-amber-300 " /></div>
//                 <CardTitle>Certifications</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className= "space-y-3 ">
//               <div>
//                 <div className= "font-semibold ">MERN Stack</div>
//                 <div className= "text-sm text-muted-foreground ">JSpiders Training and Development Center</div>
//               </div>
//             </CardContent>
//           </Card>
//         </Reveal>
//       </div>
//     </section>
//   )
// }

// function Writings() {
//   return (
//     <section id= "writings " className= "py-24 relative ">
//       <div className= "container ">
//         <div className= "flex items-end justify-between flex-wrap gap-4 mb-12 ">
//           <div className= "max-w-2xl ">
//             <div className= "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-500 dark:text-fuchsia-300 ">
//               <BookOpen className= "h-3.5 w-3.5 " /> Writings
//             </div>
//             <h2 className= "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ">Notes on building.</h2>
//             <p className= "mt-3 text-muted-foreground text-base sm:text-lg ">Short, practical posts on the things I learn while shipping.</p>
//           </div>
//           <Link href= "/blog " className= "text-sm text-fuchsia-500 dark:text-fuchsia-300 hover:underline inline-flex items-center gap-1 ">View all posts <ArrowRight className= "h-4 w-4 " /></Link>
//         </div>
//         <div className= "grid md:grid-cols-3 gap-6 ">
//           {POSTS.slice(0, 3).map((p, i) => (
//             <Reveal key={p.slug} delay={i * 0.08}>
//               <Link href={`/blog/${p.slug}`} className= "group block h-full ">
//                 <Card className= "relative overflow-hidden bg-foreground/[0.03] border-foreground/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 h-full ">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${p.cover} opacity-0 group-hover:opacity-100 transition`} />
//                   <div className= "relative ">
//                     <CardHeader>
//                       <div className= "flex items-center gap-3 text-xs text-muted-foreground ">
//                         <span className= "inline-flex items-center gap-1.5 "><CalendarDays className= "h-3 w-3 " /> {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                         <span>·</span>
//                         <span className= "inline-flex items-center gap-1.5 "><Clock className= "h-3 w-3 " /> {p.readTime}</span>
//                       </div>
//                       <CardTitle className= "mt-2 text-lg leading-snug group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition ">{p.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className= "text-sm text-muted-foreground leading-relaxed ">{p.excerpt}</p>
//                       <div className= "mt-4 flex flex-wrap gap-2 ">
//                         {p.tags.map((t) => <span key={t} className= "px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10 ">{t}</span>)}
//                       </div>
//                     </CardContent>
//                   </div>
//                 </Card>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState({ state: 'idle', msg: '' })

//   const submit = async (e) => {
//     e.preventDefault()
//     if (!form.name || !form.email || !form.message) { setStatus({ state: 'error', msg: 'Please fill in all fields.' }); return }
//     setStatus({ state: 'loading', msg: '' })
//     try {
//       const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
//       const data = await res.json()
//       if (!res.ok) throw new Error(data.error || 'Failed')
//       setStatus({ state: 'success', msg: data.message || 'Message sent!' })
//       setForm({ name: '', email: '', message: '' })
//     } catch (err) { setStatus({ state: 'error', msg: err.message }) }
//   }

//   return (
//     <section id= "contact " className= "py-24 relative ">
//       <div className= "absolute inset-0 -z-10 ">
//         <div className= "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(217,70,239,0.15),_transparent_70%)] " />
//       </div>
//       <div className= "container ">
//         <div className= "grid lg:grid-cols-2 gap-12 items-start ">
//           <Reveal>
//             <SectionHeader kicker= "Get in touch " title= "Let's build something great together. " description= "Have a role, a project, or just want to say hi? Drop a message — I usually reply within a day. " />
//             <div className= "space-y-3 ">
//               {[
//                 { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
//                 { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
//                 { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mashudahmed', href: PROFILE.linkedin },
//                 { icon: Github, label: 'GitHub', value: 'github.com/mashudahmed', href: PROFILE.github },
//               ].map((r) => (
//                 <a key={r.label} href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel= "noreferrer " className= "flex items-center gap-3 group ">
//                   <div className= "h-11 w-11 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-500/30 transition "><r.icon className= "h-4 w-4 " /></div>
//                   <div>
//                     <div className= "text-xs text-muted-foreground ">{r.label}</div>
//                     <div className= "font-medium group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition ">{r.value}</div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <Card className= "bg-foreground/[0.03] border-foreground/10 ">
//               <CardContent className= "p-6 sm:p-8 ">
//                 <form onSubmit={submit} className= "space-y-4 ">
//                   <div>
//                     <label className= "text-xs text-muted-foreground ">Your name</label>
//                     <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder= "Jane Doe " className= "mt-1 bg-foreground/5 border-foreground/10 " />
//                   </div>
//                   <div>
//                     <label className= "text-xs text-muted-foreground ">Email</label>
//                     <Input type= "email " value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder= "jane@company.com " className= "mt-1 bg-foreground/5 border-foreground/10 " />
//                   </div>
//                   <div>
//                     <label className= "text-xs text-muted-foreground ">Message</label>
//                     <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder= "Tell me about your project, role, or idea... " className= "mt-1 bg-foreground/5 border-foreground/10 " />
//                   </div>
//                   <Button type= "submit " disabled={status.state === 'loading'} size= "lg " className= "w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0 ">
//                     {status.state === 'loading' ? 'Sending...' : (<><Send className= "h-4 w-4 mr-2 " /> Send message</>)}
//                   </Button>
//                   {status.state === 'success' && <div className= "text-sm text-emerald-600 dark:text-emerald-300 flex items-center gap-2 "><CheckCircle2 className= "h-4 w-4 " /> {status.msg}</div>}
//                   {status.state === 'error' && <div className= "text-sm text-red-500 dark:text-red-300 ">{status.msg}</div>}
//                 </form>
//               </CardContent>
//             </Card>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Footer() {
//   return (
//     <footer className= "border-t border-foreground/5 py-10 ">
//       <div className= "container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground ">
//         <div>© {new Date().getFullYear()} Mashud Ahmed. Built with Next.js &amp; Tailwind.</div>
//         <div className= "flex items-center gap-3 ">
//           <a href={PROFILE.github} target= "_blank " rel= "noreferrer " className= "hover:text-foreground transition "><Github className= "h-4 w-4 " /></a>
//           <a href={PROFILE.linkedin} target= "_blank " rel= "noreferrer " className= "hover:text-foreground transition "><Linkedin className= "h-4 w-4 " /></a>
//           <a href={`mailto:${PROFILE.email}`} className= "hover:text-foreground transition "><Mail className= "h-4 w-4 " /></a>
//           <a href={`tel:${PROFILE.phone}`} className= "hover:text-foreground transition "><Phone className= "h-4 w-4 " /></a>
//         </div>
//       </div>
//     </footer>
//   )
// }

// function App() {
//   return (
//     <main className= "min-h-screen bg-background text-foreground selection:bg-fuchsia-500/30 ">
//       <ScrollProgress />
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Testimonials />
//       <EducationCerts />
//       <Writings />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }



import { Hero } from '@/features/hero/Hero'
import { About } from '@/features/about/About'
import { Skills } from '@/features/skills/Skills'
import { Experience } from '@/features/experience/Experience'
import { Projects } from '@/features/projects/Projects'
import { Testimonials } from '@/features/testimonials/Testimonials'
import { Contact } from '@/features/contact/Contact'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { EducationCerts } from '@/features/educationCerts/EducationCerts'
import { Writings } from '@/features/writings/Writings'

// EducationCerts and Writings sections follow the same pattern —
// split them the same way as above when ready.

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-fuchsia-500/30">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <EducationCerts/>
      <Writings />
      <Contact />
      <Footer />
    </main>
  )
}

