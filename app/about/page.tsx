import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section
      id="about"
      className="mt-10 w-full px-4 py-12 md:py-20 bg-white"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-[#ad803c] font-bold text-2xl md:text-4xl mb-3">
          About Us
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Timeless design. Everyday confidence.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image (NO className as requested) */}
        <div className="flex justify-center">
          <Image
            src="/about_us.png"
            alt="About Us"
            width={600}
            height={400}
          />
        </div>

        {/* Text Card */}
        <div className="bg-yellow-50 rounded-2xl p-5 md:p-8 shadow-sm flex flex-col justify-center">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We are a modern watch brand built on the belief that great design should be timeless,
            functional, and accessible. Our collections are thoughtfully crafted to balance style
            and comfort, making them perfect for everyday wear and special moments alike.
            Inspired by clean aesthetics and bold details, each piece reflects precision, quality,
            and attention to detail. We design for everyone—men, women, and those who prefer
            versatile, unisex styles. At our core, we value simplicity, durability, and confidence,
            creating watches that seamlessly fit your lifestyle.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
