import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col dark:bg-background-dark dark:text-white">
        {/* Hero Section */}
        <section className="relative min-h-[400px] lg:min-h-[500px] w-full flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDngTOPe17XprVtMiCIrPteqi9Gxxz0dvBULY347zzCZH4eEmryrtZzg9fFknRK3uQfxGMQAK9Lvnw0q_SYGtxYuDukpzyzKHTQgmDUExAWu46YsNbERClMVem9I0XwIUZxcjidrAkBvbdeMypp0hkt8lm4y1XI2whtGvjLHc8biTcCTNirTNhTzFTuHJ2UpIIgNGkwSOAcOr6rxMUJbeQEJJS3uTonDjkAF1VNPc_ZYkv0rSbCIBmk3WiaKhJEb8AHv-3WATksHvo6")`
            }}
          />
          <div className="relative z-10 container mx-auto px-4 lg:px-10 text-center max-w-4xl pt-10">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
              Let the Adventure Begin
            </h1>
            <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Ready to witness the untamed beauty of Yala? Whether you need a bespoke safari itinerary or have 
              questions about our lodges, our team is here to guide you.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <div className="container mx-auto px-4 lg:px-10 pb-20 -mt-10 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column: Contact Info */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="flex flex-col gap-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Call us directly</p>
                      <a className="text-lg font-semibold hover:text-primary transition-colors" href="tel:+94771234567">
                        +94 77 123 4567
                      </a>
                      <p className="text-xs text-white/40 mt-1">Available 8am - 8pm IST</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Send us an email</p>
                      <a className="text-lg font-semibold hover:text-primary transition-colors" href="mailto:safari@yalasrilanka.com">
                        safari@yalasrilanka.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-[1.5]">
              <div className="bg-surface-dark/50 backdrop-blur-sm border border-border-dark rounded-xl p-6 lg:p-10 h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                  <p className="text-white/60 text-sm">
                    Tell us about your trip plans, dates, and interests. We'll get back to you within 24 hours.
                  </p>
                </div>
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col flex-1">
                      <p className="text-white text-sm font-medium leading-normal pb-2">Your Name</p>
                      <input 
                        className="form-input flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal" 
                        placeholder="Jane Doe" 
                        type="text"
                      />
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-white text-sm font-medium leading-normal pb-2">Email Address</p>
                      <input 
                        className="form-input flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary h-14 placeholder:text-[#cbbc90] p-[15px] text-base font-normal" 
                        placeholder="jane@example.com" 
                        type="email"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-sm font-medium leading-normal pb-2">Your Enquiry</p>
                    <textarea 
                      className="form-textarea flex w-full rounded-xl text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#685a31] bg-[#342d18] focus:border-primary min-h-[160px] placeholder:text-[#cbbc90] p-[15px] text-base font-normal" 
                      placeholder="I am interested in seeing leopards and would like to stay for 3 nights..."
                    />
                  </label>
                  <button 
                    className="group flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary hover:bg-[#eeb410] text-[#231e10] text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg hover:shadow-primary/20" 
                    type="submit"
                  >
                    <span className="truncate">Send Message</span>
                    <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
