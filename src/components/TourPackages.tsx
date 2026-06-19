import { useState } from 'react'
import { MapPin, Camera, ChevronLeft, ChevronRight, Compass, TreePalm, Mountain, Binoculars, Sparkles, Clock, Users } from 'lucide-react'
import { cn } from '@/lib/cn'

interface TourImage {
  src: string
  alt: string
  credit: string
}

interface TourPackage {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  color: string
  gradient: string
  highlights: string[]
  duration: string
  groupSize: string
  images: TourImage[]
}

const tours: TourPackage[] = [
  {
    id: 'cultural-triangle',
    title: 'Cultural Triangle Tour',
    subtitle: 'Ancient Wonders & Sacred Heritage',
    description: 'Journey through Sri Lanka\'s legendary Cultural Triangle — home to Sigiriya\'s towering Lion Rock, the sacred Dambulla Cave Temple with its golden Buddha statues, and the ancient cities of Anuradhapura and Polonnaruwa. Walk in the footsteps of kings and monks across 2,500 years of history.',
    icon: <Compass className="w-6 h-6" />,
    color: 'from-amber-600 to-orange-700',
    gradient: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20',
    highlights: ['Sigiriya Lion Rock Climb', 'Dambulla Cave Temple', 'Polonnaruwa Ruins', 'Ancient Bathing Ponds'],
    duration: '3-4 Days',
    groupSize: '2-12',
    images: [
      { src: 'https://images.unsplash.com/photo-1711982537799-96f3b8d88c4f?w=1200&q=80&auto=format', alt: 'Aerial view of Sigiriya Rock Fortress', credit: 'Sander Traa' },
      { src: 'https://images.unsplash.com/photo-1725972198931-d7fe51e80188?w=1200&q=80&auto=format', alt: 'Golden Buddha statues in Dambulla Cave Temple', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1610257696823-eab8e3bcd3e2?w=1200&q=80&auto=format', alt: 'Sigiriya Rock Fortress from the gardens', credit: 'Dylan Shaw' }
    ]
  },
  {
    id: 'hill-country',
    title: 'Hill Country & Tea Plantations',
    subtitle: 'Misty Mountains & Emerald Tea Estates',
    description: 'Escape to the cool, misty highlands where rolling hills are carpeted in emerald tea plantations. Ride the iconic blue train from Kandy to Ella through breathtaking scenery, visit working tea factories, and trek to stunning waterfalls hidden in the clouds.',
    icon: <Mountain className="w-6 h-6" />,
    color: 'from-emerald-600 to-teal-700',
    gradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
    highlights: ['Kandy-to-Ella Train Ride', 'Tea Factory Visit', 'Little Adams Peak Trek', 'Ravana Waterfall'],
    duration: '3-5 Days',
    groupSize: '2-10',
    images: [
      { src: 'https://images.unsplash.com/photo-1727313639663-f3b7d0e5a6ef?w=1200&q=80&auto=format', alt: 'Tea workers on lush green plantation', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1712971149830-8cfa6dba2b38?w=1200&q=80&auto=format', alt: 'Iconic blue train through misty forest', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1733509454438-4c647d445112?w=1200&q=80&auto=format', alt: 'Workers plucking tea leaves on mountain slopes', credit: 'Unsplash' }
    ]
  },
  {
    id: 'southern-beach',
    title: 'Southern Beach Paradise',
    subtitle: 'Turquoise Waters & Golden Sands',
    description: 'Discover Sri Lanka\'s stunning southern coastline where pristine beaches meet swaying palm trees. From the surf culture of Mirissa to the historic Galle Fort and the hidden coves of Tangalle, this is tropical paradise at its finest.',
    icon: <TreePalm className="w-6 h-6" />,
    color: 'from-cyan-600 to-blue-700',
    gradient: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20',
    highlights: ['Mirissa Beach', 'Galle Fort Sunset', 'Whale Watching', 'Coconut Tree Hill'],
    duration: '3-4 Days',
    groupSize: '2-8',
    images: [
      { src: 'https://images.unsplash.com/photo-1744631458840-b1e1b5c5e3d7?w=1200&q=80&auto=format', alt: 'Tropical Mirissa Beach with turquoise water', credit: 'Zoshua Colah' },
      { src: 'https://images.unsplash.com/photo-1748369228691-e8a3c2d8e1f4?w=1200&q=80&auto=format', alt: 'Mirissa shoreline with golden sand', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1748369228401-af1e3b2d1c98?w=1200&q=80&auto=format', alt: 'Rocky beach with turquoise ocean and palm trees', credit: 'Unsplash' }
    ]
  },
  {
    id: 'wildlife-safari',
    title: 'Wildlife Safari Adventure',
    subtitle: 'Elephants, Leopards & Untamed Wilderness',
    description: 'Embark on an unforgettable safari through Sri Lanka\'s premier national parks. Track majestic elephants in Udawalawe, search for elusive leopards in Yala, and witness incredible biodiversity in pristine natural habitats that rival any African safari.',
    icon: <Binoculars className="w-6 h-6" />,
    color: 'from-green-600 to-lime-700',
    gradient: 'bg-gradient-to-br from-green-500/20 to-lime-600/20',
    highlights: ['Yala Leopard Tracking', 'Udawalawe Elephants', 'Bird Watching', 'Minneriya Gathering'],
    duration: '2-4 Days',
    groupSize: '2-6',
    images: [
      { src: 'https://images.unsplash.com/photo-1675296535504-e18b1a70e3a8?w=1200&q=80&auto=format', alt: 'Herd of elephants on lush green grass', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1675296535490-e0f80e0b28c0?w=1200&q=80&auto=format', alt: 'Majestic elephant walking through green field', credit: 'Sachindra Chalaka' },
      { src: 'https://images.unsplash.com/photo-1666442990289-4c14e5a9f2b1?w=1200&q=80&auto=format', alt: 'Large elephant in dense green forest', credit: 'Unsplash' }
    ]
  },
  {
    id: 'custom-tour',
    title: 'Custom / Tailor-Made Tour',
    subtitle: 'Your Dream Itinerary, Perfectly Crafted',
    description: 'Design your own Sri Lanka adventure! Whether you want to combine culture with beaches, add a hot air balloon ride, explore hidden temples, or create a honeymoon itinerary — our experts will craft the perfect journey tailored entirely to your interests and pace.',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-700',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
    highlights: ['Personalized Itinerary', 'Private Chauffeur', 'Flexible Schedule', 'Local Experiences'],
    duration: 'Flexible',
    groupSize: '1-20',
    images: [
      { src: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80&auto=format', alt: 'Galle Lighthouse along the coastline', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1704857135721-e0c88f1c1b85?w=1200&q=80&auto=format', alt: 'Lighthouse and ocean view', credit: 'Unsplash' },
      { src: 'https://images.unsplash.com/photo-1586526399069-e50c0e59fb32?w=1200&q=80&auto=format', alt: 'Scenic train journey through green jungle', credit: 'Unsplash' }
    ]
  }
]

function ImageGallery({ images, tourId }: { images: TourImage[]; tourId: string }) {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((c) => (c + 1) % images.length)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  return (
    <div className="relative group overflow-hidden rounded-t-2xl aspect-[16/10]">
      {images.map((img, i) => (
        <div key={`${tourId}-${i}`} className={cn('absolute inset-0 transition-all duration-700 ease-in-out', i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105')}>
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110"><ChevronLeft className="w-5 h-5" /></button>
      <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110"><ChevronRight className="w-5 h-5" /></button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (<button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i) }} className={cn('h-1.5 rounded-full transition-all duration-300', i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70')} />))}
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs text-white/90">
        <Camera className="w-3 h-3" /><span>{current + 1}/{images.length}</span>
      </div>
    </div>
  )
}

function TourCard({ tour }: { tour: TourPackage }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
      <ImageGallery images={tour.images} tourId={tour.id} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br', tour.color)}>{tour.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">{tour.title}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{tour.subtitle}</p>
            </div>
          </div>
        </div>
        <p className={cn('text-gray-600 text-sm leading-relaxed mb-4', !isExpanded && 'line-clamp-3')}>{tour.description}</p>
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-sm font-medium text-blue-600 hover:text-blue-700 mb-4 self-start transition-colors">{isExpanded ? 'Show less' : 'Read more...'}</button>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>{tour.duration}</span></div>
          <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /><span>{tour.groupSize} guests</span></div>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {tour.highlights.map((h) => (<span key={h} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"><MapPin className="w-3 h-3 text-gray-400" />{h}</span>))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button className={cn('w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] bg-gradient-to-r', tour.color)}>Explore This Tour</button>
        </div>
      </div>
    </div>
  )
}

export default function TourPackages() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="mb-6"><img src="./logo.png" alt="Ikshu Tours and Travels" className="mx-auto h-40 w-auto drop-shadow-2xl" /></div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Discover the Pearl of the Indian Ocean</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From ancient rock fortresses to pristine beaches, misty tea plantations to wild safari adventures — explore Sri Lanka your way.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/60 shadow-lg">
            <p className="text-gray-600 text-sm">Not sure which tour is right for you?</p>
            <button className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold text-sm hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">Chat With Our Travel Experts</button>
          </div>
        </div>
      </div>
    </section>
  )
}