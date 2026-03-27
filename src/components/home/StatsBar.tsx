import { getStats } from '@/lib/data'

export function StatsBar() {
  const stats = getStats()

  const items = [
    { value: stats.totalBooks, label: 'Books Tracked' },
    { value: stats.totalEvents, label: 'Challenge Events' },
    { value: stats.statesAffected, label: 'States Affected' },
  ]

  return (
    <section className="border-y border-card-border bg-surface/50">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 sm:py-7">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <p className="font-display text-3xl font-bold tabular-nums text-accent sm:text-4xl">
              {item.value}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-xs">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
