'use client'

import React, { useEffect, useState } from 'react'
import { pages } from '../../constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full'

  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black bg-opacity-70 z-[10040]"
        />
      )}

      {/* Mobile nav panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#ad803c] text-white z-[10050] transform ${navOpen} transition-transform duration-500 shadow-2xl`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-gray-200 transition"
        />

        {/* Nav Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold tracking-wide">
          {pages.map(page => {
            const href = page.url === 'home' ? '/' : `/${page.url}`

            // Only apply active styling on client-side
            const isActive = mounted
              ? (href === '/' && (pathname === '/' || pathname === '/home')) || pathname === href
              : false

            return (
              <Link
                key={page.id}
                href={href}
                onClick={closeNav} // close menu on link click
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-gray-600 font-semibold'
                    : 'hover:text-orange-400'
                }`}
              >
                {page.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
