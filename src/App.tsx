import { SpeedInsights } from '@vercel/speed-insights/react'
import TourPackages from '@/components/TourPackages'

export default function App() {
  return (
    <>
      <TourPackages />
      <SpeedInsights />
    </>
  )
}