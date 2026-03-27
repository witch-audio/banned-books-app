import { STATUS_COLORS, STATUS_LABELS } from '@/lib/constants'

export function Badge({
  children,
  variant = 'topic',
}: {
  children: React.ReactNode
  variant?: 'topic' | 'status'
}) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
        variant === 'topic'
          ? 'border-card-border bg-surface text-muted'
          : ''
      }`}
    >
      {children}
    </span>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const colorClasses = STATUS_COLORS[status] || 'bg-surface text-muted border-card-border'
  const label = STATUS_LABELS[status] || status

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${colorClasses}`}
    >
      {label}
    </span>
  )
}
