import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FullDaySafari() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt5a7vYAHNrYxfRw0Fdb5oY1xXiZy7179yxvuYnT32TBMqAsZRVjXWEO8bIgxCF4inwnLvPaO8sMgN4c8bSAy34mZd1vOQibMu9YOEbx1AlwodwIo3odfV83OM1991HUwgUhfozd4Qwt4Y8zc8koO4FFFuWs9XbTjOrnX-WLt9I3YjkVo-omlAySsA1zVygCibG_ijX6IWy_HvoxKRJ9wga5Y_PA9aWJZvXmn_ibGvaj5zocOrfS42d_VoN_URhYG3JHtSMJcDO9Cr")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] animate-fade-in-up">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 w-fit mx-auto">
            <span className="text-white font-bold text-sm uppercase tracking-wider">Includes Lunch</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Full-Day Safari
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            A complete 12-hour immersion in the wild. Maximize your chances of spotting the big 3 - leopards, elephants, and sloth bears.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="font-medium">12 Hours</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">restaurant</span>
              <span className="font-medium">Meals Included</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-white">
              <span className="text-3xl font-bold">$110</span>
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
                For the ultimate Yala experience, nothing beats a full-day safari. With 12 hours in the park, 
                you'll experience the complete cycle of wildlife activity from dawn to dusk, dramatically increasing 
                your chances of spotting elusive species like leopards and sloth bears.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This comprehensive tour covers all major zones of Block 1, including remote areas rarely visited 
                on half-day safaris. You'll enjoy a packed lunch in the wilderness and have ample time for 
                photography without feeling rushed.
              </p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Private 4×4 Safari Jeep</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Expert naturalist guide (full day)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Park entrance fees</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Packed lunch & refreshments</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Unlimited bottled water</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Binoculars & field guides</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Full-Day Itinerary</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">5:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Early Morning Pickup</h3>
                <p className="text-gray-400">Begin your adventure with a pre-dawn pickup to catch the best wildlife activity.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">6:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Morning Safari Session</h3>
                <p className="text-gray-400">Enter the park at sunrise. Focus on leopard territories and active feeding areas. This is prime time for big cat sightings.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">10:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Breakfast Break</h3>
                <p className="text-gray-400">Light refreshments and fruit while continuing gentle exploration as animals seek shade.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">12:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Lunch in the Wild</h3>
                <p className="text-gray-400">Enjoy a packed lunch at a scenic spot. Observe birds and monitor water holes for elephant herds.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">2:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Afternoon Exploration</h3>
                <p className="text-gray-400">Visit remote sections of the park, beach areas, and less-traveled tracks for unique encounters.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">4:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Golden Hour Safari</h3>
                <p className="text-gray-400">Wildlife becomes active again. Perfect lighting for photography. Track animals as they prepare for evening.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">6:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Sunset & Return</h3>
                <p className="text-gray-400">Watch the spectacular Yala sunset before exiting the park and returning to your hotel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Full Day */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Why Choose Full-Day Safari?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Maximum Coverage</h3>
              <p className="text-gray-400">Explore all major zones including remote areas inaccessible on shorter safaris.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">pets</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Best Leopard Odds</h3>
              <p className="text-gray-400">12 hours significantly increases your chances of spotting the elusive Sri Lankan leopard.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Photography Heaven</h3>
              <p className="text-gray-400">Experience both golden hours for stunning shots without time pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-10 bg-primary/10 border-t border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">Ready for the Ultimate Safari?</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Book your full-day adventure and experience Yala like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book?type=full-day-safari">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-primary/20">
                Book Now - $110
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-transparent border border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-colors">
                Ask a Question
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
