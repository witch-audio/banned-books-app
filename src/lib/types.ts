export interface PurchaseLinks {
  bookshop?: string
  amazon?: string
  library?: string
  indiebound?: string
}

export interface Book {
  id: string
  slug: string
  title: string
  author: string
  description: string
  coverUrl: string
  isbn: string
  publishedYear: number
  topics: string[]
  challengeReasons: string[]
  featured: boolean
  purchaseLinks: PurchaseLinks
  relatedBookIds: string[]
}

export interface ChallengeEvent {
  id: string
  bookIds: string[]
  locationName: string
  city: string
  state: string
  institution: string
  institutionType: 'school_district' | 'library' | 'state_legislature' | 'school' | 'prison'
  date: string
  challengeReason: string
  status: 'challenged' | 'banned' | 'restricted' | 'reinstated'
  sourceIds: string[]
}

export interface Source {
  id: string
  title: string
  publisher: string
  url: string
  publishedAt: string
  sourceType: 'news' | 'organization' | 'government' | 'publisher'
}

export interface Puzzle {
  id: string
  bookId: string
  passage: string
  passageSource: string
  redactedWords: string[]
  revealOrder: number[]
  difficulty: 'easy' | 'medium' | 'hard'
  decoyBookIds: string[]
}

export interface GameState {
  puzzleId: string
  date: string
  guesses: string[]
  revealedCount: number
  status: 'playing' | 'won' | 'lost'
  hardMode: boolean
}
