import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col justify-center items-center overflow-hidden">
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
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoJOWPQdJwbzxiUuyJ-K8bCEXXLNg2WTiAiWA1O_QdltYNQtI6jBAk6uImxyrWCj_QsePThhRsTwdaIZVJeUaR-IYH2TbEvA4VdkxxagZXzhE0N1e6Ou6rx1C2kmnmvSUO-zF0IPw_KzFC1ZnV4Pz8f2EYsAPe4uhoAYGWRXo6ejW0X3-QBiFa5o54Y2ihR5lLfmdeV7FO0GTACJxuwN-XWA12khY2yuYSV6wPx0nGfFhGEshtPJXd34seg-2kBwGza4IsOwab4-rN")`
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
                    className="rounded-xl bg-center bg-cover h-40 w-full"
                    data-alt="Bear climbing a tree in Yala"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVvSN1qqEw5ZKlJq1Xc38VmnJ4uI1bAoVLMkHclzOn91gYeYHZ6xTCvO1-IgYI9cFu0Z7ITjw1pciGB5n70Ne--aMJNL7rDrxk-tSrGvlqHka58iQW5oEw_6luzlK9JzFB3f7qerHuTXA2GRg5t9XYhPtxYVowllaMkrdz4KYPvLzJ3Mbzk2p4DAtlHM42aCYoeI2xWIuMWgIXauB4cjsy-Ip7KvwGvCsGYqYQLWJ2fK5KvmmJSEaqESD-b8whgPTroBuTc5-3xY4F")`
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
            <Link href="/pricing" className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline">
              View All Packages <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Package 1 */}
            <div className="flex flex-col bg-white dark:bg-[#2c2614] rounded-xl overflow-hidden border border-[#e6e8eb] dark:border-[#493f22]">
              <div 
                className="relative h-48 bg-cover bg-center"
                data-alt="Morning sunrise over a lake in Yala"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcTsAEr0Q7NcrON6N-mXhcmDr4R_dLjzZRHNwXgt2CwXvTxE8VPj2Y6HG8Ihuq2f9Uq8mjnxv5P3xrh2mLYR1YsnuQNmrsWkCSSnWMs5shIuBwGjuaRozhm6g5DR31lrujraCM4zLKqjAcpGzi5irZ-mP_ggXTr0pArG0FQ_1KAr8RApFD5czISotIuiQ6UjzxPoEY8IMuQYqpvlTtd7KQvPxUPbh9k24iAw1YNk2FP9R7dxclEwXYd9-8Uf2g3rSsslutOmKgOOOm")`
                }}
              >
                <div className="absolute top-3 right-3 bg-primary text-[#231e10] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white">Morning Safari</h3>
                  <span className="text-primary font-bold">
                    $60<span className="text-xs font-normal text-gray-500 dark:text-gray-400">/pp</span>
                  </span>
                </div>
                <p className="text-sm text-[#637588] dark:text-[#cbbc90] mb-4">
                  Catch the jungle waking up. Best time for bird watching and bear sightings.
                </p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#cbbc90]">
                    <span className="material-symbols-outlined text-sm">schedule</span> 4 Hours (5:30 AM Start)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#cbbc90]">
                    <span className="material-symbols-outlined text-sm">local_cafe</span> Breakfast Included
                  </div>
                  <Link href="/book">
                    <button className="w-full mt-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#231e10] transition-colors font-bold text-sm">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="flex flex-col bg-white dark:bg-[#2c2614] rounded-xl overflow-hidden border border-[#e6e8eb] dark:border-[#493f22]">
              <div 
                className="relative h-48 bg-cover bg-center"
                data-alt="Jeep driving on a dirt road during sunset"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiVre1Ti2DF2JjraYQMLWPj84PQPyoC5-okIJMtwRHi6Crr-eVuex2yVvQEbVju0NciGFC-BEICTQLsOs5p2o0MMioWaqZH_pI3W3tnKC8AuOUJQfTRaa5LJFB9jRAbf7rkzJ55gtgoheOYJENFRFMd2krZPtib_22XNMfKG4FPx9tslmHSu0BPFhvAcTKqjcYGVpIZDppgl7Fvt5H6Wu18rzyn4y-kdPdWipgvHNLUflcCjEYBJDChZIQ4I9ep88hrZzLN7bSkrB4")`
                }}
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white">Full Day Adventure</h3>
                  <span className="text-primary font-bold">
                    $110<span className="text-xs font-normal text-gray-500 dark:text-gray-400">/pp</span>
                  </span>
                </div>
                <p className="text-sm text-[#637588] dark:text-[#cbbc90] mb-4">
                  Immerse yourself completely. Explore deep into the park's various zones.
                </p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#cbbc90]">
                    <span className="material-symbols-outlined text-sm">schedule</span> 12 Hours (6:00 AM Start)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#cbbc90]">
                    <span className="material-symbols-outlined text-sm">restaurant</span> Picnic Lunch Included
                  </div>
                  <Link href="/book">
                    <button className="w-full mt-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#231e10] transition-colors font-bold text-sm">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="flex flex-col bg-white dark:bg-[#2c2614] rounded-xl overflow-hidden border border-[#e6e8eb] dark:border-[#493f22]">
              <div 
                className="relative h-48 bg-cover bg-center"
                data-alt="Luxury tent interior with comfortable bed"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1OMwtdp0dt-sGOw_NkwtxhawMXlreeULqxZldvblBS52RetEBHQDALJ0xUmFDP8oXoh-kJHIl_GC7keOAG6_c54FUVFTCBJ5LYeuR-QTPmJXK04t2lLUnuRKKvPgOiAU6hDGP4l46YkjhbDei0uElzDdTAyKkvBrJXKrbGGOZJLd55nX3pycUsMcxhfQQ9M80ErzvsDtyvgFJcFAn87RR2OtSvlHI6wD4sTG9onRklsIj2ZGbjt0FHupDEVeZAsPVv6q57Ztwb_Kg")`
                }}
              >
                <div className="absolute top-3 right-3 bg-[#231e10] text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary">
                  Premium
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white">Luxury Camping</h3>
                  <span className="text-primary font-bold">
                    $250<span className="text-xs font-normal text-gray-500 dark:text-gray-400">/night</span>
                  </span>
                </div>
                <p className="text-sm text-[#637588] dark:text-[#cbbc90] mb-4">
                  Sleep under the stars in comfort. Includes night walk and BBQ dinner.
                </p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#cbbc90]">
                    <span className="material-symbols-outlined text-sm">bed</span> Luxury Tent
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#cbbc90]">
                    <span className="material-symbols-outlined text-sm">local_fire_department</span> BBQ & Bonfire
                  </div>
                  <Link href="/book">
                    <button className="w-full mt-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#231e10] transition-colors font-bold text-sm">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f4f2eb] dark:bg-[#1a160b]">
        <div className="layout-container flex justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight text-center mb-10">
              Traveler Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm">
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
              <div className="p-6 rounded-xl bg-white dark:bg-[#231e10] border border-gray-200 dark:border-[#493f22] shadow-sm">
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
