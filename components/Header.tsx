'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-b-[#e6e8eb] dark:border-b-[#493f22] bg-background-light/90 dark:bg-[#231e10]/90 backdrop-blur-md px-4 sm:px-10 py-3">
      <div className="flex items-center justify-between whitespace-nowrap max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 text-[#111418] dark:text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">forest</span>
          </div>
          <Link href="/">
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Yala Safari
            </h2>
          </Link>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link 
              href="/" 
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Safaris
            </Link>
            <Link 
              href="/gallery" 
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
          <Link href="/book">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary hover:bg-yellow-500 transition-colors text-[#231e10] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Book Now</span>
            </button>
          </Link>
        </div>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-md border-b border-border-dark py-4">
          <div className="flex flex-col gap-4 px-4">
            <Link href="/" className="text-white text-sm font-medium hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link href="/services" className="text-white text-sm font-medium hover:text-primary transition-colors py-2">
              Safaris
            </Link>
            <Link href="/gallery" className="text-white text-sm font-medium hover:text-primary transition-colors py-2">
              Gallery
            </Link>
            <Link href="/about" className="text-white text-sm font-medium hover:text-primary transition-colors py-2">
              About Us
            </Link>
            <Link href="/contact" className="text-white text-sm font-medium hover:text-primary transition-colors py-2">
              Contact
            </Link>
            <Link href="/book" className="mt-2">
              <button className="w-full flex items-center justify-center rounded-xl h-10 px-4 bg-primary hover:bg-yellow-500 transition-colors text-[#231e10] text-sm font-bold">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
