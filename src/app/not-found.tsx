import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight">
        This page hasn&apos;t been banned yet
      </h1>
      <p className="mt-3 text-muted">
        We couldn&apos;t find what you&apos;re looking for. It might have been moved or removed.
      </p>
      <Link
        href="/browse"
        className="mt-8 rounded-lg bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-accent-hover"
      >
        Browse All Books
      </Link>
    </Container>
  )
}
