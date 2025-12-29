import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const safariPackages = [
  {
    name: 'Morning Safari',
    price: 50,
    priceUnit: 'person',
    badge: 'Best Seller',
    badgeColor: 'primary',
    description: 'Catch the jungle waking up. Perfect for bird watching and spotting early wildlife activity.',
    features: [
      { icon: 'schedule', text: '4 Hours (6:00 AM - 10:00 AM)' },
      { icon: 'groups', text: 'Shared/Private Options' },
      { icon: 'person', text: 'Expert Naturalist Guide' },
      { icon: 'water_drop', text: 'Bottled Water Included' }
    ],
    link: '/book?type=morning-safari',
    highlight: false
  },
  {
    name: 'Evening Safari',
    price: 50,
    priceUnit: 'person',
    badge: 'Popular',
    badgeColor: 'border',
    description: 'Golden hour lighting perfect for photography and stunning leopard sightings.',
    features: [
      { icon: 'schedule', text: '3.5 Hours (2:30 PM - 6:30 PM)' },
      { icon: 'wb_twilight', text: 'Sunset Viewing' },
      { icon: 'person', text: 'Expert Naturalist Guide' },
      { icon: 'water_drop', text: 'Bottled Water Included' }
    ],
    link: '/book?type=evening-safari',
    highlight: false
  },
  {
    name: 'Full-Day Safari',
    price: 110,
    priceUnit: 'person',
    badge: 'Includes Lunch',
    badgeColor: 'border',
    description: 'Complete 12-hour immersion. Maximize your chances of spotting the big 3.',
    features: [
      { icon: 'schedule', text: '12 Hours (6:00 AM - 6:00 PM)' },
      { icon: 'restaurant', text: 'Packed Lunch Included' },
      { icon: 'person', text: 'Dedicated Naturalist' },
      { icon: 'pets', text: 'Best Leopard Odds' }
    ],
    link: '/book?type=full-day-safari',
    highlight: false
  },
  {
    name: 'Private Safari Tours',
    price: 80,
    priceUnit: 'person',
    badge: 'Most Popular',
    badgeColor: 'primary',
    description: 'Exclusive jeep for you and your family with personalized attention.',
    features: [
      { icon: 'schedule', text: '4 Hours (Flexible Timing)' },
      { icon: 'directions_car', text: 'Private Jeep (Exclusive)' },
      { icon: 'psychology', text: 'Personalized Experience' },
      { icon: 'visibility', text: 'Binoculars & Guidebooks' }
    ],
    link: '/book?type=private-safari',
    highlight: true
  },
  {
    name: 'Photography Safari',
    price: 200,
    priceUnit: 'group',
    badge: 'For Pros',
    badgeColor: 'primary',
    description: 'Specialized positioning with bean bags and expert guidance for perfect shots.',
    features: [
      { icon: 'schedule', text: 'Full Day (12 Hours)' },
      { icon: 'camera_alt', text: 'Bean Bags for Stability' },
      { icon: 'wb_sunny', text: 'Golden Hour Focus' },
      { icon: 'restaurant', text: 'Lunch Included' }
    ],
    link: '/book?type=photography-safari',
    highlight: false
  },
  {
    name: 'Luxury Safari',
    price: 120,
    priceUnit: 'person',
    badge: 'Premium',
    badgeColor: 'primary',
    description: 'Premium Land Cruiser, gourmet breakfast, and senior naturalist expertise.',
    features: [
      { icon: 'schedule', text: '5 Hours (6:00 AM - 11:00 AM)' },
      { icon: 'airport_shuttle', text: 'Luxury Land Cruiser (AC)' },
      { icon: 'restaurant_menu', text: 'Gourmet Bush Breakfast' },
      { icon: 'workspace_premium', text: 'Senior Naturalist (20+ yrs)' }
    ],
    link: '/book?type=luxury-safari',
    highlight: false
  }
]

export default function Pricing() {
  return (
    <>
      <Header />
      
      <div className="relative flex min-h-screen flex-col dark:bg-background-dark dark:text-white">
        {/* Hero Section */}
        <section className="relative">
          <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-10 lg:py-12">
            <div 
              className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3), rgba(35, 30, 16, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_yQmY0_vjSrAeTRoX3RikCEobUA9hDL3YSHgbi2OY4SEp5yzMJ3KcXL4YeFJc9ChmIjp7n3ZTZYg1sgocflb0feX5H2_2eLtToUH4sC0CIfg0c3sb-Dx0rf6y-b-AveSXik-aEvKZ55xT-kTx3jWamaf_Ji0k8eJWSW263T1O3j_7qTES7BSy54v_UZG8VaFynvYzuPq2Iclq1usSBUKYrOtRcw-i4kjmvYZILWMfTHhZ_Qqj_WgvYOdGN0VbjScMTIJomFuYghdn")`
              }}
            >
              <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
                <div className="max-w-2xl space-y-4">
                  <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-white md:text-6xl drop-shadow-lg">
                    Witness the Wild.
                    <span className="block text-primary">Choose Your Adventure.</span>
                  </h1>
                  <p className="text-lg text-white/90 md:text-xl font-body font-light">
                    From quick glimpses to full-day expeditions, select the perfect way to experience the untamed beauty of Sri Lanka.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="#packages">
                    <button className="h-12 rounded-xl bg-primary px-8 text-background-dark font-bold hover:bg-primary/90 transition-all transform hover:scale-105">
                      View Packages
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 text-white font-bold hover:bg-white/20 transition-all">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 pb-20 md:px-10">
          <section id="packages">
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Safari Packages</span>
              <h2 className="text-3xl font-bold md:text-4xl">Select Your Expedition</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {safariPackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`group relative flex flex-col rounded-2xl border ${
                    pkg.highlight 
                      ? 'border-2 border-primary bg-card-dark p-6 shadow-[0_0_30px_rgba(244,192,37,0.1)] transition-transform hover:-translate-y-2 lg:-mt-4 lg:mb-4 lg:py-8' 
                      : 'border-border-dark bg-card-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-background-dark shadow-lg">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className={`text-xl font-bold ${pkg.highlight ? 'text-white' : ''}`}>{pkg.name}</h3>
                      {!pkg.highlight && (
                        <span className={`rounded-full ${pkg.badgeColor === 'primary' ? 'bg-primary/20 text-primary' : 'bg-border-dark text-white/80'} px-3 py-1 text-xs font-bold`}>
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className={`${pkg.highlight ? 'text-5xl' : 'text-4xl'} font-black ${pkg.highlight ? 'text-primary' : 'text-white'}`}>
                        ${pkg.price}
                      </span>
                      <span className="text-sm font-medium text-white/60">/ {pkg.priceUnit}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/70">{pkg.description}</p>
                  </div>
                  <div className="mb-6 h-px w-full bg-border-dark" />
                  <ul className="mb-8 flex flex-1 flex-col gap-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-white/90">
                        <span className="material-symbols-outlined text-primary text-[20px]">{feature.icon}</span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <Link href={pkg.link}>
                    <button className={`w-full rounded-xl py-3 text-sm font-bold transition-colors ${
                      pkg.highlight 
                        ? 'bg-primary text-background-dark hover:opacity-90 shadow-lg shadow-primary/20' 
                        : 'border border-border-dark bg-transparent text-white hover:bg-border-dark group-hover:bg-primary group-hover:text-background-dark group-hover:border-primary'
                    }`}>
                      Book {pkg.name}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  )
}
