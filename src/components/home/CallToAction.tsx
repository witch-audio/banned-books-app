import Link from 'next/link'
import { HighlightText } from '@/components/ui/HighlightText'

export function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-4">
      <div className="rounded-xl border border-accent/10 bg-surface/50 px-8 py-12 text-center sm:px-14 sm:py-14">
        <blockquote className="mx-auto max-w-2xl">
          <span className="font-display text-3xl leading-none text-accent">&ldquo;</span>
          <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
            Books are the doors they want shut. Open them, and you&apos;ll see the truths{' '}
            <HighlightText>they fear</HighlightText>.
          </p>
        </blockquote>

        <p className="mt-5 text-sm text-muted">
          Every book on this list was challenged. Read them anyway.
        </p>

        <Link
          href="/browse"
          className="mt-6 inline-block rounded-md bg-accent px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-accent-hover"
        >
          Explore the List
        </Link>
      </div>
    </section>
  )
}
