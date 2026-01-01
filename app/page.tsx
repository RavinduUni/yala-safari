import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
          data-alt="Majestic leopard resting on a tree branch in Yala National Park"
          style={{
            backgroundImage: `linear-gradient(rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDARANJGfeIj3By5vRLWL-jWtvwQ7dD9bXUy9Q6KCyQBUVUKOI2NZ-R_DBGMc2eMRQPU3UjRy5Xxum39h4Z1r9lYwYBk5RVd8QEihL8_uY7wBPmyUPi4UqlzEOuz3QHF6ly8MisIqbGvtICuoHcsqVBSfJzoxxqsqLj3xQ__mTvMdQg9D9xOaAbeXQD-eKgsJH2Gbh8wTU8aGERJzyui9nKMo3p5rxFKhRCBuJRpSpEkMYr5BB-gMuSaxIL3bLozrr9Ud6AjYzbzwKL")`
          }}
        />
        <div className="relative z-10 layout-content-container flex flex-col max-w-[960px] px-4 text-center">
          <div className="flex flex-col gap-4 animate-fade-in-up">
            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl drop-shadow-lg">
              Experience the Wild Heart of Sri Lanka
            </h1>
            <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Encounter leopards, elephants, and untamed nature in Yala National Park.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/book">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-yellow-500 transition-all transform hover:scale-105 text-[#231e10] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
                <span className="truncate">Book a Safari</span>
              </button>
            </Link>
            <Link href="/about">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent border-2 border-white hover:bg-white/10 transition-all text-white text-base font-bold leading-normal tracking-[0.015em] backdrop-blur-sm">
                <span className="truncate">Explore Yala</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Safari Highlights Section */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
              Safari Highlights
            </h2>
            <p className="text-[#637588] dark:text-[#cbbc90] text-base font-normal">
              Discover what makes Yala the premier wildlife destination in Asia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-[#2c2614] hover:shadow-xl transition-shadow duration-300 border border-[#e6e8eb] dark:border-[#493f22]">
              <div 
                className="w-full h-56 bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Close up of a Sri Lankan leopard walking through tall grass"
                style={{
                  backgroundImage: `url("/images/wildlife/leopard1.jpg")`
                }}
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-sm">pets</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Leopard Density</span>
                </div>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">
                  Highest Leopard Density
                </h3>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm font-normal leading-normal">
                  Yala Block 1 has one of the highest densities of leopards in the world, making it the best
                  place to spot these elusive cats.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-[#2c2614] hover:shadow-xl transition-shadow duration-300 border border-[#e6e8eb] dark:border-[#493f22]">
              <div 
                className="w-full h-56 bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Herd of Asian elephants drinking water at a lake"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAztlf2QvRYOdMewDypS3yFuO_4G7xiYUiJBcairWoY3lBl7Iu3bHoT9AJu7z90s7CSKVWx9VY9X_kH5--XK-VMyTSMO1XvTTAHvpu0wzcTVW356e8NtdqgzE2ulHR9MWdW702ajfEMwrYcFI5ChMB8NF8FstUG3n4TFark5kpCo-e7KJsF28hof7OBsN48nnFSOiOaM0PakEywgu22J9odn3vDkdrVlIRxRjcGBNBR_9jq6ZNe-4Y-_f8XQrrYTgF4HwS90hIFXTcY")`
                }}
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-sm">diversity_3</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Elephant Herds</span>
                </div>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">
                  Majestic Elephant Gatherings
                </h3>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm font-normal leading-normal">
                  Witness large herds of Asian elephants roaming freely, bathing in lagoons, and caring for
                  their young in their natural habitat.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-[#2c2614] hover:shadow-xl transition-shadow duration-300 border border-[#e6e8eb] dark:border-[#493f22]">
              <div 
                className="w-full h-56 bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Colorful peacock displaying feathers in the wild"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG3DnF_4Egi8RpK_0326aXYX8VDMmfDd14oMn31dWaEnat0umQvQH4cFiEK39Ea2NdwZxgLN_i-vOCJRa5dJiTVpMHp7bgnyxskYdm_KSzMxgSd-NdLpEap8jjZeVF4Q4_xYHCjAqro5GCGVDXGGYn4wMrsdY_RqktZpMmNqjLOxNGZrJ7HvABfQLZYlUTxa4yw5iM_ctpxxOKgz7bMmZgM29cc7FBSJFctR_feigRQEwFfYlDuUg0S4QoXmFZhhv5M1n9iuToTXo0")`
                }}
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-sm">flight</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Exotic Birdlife</span>
                </div>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">
                  Birdwatcher's Paradise
                </h3>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm font-normal leading-normal">
                  Home to over 215 bird species including six endemics of Sri Lanka. Spot painted storks,
                  peacocks, and various raptors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Yala Section */}
      <section className="py-16 bg-[#e6e8eb] dark:bg-[#1c180d]">
        <div className="layout-container flex justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">
                    Why Choose Our Safaris?
                  </h2>
                  <p className="text-[#637588] dark:text-[#cbbc90] text-base leading-relaxed">
                    We don't just drive you through the park; we offer an immersive educational journey. Our
                    commitment to conservation and guest safety ensures an unforgettable experience.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 text-primary mt-1">
                      <span className="material-symbols-outlined">person_pin_circle</span>
                    </div>
                    <div>
                      <h4 className="text-[#111418] dark:text-white font-bold text-lg">Expert Naturalist Guides</h4>
                      <p className="text-[#637588] dark:text-[#cbbc90] text-sm">
                        Passionate guides who know every track and call in the jungle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 text-primary mt-1">
                      <span className="material-symbols-outlined">health_and_safety</span>
                    </div>
                    <div>
                      <h4 className="text-[#111418] dark:text-white font-bold text-lg">Safety First</h4>
                      <p className="text-[#637588] dark:text-[#cbbc90] text-sm">
                        Specially modified jeeps and strict safety protocols for your peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 text-primary mt-1">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div>
                      <h4 className="text-[#111418] dark:text-white font-bold text-lg">Eco-Friendly Practices</h4>
                      <p className="text-[#637588] dark:text-[#cbbc90] text-sm">
                        We adhere to ethical wildlife watching guidelines to minimize disturbance.
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/about">
                  <button className="flex w-fit items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#231e10] dark:bg-white text-white dark:text-[#231e10] text-sm font-bold leading-normal tracking-[0.015em] mt-2">
                    <span className="truncate">Learn About Our Mission</span>
                  </button>
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div 
                    className="rounded-xl bg-center bg-cover h-64 md:h-80 w-full col-span-2"
                    data-alt="Safari jeep with tourists looking at wildlife"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbQBxS0obXPzjG9R1eN_P1WSWV1h30D-zeJHzuXKzLmwRz6JvHuWq5mgP4OzP_dl8rZyj1XHlU91R3hwoHAip-aIqE9OZOcisPDLJtLIp06AvuT0mtPQLeL9TCPsK5CuNAKTV-f9fMmHHaCgORoR9D0GudxViRXoVDa4nCeFpajH1SJyr-4FeMS9r_7yYO3KBDdxKUx5Iusz4yOQHCOcpism9ZyXxZwSwCbCstM3NbQYUMYARXvBxClXmqA--0_4yuRzBEM6Utw7Yh")`
                    }}
                  />
                  <div 
                    className="rounded-xl bg-center bg-cover h-40 w-full"
                    data-alt="Close up of a green bee eater bird"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzMkXXuyUZR9HlqDMn_GxqttrYX2h5n19shWBW2j0wbu90fBB37zQ5qJj5z_ZTU_JoFuUk7xJrV9m-h89olDWMocOYO-Q-zIN6ySQ0dWHEDJY7f-xjWD7veGkZl-Hy1AYVF0XZ5hlT7F4L4on96El8p8RJHd5VqhDlW1g7jAc_-vkoC8tfltbOjwHqfUd9h8nL_zFDYXl7sFUbcGRTR5kDSqX9-360Gx435egHCwAwihkHFhrkEi5NUi8U_I2ps2c7y3d4c2FCbcVE")`
                    }}
                  />
                  <div 
                    className="rounded-xl bg-cover h-40 w-full"
                    data-alt="Bear climbing a tree in Yala"
                    style={{
                      backgroundImage: `url("/images/wildlife/slothBear.jpg")`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Safari Packages */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
              Featured Packages
            </h2>
            <Link href="/services" className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline">
              View All Packages <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Package 1 - Standard Morning Safari */}
            <div className="flex flex-col bg-white dark:bg-[#2c2614] rounded-xl overflow-hidden border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-xl transition-shadow duration-300 group">
              <div 
                className="relative h-56 bg-cover bg-center"
                data-alt="Morning sunrise safari in Yala"
                style={{
                  backgroundImage: `url("images/safari/standardmorningsafari.jpg")`
                }}
              >
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/90">Morning Safari</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Standard Morning Safari
                  </h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm font-normal leading-relaxed">
                  Classic early morning safari for leopard sightings, elephant herds, and diverse birdlife during optimal wildlife activity hours.
                </p>
                <div className="my-2 h-px w-full bg-[#e6e8eb] dark:bg-[#493f22]" />
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1.5 text-[#637588] dark:text-white/80">
                    <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                    <span>4.5 Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#637588] dark:text-white/80">
                    <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
                    <span>Private</span>
                  </div>
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#637588] dark:text-[#cbbc90]">Starting from</span>
                    <span className="text-lg font-bold text-[#111418] dark:text-white">
                      $85 <span className="text-xs font-normal text-gray-500 dark:text-white/50">/ person</span>
                    </span>
                  </div>
                  <Link href="/services/standard-morning-safari" className="flex-1">
                    <button className="w-full cursor-pointer bg-primary hover:bg-[#dca60e] text-[#231e10] font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                      View Details
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Package 2 - Standard Afternoon Safari */}
            <div className="flex flex-col bg-white dark:bg-[#2c2614] rounded-xl overflow-hidden border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-xl transition-shadow duration-300 group">
              <div 
                className="relative h-56 bg-cover bg-center"
                data-alt="Afternoon sunset safari in Yala"
                style={{
                  backgroundImage: `url("images/safari/standardafternoonsafari.jpg")`
                }}
              >
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/90">Afternoon Safari</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Standard Afternoon Safari
                  </h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm font-normal leading-relaxed">
                  Afternoon wildlife viewing with spectacular golden hour light, ideal for photography and observing animals at waterholes.
                </p>
                <div className="my-2 h-px w-full bg-[#e6e8eb] dark:bg-[#493f22]" />
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1.5 text-[#637588] dark:text-white/80">
                    <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                    <span>4.5 Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#637588] dark:text-white/80">
                    <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
                    <span>Private</span>
                  </div>
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#637588] dark:text-[#cbbc90]">Starting from</span>
                    <span className="text-lg font-bold text-[#111418] dark:text-white">
                      $80 <span className="text-xs font-normal text-gray-500 dark:text-white/50">/ person</span>
                    </span>
                  </div>
                  <Link href="/services/standard-afternoon-safari" className="flex-1">
                    <button className="w-full cursor-pointer bg-primary hover:bg-[#dca60e] text-[#231e10] font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                      View Details
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Package 3 - Ultimate Full-Day Safari */}
            <div className="flex flex-col bg-white dark:bg-[#2c2614] rounded-xl overflow-hidden border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-xl transition-shadow duration-300 group">
              <div 
                className="relative h-56 bg-cover bg-center"
                data-alt="Full day safari experience in Yala"
                style={{
                  backgroundImage: `url("images/safari/ultimatefullday.jpg")`
                }}
              >
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/90">Full-Day Safari</p>
                </div>
                <div className="absolute top-3 left-3 bg-primary text-[#231e10] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Ultimate Full-Day Safari
                  </h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm font-normal leading-relaxed">
                  Complete 12-hour immersive safari from dawn to dusk. Includes breakfast, lunch, and comprehensive coverage of all zones.
                </p>
                <div className="my-2 h-px w-full bg-[#e6e8eb] dark:bg-[#493f22]" />
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1.5 text-[#637588] dark:text-white/80">
                    <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                    <span>12 Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#637588] dark:text-white/80">
                    <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
                    <span>Private</span>
                  </div>
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#637588] dark:text-[#cbbc90]">Starting from</span>
                    <span className="text-lg font-bold text-[#111418] dark:text-white">
                      $165 <span className="text-xs font-normal text-gray-500 dark:text-white/50">/ person</span>
                    </span>
                  </div>
                  <Link href="/services/ultimate-full-day-safari" className="flex-1">
                    <button className="w-full cursor-pointer bg-primary hover:bg-[#dca60e] text-[#231e10] font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                      View Details
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes YalaSriLanka.com Different Section */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-[#f8f6f0] dark:bg-[#1c180d]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Your Trusted Safari Partner</span>
                <h2 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mt-2">
                  What Makes YalaSriLanka.com Different
                </h2>
              </div>
              <p className="text-[#637588] dark:text-[#cbbc90] text-base leading-relaxed mb-6">
                We're more than just a booking platform. YalaSriLanka.com is your comprehensive safari guide and trusted content hub for everything related to Yala National Park. Our mission is to educate, inspire, and connect you with the wild heart of Sri Lanka.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl">school</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1">Expert Knowledge Hub</h4>
                    <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed">
                      In-depth wildlife guides, behavioral insights, and photography tips from experienced naturalists. Learn before you explore.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl">eco</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1">Ethical Tourism Champions</h4>
                    <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed">
                      We prioritize wildlife welfare and sustainable practices. Every safari supports conservation efforts and local communities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1">Trust & Transparency</h4>
                    <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed">
                      Honest pricing, detailed itineraries, and real guest reviews. No hidden fees, no surprises—just authentic safari experiences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1">24/7 Support & Guidance</h4>
                    <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed">
                      From planning to post-safari, we're here to help. Access travel tips, packing lists, and expert advice anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                  data-alt="Guide showing wildlife tracks to tourists in Yala"
                  style={{
                    backgroundImage: `url("/images/landscapes/rock.jpg")`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/95 dark:bg-[#231e10]/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-primary text-3xl">military_tech</span>
                        <div>
                          <p className="text-[#111418] dark:text-white font-bold text-lg">Certified Excellence</p>
                          <p className="text-xs text-[#637588] dark:text-[#cbbc90]">Award-winning safari experiences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-primary text-[#231e10] rounded-full w-24 h-24 flex flex-col items-center justify-center font-black shadow-lg">
                  <span className="text-3xl">10+</span>
                  <span className="text-xs">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Yala Safari Experience Section */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Experience The Adventure</span>
            <h2 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mt-2 mb-4">
              The Yala Safari Experience
            </h2>
            <p className="text-[#637588] dark:text-[#cbbc90] text-lg max-w-3xl mx-auto">
              Step into a specially modified 4x4 safari jeep and embark on an unforgettable journey through one of Asia's most spectacular wildlife sanctuaries. Every safari is a unique adventure guided by expert driver-trackers who know every trail, call, and hideout in the jungle.
            </p>
          </div>

          {/* Safari Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Morning Safari */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#2c2614] border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                data-alt="Golden sunrise over Yala with silhouette of animals"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("images/safari/familysafari.jpg")`
                }}
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-[#231e10] px-4 py-2 rounded-full text-xs font-bold">5:30 AM - 10:00 AM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">wb_twilight</span>
                  <h3 className="text-[#111418] dark:text-white text-2xl font-bold">Morning Safari</h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed mb-4">
                  Witness the jungle awakening as the first rays of sunlight pierce through the canopy. Morning safaris offer the best opportunities for leopard sightings, as these elusive cats are most active during the cool dawn hours. Watch sloth bears foraging for termites, hear the symphony of endemic birds, and capture stunning photography in the golden morning light.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Best for Leopards</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Bird Watching</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Cool Weather</span>
                </div>
              </div>
            </div>

            {/* Afternoon Safari */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#2c2614] border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                data-alt="Safari jeep at sunset with dramatic orange sky"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("images/safari/sunsetPhotography.jpg")`
                }}
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-[#231e10] px-4 py-2 rounded-full text-xs font-bold">2:00 PM - 6:30 PM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">wb_sunny</span>
                  <h3 className="text-[#111418] dark:text-white text-2xl font-bold">Afternoon Safari</h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed mb-4">
                  Experience the magic of dusk as the park transforms in the golden hour. Afternoon safaris provide spectacular sunset photography opportunities and increased wildlife activity as temperatures cool. Watch elephant herds gathering at waterholes, predators beginning their evening hunts, and the sky painted in brilliant oranges and purples.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Sunset Views</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Elephants</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Photography</span>
                </div>
              </div>
            </div>

            {/* Half-Day Safari */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#2c2614] border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                data-alt="Wildlife tracker observing animals with binoculars"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("images/safari/leopardtracking.jpg")`
                }}
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-[#231e10] px-4 py-2 rounded-full text-xs font-bold">6:00 AM - 1:00 PM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                  <h3 className="text-[#111418] dark:text-white text-2xl font-bold">Half-Day Safari</h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed mb-4">
                  Perfect for serious wildlife enthusiasts, the 7-hour half-day safari allows deeper exploration into remote zones rarely accessed on shorter tours. Enjoy a wilderness picnic breakfast while observing wildlife at waterholes. Your expert tracker has time to follow animal movements, track leopards methodically, and share extensive knowledge about ecology and behavior.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Deep Exploration</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Breakfast Included</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Remote Zones</span>
                </div>
              </div>
            </div>

            {/* Full-Day Safari */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#2c2614] border border-[#e6e8eb] dark:border-[#493f22] hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                data-alt="Leopard resting on a rock at sunset"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("images/safari/yalapicnic.jpg")`
                }}
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-[#231e10] px-4 py-2 rounded-full text-xs font-bold">5:30 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">all_inclusive</span>
                  <h3 className="text-[#111418] dark:text-white text-2xl font-bold">Full-Day Safari</h3>
                </div>
                <p className="text-[#637588] dark:text-[#cbbc90] text-sm leading-relaxed mb-4">
                  The ultimate immersive experience spanning 12 hours from dawn to dusk. Witness the complete daily cycle of jungle life—morning awakening, midday lull, and evening revival. Cover all accessible zones, maximize your chances of encountering the "Big Three" (leopard, elephant, sloth bear), and enjoy both breakfast and lunch in the wilderness. Perfect for photographers and dedicated wildlife lovers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Complete Coverage</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">2 Meals Included</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Big Three</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Tracker Section */}
          <div className="bg-gradient-to-r from-[#231e10] to-[#3d3418] dark:from-[#1c180d] dark:to-[#2c2614] rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">person_search</span>
                  <h3 className="text-white text-3xl font-bold">Expert Driver-Trackers</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  The heart of every great safari is an expert tracker. Our seasoned driver-trackers bring 15+ years of experience, intimate knowledge of animal behavior, and an uncanny ability to read the jungle's subtle signs—a paw print in the mud, a fresh scratch mark on a tree, or the alarm call of a deer.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <p className="text-gray-300 text-sm">Licensed by the Department of Wildlife Conservation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <p className="text-gray-300 text-sm">Deep understanding of leopard territories and movement patterns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <p className="text-gray-300 text-sm">Passionate storytellers who bring the jungle to life</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <p className="text-gray-300 text-sm">Committed to ethical wildlife viewing and conservation</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div 
                  className="w-80 h-96 rounded-xl bg-cover bg-center shadow-2xl"
                  data-alt="Experienced safari guide pointing at wildlife"
                  style={{
                    backgroundImage: `url("/images/wildlife/roadelephants.jpg")`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f4f2eb] dark:bg-[#1a160b]">
        <div className="layout-container flex justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight text-center mb-10">
              Traveler Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-[#111418] dark:text-gray-200 italic mb-4">
                  "Absolutely breathtaking. We saw three leopards in one morning! The guide was incredibly knowledgeable and respected the animals' space."
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    data-alt="Portrait of happy traveler Sarah"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuANga7xytMOJcNt0KEa42EbC5r9iruL12Xp9eze-5Jw85B-E5NrboLq0UocXY3Esix_VfjC8bUf0-BisS31S2k-n_QkTcGid32aAyfioz5LSLVeixAM2tVsTuQwsbDNlXoA7fshpfozc-i8BFroeRTTD7dfJxDB6LBoKV-wlJ2_lGmmnj1YbmwprJwwBkTI41FI9Y7KjPPyvNVgKzdG52DJ8Xsduu7Egh08nEN9DubbIaGN_j60Z1mQoaCao7u6kIfg4uMFMBwieFzv")`
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#111418] dark:text-white">Sarah Jenkins</p>
                    <p className="text-xs text-gray-500">United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-[#111418] dark:text-gray-200 italic mb-4">
                  "The luxury camping experience was a highlight of our Sri Lanka trip. Falling asleep to the sounds of the jungle was magical. Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    data-alt="Portrait of happy traveler Mark"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVCJhNhvwZ6iU04UJeJDsKJsElHV-H2w-YPecc-X3_f5GKDAyX9IdFOqQqAQwe4Yg2PSGXUlXTUmOVK67cfCv26z22K-vpa-vUsvklugHCwYvPPRqmhTaO5mvNs_XBT0VzY3GNMzS-rvOZlLc9IrGhS9Ik336PG3dU5Gpo65a9J8bvPVGZ7RKp2TllDKPrqNq3jJUCeENUtUtMIFE7YXSzLSlsJ6aEFr20Xt6_MJLm8RcoDt2usLR1PSl9HmI1hsHsDUVVG2-9Kp8R")`
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#111418] dark:text-white">Mark D.</p>
                    <p className="text-xs text-gray-500">Australia</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-[#111418] dark:text-gray-200 italic mb-4">
                  "Our tracker spotted a sloth bear with cubs—an incredibly rare sight! The full-day safari was worth every penny. Professional service from start to finish."
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    data-alt="Portrait of happy traveler Rajesh"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80")`
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#111418] dark:text-white">Rajesh Kumar</p>
                    <p className="text-xs text-gray-500">India</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-[#111418] dark:text-gray-200 italic mb-4">
                  "As a wildlife photographer, this was paradise. The morning light, the leopard poses, the bird diversity—everything exceeded expectations. Coming back next year!"
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    data-alt="Portrait of happy traveler Emma"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80")`
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#111418] dark:text-white">Emma Thompson</p>
                    <p className="text-xs text-gray-500">Canada</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-[#111418] dark:text-gray-200 italic mb-4">
                  "Fantastic family experience! Our kids were thrilled to see elephants bathing and peacocks dancing. The guide made it educational and fun for all ages."
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    data-alt="Portrait of happy traveler David"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80")`
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#111418] dark:text-white">David Miller</p>
                    <p className="text-xs text-gray-500">USA</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-[#111418] dark:text-gray-200 italic mb-4">
                  "Best safari I've done in Asia. The afternoon drive delivered stunning sunset views with a leopard silhouette. Booking process was smooth and communication excellent."
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    data-alt="Portrait of happy traveler Sophie"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80")`
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#111418] dark:text-white">Sophie Laurent</p>
                    <p className="text-xs text-gray-500">France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed Booking CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Link href="/book">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[#231e10] shadow-lg shadow-black/40">
            <span className="material-symbols-outlined text-2xl">calendar_month</span>
          </button>
        </Link>
      </div>
    </>
  )
}
