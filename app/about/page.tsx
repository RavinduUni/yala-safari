import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          data-alt="Majestic leopard resting on a tree branch in Yala National Park"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTOE7jcpA424AyJWhMh0cAsYRtMoGF8LOZcHQRy9d0qwXR7XgbBSA2fqXDATqs3MbItQgLuiTBabWCk0k-0RWXhdgxI8Db9hIbvDtHNC8uUFMPT2NtQ2_KgrA5S6Q1nrez5AtZBwuxYDnp1SEak0kfWG0Chjy2BomoLqDicKn47M4anPYmTFfNsg-PH8rWrOuJHIeXw52DKVZrC-7HCAJ5kVBDUcyUPa-gf5MTUPBP-DXIHe4CU-iQNcy_WrYAZLk1b1ZERAoq_IkO")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-[900px] animate-fade-in-up">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            Discover Yala National Park
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            History, Ecology & Our Story
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Welcome to the Heart of Sri Lankan Wilderness
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-10 bg-surface-dark/30">
        <div className="max-w-[960px] mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Yala National Park, often hailed as the <span className="text-primary font-semibold">crown jewel of Sri Lanka's wildlife conservation efforts</span>, 
            is far more than just a destination for spotting leopards. It's a sprawling canvas of diverse ecosystems, a testament to ancient history, 
            and a vibrant sanctuary brimming with an extraordinary array of life. At YalaSriLanka.com, we are deeply passionate about this incredible 
            natural wonder, and through this page, we invite you to delve into the rich tapestry that defines Yala National Park of Sri Lanka, 
            understanding its past, its ecological significance, and the story behind our commitment to sharing its magic with you.
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-y border-border-dark bg-surface-dark/50">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">pets</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold">Highest</p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Leopard Density</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">map</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold">979 km²</p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Protected Area</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">flutter_dash</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold">215+</p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Bird Species</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">history</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold">Since 1938</p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">National Park</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">A Journey Through Time</h2>
            <p className="text-primary font-semibold text-lg uppercase tracking-wider">The History of Yala National Park</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              The lands that comprise Yala National Park hold echoes of a fascinating past, far predating its designation as a protected area. 
              For millennia, this region, nestled in the <span className="text-white font-semibold">southeastern dry zone of Sri Lanka</span>, 
              has been a significant cultural and spiritual landscape. Ancient civilizations thrived here, evidenced by remarkable ruins scattered 
              throughout the park.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">temple_buddhist</span>
                  <h3 className="text-2xl font-bold text-white">Sithulpahuwa Rock Temple</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A sprawling monastic complex with a history stretching back over <span className="text-primary font-semibold">2000 years</span>, 
                  stands as a profound spiritual site, once home to thousands of Buddhist monks.
                </p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                  <h3 className="text-2xl font-bold text-white">Magul Vihara</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  An ancient shrine that adds to the historical mystique of the park, hinting at royal connections and a vibrant past. 
                  These sites offer a unique blend of nature and history.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-surface-dark border border-primary/30 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">auto_stories</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Legends & Folklore</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Indigenous folklore and legends also intertwine with Yala's landscape. Tales of <span className="text-white font-semibold">King Rawana</span> and 
                    his mystical connections to the region imbue the park with an almost mythical aura, adding another layer of intrigue to its already captivating environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Gallery - Historical Sites */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="relative rounded-2xl overflow-hidden group">
                <div 
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("/images/landscapes/Sithulpawwa.jpg")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h4 className="text-white text-lg font-bold">Ancient Buddhist Heritage</h4>
                    <p className="text-gray-300 text-sm">Sithulpahuwa monastery ruins</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <div 
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMA4prbEP9w6hGtqLjY6ZaA-JCaNnWFp1hredo1p83PMKfo39yZ7UCuDK4Z3p79zFbCu99n-H_Y5N4NtQmKCX1bCJWQOfeBFe6kxpJItkUa_De2MDQ61WJK4HfRnsrMQDrENIafP-g2XVL6vxabj7J9jWe9G7b7bU8mx9TABj0Z0LQqX4ldE39tGhIGnf8Nc6s8SvI3pw78ZY_RG53PlTzl9YrWEtmrubFphINM9YpRtQQ6O9eCJmGSVWUXVS5_cwjgaZNNkO03e4J")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h4 className="text-white text-lg font-bold">Natural Wilderness</h4>
                    <p className="text-gray-300 text-sm">Yala's diverse landscapes and ecosystems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-dark/50 border-l-4 border-primary rounded-r-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-white mb-4">Modern Conservation Era</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  The modern history of Yala as a protected wildlife area began much later. The area was first designated as a 
                  <span className="text-white font-semibold"> wildlife sanctuary in 1900</span>. Its official recognition as a National Park came on 
                  <span className="text-primary font-semibold"> March 1st, 1938</span>, making it one of Sri Lanka's oldest and most historically significant 
                  protected zones.
                </p>
                <p className="leading-relaxed">
                  Since then, Yala has grown in prominence, becoming a beacon for conservation and a magnet for wildlife enthusiasts from across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography and Climate Section */}
      <section className="bg-surface-dark/30 py-20 px-4 md:px-10 border-y border-border-dark">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Where the Wild Thrives</h2>
            <p className="text-primary font-semibold text-lg uppercase tracking-wider">Geography and Climate</p>
          </div>

          {/* Location Info */}
          <div className="bg-gradient-to-br from-primary/10 to-surface-dark border border-primary/30 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Which Province is Yala In?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Yala National Park stretches across two of Sri Lanka's beautiful provinces: the <span className="text-white font-semibold">Southern and Uva provinces</span>, 
                  encompassing parts of both the <span className="text-white font-semibold">Hambantota and Monaragala districts</span>. Its strategic location contributes 
                  to its unique ecological characteristics.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The park's diverse terrain, covering an impressive <span className="text-primary font-semibold">978.807 square kilometers (377.919 sq mi)</span>, 
                  is a mosaic of habitats, each supporting a distinct community of flora and fauna.
                </p>
              </div>
            </div>
          </div>

          {/* Terrain Visual Showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative rounded-2xl overflow-hidden group md:col-span-2">
              <div 
                className="aspect-[21/9] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEHLQ9qBPGK7ZYRqMYHLvQ3kTnQ5PzLWv8qGHdLvQ8CZnLKjTxMRy6Wz4QHpL7TKvN2RqGpLxMwYKLFgODC9qTVT2g8Wqx5b4Ht8xRLONdQ3KqPJzLWvSqGHdLvQ8CZnLKjTxMRy6Wz4QHpL7TKvN2RqGpLxMwYKLFgODC9qTVT2g8Wqx5b4Ht8xRLONdQ3KqPJzLWvSqGHdLvQ8CZn")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white text-2xl font-bold mb-1">Vast Open Plains</h4>
                  <p className="text-gray-300">Perfect habitat for herbivores and their predators</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <div 
                className="aspect-[21/9] md:aspect-auto md:h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkJ9ctWQKdW5WL42I7zK-z835NkE8nujz1YYdXD5bb7h3GKES59zKG8fgy3iYbjwQgYUlJ7TNuqohX6FLno14qpR7h11FOEfdd1PZGrICgDmmPku1EL9XLdGopNTCnaPgwhA3IKIMWC2a5QDJWbcB4905_OvFrZSLjD3qew9q4XUJMbyACJeccEOau7nnz035SOmuTbGArMYYIC0TGirfZ8DeXozKcPohc54tu0AtnVQqVHiwUdzpFd62Qc2EpPlQkFprHcVTfuLOB")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white text-xl font-bold mb-1">Coastal Beauty</h4>
                  <p className="text-gray-300 text-sm">Pristine beaches & lagoons</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terrain Types */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Diverse Terrain & Habitats</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">forest</span>
                  <h4 className="text-white font-bold text-lg">Dry Monsoon Forests</h4>
                </div>
                <p className="text-gray-400 text-sm">Dense, towering trees that provide crucial shade and shelter</p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">grass</span>
                  <h4 className="text-white font-bold text-lg">Arid Scrublands</h4>
                </div>
                <p className="text-gray-400 text-sm">Vast stretches of hardy shrubs, home to life adapted to drier conditions</p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">water</span>
                  <h4 className="text-white font-bold text-lg">Brackish Lagoons</h4>
                </div>
                <p className="text-gray-400 text-sm">Serene lagoons along the coastal belt, vital water sources and bird paradises</p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">landscape</span>
                  <h4 className="text-white font-bold text-lg">Open Grassy Plains</h4>
                </div>
                <p className="text-gray-400 text-sm">Ideal for grazing animals and offering clear lines of sight for predators</p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">beach_access</span>
                  <h4 className="text-white font-bold text-lg">Pristine Coastline</h4>
                </div>
                <p className="text-gray-400 text-sm">Miles of untouched beaches along the Indian Ocean, sea turtle nesting grounds</p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">waves</span>
                  <h4 className="text-white font-bold text-lg">Water Bodies</h4>
                </div>
                <p className="text-gray-400 text-sm">Tanks like Maha Seelawawa, Buthawa Tank, Menik River, and Kumbukkan Oya</p>
              </div>
            </div>
          </div>

          {/* Climate Info */}
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">thermostat</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Weather & Climate</h3>
                <p className="text-gray-400">Characteristic of a semi-arid dry zone</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background-dark/50 rounded-xl p-5">
                <div className="text-primary text-3xl font-black mb-2">26.4°C</div>
                <p className="text-gray-400 text-sm">Average Temperature</p>
                <p className="text-gray-500 text-xs mt-1">Can climb higher during dry season</p>
              </div>
              <div className="bg-background-dark/50 rounded-xl p-5">
                <div className="text-primary text-3xl font-black mb-2">Nov-Jan</div>
                <p className="text-gray-400 text-sm">Northeast Monsoon</p>
                <p className="text-gray-500 text-xs mt-1">Main rainfall period</p>
              </div>
              <div className="bg-background-dark/50 rounded-xl p-5">
                <div className="text-primary text-3xl font-black mb-2">Jul-Sep</div>
                <p className="text-gray-400 text-sm">Severe Drought</p>
                <p className="text-gray-500 text-xs mt-1">Best wildlife viewing season</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6 leading-relaxed">
              This climatic rhythm dictates the movement and visibility of wildlife, making certain times of the year particularly rewarding for safaris.
            </p>
          </div>
        </div>
      </section>

      {/* Ecological Significance Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The Jewel of Biodiversity</h2>
            <p className="text-primary font-semibold text-lg uppercase tracking-wider">Ecological Significance</p>
            <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
              Yala's true ecological significance lies in its incredible biodiversity, making it a globally recognized hotspot for wildlife. 
              It boasts an astonishing variety of species, from the smallest insects to the largest mammals.
            </p>
          </div>

          {/* Mammals */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">pets</span>
              <div>
                <h3 className="text-3xl font-bold text-white">Mammals</h3>
                <p className="text-gray-400">44 varieties making Yala a vital sanctuary</p>
              </div>
            </div>
            
            {/* Mammal Showcase Images */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="relative rounded-xl overflow-hidden group">
                <div 
                  className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2ittbCHTXswqzXAWZhg-i0h9czVMfI09s5HK17mMbZJLJbB-0Qt62A8GV7lRK_Mcad05msgvsLXcas27ejC16GBJAlUkmZTjGMJf_UeU6zNJuGjBuTAjghIyndrg3CFoPGNH9Fu7TmcFIeqoWb2saKFh9Te6c2_w1RV_L7VTVYybkEY0fkJvH1ccKoW9TPFjQpUChSnIA7tklaQw4ZnmFv7pCU8yqRyWlCgzqyP-dLiGbdJOG9chxPHQD7s-5JCmuNjqK2gNEOo8z")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Sri Lankan Leopard</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <div 
                  className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvFzQ8xQKLMYHGpLvQ8CZnLKjTxMRy6Wz4QHpL7TKvN2RqGpLxMwYKLFgODC9qTVT2g8Wqx5b4Ht8xRLONdQ3KqPJzLWvSqGHdLvQ8CZnLKjTxMRy6Wz4QHpL7TKvN2RqGpLxMwYKLFgODC9qTVT2g8Wqx5b4Ht8xRLONdQ3KqPJzLWvSqGHdLvQ8CZnLKjTxMRy")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Asian Elephant</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <div 
                  className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4rKEtSsazGMHYXGLlJjG9kuVGgdSLSJ0H0JztGL-lwZTY2EYruw4ob26CkgPj2ILzKYHAZo42QbWVWzlcNTdtlQbnsW0h2Qe8KlWgUj70uzYoJ8ZDY9PNCbjnmRVCah6ZoNBvMVi07fcj_gAba5eN9EtoSI04B6UGu24VSyE7Nx8f2COI_FmsC0Lww3grlT8zM1p3QvMRjAuqhabULl-K-vP4k8PSLxlERkXIQleZH8SEU4_4LsislOOPB_lS3a5GyMH4QvcHO7C-")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Sloth Bear</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                With <span className="text-white font-semibold">44 varieties of mammals</span>, Yala is a vital sanctuary. It holds arguably the 
                <span className="text-primary font-semibold"> highest density of leopards in the world</span>, making it an exceptional place to observe 
                these elusive big cats.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-background-dark/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-gray-300">Sri Lankan Leopards</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background-dark/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-gray-300">Sri Lankan Elephants</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background-dark/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-gray-300">Sloth Bears</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background-dark/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-gray-300">Wild Water Buffalo</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background-dark/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-gray-300">Spotted & Sambar Deer</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background-dark/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-gray-300">Wild Boar & Jackals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Birds */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">flutter_dash</span>
              <div>
                <h3 className="text-3xl font-bold text-white">Birds</h3>
                <p className="text-gray-400">One of Sri Lanka's 70 Important Bird Areas (IBAs)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/20 to-surface-dark border border-primary/40 rounded-xl p-6">
                <div className="text-5xl font-black text-white mb-2">215</div>
                <p className="text-gray-300 font-semibold">Total Bird Species</p>
                <p className="text-gray-400 text-sm mt-1">Recorded in the park</p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-surface-dark border border-primary/40 rounded-xl p-6">
                <div className="text-5xl font-black text-white mb-2">6</div>
                <p className="text-gray-300 font-semibold">Endemic Species</p>
                <p className="text-gray-400 text-sm mt-1">Unique to Sri Lanka</p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-surface-dark border border-primary/40 rounded-xl p-6">
                <div className="text-5xl font-black text-white mb-2">90</div>
                <p className="text-gray-300 font-semibold">Water Bird Species</p>
                <p className="text-gray-400 text-sm mt-1">Nearly half are migrants</p>
              </div>
            </div>
            <div className="mt-6 bg-surface-dark border border-border-dark rounded-xl p-6">
              <h4 className="text-white font-bold mb-3">Endemic Bird Species</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Sri Lankan Grey Hornbill
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Sri Lankan Junglefowl
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Sri Lankan Wood Pigeon
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Black-capped Bulbul
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Brown-capped Babbler
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Crimson-fronted Barbet
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                During the migratory season (October to April), the park's lagoons and wetlands become a vibrant hub for thousands of migratory water birds.
              </p>
            </div>
          </div>

          {/* Other Wildlife */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">cruelty_free</span>
                <h4 className="text-white font-bold text-xl">Reptiles</h4>
              </div>
              <div className="text-primary text-4xl font-black mb-2">47</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Known reptile species including <span className="text-white">5 globally endangered sea turtles</span> that nest on its shores
              </p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                <h4 className="text-white font-bold text-xl">Amphibians</h4>
              </div>
              <div className="text-primary text-4xl font-black mb-2">18</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Amphibian species thriving in Yala's diverse aquatic and semi-aquatic environments
              </p>
            </div>

            <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">phishing</span>
                <h4 className="text-white font-bold text-xl">Fish</h4>
              </div>
              <div className="text-primary text-4xl font-black mb-2">21</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Freshwater fish species showcasing the richness of aquatic ecosystems
              </p>
            </div>
          </div>

          {/* Flora */}
          <div className="mt-12 bg-gradient-to-br from-green-900/20 to-surface-dark border border-green-700/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-green-400 text-4xl">nature</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Flora - The Foundation of Life</h3>
                <p className="text-gray-300 leading-relaxed">
                  The vegetation itself is a study in adaptation and diversity, forming the foundation of the entire ecosystem. From the towering trees 
                  of the monsoon forests to the specialized plants of the dry scrublands and the unique flora of the coastal dunes and wetlands, 
                  <span className="text-white font-semibold"> every plant plays a role in sustaining Yala's vibrant wildlife</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-surface-dark/20 py-20 px-4 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Story</h2>
            <p className="text-primary font-semibold text-lg uppercase tracking-wider">Why YalaSriLanka.com is Your Trusted Partner</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gradient-to-br from-primary/10 to-surface-dark border border-primary/30 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At <span className="text-white font-bold">YalaSriLanka.com</span>, our journey began with a profound love for Yala National Park and 
                a shared passion for its incredible wildlife. We are not just a business; we are a team of <span className="text-primary font-semibold">dedicated 
                wildlife enthusiasts and experts</span> who have spent countless hours exploring every corner of this magnificent park.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our personal experiences, combined with extensive knowledge of Yala's history, ecology, and current conservation efforts, form the bedrock 
                of our commitment to you.
              </p>
            </div>

            {/* Safari Experience Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <div 
                className="aspect-[21/9] bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGYq0C0jBO-MHwjtXTAml5G8Rn2n3dtKnbSkqQP8_gsdzCu9h-U7wRETJshdCRvHi0hQAJ9b0OG0ucDK6VwWxbKAplatWdWPyOk4Gzh5MwAkH1tbKFXAiGX6_4cuLpEdUURdANxIBYvk6BjPH81kbwXxUXCuVsVhzDH2Q1C2Eu9DQzhVyp4XLVxn_WUyNh65Ny3NYOLBfqyQHcqRn47zsMiCTAe8pTp23vNAQFnwHMzeCELhK0H8GHgnoweYBWgbgdoRcZ5ITIqKmF")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                <div className="max-w-2xl p-8 md:p-12">
                  <div className="bg-primary text-background-dark text-xs font-bold px-4 py-2 rounded-full w-fit mb-4">
                    Expert-Led Safaris
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-black mb-4">Passionate About Wildlife</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Our team of naturalists and wildlife experts bring decades of combined experience to create unforgettable safari experiences in Yala National Park.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">menu_book</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Content Hub</h3>
                <p className="text-gray-300 leading-relaxed">
                  We recognized a need for a truly comprehensive content hub – a place where aspiring travelers could find everything they needed 
                  to know about Yala, from its deepest secrets to the most practical travel tips.
                </p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">eco</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Responsible Tourism</h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe that an informed visitor is a more responsible visitor, and a responsible visitor contributes to the long-term 
                  conservation of this precious ecosystem.
                </p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">One-Stop Service Provider</h3>
                <p className="text-gray-300 leading-relaxed">
                  YalaSriLanka.com is designed to be your complete service provider for everything Yala. We meticulously curate information, 
                  offer seamless booking services, and provide expert insights that go beyond what you'll find elsewhere.
                </p>
              </div>

              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're planning a Jeep Safari in Yala for the first time or returning for another adventure, our goal is to ensure 
                  your experience is hassle-free, enlightening, and deeply memorable.
                </p>
              </div>
            </div>

            {/* What We Manage */}
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
                What We Manage For You
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                  <span className="text-gray-300">Pre-booking your safari with top-rated operators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                  <span className="text-gray-300">Arranging all necessary park entry tickets</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                  <span className="text-gray-300">Organizing comfortable transfers to the park</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                  <span className="text-gray-300">Ensuring experienced, ethical guides accompany you</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                  <span className="text-gray-300">Providing 24/7 customer support during your trip</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                  <span className="text-gray-300">Sharing insider tips for best wildlife encounters</span>
                </div>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="bg-gradient-to-br from-green-900/20 to-surface-dark border border-green-700/30 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400 text-4xl">volunteer_activism</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Conservation Commitment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our commitment extends to fostering responsible tourism. We work closely with local communities and support practices that 
                    minimize the environmental footprint, ensuring that the magic of Yala remains vibrant for generations to come.
                  </p>
                  <p className="text-white font-semibold text-lg">
                    When you choose YalaSriLanka.com, you're not just booking a trip; you're partnering with a team that genuinely cares about 
                    Yala and is dedicated to preserving its wild heart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Links Section */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-primary/5 to-surface-dark/50 border-y border-border-dark">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Explore More of Yala</h2>
            <p className="text-gray-400 text-lg">
              Join us in exploring the wonders of Yala National Park. Let us share our passion and expertise to make your 
              Sri Lankan wildlife adventure truly unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/gallery">
              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group h-full">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined text-3xl">photo_library</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Yala's Incredible Wildlife</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Discover the diverse species that call Yala home through our wildlife gallery
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  View Wildlife Gallery
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>

            <Link href="/services">
              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group h-full">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined text-3xl">explore</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Plan Your Perfect Safari</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Explore our expert-curated safari packages designed for every type of adventurer
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  View Safari Packages
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>

            <Link href="/contact">
              <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group h-full">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined text-3xl">contact_support</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Tours & Inquiries</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Get in touch with our team for personalized safari experiences and expert advice
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Contact Our Experts
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-32 px-4 md:px-10 border-t border-border-dark overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.85) 0%, rgba(35, 30, 16, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTOE7jcpA424AyJWhMh0cAsYRtMoGF8LOZcHQRy9d0qwXR7XgbBSA2fqXDATqs3MbItQgLuiTBabWCk0k-0RWXhdgxI8Db9hIbvDtHNC8uUFMPT2NtQ2_KgrA5S6Q1nrez5AtZBwuxYDnp1SEak0kfWG0Chjy2BomoLqDicKn47M4anPYmTFfNsg-PH8rWrOuJHIeXw52DKVZrC-7HCAJ5kVBDUcyUPa-gf5MTUPBP-DXIHe4CU-iQNcy_WrYAZLk1b1ZERAoq_IkO")`
          }}
        />
        
        {/* Animated particles/elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-75" />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-150" />
          <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <div className="inline-block mb-2">
            <span className="material-symbols-outlined text-primary text-5xl">explore</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">Ready to Witness the Wild?</h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Book your sustainable safari experience today and embark on the adventure of a lifetime in Yala National Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
            <Link href="/book">
              <button className="flex items-center justify-center rounded-xl h-16 px-12 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105 shadow-2xl shadow-primary/30">
                <span className="material-symbols-outlined mr-2">calendar_month</span>
                Book Your Safari Now
              </button>
            </Link>
            <Link href="/services">
              <button className="flex items-center justify-center rounded-xl h-16 px-12 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-lg font-bold hover:bg-white/20 transition-all hover:scale-105">
                <span className="material-symbols-outlined mr-2">hiking</span>
                Explore Safari Packages
              </button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-primary text-2xl font-black mb-1">10+</div>
              <div className="text-gray-300 text-xs uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-black mb-1">5000+</div>
              <div className="text-gray-300 text-xs uppercase tracking-wider">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-black mb-1">100%</div>
              <div className="text-gray-300 text-xs uppercase tracking-wider">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
