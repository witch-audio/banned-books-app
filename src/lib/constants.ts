export const SITE_NAME = 'BannedBooks.app'
export const SITE_TAGLINE = 'Discover the books people tried to erase.'
export const SITE_DESCRIPTION =
  'A reading-freedom tracker. Explore challenged and banned books, see where they were targeted, and find where to read them.'
export const SITE_URL = 'https://bannedbooks.app'

export const BOOKSHOP_AFFILIATE_ID = 'bannedbooks'

export const NAV_LINKS = [
  { label: 'Daily', href: '/daily' },
  { label: 'Browse', href: '/browse' },
  { label: 'About', href: '/about' },
] as const

export const STATUS_LABELS: Record<string, string> = {
  challenged: 'Challenged',
  banned: 'Banned',
  restricted: 'Restricted',
  reinstated: 'Reinstated',
}

export const STATUS_COLORS: Record<string, string> = {
  challenged: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  banned: 'bg-red-500/20 text-red-400 border-red-500/30',
  restricted: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  reinstated: 'bg-green-500/20 text-green-400 border-green-500/30',
}
