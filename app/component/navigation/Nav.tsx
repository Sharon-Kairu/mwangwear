'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { pages } from '../../constants/constants'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'

type Props = { openNav: () => void }

const Nav = ({ openNav }: Props) => {
  const pathname = usePathname()
  const isHome = pathname === '/home' || pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgClass = isHome
    ? isScrolled
      ? 'bg-[#1c1d1d]'
      : 'bg-transparent'
    : 'bg-[#1c1d1d]'

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 
      h-14 md:h-16
      ${bgClass} flex items-center justify-between 
      px-4 md:px-10 transition-colors duration-300`}
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/logo.png"
          alt="MWANGEAR Logo"
          width={100}
          height={100}
          
        />

        <h1 className="text-[#ad803c] text-xl font-bold sm:text-base md:text-3xl font-bold tracking-wide">
          MWANGEAR
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 lg:mr-16">
        {pages.map((page) => {
          const href = page.url === 'home' ? '/' : `/${page.url}`

          const isActive =
            mounted &&
            ((href === '/' && (pathname === '/' || pathname === '/home')) ||
              pathname === href)

          return (
            <Link
              key={page.id}
              href={href}
              className={`text-lg font-medium transition
                ${
                  isActive
                    ? 'text-[#ad803c]'
                    : 'text-white '
                }`}
            >
              {page.title}
            </Link>
          )
        })}
      </div>

      {/* Contact Us Button (Desktop) */}
      <Link href="/contact" className="hidden md:block">
        <button
          className="bg-[#ad803c] text-white font-semibold 
          px-4 py-2 rounded-md 
          hover:bg-yellow-600 transition"
        >
          Contact Us
        </button>
      </Link>

      {/* Mobile Menu Icon */}
      <FiMenu
        onClick={openNav}
        className="md:hidden text-white text-3xl cursor-pointer"
      />
    </div>
  )
}

export default Nav
