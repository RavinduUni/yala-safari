import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function EveningSafari() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaCcNFnfc_VxoEhgY0eEM9zmDIxrmri8hfbHdfq9IhLdw3wHmQCBjkroJHh1Ra7nvYWVKt2j7K7r6sCyqUVHJxa0H7W-ouQDlb2UL-fsz7q8Zwu9TSgOeQx3I1YH-k5zptmZcd59Or4GqAP5IukJJf4aPjz7qZ_uaw4XIlpOsNusZY-71R8Jyhkmh1i9mxc5Wz1xGS2neCydz0aTTaCzJJBTekezzQCN-NfcO4uHijVKm8eOrcgNoqQnVweIA2x1CE6-5uBoY2XcoY")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] animate-fade-in-up">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Evening Safari
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Witness the wildlife activity during the golden hour as the heat of the day subsides and the park transforms in magical sunset light.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="font-medium">3.5 Hours</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">wb_twilight</span>
              <span className="font-medium">Sunset View</span>
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
                The evening safari offers a completely different experience from the morning. As temperatures cool, 
                animals emerge from their midday rest, creating a flurry of activity across the park. The golden hour 
                provides spectacular photography opportunities with warm, soft lighting.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Watch elephants gather at watering holes, predators beginning their evening hunt, and enjoy one of 
                Yala's famous sunsets over the lagoons and coastline.
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
                  <span>Sunset viewing at prime location</span>
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
                <span className="text-primary font-bold text-lg">2:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Hotel Pickup</h3>
                <p className="text-gray-400">Afternoon pickup from your accommodation. Perfect timing to avoid the midday heat.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">3:00</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Enter Yala National Park</h3>
                <p className="text-gray-400">Begin your evening adventure as the park awakens from the afternoon siesta.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">3:15</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Wildlife Exploration</h3>
                <p className="text-gray-400">Track wildlife as they become active. Visit water holes where elephants and other animals gather.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">5:45</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Sunset Viewing</h3>
                <p className="text-gray-400">Stop at a scenic location to watch the spectacular Yala sunset over the Indian Ocean or lagoons.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">6:30</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Return & Drop-off</h3>
                <p className="text-gray-400">Exit the park at dusk and return to your hotel with lasting memories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Evening Safari */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Why Choose Evening Safari?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">wb_twilight</span>
              <h3 className="text-white font-bold text-xl mb-3">Golden Hour Photography</h3>
              <p className="text-gray-400">The soft, warm light of sunset creates perfect conditions for stunning wildlife photography with natural backlighting.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">thermostat</span>
              <h3 className="text-white font-bold text-xl mb-3">Cooler Temperatures</h3>
              <p className="text-gray-400">More comfortable safari experience as the intense heat subsides, making wildlife more active and visible.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">local_activity</span>
              <h3 className="text-white font-bold text-xl mb-3">Increased Activity</h3>
              <p className="text-gray-400">Animals emerge from shade to feed and socialize, creating dynamic viewing opportunities.</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">beach_access</span>
              <h3 className="text-white font-bold text-xl mb-3">Spectacular Sunsets</h3>
              <p className="text-gray-400">Witness breathtaking sunsets over the Indian Ocean and lagoons, a highlight unique to evening safaris.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-10 bg-primary/10 border-t border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">Experience the Magic of Yala at Dusk</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Book your evening safari and witness the wilderness transform in golden light.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book?type=evening-safari">
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
