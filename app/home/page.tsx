'use client'

import React, { useEffect, useState } from 'react'
import Hero from '../component/Hero'
import WatchCard from '../component/WatchCard'
import { getWatches } from '../lib/getWatches'
import { FiAward, FiTag, FiHeadphones } from 'react-icons/fi'

const why = [
  {
    id: 1,
    icon: <FiAward size={30} />,
    title: 'Premium Quality',
    desc: 'Our watches are crafted with precision and high-quality materials to ensure durability and timeless style.',
  },
  {
    id: 2,
    icon: <FiTag size={30} />,
    title: 'Affordable Luxury',
    desc: 'Experience the elegance of luxury watches without breaking the bank. Quality meets affordability at Mwangear.',
  },
  {
    id: 3,
    icon: <FiHeadphones size={30} />,
    title: 'Exceptional Support',
    desc: 'Our customer service team is here to assist you with any inquiries or support you may need.',
  },
]

const Page = () => {
  const [watches, setWatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const data = await getWatches()
        setWatches(data)
      } catch (error) {
        console.error('🔥 Firestore error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWatches()
  }, [])

  if (loading) return <p className="text-center text-white">Loading watches...</p>

  return (
    <div>
      <Hero />
      <div className="m-6">
        <h1 className="text-center text-[#ad803c] font-bold text-2xl md:text-3xl">
          Newest Additions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-200 p-5">
        <h1 className="text-center text-[#ad803c] font-bold text-2xl md:text-3xl">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
          {why.map((item) => (
            <div
              className="bg-[#1c1d1d] p-4 rounded-md my-4 flex flex-col items-center justify-center"
              key={item.id}
            >
              <div className="rounded-full bg-white h-18 w-18 text-[#ad803c] flex items-center justify-center p-4 mr-4">
                {item.icon}
              </div>
              <h1 className="text-2xl text-[#ad803c] font-bold">{item.title}</h1>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
