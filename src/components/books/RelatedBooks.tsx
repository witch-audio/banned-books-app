import type { Book } from '@/lib/types'
import { BookCard } from './BookCard'

export function RelatedBooks({ books }: { books: Book[] }) {
  if (books.length === 0) return null

  return (
    <section>
      <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
        Related Books
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}
