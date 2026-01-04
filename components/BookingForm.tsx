'use client'

import { useState, useEffect } from 'react'
import { PricingTier } from '@/config/safari-config'

interface BookingFormProps {
  packageTitle: string;
  pricingTiers: PricingTier[];
}

export default function BookingForm({ packageTitle, pricingTiers }: BookingFormProps) {
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0) // Age 5-11
  const [infants, setInfants] = useState(0) // Under 5
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate total price based on group size and selected tier
  useEffect(() => {
    // Find the appropriate pricing tier based on NUMBER OF ADULTS only
    // Children and infants have separate fixed pricing and should not affect adult tier pricing
    let selectedTier = pricingTiers[0] // Default to smallest group

    if (adults <= 1) {
      selectedTier = pricingTiers.find(t => t.groupSize.includes("1")) || pricingTiers[0]
    } else if (adults === 2) {
      selectedTier = pricingTiers.find(t => t.groupSize.includes("2")) || pricingTiers[1]
    } else if (adults === 3) {
      selectedTier = pricingTiers.find(t => t.groupSize.includes("3")) || pricingTiers[2]
    } else if (adults === 4) {
      selectedTier = pricingTiers.find(t => t.groupSize.includes("4")) || pricingTiers[3]
    } else if (adults === 5) {
      selectedTier = pricingTiers.find(t => t.groupSize.includes("5")) || pricingTiers[4]
    } else {
      selectedTier = pricingTiers.find(t => t.groupSize.includes("6")) || pricingTiers[pricingTiers.length - 1]
    }

    // Calculate total: adults at tier price, children at child price, infants at infant price
    const adultsTotal = adults * selectedTier.pricePerPerson
    const childrenTotal = children * selectedTier.childPrice
    const infantsTotal = infants * selectedTier.infantPrice

    setTotalPrice(adultsTotal + childrenTotal + infantsTotal)
  }, [adults, children, infants, pricingTiers])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `
*Safari Booking Request*
Package: ${packageTitle}
Date: ${date}
Guests: ${adults} Adults, ${children} Children (5-11), ${infants} Infants (<5)
Total Amount: $${totalPrice}

Contact Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
    `.trim()

    const whatsappURL = `https://wa.me/94123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  const handleCheckAvailability = () => {
    const message = `Hi, I'd like to check availability for ${packageTitle} on ${date || 'flexible dates'}. Group size: ${adults + children + infants} people.`
    const whatsappURL = `https://wa.me/94123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="bg-surface-dark border border-[#493f22] rounded-xl p-6 md:p-8 sticky top-4">
      <div className="mb-6">
        <h3 className="text-white text-2xl font-bold mb-2">Book This Safari</h3>
        <p className="text-[#cbbc90] text-sm">Secure your spot with instant confirmation</p>
      </div>

      {/* Live Price Calculator */}
      <div className="bg-background-dark/50 border border-primary/20 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70 text-sm">Estimated Total</span>
          <span className="material-symbols-outlined text-primary text-[20px]">calculate</span>
        </div>
        <div className="text-3xl font-bold text-primary mb-1">
          ${totalPrice}
        </div>
        <div className="text-xs text-white/50">
          {adults} {adults === 1 ? 'Adult' : 'Adults'}
          {children > 0 && `, ${children} ${children === 1 ? 'Child' : 'Children'} (5-11)`}
          {infants > 0 && `, ${infants} ${infants === 1 ? 'Infant' : 'Infants'} (<5)`}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Date Selection */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full bg-background-dark border border-[#493f22] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Guest Counters */}
        <div className="space-y-4">
          {/* Adults */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Adults (12+ years) *
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="10"
                className="flex-1 bg-background-dark border border-[#493f22] rounded-lg px-4 py-2 text-white text-center focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setAdults(Math.min(10, adults + 1))}
                className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
          </div>

          {/* Children 5-11 */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Children (5-11 years)
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                min="0"
                max="10"
                className="flex-1 bg-background-dark border border-[#493f22] rounded-lg px-4 py-2 text-white text-center focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setChildren(Math.min(10, children + 1))}
                className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
            <p className="text-xs text-white/50 mt-1">
              ${pricingTiers[0].childPrice} per child
            </p>
          </div>

          {/* Infants Under 5 */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Infants (Under 5 years)
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setInfants(Math.max(0, infants - 1))}
                className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <input
                type="number"
                value={infants}
                onChange={(e) => setInfants(Math.max(0, parseInt(e.target.value) || 0))}
                min="0"
                max="10"
                className="flex-1 bg-background-dark border border-[#493f22] rounded-lg px-4 py-2 text-white text-center focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setInfants(Math.min(10, infants + 1))}
                className="w-10 h-10 rounded-lg bg-surface-dark border border-[#493f22] hover:border-primary text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
            <p className="text-xs text-white/50 mt-1">
              Free (no charge for infants)
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#493f22]" />

        {/* Contact Information */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="John Doe"
            className="w-full bg-background-dark border border-[#493f22] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="john@example.com"
            className="w-full bg-background-dark border border-[#493f22] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+94 77 123 4567"
            className="w-full bg-background-dark border border-[#493f22] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#dca60e] text-background-dark font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            Request Booking via WhatsApp
          </button>

          <button
            type="button"
            onClick={handleCheckAvailability}
            className="w-full bg-surface-dark hover:bg-[#2a241a] border border-[#493f22] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">event_available</span>
            Check Availability
          </button>
        </div>

        <p className="text-xs text-white/50 text-center mt-4">
          No payment required now. We'll confirm availability and send payment details via WhatsApp.
        </p>
      </form>
    </div>
  )
}
