import type { Metadata } from 'next'
import { getAllBooks, getAllTopics } from '@/lib/data'
import { BrowseClient } from './BrowseClient'

export const metadata: Metadata = {
  title: 'Browse Challenged & Banned Books',
  description:
    'Search and filter through challenged and banned books. Find out why they were targeted and where to read them.',
}

export default function BrowsePage() {
  const books = getAllBooks()
  const topics = getAllTopics()

  return <BrowseClient books={books} topics={topics} />
}
