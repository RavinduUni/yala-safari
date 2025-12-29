import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PrivateSafari() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcRH-FY0HbzgJm1K2Fs2u2hDbXzLmIbnE78HN27Q8cPa4YCLte0A_0aLX9HmDTtXW_0xt7mjYZATqSsa3wEx09cyt03igvlo2vioLe40yUXYy36dxcB_3exr3wbDL9MJiTkCLsn97MlJPsY95i5i7hGHtTY8Dnb_FKVGlL8_EUcvDhJtbCUwIdgLrTHjbKkAcCCk348HUay6YNi9DaOUjInfJxUrrFyDQ_sKVxaiYcBXFA4URp6YiURVgTOnSpK9djmNE-J8v61-g-")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] animate-fade-in-up">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Private Safari Tours
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Exclusive jeep for you and your family with a dedicated naturalist guide. Experience Yala at your own pace with personalized attention.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="font-medium">4 Hours</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">person</span>
              <span className="font-medium">Dedicated Guide</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-white">
              <span className="text-3xl font-bold">$80</span>
              <span className="text-sm opacity-70"> / person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/30">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Safari Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our private safari tours offer an intimate and flexible wildlife experience tailored to your interests. 
                Whether you're passionate about bird watching, photography, or big cat tracking, your dedicated guide 
                will customize the safari to match your preferences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Perfect for families, couples, or small groups who want undivided attention from their naturalist 
                and the freedom to spend as much time as desired at each sighting without time constraints.
              </p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Private 4×4 Safari Jeep (exclusive)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Dedicated naturalist guide</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Park entrance fees</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Bottled water & refreshments</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Binoculars & wildlife guidebooks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Flexible itinerary based on preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">Private Safari Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">speed</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Pace</h3>
                <p className="text-gray-400">Stop and observe for as long as you wish. No rushing to accommodate other guests.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Personalized Focus</h3>
                <p className="text-gray-400">Tailor the safari to your interests - birds, big cats, photography, or general wildlife.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">family_restroom</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Family Friendly</h3>
                <p className="text-gray-400">Ideal for families with children. Educational experience at your own comfort level.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">photo_camera</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Photography Priority</h3>
                <p className="text-gray-400">Position the jeep for optimal shots without competing for space with other passengers.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">record_voice_over</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Communication</h3>
                <p className="text-gray-400">One-on-one interaction with your guide for deeper learning and questions.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">schedule_send</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Timing</h3>
                <p className="text-gray-400">Choose your preferred start time (morning, afternoon, or custom).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">favorite</span>
              <h3 className="text-white font-bold text-xl mb-3">Couples</h3>
              <p className="text-gray-400">Romantic and intimate wildlife experience. Celebrate special occasions in the wild.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">family_restroom</span>
              <h3 className="text-white font-bold text-xl mb-3">Families</h3>
              <p className="text-gray-400">Safe, comfortable, and educational experience for all ages with flexible breaks.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">camera_alt</span>
              <h3 className="text-white font-bold text-xl mb-3">Photographers</h3>
              <p className="text-gray-400">Maximize your shots with patient positioning and expert wildlife tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-10 bg-primary/10 border-t border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">Book Your Exclusive Safari</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Experience Yala with personalized attention and flexibility that only a private tour can offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book?type=private-safari">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-primary/20">
                Book Now - $80
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-transparent border border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-colors">
                Customize Your Tour
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
