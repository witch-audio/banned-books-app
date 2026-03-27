import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { HighlightText } from '@/components/ui/HighlightText'

export const metadata: Metadata = {
  title: 'About & Methodology',
  description:
    'How BannedBooks.app works, where our data comes from, and what we mean by challenged vs. banned.',
}

export default function AboutPage() {
  return (
    <Container className="pb-16 pt-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          About <HighlightText>This Project</HighlightText>
        </h1>

        <div className="mt-8 space-y-10 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              What This Is
            </h2>
            <p className="mt-3">
              BannedBooks.app is a reading-freedom tracker. We track where books are being
              challenged and removed from schools, libraries, and public institutions across the
              United States. We explain why they&apos;re being targeted. And we help you find,
              read, and buy those books.
            </p>
            <p className="mt-3 text-muted">
              This is not an academic database. It&apos;s not a protest sign. It&apos;s a useful
              tool for curious readers who want to know what&apos;s happening to books in
              America&mdash;and want to do something about it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Challenged vs. Banned
            </h2>
            <p className="mt-3">
              A <strong>challenge</strong> is a formal request to remove a book from a library,
              school curriculum, or classroom. Not every challenge succeeds.
            </p>
            <p className="mt-3">
              A <strong>ban</strong> is when a book is actually removed from shelves, curriculum,
              or circulation. Some bans are temporary. Some are permanent.
            </p>
            <p className="mt-3">
              A <strong>restriction</strong> means the book is still available but with limitations:
              parental permission required, moved to a different section, or removed from
              recommended reading lists.
            </p>
            <p className="mt-3 text-muted">
              We track all three. We label them clearly. We don&apos;t overstate claims.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Our Sources
            </h2>
            <p className="mt-3">
              Every challenge event on this site is backed by at least one source. We prioritize:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { name: 'PEN America', url: 'https://pen.org', desc: 'Index of School Book Bans and broader research on literary freedom.' },
                { name: 'American Library Association', url: 'https://www.ala.org/advocacy/bbooks', desc: 'Annual lists of most challenged books and challenge tracking data.' },
                { name: 'Verified news reporting', url: '#', desc: 'Coverage from outlets like NPR, The Washington Post, The Texas Tribune, and local newsrooms.' },
              ].map((source) => (
                <li key={source.name} className="flex items-start gap-2.5">
                  <span className="mt-1 text-accent">&bull;</span>
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-accent hover:underline"
                    >
                      {source.name}
                    </a>
                    <span className="text-muted"> &mdash; {source.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Accuracy & Updates
            </h2>
            <p className="mt-3">
              Book challenges are a moving target. New challenges happen weekly. Statuses change
              as school boards vote, courts rule, and communities respond. We do our best to keep
              this data current, but if you spot an error or have a correction, we want to hear
              about it.
            </p>
            <p className="mt-3">
              We are careful not to overstate claims. If we&apos;re unsure about a detail,
              we note the uncertainty. If a source conflicts with another, we reference both.
            </p>
          </section>

          <section className="rounded-lg border border-accent/15 bg-surface/50 p-7">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              Why This Matters
            </h2>
            <p className="mt-3">
              Between 2021 and 2024, book challenges in the United States surged to levels not seen
              in decades. Thousands of titles were pulled from school libraries, classroom shelves,
              and public library systems. Many of these books deal with race, gender identity,
              sexuality, and the messier parts of the human experience.
            </p>
            <p className="mt-3">
              We believe readers should know what&apos;s being removed from their communities
              and why. We believe making that information accessible, searchable, and
              shareable is a public good. And we believe the best response to a book being
              challenged is to read it.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
