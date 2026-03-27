import { BOOKSHOP_AFFILIATE_ID } from '@/lib/constants'

interface BuyBorrowLinksProps {
  isbn: string
  title: string
  author: string
}

export function BuyBorrowLinks({ isbn, title, author }: BuyBorrowLinksProps) {
  const query = encodeURIComponent(`${title} ${author}`)

  const links = [
    {
      label: 'Buy on Bookshop.org',
      sublabel: 'Supports indie bookstores',
      href: isbn
        ? `https://bookshop.org/a/${BOOKSHOP_AFFILIATE_ID}/${isbn}`
        : `https://bookshop.org/search?keywords=${query}`,
      primary: true,
    },
    {
      label: 'Find in a Library',
      sublabel: 'Open Library — free to read',
      href: isbn
        ? `https://openlibrary.org/isbn/${isbn}`
        : `https://openlibrary.org/search?q=${query}`,
      primary: false,
    },
    {
      label: 'Search Amazon',
      sublabel: '',
      href: `https://www.amazon.com/s?k=${isbn || query}`,
      primary: false,
    },
  ]

  return (
    <section>
      <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
        Get This Book
      </h2>
      <p className="mt-1 text-sm text-muted">They tried to hide it. Read it anyway.</p>

      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between rounded-lg border p-4 transition-all ${
              link.primary
                ? 'border-accent bg-accent text-black hover:bg-accent-hover'
                : 'border-card-border bg-card hover:border-accent/30'
            }`}
          >
            <div>
              <span className="font-display font-bold">{link.label}</span>
              {link.sublabel && (
                <span className={`ml-2 text-xs ${link.primary ? 'text-black/60' : 'text-muted'}`}>
                  {link.sublabel}
                </span>
              )}
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
