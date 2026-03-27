import Link from 'next/link'
import { HighlightText } from '@/components/ui/HighlightText'

export function Hero() {
  return (
    <section className="relative flex min-h-[clamp(500px,65vh,750px)] flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-16 text-center">
      {/* Subtle radial glow behind heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(250, 204, 21, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
          A Reading-Freedom Tracker
        </p>

        <h1
          className="font-display font-bold uppercase leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6.5rem)' }}
        >
          The stories they{' '}
          <br className="hidden sm:block" />
          hope you&apos;ll <HighlightText animate>ignore</HighlightText>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base text-muted sm:text-lg">
          Discover challenged and banned books across America.
          See where they were targeted. Read them anyway.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/browse"
            className="rounded-md bg-accent px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-accent-hover sm:px-9 sm:py-3.5"
          >
            Browse All Books
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-foreground/20 px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent sm:px-9 sm:py-3.5"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
