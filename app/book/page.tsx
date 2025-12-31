'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { safariPackages } from '@/config/safari-config'

export default function Book() {
  const searchParams = useSearchParams();
  const safariParam = searchParams.get('safari');
  const [selectedSafari, setSelectedSafari] = useState(safariParam || safariPackages[0].slug);
  const [selectedDate, setSelectedDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (safariParam) {
      setSelectedSafari(safariParam);
    }
  }, [safariParam]);

  const currentSafari = safariPackages.find(pkg => pkg.slug === selectedSafari) || safariPackages[0];
  const totalGuests = adults + children + infants;
  
  // Find the appropriate pricing tier based on group size
  const pricingTier = currentSafari.pricingTiers.find(tier => {
    const groupSize = parseInt(tier.groupSize.split(' ')[0]);
    return totalGuests <= groupSize;
  }) || currentSafari.pricingTiers[currentSafari.pricingTiers.length - 1];
  
  const totalPrice = (adults * pricingTier.pricePerPerson) + (children * pricingTier.childPrice) + (infants * pricingTier.infantPrice);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!selectedDate) newErrors.date = 'Date is required';
    if (adults < 1) newErrors.adults = 'At least 1 adult required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappMessage = `*New Safari Booking Request*\n\n*Safari:* ${currentSafari.title}\n*Date:* ${selectedDate}\n*Guests:* ${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s)\n\n*Contact Details:*\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\n*Message:* ${message || 'N/A'}\n\n*Total Price:* $${totalPrice.toFixed(2)}`;
      const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

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

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column: Booking Form */}
          <div className="flex-1 w-full flex flex-col gap-8">
            {/* Section 1: Safari Type */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-[#231e10] font-bold text-sm">1</span>
                <h3 className="text-white text-2xl font-bold leading-tight">Choose Your Safari</h3>
              </div>
              <label className="flex flex-col">
                <span className="text-white text-sm font-medium mb-2">Safari Package *</span>
                <select
                  value={selectedSafari}
                  onChange={(e) => setSelectedSafari(e.target.value)}
                  className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 px-4 text-base font-normal"
                  required
                >
                  {safariPackages.map((pkg) => (
                    <option key={pkg.slug} value={pkg.slug}>
                      {pkg.title} - ${pkg.startingPrice} ({pkg.duration})
                    </option>
                  ))}
                </select>
              </label>
              <div className="mt-4 bg-surface-dark/50 border border-[#493f22] rounded-lg p-4">
                <p className="text-[#cbbc90] text-sm mb-2">{currentSafari.shortDescription}</p>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                    <span>{currentSafari.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
                    <span>From ${currentSafari.startingPrice}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Date Selection */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-[#231e10] font-bold text-sm">2</span>
                <h3 className="text-white text-2xl font-bold leading-tight">Select Date</h3>
              </div>
              <label className="flex flex-col">
                <span className="text-white text-sm font-medium mb-2">Preferred Date *</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border ${errors.date ? 'border-red-500' : 'border-[#685a31]'} bg-[#342d18] focus:border-primary h-14 px-4 text-base font-normal`}
                  required
                />
                {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date}</span>}
              </label>
            </section>

            {/* Section 3: Number of Guests */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-[#231e10] font-bold text-sm">3</span>
                <h3 className="text-white text-2xl font-bold leading-tight">Number of Guests</h3>
              </div>
              <div className="space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between bg-surface-dark/50 border border-[#493f22] rounded-lg p-4">
                  <div>
                    <p className="text-white font-medium">Adults</p>
                    <p className="text-[#cbbc90] text-xs">Age 12+</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-white text-xl font-bold min-w-[40px] text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
                
                {/* Children */}
                <div className="flex items-center justify-between bg-surface-dark/50 border border-[#493f22] rounded-lg p-4">
                  <div>
                    <p className="text-white font-medium">Children</p>
                    <p className="text-[#cbbc90] text-xs">Age 5-11</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-white text-xl font-bold min-w-[40px] text-center">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
                
                {/* Infants */}
                <div className="flex items-center justify-between bg-surface-dark/50 border border-[#493f22] rounded-lg p-4">
                  <div>
                    <p className="text-white font-medium">Infants</p>
                    <p className="text-[#cbbc90] text-xs">Below 5 years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                      className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-white text-xl font-bold min-w-[40px] text-center">{infants}</span>
                    <button
                      type="button"
                      onClick={() => setInfants(infants + 1)}
                      className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Personal Details */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-[#231e10] font-bold text-sm">4</span>
                <h3 className="text-white text-2xl font-bold leading-tight">Your Details</h3>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium mb-2">Full Name *</span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border ${errors.fullName ? 'border-red-500' : 'border-[#685a31]'} bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal`}
                    placeholder="John Doe"
                    required
                  />
                  {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName}</span>}
                </label>
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium mb-2">Email Address *</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border ${errors.email ? 'border-red-500' : 'border-[#685a31]'} bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal`}
                    placeholder="john.doe@example.com"
                    required
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                </label>
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium mb-2">Phone Number *</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border ${errors.phone ? 'border-red-500' : 'border-[#685a31]'} bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal`}
                    placeholder="+94 77 123 4567"
                    required
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                </label>
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium mb-2">Special Requests (Optional)</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary placeholder:text-[#cbbc90] p-[15px] text-base font-normal resize-none"
                    placeholder="Any special requirements or questions..."
                  />
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-yellow-500 text-[#231e10] font-bold px-8 py-4 text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="material-symbols-outlined">send</span>
              <span>Confirm Booking Request</span>
            </button>
            <p className="text-[#cbbc90] text-sm text-center -mt-4">
              You'll be redirected to WhatsApp to complete your booking
            </p>
          </div>

          {/* Right Column: Summary */}
          <div className="w-full lg:w-96 lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-surface-dark to-background-dark border-2 border-primary/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Booking Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm pb-3 border-b border-[#493f22]">
                  <span className="text-[#cbbc90]">Safari Package</span>
                  <span className="text-white font-medium text-right max-w-[180px]">{currentSafari.title}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#cbbc90]">Duration</span>
                  <span className="text-white font-medium">{currentSafari.duration}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#cbbc90]">Date</span>
                    <span className="text-white font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-[#cbbc90]">Adults</span>
                  <span className="text-white font-medium">{adults} × ${pricingTier.pricePerPerson}</span>
                </div>
                {children > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#cbbc90]">Children (5-11)</span>
                    <span className="text-white font-medium">{children} × ${pricingTier.childPrice}</span>
                  </div>
                )}
                {infants > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#cbbc90]">Infants (&lt;5)</span>
                    <span className="text-white font-medium">{infants} × ${pricingTier.infantPrice}</span>
                  </div>
                )}
                <div className="h-px bg-primary/30 my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-lg">Total</span>
                  <span className="text-primary font-bold text-3xl">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="bg-background-dark/50 rounded-lg p-3 mt-4">
                  <p className="text-white/70 text-xs text-center">
                    <span className="material-symbols-outlined text-green-400 text-[16px] align-middle">verified</span> Free cancellation up to 48 hours before safari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </>
  )
}
