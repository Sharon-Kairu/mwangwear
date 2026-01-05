import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'

const page = () => {
  return (
    <section
      id="contact"
      className="mt-10 w-full px-4 py-12 md:py-20 bg-white"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-[#ad803c] font-bold text-2xl md:text-4xl mb-3">
          Want to get in touch with us?
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Reach out to us through any of the platforms below — we’re always happy to help.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/contact_us.png"
            alt="Contact Us"
            width={520}
            height={420}
            
          />
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4">
          {/* Instagram 1 */}
          <ContactCard
            href="https://www.instagram.com/mwangear_ke?igsh=MWY2M2o2YjR2ZXFzNw=="
            bg="bg-pink-50"
            text="text-pink-500"
            icon={<FaInstagram size={28} />}
            label="@mwangear_ke"
          />

          {/* Instagram 2 */}
          <ContactCard
            href="https://www.instagram.com/tick25.ke?igsh=MXVjb2JyZGN4aGhpcw=="
            bg="bg-pink-50"
            text="text-pink-500"
            icon={<FaInstagram size={28} />}
            label="Tick25"
          />

          {/* Instagram 3 */}
          <ContactCard
            href="https://www.instagram.com/mwangear_accessories?igsh=azcyN3ppM2g5OXE4"
            bg="bg-pink-50"
            text="text-pink-500"
            icon={<FaInstagram size={28} />}
            label="@mwangear_accessories"
          />

          {/* WhatsApp */}
          <ContactCard
            href="https://wa.me/254701222736"
            bg="bg-green-50"
            text="text-green-600"
            icon={<FaWhatsapp size={28} />}
            label="+254 701 222 736"
          />

          {/* Phone */}
          <ContactCard
            href="tel:0701222736"
            bg="bg-yellow-50"
            text="text-yellow-600"
            icon={<FaPhone size={26} />}
            label="0701 222 736"
          />
        </div>
      </div>
    </section>
  )
}

export default page

/* Small reusable card component */
const ContactCard = ({ href, bg, text, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${bg} flex items-center gap-4 p-4 md:p-5 rounded-2xl shadow-sm
      hover:shadow-md hover:scale-[1.02] transition-all duration-300`}
  >
    <div className={`${text}`}>{icon}</div>
    <span className={`${text} font-semibold text-base md:text-lg`}>
      {label}
    </span>
  </a>
)
