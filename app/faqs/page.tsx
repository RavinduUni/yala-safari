import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQs() {
  return (
    <>
      <Header />
      
      <div className="relative flex min-h-screen w-full flex-col dark:bg-background-dark dark:text-white">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(35, 30, 16, 0.4) 0%, rgba(35, 30, 16, 0.95) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPVjTPaLIGXnBgxrr7Vgqgx33O2QolCUXOQd1Vyg-0gHshHJWPs1g5MIEqcExZCX3IjNUMacQmHcY19soWyepxeir5TRs9hya3YEefQbSfyXatdCInPl-bB22Ebw5o13dQtbgA6z2Jco-Nc4rgJLzamT_1xTZKCi1p_jPYcsXQ-vPAMTMxBTqkzs28luOjD1yP0tA6Yuxt8SFggWmcz7DvnFnOQqcUxZek9JIBzOQIfZ8VfP5RdWs6TwuBU9NSMLirwgigH9LqlSqw')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl mb-4">
              Your Adventure,<br /><span className="text-primary">Demystified</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg font-light text-text-muted md:text-xl">
              Everything you need to know about planning the perfect safari experience in the heart of Sri Lanka's wilderness.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <main className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Section: Best Time */}
            <section className="scroll-mt-28">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-highlight text-primary shadow-inner">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white">Best Time to Visit</h2>
              </div>
              <div className="space-y-4">
                <details className="group rounded-xl border border-surface-highlight bg-surface-dark open:bg-surface-highlight/50 transition-colors" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                    <span className="font-display text-base font-semibold text-white">
                      When is the best time to spot leopards?
                    </span>
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="border-t border-white/5 px-6 pb-6 pt-4">
                    <p className="text-text-muted leading-relaxed">
                      The dry season, from <strong className="text-white">May to August</strong>, is widely considered 
                      the best time for leopard sightings. As water holes dry up, animals congregate around the remaining 
                      water sources, making them easier to spot.
                    </p>
                  </div>
                </details>
                
                <details className="group rounded-xl border border-surface-highlight bg-surface-dark open:bg-surface-highlight/50 transition-colors">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                    <span className="font-display text-base font-semibold text-white">
                      Is the park open all year?
                    </span>
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="border-t border-white/5 px-6 pb-6 pt-4">
                    <p className="text-text-muted leading-relaxed">
                      Generally, yes. However, Block 1 is sometimes closed for a few weeks in September or October 
                      for maintenance and drought relief for the animals.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Section: Logistics */}
            <section className="scroll-mt-28">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-highlight text-primary shadow-inner">
                  <span className="material-symbols-outlined">airport_shuttle</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white">Safari Logistics</h2>
              </div>
              <div className="space-y-4">
                <details className="group rounded-xl border border-surface-highlight bg-surface-dark open:bg-surface-highlight/50 transition-colors">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                    <span className="font-display text-base font-semibold text-white">
                      How long is a typical safari?
                    </span>
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="border-t border-white/5 px-6 pb-6 pt-4">
                    <p className="text-text-muted leading-relaxed mb-3">
                      We offer three main options:
                    </p>
                    <ul className="list-disc list-inside text-text-muted space-y-2">
                      <li><strong className="text-white">Half-day (Morning/Evening)</strong>: 3-4 hours</li>
                      <li><strong className="text-white">Full-day</strong>: 10-12 hours with packed lunch</li>
                      <li><strong className="text-white">Multi-day packages</strong>: Custom itineraries available</li>
                    </ul>
                  </div>
                </details>

                <details className="group rounded-xl border border-surface-highlight bg-surface-dark open:bg-surface-highlight/50 transition-colors">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                    <span className="font-display text-base font-semibold text-white">
                      What should I bring on a safari?
                    </span>
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="border-t border-white/5 px-6 pb-6 pt-4">
                    <p className="text-text-muted leading-relaxed mb-3">Essential items include:</p>
                    <ul className="list-disc list-inside text-text-muted space-y-2">
                      <li>Sun protection (hat, sunscreen, sunglasses)</li>
                      <li>Camera with good zoom lens</li>
                      <li>Comfortable clothing in neutral colors</li>
                      <li>Binoculars (optional - we provide them)</li>
                      <li>Water bottle and snacks</li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  )
}
