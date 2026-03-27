'use client'

import { tokenizePassage } from '@/lib/game'
import type { Puzzle } from '@/lib/types'

export function RedactedPassage({
  puzzle,
  revealedCount,
  shaking,
}: {
  puzzle: Puzzle
  revealedCount: number
  shaking: boolean
}) {
  const tokens = tokenizePassage(puzzle, revealedCount)

  return (
    <div className={`transition-transform ${shaking ? 'animate-shake' : ''}`}>
      <p className="font-mono text-base leading-8 tracking-wide sm:text-lg sm:leading-9">
        {tokens.map((token, i) => {
          if (!token.redacted && !token.revealed) {
            return <span key={i}>{token.text}</span>
          }

          if (token.redacted) {
            // Still hidden — animated black bar
            return (
              <span
                key={i}
                className="relative mx-0.5 inline-block animate-redact-pulse rounded-sm bg-foreground align-middle"
                style={{
                  width: `${Math.max(token.text.length * 0.62, 2)}em`,
                  height: '1.1em',
                }}
                aria-label="[redacted]"
              />
            )
          }

          // Was redacted, now revealed — highlight it
          return (
            <span
              key={i}
              className="mx-0.5 inline-block rounded-sm bg-accent px-0.5 font-bold text-black animate-reveal"
            >
              {token.text}
            </span>
          )
        })}
      </p>

      <p className="mt-3 text-xs text-muted">
        — {puzzle.passageSource}
      </p>
    </div>
  )
}
