'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Puzzle, GameState, Book } from '@/lib/types'
import {
  TOTAL_GUESSES,
  getTodaysPuzzle,
  getChoices,
  loadGameState,
  saveGameState,
  makeInitialState,
  getTodayDateString,
  getPuzzleNumber,
} from '@/lib/game'
import { getBookById, getAllBooks } from '@/lib/data'
import { RedactedPassage } from '@/components/game/RedactedPassage'
import { MultipleChoice } from '@/components/game/MultipleChoice'
import { HardModeInput } from '@/components/game/HardModeInput'
import { GuessTracker } from '@/components/game/GuessTracker'
import { ResultScreen } from '@/components/game/ResultScreen'

export function GameClient() {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null)
  const [book, setBook] = useState<Book | null>(null)
  const [choices, setChoices] = useState<Book[]>([])
  const [state, setState] = useState<GameState | null>(null)
  const [shaking, setShaking] = useState(false)
  const allBooks = getAllBooks()

  // Initialize on mount (client-side only — puzzle depends on current date)
  useEffect(() => {
    const todayPuzzle = getTodaysPuzzle()
    const todayBook = getBookById(todayPuzzle.bookId)
    const todayChoices = getChoices(todayPuzzle)
    const today = getTodayDateString()
    const savedState = loadGameState(todayPuzzle.id, today) ?? makeInitialState(todayPuzzle.id, today)

    setPuzzle(todayPuzzle)
    setBook(todayBook ?? null)
    setChoices(todayChoices)
    setState(savedState)
  }, [])

  // Persist state on every change
  useEffect(() => {
    if (state) saveGameState(state)
  }, [state])

  const handleGuess = useCallback(
    (guessedBookId: string) => {
      if (!puzzle || !state || state.status !== 'playing') return

      const isCorrect = guessedBookId === puzzle.bookId
      const newGuesses = [...state.guesses, guessedBookId]
      const newRevealedCount = Math.min(state.revealedCount + 1, puzzle.redactedWords.length)
      const outOfGuesses = newGuesses.length >= TOTAL_GUESSES

      if (!isCorrect) {
        setShaking(true)
        setTimeout(() => setShaking(false), 500)
      }

      setState((prev) =>
        prev
          ? {
              ...prev,
              guesses: newGuesses,
              revealedCount: isCorrect ? prev.revealedCount : newRevealedCount,
              status: isCorrect ? 'won' : outOfGuesses ? 'lost' : 'playing',
            }
          : prev
      )
    },
    [puzzle, state]
  )

  const toggleHardMode = () => {
    if (!state || state.status !== 'playing') return
    setState((prev) => (prev ? { ...prev, hardMode: !prev.hardMode } : prev))
  }

  // Loading state
  if (!puzzle || !book || !state) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-surface" />
          <div className="h-32 rounded-xl bg-surface" />
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => <div key={i} className="h-16 rounded-lg bg-surface" />)}
          </div>
        </div>
      </div>
    )
  }

  const gameOver = state.status !== 'playing'
  const puzzleNumber = getPuzzleNumber()

  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-8 sm:px-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
            <span className="text-accent">█</span> REDACTED
          </h1>
          <p className="text-xs text-muted">
            Puzzle #{puzzleNumber} &middot; {puzzle.difficulty} difficulty
          </p>
        </div>
        <button
          onClick={toggleHardMode}
          disabled={gameOver}
          className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40 ${
            state.hardMode
              ? 'border-accent bg-accent text-black'
              : 'border-card-border bg-card text-muted hover:border-accent/50'
          }`}
        >
          Hard mode
        </button>
      </div>

      {/* Instructions */}
      {!gameOver && (
        <p className="mb-4 text-sm text-muted">
          Identify the banned book from the redacted passage. Each wrong guess reveals one more word.
        </p>
      )}

      {/* Passage */}
      <div className="mb-5 rounded-xl border border-card-border bg-card p-5 sm:p-7">
        <RedactedPassage
          puzzle={puzzle}
          revealedCount={gameOver ? puzzle.redactedWords.length : state.revealedCount}
          shaking={shaking}
        />
      </div>

      {/* Guess tracker */}
      <div className="mb-5">
        <GuessTracker guessesUsed={state.guesses.length} status={state.status} />
      </div>

      {/* Input or result */}
      {gameOver ? (
        <ResultScreen puzzle={puzzle} book={book} state={state} />
      ) : (
        <div>
          {state.hardMode ? (
            <HardModeInput
              books={allBooks}
              guessedIds={state.guesses}
              onGuess={handleGuess}
              disabled={gameOver}
            />
          ) : (
            <MultipleChoice
              choices={choices}
              guessedIds={state.guesses}
              onGuess={handleGuess}
              disabled={gameOver}
            />
          )}

          {state.guesses.length > 0 && (
            <p className="mt-3 text-center text-xs text-muted">
              {TOTAL_GUESSES - state.guesses.length} guess
              {TOTAL_GUESSES - state.guesses.length === 1 ? '' : 'es'} remaining
            </p>
          )}
        </div>
      )}
    </div>
  )
}
