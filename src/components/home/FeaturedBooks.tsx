import Link from 'next/link'
import { getFeaturedBooks } from '@/lib/data'
import { BookCard } from '@/components/books/BookCard'

export function FeaturedBooks() {
  const books = getFeaturedBooks().slice(0, 6)

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            Most Challenged
          </h2>
          <p className="mt-1 text-sm text-muted">
            The books that keep getting pulled from shelves.
          </p>
        </div>
        <Link
          href="/browse"
          className="hidden text-sm font-medium text-accent transition-colors hover:text-accent-hover sm:block"
        >
          See all &rarr;
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/browse"
          className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          See all books &rarr;
        </Link>
      </div>
    </section>
  )
}
