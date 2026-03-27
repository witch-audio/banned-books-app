export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export function fuzzyMatch(text: string, query: string): boolean {
  const normalized = text.toLowerCase()
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  return terms.every((term) => normalized.includes(term))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getCoverUrl(isbn: string): string {
  if (!isbn) return ''
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`
}
