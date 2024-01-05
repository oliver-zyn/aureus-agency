'use client'

import { List, X } from 'phosphor-react'

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import NavLinks from './NavLinks'
import WhatsAppButton from './WhatsAppButton'
import { buttonVariants } from './ui/button'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-purple-aureus font-bold">AureusAgency.</span>
          </Link>

          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={buttonVariants({
                variant: 'ghost',
                className: 'focus:outline-none',
              })}
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <NavLinks size="sm" closeMobileMenu={closeMobileMenu} />
            <WhatsAppButton
              className="bg-purple-aureus hover:bg-purple-aureus/80"
              size="default"
            />
          </div>

          {isMobileMenuOpen ? (
            <div className="flex animate-fadeIn sm:hidden flex-col justify-center gap-10 p-6 absolute inset-x-0 top-16 border-b border-gray-200 bg-white/95 backdrop-blur-lg transition-all">
              <NavLinks size="lg" closeMobileMenu={closeMobileMenu} />
              <WhatsAppButton
                className="bg-purple-aureus hover:bg-purple-aureus/80"
                size="lg"
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
