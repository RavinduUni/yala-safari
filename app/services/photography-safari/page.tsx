import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PhotographySafari() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7lANpd9s2bUY4ONmLBHCL6kx_cKZ7CiCHJDfzvabj5Gj8wMilwdMzGdNEgLEgwEbR4f3oarTy-q1GMrMhosbYM8ioFWbOZKQOhPpcYOWkGaQL5iAoai61n7AgH4iTZLPdLCmo_tz7194-USs0Cv-n4Is3i_jWV6RP2LsnUyit4M6sMICQMYYM3HdaYvEuIrMUhfyh5bkDqAysCqTrSDo-x7nHCmtE59Rq5JuprKSdANZAowBoF6jWK45_09oRlOG2M3iwXUEaFwi_")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] animate-fade-in-up">
          <div className="bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 w-fit mx-auto">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">For Pros</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Photography Safari
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Dedicated positioning for the perfect shot. Specialized driver for stability and expert guidance on capturing Yala's magnificent wildlife.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="font-medium">Full Day</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">camera_alt</span>
              <span className="font-medium">Bean Bags</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-white">
              <span className="text-3xl font-bold">$200</span>
              <span className="text-sm opacity-70"> / group</span>
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
                Our photography safari is specifically designed for serious photographers and wildlife enthusiasts 
                who want to capture stunning images of Yala's incredible wildlife. With specialized equipment, 
                strategic positioning, and expert guidance, we maximize your photographic opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Your guide understands photography and wildlife behavior, helping you anticipate action and 
                position for the best light. We provide bean bags for lens stability and allow extended time 
                at each sighting to capture the perfect moment.
              </p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Modified 4×4 Jeep for photography</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Photography-trained naturalist guide</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Bean bags for lens stability</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Park entrance fees (full day)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Packed lunch & refreshments</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Extended time at sightings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Features */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">Photography Safari Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
                <h3 className="text-xl font-bold text-white">Specialized Vehicle</h3>
              </div>
              <p className="text-gray-400">Modified jeep with lowered sides for unobstructed shooting. Roof hatch access for varied angles and stability.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">support</span>
                <h3 className="text-xl font-bold text-white">Bean Bag Support</h3>
              </div>
              <p className="text-gray-400">Professional bean bags provided for heavy telephoto lenses. Ensures sharp images even with long focal lengths.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">wb_sunny</span>
                <h3 className="text-xl font-bold text-white">Golden Hour Focus</h3>
              </div>
              <p className="text-gray-400">Strategic timing to capture both morning and evening golden hours for optimal lighting conditions.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                <h3 className="text-xl font-bold text-white">Behavior Anticipation</h3>
              </div>
              <p className="text-gray-400">Guide predicts animal behavior to position you for action shots - hunting, interaction, feeding.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">timer</span>
                <h3 className="text-xl font-bold text-white">Extended Stops</h3>
              </div>
              <p className="text-gray-400">Patient waiting at sightings. No rushing - stay until you get the shot or the animal moves on.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <h3 className="text-xl font-bold text-white">Prime Locations</h3>
              </div>
              <p className="text-gray-400">Access to best photographic spots - leopard rocks, water holes, bird colonies, and scenic backdrops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Gear Recommendations */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Recommended Camera Gear</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-primary font-bold text-lg mb-3">Essential</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>DSLR or Mirrorless body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>400-600mm telephoto lens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Extra batteries & memory cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Lens cleaning kit</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-primary font-bold text-lg mb-3">Recommended</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>70-200mm zoom lens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Wide angle lens (16-35mm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Teleconverter (1.4x or 2x)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Circular polarizing filter</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-primary font-bold text-lg mb-3">Camera Settings</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Shutter Priority mode (1/1000+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>ISO 400-1600 (auto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Continuous AF tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>RAW format for flexibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Shots */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">What You Can Capture</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Our photography safari gives you opportunities to capture award-winning images
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">pets</span>
              <h3 className="text-white font-bold mb-2">Leopard Portraits</h3>
              <p className="text-gray-400 text-sm">Close-ups of leopards in trees and on rocks</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">flutter_dash</span>
              <h3 className="text-white font-bold mb-2">Birds in Flight</h3>
              <p className="text-gray-400 text-sm">Eagles, kingfishers, and endemic species</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">wb_twilight</span>
              <h3 className="text-white font-bold mb-2">Sunset Silhouettes</h3>
              <p className="text-gray-400 text-sm">Elephants against golden skies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-10 bg-primary/10 border-t border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">Capture Yala's Magnificent Wildlife</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Book your photography safari and return with portfolio-worthy images of Sri Lanka's wild beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book?type=photography-safari">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-primary/20">
                Book Now - $200
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-transparent border border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-colors">
                Photography Tips
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
