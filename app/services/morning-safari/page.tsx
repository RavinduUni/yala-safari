import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MorningSafari() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_XKKHRD3BLdIfHL6cp9PpVnl3K7iIGsNdcFdpjIE5j2BdfARi9skOBS9AL9d6aSOZUxWi2vOGJYJpbmlPno0vTowKxr9g6EIKZqxBzhLZZ8CfV-O4Ncl7Vi5TdP5PHQYLqwFN7mK1-fmNjn-6pjYof_E1GQx4ikcZ2QQEYDFwsVouuoMt2ST8liIBUUV8M17_KnLDLdtS9PGvz1s-9FAMLmkKsQ6USmtobPxd72nQGrPc2WnmB5xQj2RNBLUYfy-JB14ZV9dJ96xs")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] animate-fade-in-up">
          <div className="bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 w-fit mx-auto">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Best Seller</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Morning Safari
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Catch the jungle waking up. Best for bird watching and spotting early risers as the sun paints the wilderness golden.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="font-medium">4 Hours</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">groups</span>
              <span className="font-medium">Shared/Private</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-white">
              <span className="text-3xl font-bold">$50</span>
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
                Experience the magic of Yala at dawn when the park comes alive with activity. The morning safari 
                is perfect for witnessing wildlife at their most active, hunting, foraging, and communicating as 
                the cool morning air provides relief from the tropical heat.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our expert trackers know the best spots for leopard sightings during these early hours, and the 
                soft morning light creates perfect conditions for photography enthusiasts.
              </p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>4×4 Safari Jeep with experienced driver</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Expert naturalist guide</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Park entrance fees</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Bottled water</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Binoculars for wildlife spotting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Safari Itinerary</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">5:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Hotel Pickup</h3>
                <p className="text-gray-400">We pick you up from your hotel in Tissamaharama or nearby areas. Early start to catch the best wildlife activity.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">6:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Enter Yala National Park</h3>
                <p className="text-gray-400">Brief safety orientation and we begin our journey into the wilderness. The adventure begins!</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">6:15</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Wildlife Tracking</h3>
                <p className="text-gray-400">Our guide navigates through prime leopard territories, water holes, and bird watching spots. Keep your cameras ready!</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">10:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Return & Drop-off</h3>
                <p className="text-gray-400">Exit the park and return to your hotel, filled with unforgettable memories and stunning photographs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Highlights */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Wildlife You May Encounter</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Morning safaris offer excellent opportunities to spot a diverse range of species
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">pets</span>
              <h3 className="text-white font-bold text-lg mb-2">Sri Lankan Leopard</h3>
              <p className="text-gray-400 text-sm">Most active during dawn hours</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">flutter_dash</span>
              <h3 className="text-white font-bold text-lg mb-2">215+ Bird Species</h3>
              <p className="text-gray-400 text-sm">Prime time for bird watching</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">cruelty_free</span>
              <h3 className="text-white font-bold text-lg mb-2">Sloth Bears</h3>
              <p className="text-gray-400 text-sm">Often seen foraging in mornings</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">support</span>
              <h3 className="text-white font-bold text-lg mb-2">Asian Elephants</h3>
              <p className="text-gray-400 text-sm">Herds near water sources</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">grass</span>
              <h3 className="text-white font-bold text-lg mb-2">Spotted Deer</h3>
              <p className="text-gray-400 text-sm">Large herds grazing</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">water</span>
              <h3 className="text-white font-bold text-lg mb-2">Crocodiles</h3>
              <p className="text-gray-400 text-sm">Basking on lagoon banks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-10 bg-primary/10 border-t border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">Ready for Your Morning Adventure?</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Book your morning safari now and experience the wilderness at its most vibrant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book?type=morning-safari">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-primary/20">
                Book Now - $50
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
