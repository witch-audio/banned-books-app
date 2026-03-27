import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Badge, StatusBadge } from '@/components/ui/Badge'
import { ChallengeTimeline } from '@/components/books/ChallengeTimeline'
import { BuyBorrowLinks } from '@/components/books/BuyBorrowLinks'
import { RelatedBooks } from '@/components/books/RelatedBooks'
import {
  getAllSlugs,
  getBookBySlug,
  getEventsForBook,
  getRelatedBooks,
} from '@/lib/data'
import { getCoverUrl } from '@/lib/utils'
import { BookCover } from '@/components/books/BookCover'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const book = getBookBySlug(params.slug)
  if (!book) return { title: 'Book Not Found' }

  return {
    title: `${book.title} by ${book.author}`,
    description: `${book.title} has been challenged and banned. Learn why, see where it happened, and find where to read it.`,
    openGraph: {
      title: `${book.title} — BannedBooks.app`,
      description: book.description,
    },
  }
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug)
  if (!book) notFound()

  const events = getEventsForBook(book.id)
  const related = getRelatedBooks(book.relatedBookIds)
  const coverSrc = book.coverUrl || getCoverUrl(book.isbn)

  const statusPriority = ['banned', 'restricted', 'challenged', 'reinstated']
  const worstStatus = events.length > 0
    ? statusPriority.find((s) => events.some((e) => e.status === s)) || 'challenged'
    : null

  return (
    <Container className="pb-16 pt-10">
      {/* Book header */}
      <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
        <BookCover
          src={coverSrc}
          title={book.title}
          author={book.author}
          className="relative mx-auto aspect-[2/3] w-full max-w-[240px] overflow-hidden rounded-lg bg-surface md:mx-0 md:max-w-none"
        />

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            {worstStatus && <StatusBadge status={worstStatus} />}
            <span className="text-sm text-muted">{book.publishedYear}</span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {book.title}
          </h1>
          <p className="mt-1.5 text-lg text-muted">{book.author}</p>

          <p className="mt-5 leading-relaxed">{book.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {book.topics.map((topic) => (
              <Badge key={topic} variant="topic">
                {topic}
              </Badge>
            ))}
          </div>

          {book.challengeReasons.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                Why this book is challenged
              </h3>
              <ul className="mt-2 space-y-1">
                {book.challengeReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent">&bull;</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Challenge timeline */}
      <div className="mt-12">
        <ChallengeTimeline events={events} />
      </div>

      {/* Buy/Borrow links */}
      <div className="mt-12">
        <BuyBorrowLinks isbn={book.isbn} title={book.title} author={book.author} />
      </div>

      {/* Related books */}
      <div className="mt-12">
        <RelatedBooks books={related} />
      </div>
    </Container>
  )
}
