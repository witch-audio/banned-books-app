import type { Puzzle, GameState, Book } from './types'
import puzzlesData from '../../data/puzzles.json'
import { getBookById } from './data'

const puzzles = puzzlesData as Puzzle[]

export const TOTAL_GUESSES = 6

export function getTodaysPuzzle(): Puzzle {
  const today = new Date()
  const utcDate = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  const daysSinceEpoch = Math.floor(utcDate / 86400000)
  const index = daysSinceEpoch % puzzles.length
  return puzzles[index]
}

export function getPuzzleNumber(): number {
  const today = new Date()
  const utcDate = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  return Math.floor(utcDate / 86400000) % puzzles.length + 1
}

export function getTodayDateString(): string {
  const today = new Date()
  return [
    today.getUTCFullYear(),
    String(today.getUTCMonth() + 1).padStart(2, '0'),
    String(today.getUTCDate()).padStart(2, '0'),
  ].join('-')
}

export function getRevealedWords(puzzle: Puzzle, revealedCount: number): string[] {
  return puzzle.revealOrder
    .slice(0, revealedCount)
    .map((idx) => puzzle.redactedWords[idx])
}

/** Replace all occurrences of redacted words in passage with token markers.
 *  Returns an array of tokens: { text, redacted, word? }
 */
export function tokenizePassage(
  puzzle: Puzzle,
  revealedCount: number
): Array<{ text: string; redacted: boolean; revealed: boolean; word: string }> {
  const revealed = getRevealedWords(puzzle, revealedCount)
  const stillRedacted = puzzle.redactedWords.filter((w) => !revealed.includes(w))

  // Build a regex that matches any redacted or revealed word
  const allSpecial = [...puzzle.redactedWords]
  if (allSpecial.length === 0) {
    return [{ text: puzzle.passage, redacted: false, revealed: false, word: '' }]
  }

  const escaped = allSpecial.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escaped.join('|')})`, 'g')

  const tokens: Array<{ text: string; redacted: boolean; revealed: boolean; word: string }> = []
  let last = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(puzzle.passage)) !== null) {
    if (match.index > last) {
      tokens.push({ text: puzzle.passage.slice(last, match.index), redacted: false, revealed: false, word: '' })
    }
    const word = match[0]
    const isStillRedacted = stillRedacted.includes(word)
    tokens.push({ text: word, redacted: isStillRedacted, revealed: !isStillRedacted, word })
    last = match.index + word.length
  }

  if (last < puzzle.passage.length) {
    tokens.push({ text: puzzle.passage.slice(last), redacted: false, revealed: false, word: '' })
  }

  return tokens
}

export function getChoices(puzzle: Puzzle): Book[] {
  const correct = getBookById(puzzle.bookId)
  const decoys = puzzle.decoyBookIds.map((id) => getBookById(id)).filter(Boolean) as Book[]
  const all = correct ? [correct, ...decoys] : decoys
  // Deterministic shuffle based on puzzle id
  return shuffleDeterministic(all, puzzle.id)
}

function shuffleDeterministic<T>(arr: T[], seed: string): T[] {
  const copy = [...arr]
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  for (let i = copy.length - 1; i > 0; i--) {
    hash = (hash * 1664525 + 1013904223) >>> 0
    const j = hash % (i + 1)
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function loadGameState(puzzleId: string, date: string): GameState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem('redacted-game-state')
    if (!raw) return null
    const state: GameState = JSON.parse(raw)
    if (state.puzzleId !== puzzleId || state.date !== date) return null
    return state
  } catch {
    return null
  }
}

export function saveGameState(state: GameState): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('redacted-game-state', JSON.stringify(state))
}

export function makeInitialState(puzzleId: string, date: string, hardMode = false): GameState {
  return { puzzleId, date, guesses: [], revealedCount: 0, status: 'playing', hardMode }
}

export function getShareText(
  puzzleNumber: number,
  state: GameState,
  book: Book
): string {
  const bars = '█'.repeat(state.revealedCount)
  const empty = '░'.repeat(TOTAL_GUESSES - state.revealedCount)
  const result = state.status === 'won'
    ? `Identified in ${state.revealedCount === 0 ? 'zero' : state.revealedCount} reveal${state.revealedCount === 1 ? '' : 's'}`
    : 'Could not identify'

  return [
    `REDACTED #${puzzleNumber}`,
    `${bars}${empty} ${result}`,
    `"${book.title}" — ${book.author}`,
    `They tried to ban this passage. Could you identify it?`,
    `bannedbooks.app/daily`,
  ].join('\n')
}
