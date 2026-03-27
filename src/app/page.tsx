import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/home/StatsBar'
import { FeaturedBooks } from '@/components/home/FeaturedBooks'
import { CallToAction } from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedBooks />
      <CallToAction />
    </>
  )
}
