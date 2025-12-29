import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LuxurySafari() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2tpyVtQ9FSK1TY2Gh3S41Z1BcZZ3_GPywft6K3ivOiI1X6eYYQJa2ELBhIzlKQd0wAn_Tw5ZYGgcqI3WSiSm4VgccVJjJB2ZhBacp6GQS5lVFdGP65ZnwzMYwb47Omj8Eruh3EMmilEc1oIqgM15UGnPQ2OK8yCrHDDFz6ROhmhwc1FGX98vB7dxcQVKTtPJVyXCOK1Mq_DXxniw1Qr5otA0aoH0Ui8JQspmF_LKA_vrjOESN98-VN-lCJRnbVS5F5KCkETyFlO_z")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] animate-fade-in-up">
          <div className="bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 w-fit mx-auto">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Premium</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Luxury Safari
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Premium jeep, gourmet bush breakfast, and a senior naturalist. Experience Yala with unparalleled comfort and sophistication.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="font-medium">5 Hours</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">wine_bar</span>
              <span className="font-medium">Gourmet</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-white">
              <span className="text-3xl font-bold">$120</span>
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
                Our luxury safari elevates the wildlife experience with premium amenities and exceptional service. 
                Travel in a state-of-the-art Land Cruiser with plush seating, climate control, and panoramic windows. 
                Your senior naturalist brings decades of expertise and intimate knowledge of Yala's leopards and ecosystems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Enjoy a gourmet bush breakfast prepared by our chef in a scenic wilderness location, complemented by 
                fine coffee and fresh tropical fruits. This is safari redefined - where adventure meets refinement.
              </p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Premium Inclusions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Luxury Land Cruiser (AC available)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Senior naturalist (20+ years exp.)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Gourmet bush breakfast</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Premium refreshments & snacks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Professional binoculars (Swarovski)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Park entrance & all fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">Luxury Safari Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">directions_car</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Vehicle</h3>
              <p className="text-gray-400">Latest model Toyota Land Cruiser with comfortable seating, AC, large windows, and superior suspension for smooth rides.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">restaurant_menu</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gourmet Breakfast</h3>
              <p className="text-gray-400">Chef-prepared bush breakfast with fresh pastries, tropical fruits, artisan coffee, and choice of hot dishes in a scenic location.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">school</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Guide</h3>
              <p className="text-gray-400">Senior naturalist with 20+ years experience, recognized expertise in leopard behavior, and published wildlife research.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Optics</h3>
              <p className="text-gray-400">Swarovski binoculars provided for crystal-clear wildlife observation. Professional-grade equipment for the best views.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">notifications_active</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Priority Access</h3>
              <p className="text-gray-400">Radio network keeps us informed of leopard sightings. First-to-arrive advantage for prime viewing positions.</p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">stars</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized Service</h3>
              <p className="text-gray-400">Tailored itinerary based on your interests. Flexible timing and dedicated attention throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gourmet Menu */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">Bush Breakfast Menu</h2>
          <p className="text-gray-400 text-center mb-12">Enjoy a curated culinary experience in the heart of the wilderness</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-8">
              <h3 className="text-primary font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">restaurant</span>
                Breakfast Selection
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-1">Hot Dishes</h4>
                  <p className="text-gray-400 text-sm">Sri Lankan egg hoppers, scrambled eggs with herbs, chicken sausages</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Fresh Baked</h4>
                  <p className="text-gray-400 text-sm">Croissants, Danish pastries, whole grain rolls with butter and preserves</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Tropical Fruits</h4>
                  <p className="text-gray-400 text-sm">Papaya, pineapple, watermelon, mango, passion fruit</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-8">
              <h3 className="text-primary font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">local_cafe</span>
                Beverages
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-1">Coffee Selection</h4>
                  <p className="text-gray-400 text-sm">Espresso, cappuccino, Ceylon single-origin pour-over</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Premium Teas</h4>
                  <p className="text-gray-400 text-sm">Ceylon black tea, green tea, herbal infusions</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Fresh Juices</h4>
                  <p className="text-gray-400 text-sm">Orange, pineapple, watermelon, mixed tropical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">celebration</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Special Occasions</h3>
              <p className="text-gray-400">Honeymoons, anniversaries, milestone birthdays - celebrate in style surrounded by nature.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">business_center</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Distinguished Guests</h3>
              <p className="text-gray-400">VIPs, executives, and discerning travelers who appreciate the finest experiences.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Luxury Travelers</h3>
              <p className="text-gray-400">Those who refuse to compromise on quality and comfort, even in the wilderness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-10 bg-primary/10 border-t border-border-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">Indulge in the Ultimate Safari</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Experience Yala with unmatched comfort, expertise, and culinary excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book?type=luxury-safari">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-primary/20">
                Book Luxury Safari - $120
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex items-center justify-center rounded-xl h-14 px-10 bg-transparent border border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-colors">
                Request Customization
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
