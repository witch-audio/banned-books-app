import type { Book, ChallengeEvent, Source } from './types'
import booksData from '../../data/books.json'
import eventsData from '../../data/challenge-events.json'
import sourcesData from '../../data/sources.json'
import { fuzzyMatch } from './utils'

const books = booksData as Book[]
const events = eventsData as ChallengeEvent[]
const sources = sourcesData as Source[]

export function getAllBooks(): Book[] {
  return books
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id)
}

export function getFeaturedBooks(): Book[] {
  return books.filter((b) => b.featured)
}

export function searchBooks(query: string): Book[] {
  if (!query.trim()) return books
  return books.filter(
    (b) =>
      fuzzyMatch(b.title, query) ||
      fuzzyMatch(b.author, query) ||
      b.topics.some((t) => fuzzyMatch(t, query))
  )
}

export function filterBooksByTopic(topic: string): Book[] {
  return books.filter((b) => b.topics.includes(topic))
}

export function getAllTopics(): string[] {
  const topicSet = new Set<string>()
  books.forEach((b) => b.topics.forEach((t) => topicSet.add(t)))
  return Array.from(topicSet).sort()
}

export function getEventsForBook(bookId: string): ChallengeEvent[] {
  return events.filter((e) => e.bookIds.includes(bookId))
}

export function getAllEvents(): ChallengeEvent[] {
  return events
}

export function getSourceById(id: string): Source | undefined {
  return sources.find((s) => s.id === id)
}

export function getSourcesByIds(ids: string[]): Source[] {
  return ids.map((id) => sources.find((s) => s.id === id)).filter(Boolean) as Source[]
}

export function getStats() {
  const statesSet = new Set<string>()
  events.forEach((e) => statesSet.add(e.state))

  return {
    totalBooks: books.length,
    totalEvents: events.length,
    statesAffected: statesSet.size,
  }
}

export function getAllSlugs(): string[] {
  return books.map((b) => b.slug)
}

export function getRelatedBooks(bookIds: string[]): Book[] {
  return bookIds
    .map((id) => books.find((b) => b.id === id))
    .filter(Boolean) as Book[]
}
