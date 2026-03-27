import { TOTAL_GUESSES } from '@/lib/game'

export function GuessTracker({
  guessesUsed,
  status,
}: {
  guessesUsed: number
  status: 'playing' | 'won' | 'lost'
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted">
        Reveals used
      </span>
      <div className="flex gap-1.5">
        {Array.from({ length: TOTAL_GUESSES }).map((_, i) => {
          const isUsed = i < guessesUsed
          const isWin = status === 'won' && isUsed
          const isLoss = status === 'lost' && isUsed

          return (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                isWin
                  ? 'bg-green-400'
                  : isLoss
                  ? 'bg-red-400'
                  : isUsed
                  ? 'bg-accent'
                  : 'bg-surface border border-card-border'
              }`}
            />
          )
        })}
      </div>
      <span className="text-xs text-muted">
        {guessesUsed}/{TOTAL_GUESSES}
      </span>
    </div>
  )
}
