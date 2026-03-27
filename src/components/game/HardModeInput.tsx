'use client'

import { useState } from 'react'
import type { Book } from '@/lib/types'
import { fuzzyMatch } from '@/lib/utils'

export function HardModeInput({
  books,
  guessedIds,
  onGuess,
  disabled,
}: {
  books: Book[]
  guessedIds: string[]
  onGuess: (bookId: string) => void
  disabled: boolean
}) {
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState<Book[]>([])

  function handleInput(value: string) {
    setInput(value)
    if (value.trim().length < 2) {
      setSuggestions([])
      return
    }
    const matches = books.filter(
      (b) => !guessedIds.includes(b.id) && (fuzzyMatch(b.title, value) || fuzzyMatch(b.author, value))
    ).slice(0, 5)
    setSuggestions(matches)
  }

  function handleSelect(book: Book) {
    setInput('')
    setSuggestions([])
    onGuess(book.id)
  }

  return (
    <div className="relative">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Type a book title or author..."
          disabled={disabled}
          className="w-full rounded-lg border border-card-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        />
      </div>

      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-lg border border-card-border bg-card shadow-xl">
          {suggestions.map((book) => (
            <button
              key={book.id}
              onClick={() => handleSelect(book)}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-surface"
            >
              <div>
                <p className="font-display text-sm font-bold">{book.title}</p>
                <p className="text-xs text-muted">{book.author}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
