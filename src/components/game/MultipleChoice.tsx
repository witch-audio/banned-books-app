'use client'

import type { Book } from '@/lib/types'

export function MultipleChoice({
  choices,
  guessedIds,
  onGuess,
  disabled,
}: {
  choices: Book[]
  guessedIds: string[]
  onGuess: (bookId: string) => void
  disabled: boolean
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {choices.map((book) => {
        const isEliminated = guessedIds.includes(book.id)

        return (
          <button
            key={book.id}
            onClick={() => !isEliminated && !disabled && onGuess(book.id)}
            disabled={isEliminated || disabled}
            className={`group relative flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all duration-200 ${
              isEliminated
                ? 'cursor-not-allowed border-card-border bg-card opacity-40'
                : 'border-card-border bg-card hover:border-accent hover:bg-surface active:scale-[0.98]'
            }`}
          >
            {isEliminated && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                <div className="h-px w-[85%] bg-red-500/60" />
              </div>
            )}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-surface font-display text-xs font-bold text-muted group-hover:bg-accent/10 group-hover:text-accent">
              {String.fromCharCode(65 + choices.indexOf(book))}
            </div>
            <div className="min-w-0">
              <p className={`font-display text-sm font-bold leading-tight ${isEliminated ? 'line-through' : ''}`}>
                {book.title}
              </p>
              <p className="text-xs text-muted">{book.author}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}
