import Link from 'next/link'
import type { Book } from '@/lib/types'
import { getCoverUrl } from '@/lib/utils'
import { StatusBadge } from '@/components/ui/Badge'
import { BookCover } from './BookCover'

export function BookCard({ book, status }: { book: Book; status?: string }) {
  const coverSrc = book.coverUrl || getCoverUrl(book.isbn)

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-card-border bg-card transition-all duration-200 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
    >
      <BookCover
        src={coverSrc}
        title={book.title}
        author={book.author}
        className="relative aspect-[3/4] overflow-hidden bg-surface"
        imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <h3 className="font-display text-sm font-bold leading-snug group-hover:text-accent">
          {book.title}
        </h3>
        <p className="text-xs text-muted">{book.author}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
          {status && <StatusBadge status={status} />}
          {book.topics.slice(0, 2).map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
