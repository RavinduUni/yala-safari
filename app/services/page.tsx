'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { safariCategories, safariPackages, getPackagesByCategory } from '@/config/safari-config'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  
  const displayedPackages = selectedCategory === "all" 
    ? safariPackages 
    : getPackagesByCategory(selectedCategory)


  return (
    <>
      <Header />
      
      <div className="relative w-full dark:bg-background-dark">
        {/* Hero Section */}
        <div className="w-full">
          <div className="w-full">
            <div className="w-full">
              <div className="w-full">
                <div 
                  className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8 relative overflow-hidden group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuChIOWwzdf23cBwHqMdpTMnnhqTLPNJ4Ouj9_77G63UCCmLYYC9tN5S4u9YMKH-Ctoax0aQJpG--ggwQg2NwiaN-Cv9lDvst6QEXwxPY95QzuD1vZKiUilw7CF7GLw9NyTSOJ8vbDDDkVvn0NzqoYIzIjNeQV8MEwwC9oIfHPqloLFWiqBV4uiXOO1wLFoUx7HaoPGT_rDPA-gDdBRWY5sl9kUPmRfi5ZjbCloGtrE6YehzrKwSUaEvImKKFH6rtftbps81RKc1eHTh")`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
                  <div className="flex flex-col gap-4 text-center relative z-10 max-w-2xl">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Welcome to the Jungle</span>
                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                      Discover the Wild Heart of Yala
                    </h1>
                    <h2 className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto drop-shadow-md">
                      Choose your adventure. From golden sunrises to elusive leopards, experience Sri Lanka's premier wildlife sanctuary.
                    </h2>
                  </div>
                  <div className="flex gap-4 relative z-10 flex-wrap justify-center">
                    <Link href="/pricing">
                      <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-primary hover:bg-[#dca60e] transition-all transform hover:scale-105 text-background-dark text-base font-bold">
                        View Safari Packages
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-white text-base font-bold">
                        Plan Your Trip
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 md:px-40 py-5 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between px-4 pb-6 pt-5 gap-4">
              <div>
                <h2 className="text-slate-900 dark:text-white text-[32px] font-bold leading-tight tracking-[-0.015em]">
                  Our Safari Experiences
                </h2>
                <p className="text-slate-600 dark:text-[#cbbc90] mt-2 text-base">
                  Expertly curated tours for every kind of explorer
                </p>
              </div>
              {/* Category Filter Chips */}
              <div className="flex gap-2 flex-wrap">
                <button 
                  onClick={() => setSelectedCategory("all")}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-4 transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-background-dark shadow-md shadow-primary/20"
                      : "bg-surface-dark border border-[#493f22] hover:border-primary/50 text-white/90 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  <p className="text-sm font-bold leading-normal">All Safaris</p>
                </button>
                {safariCategories.map((category) => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-4 transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-primary text-background-dark shadow-md shadow-primary/20"
                        : "bg-surface-dark border border-[#493f22] hover:border-primary/50 text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {category === "Private All-Inclusive" ? "star" : 
                       category === "Shared All-Inclusive" ? "groups" : 
                       category === "Private Jeep-Only" ? "directions_car" : "group"}
                    </span>
                    <p className="text-sm font-bold leading-normal">
                      {category}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {displayedPackages.map((pkg, index) => (
                <div 
                  key={pkg.slug}
                  className="flex flex-col bg-surface-dark rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group border border-[#3a321d]"
                >
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover relative"
                    style={{ backgroundImage: `url("${pkg.image}")` }}
                  >
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/90">
                        {pkg.category.replace("Private All-Inclusive ", "")}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {pkg.title}
                      </h3>
                    </div>
                    <p className="text-[#cbbc90] text-sm font-normal leading-relaxed line-clamp-2">
                      {pkg.shortDescription}
                    </p>
                    <div className="my-2 h-px w-full bg-[#493f22]" />
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1.5 text-white/80">
                        <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/80">
                        <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
                        <span>Private</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="text-xs text-[#cbbc90]">Starting from</span>
                        <span className="text-lg font-bold text-white">
                          ${pkg.startingPrice} <span className="text-xs font-normal text-white/50">/ person</span>
                        </span>
                      </div>
                      <Link href={`/services/${pkg.slug}`} className="flex-1">
                        <button className="w-full cursor-pointer bg-primary hover:bg-[#dca60e] text-background-dark font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                          View Details
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
