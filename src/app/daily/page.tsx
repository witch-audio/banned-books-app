import type { Metadata } from 'next'
import { GameClient } from './GameClient'

export const metadata: Metadata = {
  title: 'REDACTED — Daily Banned Book Game',
  description:
    'A daily game. A passage from a banned book, redacted. Can you identify it before all the words are revealed?',
  openGraph: {
    title: 'REDACTED — Can you identify the banned book?',
    description: 'A daily passage from a banned book with key words blacked out. Guess in as few reveals as possible.',
  },
}

export default function DailyPage() {
  return <GameClient />
}
