import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <header>
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
              <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-background-dark text-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105 shadow-2xl shadow-primary/30">
                <span className="material-symbols-outlined mr-2">calendar_month</span>
                Book Your Safari Now
              </button>
            </Link>
            <Link href="/services">
              <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-lg font-bold hover:bg-white/20 transition-all hover:scale-105">
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
      </header>

      {/* SECTION 1 — ABOUT YALA SRI LANKA (INTRODUCTION) */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6">
                <h2 className="text-4xl md:text-4xl font-black text-white mb-4">About Yala National Park</h2>
                <div className="w-20 h-1 bg-primary rounded"></div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Yala National Park stands as Sri Lanka's most celebrated wilderness sanctuary, where untamed nature 
                reigns supreme across 979 square kilometers of extraordinary landscapes. From dense monsoon forests 
                to pristine coastlines, from sun baked grasslands to serene lagoons, Yala is a living testament to 
                the raw power and beauty of the natural world.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                This is where Sri Lanka's wild heart beats strongest where leopards prowl ancient trails, elephants 
                gather at waterholes, and over 200 bird species paint the sky. Established in 1938, Yala has become 
                a sanctuary of global significance, protecting one of Asia's richest biodiversity hotspots while 
                honoring a heritage that stretches back thousands of years.
              </p>
            
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url("images/wildlife/aboutYala1.jpg")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium">Yala's wilderness - where nature reigns supreme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY YALA IS SPECIAL */}
      <section className="py-20 px-4 md:px-10 border-y border-border-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-black text-white mb-4">Why Yala is Special</h2>
            <div className="w-20 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Yala stands apart as one of the world's most remarkable wildlife sanctuaries, 
              offering experiences found nowhere else on Earth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Leopard Density */}
            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url("images/wildlife/leopardDensity.jpg")`
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-3xl">pets</span>
                  <h3 className="text-xl font-bold text-white">Highest Leopard Density</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Yala Block 1 has one of the highest concentrations of leopards in the world. With approximately 
                  one leopard per square kilometer, your chances of spotting these elusive big cats are unmatched.
                </p>
                <p className="text-primary text-xs font-semibold">Best leopard viewing destination globally</p>
              </div>
            </div>

            {/* Biodiversity */}
            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url("images/wildlife/biodiversity.jpg")`
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
                  <h3 className="text-xl font-bold text-white">Extraordinary Biodiversity</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Home to 44 mammal species, 215 bird species (including 6 endemics), 47 reptiles, and countless 
                  insects and plants. Yala is recognized as one of Sri Lanka's 70 Important Bird Areas.
                </p>
                <p className="text-primary text-xs font-semibold">UNESCO Biosphere Reserve candidate</p>
              </div>
            </div>

            {/* Unique Landscapes */}
            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url("images/wildlife/landscapes.jpg")`
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-3xl">landscape</span>
                  <h3 className="text-xl font-bold text-white">Diverse Landscapes</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  From dry monsoon forests to pristine beaches, brackish lagoons to open grasslands—Yala's mosaic 
                  of habitats creates stunning scenery and supports incredible wildlife diversity.
                </p>
                <p className="text-primary text-xs font-semibold">Six distinct ecosystem types</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-dark/50 rounded-xl p-8 border border-border-dark">
            <div className="text-center">
              <div className="text-primary text-3xl font-black mb-2">979 km²</div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Protected Area</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-black mb-2">215+</div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Bird Species</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-black mb-2">44</div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Mammal Species</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-black mb-2">Since 1938</div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">National Park</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR STORY */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-black text-white mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Built by wildlife enthusiasts, for wildlife enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url("images/wildlife/whoweare.jpg")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium">Expert guides sharing their passion for Yala's wildlife</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                We are a dedicated team of wildlife enthusiasts, naturalists, and conservation advocates who have 
                spent years exploring every corner of Yala National Park. Our passion for this extraordinary wilderness 
                runs deep it's not just our workplace, it's where our hearts belong.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Each member of our team brings decades of combined experience in wildlife tracking, safari guiding, 
                and ecological research. We've witnessed the park through all seasons, observed leopard behavior 
                patterns, tracked elephant herds, and documented hundreds of bird species.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                This isn't just business for us it's our life's work and greatest passion.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* SECTION 4 — OUR MISSION */}
      <section className="py-20 px-4 md:px-10 border-y border-border-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-black text-white mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Connecting people with nature while protecting Yala's wild heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card 1 */}
            <div className="bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">explore</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Create Unforgettable Experiences</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                We strive to provide safari experiences that go beyond simple wildlife spotting. Through expert 
                guidance, we help visitors understand animal behavior, ecosystem dynamics, and the intricate web 
                of life that makes Yala extraordinary. Every safari becomes a learning journey.
              </p>
            </div>

            {/* Mission Card 2 */}
            <div className="bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Provide Trusted Information</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                We are committed to being the most reliable source of Yala National Park information from wildlife 
                facts to booking logistics. Our content is based on firsthand experience, scientific research, and 
                continuous engagement with conservation experts.
              </p>
            </div>

            {/* Mission Card 3 */}
            <div className="bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">eco</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Champion Conservation</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                We believe tourism can be a force for good. By promoting ethical wildlife viewing and supporting 
                local conservation initiatives, we help ensure Yala's ecosystems remain protected and thriving. 
                Every safari booked through us contributes to conservation efforts.
              </p>
            </div>

            {/* Mission Card 4 */}
            <div className="bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support Local Communities</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                We work closely with local guides, drivers, and communities surrounding Yala. By ensuring fair 
                compensation and creating sustainable tourism opportunities, we help local people benefit from 
                wildlife conservation while fostering pride in their natural heritage.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* SECTION 5 — RESPONSIBLE TOURISM & CONSERVATION */}
      <section className="py-20 px-4 md:px-10 bg-surface-dark/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-black text-white mb-4">Responsible Tourism & Conservation</h2>
            <div className="w-20 h-1 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Protecting Yala's wilderness through ethical practices and wildlife respect
            </p>
          </div>

          {/* Ethical Safaris */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                  <h3 className="text-2xl font-bold text-white">Ethical Safari Practices</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Every safari we organize follows strict ethical guidelines designed to minimize environmental 
                  impact while maximizing your wildlife experience. We believe responsible tourism is the key to 
                  Yala's long-term survival.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-surface-dark/50 rounded-lg border border-border-dark">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Safe Distance Protocol</h4>
                      <p className="text-gray-400 text-sm">Maintaining respectful distances from all wildlife to avoid stress or behavioral changes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-surface-dark/50 rounded-lg border border-border-dark">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">No Off-Road Driving</h4>
                      <p className="text-gray-400 text-sm">Strict adherence to designated safari tracks to protect vegetation and prevent habitat damage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-surface-dark/50 rounded-lg border border-border-dark">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Quiet Observation</h4>
                      <p className="text-gray-400 text-sm">Encouraging silence during wildlife encounters to preserve natural behaviors</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/images/wildlife/responsibleTourism.jpg")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-sm font-medium">Ethical wildlife viewing - observing from a respectful distance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wildlife Respect Guidelines */}
          <div className="bg-gradient-to-br from-green-900/20 to-surface-dark border border-green-700/30 rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-green-400 text-4xl">forest</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Wildlife Respect Guidelines</h3>
                <p className="text-gray-300 text-base">Our commitment to protecting Yala's inhabitants</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Never feed wildlife or attempt to attract animals</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">No flash photography - can startle and stress animals</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Remain inside vehicles at all times for your safety</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Respect park rules and ranger instructions</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Minimize noise pollution in wildlife zones</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Never block animal paths or water access points</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Report any illegal activities to park authorities</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm">Support local conservation initiatives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conservation Commitment */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">volunteer_activism</span>
              <h4 className="text-white font-bold text-lg mb-2">Conservation Support</h4>
              <p className="text-gray-400 text-sm">Part of every booking supports local conservation projects and anti-poaching efforts</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">school</span>
              <h4 className="text-white font-bold text-lg mb-2">Education First</h4>
              <p className="text-gray-400 text-sm">We educate visitors about ecosystems, creating ambassadors for wildlife conservation</p>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">groups</span>
              <h4 className="text-white font-bold text-lg mb-2">Community Partnership</h4>
              <p className="text-gray-400 text-sm">Working with local communities to ensure they benefit from sustainable tourism</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 text-center bg-primary/10 border border-primary/30 rounded-xl p-8">
            <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto">
              <span className="font-bold text-primary">Together, we can make a difference.</span> By choosing 
              responsible safari operators and following ethical guidelines, every visitor becomes a guardian of 
              Yala's wilderness. Your respect for wildlife today ensures these magnificent creatures thrive for 
              generations to come.
            </p>
          </div>
        </div>
      </section>
    
      <Footer />
    </>
  )
}
