import type { ChallengeEvent, Source } from '@/lib/types'
import { StatusBadge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import { getSourcesByIds } from '@/lib/data'

export function ChallengeTimeline({ events }: { events: ChallengeEvent[] }) {
  if (events.length === 0) return null

  const sorted = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <section>
      <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
        Challenge History
      </h2>

      <div className="mt-6 space-y-4">
        {sorted.map((event) => {
          const sources = getSourcesByIds(event.sourceIds)
          return (
            <div
              key={event.id}
              className="rounded-lg border border-card-border bg-card p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display font-bold">{event.institution}</p>
                  <p className="text-sm text-muted">
                    {event.city}, {event.state}
                  </p>
                </div>
                <StatusBadge status={event.status} />
              </div>

              <p className="mt-3 text-sm">{event.challengeReason}</p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
                <span>{formatDate(event.date)}</span>
                <span className="uppercase">{event.institutionType.replace('_', ' ')}</span>
              </div>

              {sources.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {sources.map((source) => (
                    <a
                      key={source.id}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent underline-offset-2 hover:underline"
                    >
                      {source.publisher}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
