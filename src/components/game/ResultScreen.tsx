'use client'

import Link from 'next/link'
import type { Book, GameState } from '@/lib/types'
import type { Puzzle } from '@/lib/types'
import { getCoverUrl } from '@/lib/utils'
import { getShareText, getPuzzleNumber } from '@/lib/game'
import { useState } from 'react'

export function ResultScreen({
  puzzle,
  book,
  state,
}: {
  puzzle: Puzzle
  book: Book
  state: GameState
}) {
  const [copied, setCopied] = useState(false)
  const puzzleNumber = getPuzzleNumber()
  const coverSrc = book.coverUrl || getCoverUrl(book.isbn)

  function handleShare() {
    const text = getShareText(puzzleNumber, state, book)
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const won = state.status === 'won'

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Status stamp */}
      <div className="mb-6 text-center">
        <div
          className={`inline-block rounded border-4 px-6 py-2 font-display text-2xl font-black uppercase tracking-[0.2em] ${
            won
              ? 'border-green-500 text-green-500 rotate-[-2deg]'
              : 'border-red-500 text-red-500 rotate-[-2deg]'
          }`}
          style={{ transform: 'rotate(-2deg)' }}
        >
          {won ? 'Declassified' : 'Access Denied'}
        </div>
      </div>

      {/* Book reveal */}
      <div className="flex gap-5">
        <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded bg-surface">
          {coverSrc ? (
            <img src={coverSrc} alt={book.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-2 text-center">
              <span className="font-display text-xs font-bold">{book.title}</span>
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted">The book was</p>
          <h2 className="mt-1 font-display text-xl font-bold uppercase leading-tight">
            {book.title}
          </h2>
          <p className="text-sm text-muted">{book.author}</p>

          {book.challengeReasons.length > 0 && (
            <p className="mt-2 text-xs text-muted">
              <span className="font-bold text-accent">Banned for:</span>{' '}
              {book.challengeReasons[0]}
            </p>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 flex items-center gap-4 rounded-lg border border-card-border bg-surface px-4 py-3 text-sm">
        <div className="text-center">
          <p className="font-display text-xl font-bold text-accent">
            {won ? state.revealedCount : '—'}
          </p>
          <p className="text-xs text-muted">Reveals used</p>
        </div>
        <div className="h-8 w-px bg-card-border" />
        <div className="text-center">
          <p className="font-display text-xl font-bold text-accent">
            #{puzzleNumber}
          </p>
          <p className="text-xs text-muted">Puzzle</p>
        </div>
        <div className="h-8 w-px bg-card-border" />
        <div className="text-center">
          <p className="font-display text-xl font-bold text-accent capitalize">
            {puzzle.difficulty}
          </p>
          <p className="text-xs text-muted">Difficulty</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={handleShare}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-accent-hover"
        >
          {copied ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              Share Result
            </>
          )}
        </button>

        <Link
          href={`/books/${book.slug}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-card-border bg-card px-5 py-3 font-display text-sm font-bold uppercase tracking-wider transition-colors hover:border-accent"
        >
          Read More
        </Link>
      </div>

      <p className="mt-3 text-center text-xs text-muted">
        New puzzle tomorrow. Come back and play again.
      </p>
    </div>
  )
}
