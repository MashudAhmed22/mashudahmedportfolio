import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/motion'

type StatProps = { value: string; label: string }

function Stat({ value, label }: StatProps) {
  return (
    <div>
      <div className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

export function HeroStats() {
  return (
    <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 max-w-md">
      <Stat value="2+" label="Years exp" />
      <Stat value="3+" label="Companies" />
      <Stat value="10+" label="Shipped projects" />
    </motion.div>
  )
}