import { ComponentType } from "react";

type InfoRowProps = {
  icon: ComponentType<{ className?: string }>;
  label: string
  value: string
  href?: string
}
export function InfoRow({ icon: Icon, label, value, href }: InfoRowProps) {
  const Wrap = href ? 'a' : 'div'
  return (
    <Wrap
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="flex items-start gap-3 group"
    >
      <div className="h-9 w-9 rounded-md bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-300 transition">{value}</div>
      </div>
    </Wrap>
  )
}