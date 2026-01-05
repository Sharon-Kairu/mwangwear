import React from 'react'
import { Watch } from '../types/watch'
import Image from 'next/image'

interface Props {
  watch: Watch
}

const WatchCard = ({ watch }: Props) => {
  return (
    <div className="group bg-gray-200 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image Wrapper */}
      <div className="p-4">
        <div className="relative w-full h-[260px] bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={watch.image}
            alt={watch.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <h2 className="text-lg md:text-2xl font-semibold text-[#ad803c] tracking-tight">
          {watch.name}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {watch.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <p className="text-xl font-bold text-gray-900">
            KSH {watch.price.toLocaleString()}
          </p>

          <a
            href="https://wa.me/254701222736?text=Hello%20I%20am%20interested%20in%20buying%20an%20item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#ad803c] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 active:scale-95 transition-all">
              Buy Now
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}

export default WatchCard
