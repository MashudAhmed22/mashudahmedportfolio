// Blog posts — MDX-style content (plain JSX bodies to avoid heavy MDX setup)
// To add a new post: append an entry below. Newest first.

export const POSTS = [
  {
    slug: 'shipping-fast-with-nextjs-14',
    title: 'Shipping Fast with Next.js 14 — What I learned in 2025',
    excerpt:
      'A practical take on the App Router, server components, and shipping production-ready features in days, not weeks.',
    date: '2025-09-12',
    readTime: '6 min read',
    tags: ['Next.js', 'React', 'Performance'],
    cover: 'from-violet-500/30 to-fuchsia-500/30',
  },
  {
    slug: 'rtk-query-patterns-for-large-apps',
    title: 'RTK Query Patterns I use for Large React Apps',
    excerpt:
      'Reusable base queries, cache invalidation, optimistic updates and how I structure feature-based API slices on real LMS work.',
    date: '2025-07-04',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'RTK Query'],
    cover: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    slug: 'building-react-native-apps-that-feel-native',
    title: 'Building React Native apps that actually feel native',
    excerpt:
      'From smooth gestures to Razorpay payments — lessons from shipping the Car Washer mobile app to App Store & Play Store.',
    date: '2025-04-21',
    readTime: '7 min read',
    tags: ['React Native', 'Mobile', 'UX'],
    cover: 'from-emerald-500/30 to-teal-500/30',
  },
]

export const POST_BODY = {
  'shipping-fast-with-nextjs-14': [
    { type: 'p', text: "Next.js 14 changed how I think about shipping. The App Router, server components, and streaming let you push production features in hours, not days — if you respect the boundaries." },
    { type: 'h2', text: 'Server components by default' },
    { type: 'p', text: "Treat client components like a scalpel. Keep state, effects and event handlers in small leaves marked with 'use client'. Everything else stays on the server: faster TTFB, smaller JS payload, simpler mental model." },
    { type: 'h2', text: 'Route handlers are your API layer' },
    { type: 'p', text: 'I now ship the BFF and the UI together. Co-locating /api/[[...path]]/route.js with the page that uses it removes a whole class of \"where does this live\" decisions.' },
    { type: 'h2', text: 'Performance defaults are real' },
    { type: 'p', text: 'Image optimisation, font subsetting, partial pre-rendering — you get most of the wins for free. Profile only when something feels slow, not before.' },
    { type: 'p', text: "My rule of thumb in 2025: ship the simplest thing that works, measure, then optimise." },
  ],
  'rtk-query-patterns-for-large-apps': [
    { type: 'p', text: 'On the Workforce360 LMS I integrated dozens of REST endpoints across Admin, Instructor and Learner roles. Here are the patterns that kept it sane.' },
    { type: 'h2', text: 'One base query, many APIs' },
    { type: 'p', text: 'A custom baseQuery handles auth tokens, refresh flows, and 401 retries in one place. Feature slices stay focused on endpoints and transforms.' },
    { type: 'h2', text: 'Tags = invalidation discipline' },
    { type: 'p', text: 'Treat tags as contracts. \"Course\" tag in the courses API is the same string as in analytics. Mutate once, every dependent query refetches.' },
    { type: 'h2', text: 'Optimistic UI for human-feel' },
    { type: 'p', text: 'For toggles, ratings, enrol/unenrol — apply the change instantly, rollback on failure. It is the single biggest UX win you can land in a day.' },
  ],
  'building-react-native-apps-that-feel-native': [
    { type: 'p', text: "Cross-platform doesn't have to mean cross-mediocre. The difference between an app that feels native and one that doesn't is mostly tiny details." },
    { type: 'h2', text: 'Gestures and transitions' },
    { type: 'p', text: 'Use the native stack navigator. Lean on react-native-reanimated for shared element transitions. Animate values, not layouts.' },
    { type: 'h2', text: 'Offline-first with SQLite' },
    { type: 'p', text: "Booking flows that work on patchy mobile networks build trust. Cache locally, sync in background, surface optimistic state in the UI." },
    { type: 'h2', text: 'Payments without friction' },
    { type: 'p', text: 'Razorpay native SDK + a thin server confirm endpoint is the fastest path to production-ready payments in India.' },
  ],
}