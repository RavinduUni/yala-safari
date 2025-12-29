'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const safariData = {
  'morning-safari': {
    name: 'Morning Safari',
    price: 50,
    duration: '4 Hours',
    time: '6:00 AM - 10:00 AM',
    description: 'Best for bird watching and spotting early wildlife activity.',
    priceUnit: 'person'
  },
  'evening-safari': {
    name: 'Evening Safari',
    price: 50,
    duration: '3.5 Hours',
    time: '2:30 PM - 6:30 PM',
    description: 'Golden hour lighting perfect for photography and leopard sightings.',
    priceUnit: 'person'
  },
  'full-day-safari': {
    name: 'Full-Day Safari',
    price: 110,
    duration: '12 Hours',
    time: '6:00 AM - 6:00 PM',
    description: 'Complete immersion with packed lunch, covering all zones of the park.',
    priceUnit: 'person'
  },
  'private-safari': {
    name: 'Private Safari Tours',
    price: 80,
    duration: '4 Hours',
    time: 'Flexible (Morning or Evening)',
    description: 'Exclusive jeep for you and your family with a dedicated naturalist guide.',
    priceUnit: 'person'
  },
  'photography-safari': {
    name: 'Photography Safari',
    price: 200,
    duration: 'Full Day',
    time: '6:00 AM - 6:00 PM',
    description: 'Specialized positioning for perfect shots with bean bags and expert guidance.',
    priceUnit: 'group'
  },
  'luxury-safari': {
    name: 'Luxury Safari',
    price: 120,
    duration: '5 Hours',
    time: 'Morning (6:00 AM - 11:00 AM)',
    description: 'Premium jeep with gourmet bush breakfast and senior naturalist.',
    priceUnit: 'person'
  }
}

export default function Book() {
  const searchParams = useSearchParams();
  const safariType = searchParams.get('type') || 'morning-safari';
  const [selectedSafari, setSelectedSafari] = useState(safariType);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    if (searchParams.get('type')) {
      setSelectedSafari(searchParams.get('type') || 'morning-safari');
    }
  }, [searchParams]);

  const currentSafari = safariData[selectedSafari as keyof typeof safariData] || safariData['morning-safari'];
  const totalPrice = currentSafari.priceUnit === 'group' ? currentSafari.price : currentSafari.price * guests;

  return (
    <>
      <Header />
      
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 py-6 md:px-8 md:py-10 dark:bg-background-dark">
        {/* Hero Header */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[300px] mb-10 flex flex-col justify-end group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(34, 30, 16, 0.9) 0%, rgba(34, 30, 16, 0.4) 50%, rgba(34, 30, 16, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7-zu6qaALfzBauiUmQ5u5zkBVq6ZSk9pkuSSnjKB7ocvPCf28K1JcfyqOTChnGQU_ZuhTUJ09Rgix0ng3uKMqjDnIJ_Kb-CuW3BzoGF1VCXcAYNPvRN04d0kAp1tlvEs_9UyHt6cCDNPR88_ajvHhhVqHyLotLXIiP2mp26vQvW3kql0MbrbT5-OVtyIiCpq-oqkUOEYh0JAwCe-Rje_1X6j5_Er6uSPqMzdmB8i3vYBnqWCDAUEP-4WYWPBAXgdfzvQFCxN7c3NP")`
            }}
          />
          <div className="relative z-10 p-8 md:p-12 max-w-3xl">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              Official Booking Partner
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Secure Your Yala Adventure
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
              Experience the wild with expert guides. Book your jeep safari today for an unforgettable journey 
              into the heart of Sri Lanka's wildlife.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column: Booking Form */}
          <div className="flex-1 w-full flex flex-col gap-10">
            {/* Section 1: Safari Type */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-[#231e10] font-bold text-sm">1</span>
                <h3 className="text-white text-2xl font-bold leading-tight">Choose your adventure</h3>
              </div>
              <div className="flex flex-col gap-4">
                {Object.entries(safariData).map(([key, safari]) => (
                  <label 
                    key={key}
                    className="group cursor-pointer relative flex items-start gap-4 rounded-xl border border-solid border-input-border bg-surface-dark/30 p-5 hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <input 
                      checked={selectedSafari === key}
                      onChange={() => setSelectedSafari(key)}
                      className="mt-1 h-5 w-5 border-2 border-input-border bg-transparent text-transparent checked:border-primary checked:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0" 
                      name="safari_type" 
                      type="radio" 
                      value={key}
                    />
                    <div className="flex grow flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-white text-lg font-bold">{safari.name}</p>
                        <span className="text-primary font-bold">${safari.price}<span className="text-sm font-normal text-gray-400">/{safari.priceUnit}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-[#cbbc90] text-sm mb-2">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span>{safari.time}</span>
                      </div>
                      <p className="text-[#cbbc90] text-sm">{safari.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* Section 1.5: Number of Guests */}
            {currentSafari.priceUnit !== 'group' && (
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-dark border border-primary text-primary font-bold text-sm">1.5</span>
                  <h3 className="text-white text-2xl font-bold leading-tight">Number of guests</h3>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-12 h-12 rounded-xl bg-surface-dark border border-border-dark hover:border-primary text-white flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="text-white text-2xl font-bold min-w-[60px] text-center">{guests}</span>
                  <button 
                    onClick={() => setGuests(guests + 1)}
                    className="w-12 h-12 rounded-xl bg-surface-dark border border-border-dark hover:border-primary text-white flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <span className="text-gray-400 ml-2">{guests === 1 ? 'Adult' : 'Adults'}</span>
                </div>
              </section>
            )}

            {/* Section 2: Personal Details */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-[#231e10] font-bold text-sm">2</span>
                <h3 className="text-white text-2xl font-bold leading-tight">Your details</h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-white text-sm font-medium mb-2">First Name *</span>
                    <input 
                      type="text"
                      className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal"
                      placeholder="John"
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white text-sm font-medium mb-2">Last Name *</span>
                    <input 
                      type="text"
                      className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal"
                      placeholder="Doe"
                      required
                    />
                  </label>
                </div>
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium mb-2">Email Address *</span>
                  <input 
                    type="email"
                    className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal"
                    placeholder="john.doe@example.com"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium mb-2">Phone Number *</span>
                  <input 
                    type="tel"
                    className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal"
                    placeholder="+94 77 123 4567"
                    required
                  />
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-yellow-500 text-background-dark font-bold px-8 py-4 text-lg transition-colors shadow-lg">
              <span>Confirm Booking</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          {/* Right Column: Summary */}
          <div className="w-full lg:w-80 sticky top-24">
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 shadow-xl">
              <h3 className="text-white text-xl font-bold mb-6">Booking Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#cbbc90]">Safari Type</span>
                  <span className="text-white font-medium">{currentSafari.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#cbbc90]">Duration</span>
                  <span className="text-white font-medium">{currentSafari.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#cbbc90]">Time</span>
                  <span className="text-white font-medium">{currentSafari.time}</span>
                </div>
                {currentSafari.priceUnit !== 'group' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#cbbc90]">Guests</span>
                    <span className="text-white font-medium">{guests} {guests === 1 ? 'Adult' : 'Adults'}</span>
                  </div>
                )}
                {currentSafari.priceUnit === 'group' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#cbbc90]">Pricing</span>
                    <span className="text-white font-medium">Per Group</span>
                  </div>
                )}
                <div className="h-px bg-border-dark my-4" />
                <div className="flex justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-primary font-bold text-xl">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
