import React from 'react'
import { FiPhone, FiInstagram } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { pages } from '../../constants/constants'

const Footer = () => {
  return (
    <footer className="bg-[#1c1d1d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Image src='/logo.png' alt='MWANGEAR Logo' width={150} height={150} />
            <h2 className="text-2xl font-bold text-[#ad803c]">MWANGEAR</h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Premium watches and accessories crafted for style, precision, and everyday wear.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-[#ad803c]">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {pages.map((page) => (
                <li key={page.id}>
                  <Link
                    href={page.url}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Far Right) */}
          <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
            <h3 className="text-lg font-semibold text-[#ad803c]">Contact</h3>

            <a
              href="https://instagram.com/mwangear"
              target="_blank"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <FiInstagram size={18} />
              <span>@mwangear</span>
            </a>

            <div className="flex items-center gap-2">
              <FiPhone size={18} />
              <span>0701 222 736</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mwangear. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
