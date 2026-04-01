import { StatsBar } from '@/components/home/StatsBar'
import { FeaturedBooks } from '@/components/home/FeaturedBooks'
import { AppStoreBanner } from '@/components/home/AppStoreBanner'
import { CallToAction } from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <AppStoreBanner />
      <StatsBar />
      <FeaturedBooks />
      <CallToAction />
    </>
  )
}
