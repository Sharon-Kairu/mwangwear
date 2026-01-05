import React from 'react'

const Hero = () => {
  return (
    <div 
      className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Text */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ad803c] mb-4">
          Welcome to Mwangear
        </h1>

        <p className="text-gray-200 text-lg leading-relaxed">
          Discover premium timepieces crafted for elegance, precision, and
          timeless style. Designed to stand out — every second counts.
        </p>
      </div>
    </div>
  )
}

export default Hero
