import type { Book } from '@/lib/types'
import { BookCard } from './BookCard'

export function BookGrid({ books }: { books: Book[] }) {
  if (books.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-xl font-bold">No books found</p>
        <p className="mt-2 text-muted">Try adjusting your search or filters.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
