import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/motion'

type StatProps = { value: string; label: string; className?: string }

function Stat({ value, label, className = '' }: StatProps) {
  return (
    <div className={className}>
      <div className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

export function HeroStats() {
  return (
    <motion.div variants={fadeUp} className="mt-10 flex items-center divide-x divide-foreground/10 max-w-md">
      <Stat value="3+" label="Years exp" className="pr-6" />
      <Stat value="3" label="Companies" className="px-6" />
      <Stat value="10+" label="Shipped projects" className="pl-6" />
    </motion.div>
  )
}