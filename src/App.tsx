import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import TourPackages from '@/components/TourPackages'

export default function App() {
  return (
    <>
      <TourPackages />
      <Analytics />
      <SpeedInsights />
    </>
  )
}