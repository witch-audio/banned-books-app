import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="font-display text-lg font-bold tracking-tight sm:text-xl">
          <span className="text-accent">B</span>anned<span className="text-accent">B</span>ooks
        </Link>

        <nav className="flex items-center gap-5">
          {NAV_LINKS.map((link) =>
            link.href === '/daily' ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md bg-accent px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-accent-hover"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
