'use client'

import { useState, useMemo } from 'react'
import type { Book } from '@/lib/types'
import { fuzzyMatch } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { SearchBar } from '@/components/books/SearchBar'
import { TagFilter } from '@/components/books/TagFilter'
import { BookGrid } from '@/components/books/BookGrid'

export function BrowseClient({
  books,
  topics,
}: {
  books: Book[]
  topics: string[]
}) {
  const [search, setSearch] = useState('')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let result = books

    if (search.trim()) {
      result = result.filter(
        (b) =>
          fuzzyMatch(b.title, search) ||
          fuzzyMatch(b.author, search) ||
          b.topics.some((t) => fuzzyMatch(t, search))
      )
    }

    if (selectedTopic) {
      result = result.filter((b) => b.topics.includes(selectedTopic))
    }

    return result
  }, [books, search, selectedTopic])

  return (
    <Container className="pb-16 pt-10">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Browse Books
        </h1>
        <p className="mt-1 text-sm text-muted">
          {filtered.length} challenged and banned books
        </p>
      </div>

      <div className="mb-4">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mb-8">
        <TagFilter topics={topics} selected={selectedTopic} onToggle={setSelectedTopic} />
      </div>

      <BookGrid books={filtered} />
    </Container>
  )
}
