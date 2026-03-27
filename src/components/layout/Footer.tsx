import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-base font-bold tracking-tight">
              <span className="text-accent">B</span>anned<span className="text-accent">B</span>ooks
            </p>
            <p className="mt-1.5 text-sm text-muted">
              A reading-freedom tracker for challenged and banned books.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Explore
            </h4>
            <ul className="mt-2.5 space-y-1.5">
              <li>
                <Link href="/browse" className="text-sm text-foreground/70 transition-colors hover:text-accent">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/70 transition-colors hover:text-accent">
                  About & Sources
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-foreground/70 transition-colors hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Sources
            </h4>
            <ul className="mt-2.5 space-y-1.5">
              <li>
                <a
                  href="https://pen.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  PEN America
                </a>
              </li>
              <li>
                <a
                  href="https://www.ala.org/advocacy/bbooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  ALA Banned Books
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-card-border pt-5 text-center text-xs text-muted">
          <p>
            Data sourced from PEN America, the American Library Association, and verified news reporting.
          </p>
          <p className="mt-0.5">
            &copy; {new Date().getFullYear()} BannedBooks.app. Read freely.
          </p>
        </div>
      </div>
    </footer>
  )
}
