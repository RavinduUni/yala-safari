import Link from 'next/link'
import { footerConfig } from './footer/footer-config'

export default function Footer() {
  return (
    <footer className="bg-background-dark">
      {/* SECTION 1: Hero Style Footer Banner */}
      <section className="relative flex min-h-[60vh] flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(35, 30, 16, 0.5) 0%, rgba(35, 30, 16, 0.85) 100%), url("${footerConfig.hero.backgroundImage}")`
          }}
        />
        <div className="relative z-10 flex flex-col max-w-[960px] px-4 text-center">
          <div className="flex flex-col gap-4 animate-fade-in-up">
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
              {footerConfig.hero.title}
            </h2>
            <p className="text-gray-200 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              {footerConfig.hero.subtitle}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href={footerConfig.hero.primaryButton.route}>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-yellow-500 transition-all transform hover:scale-105 text-[#231e10] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
                <span className="truncate">{footerConfig.hero.primaryButton.label}</span>
              </button>
            </Link>
            <Link href={footerConfig.hero.secondaryButton.route}>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent border-2 border-white hover:bg-white/10 transition-all text-white text-base font-bold leading-normal tracking-[0.015em] backdrop-blur-sm">
                <span className="truncate">{footerConfig.hero.secondaryButton.label}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Footer Content Area */}
      <div className="relative bg-gradient-to-b from-[#231e10]/95 via-[#231e10] to-[#231e10] text-white pt-16 pb-8">
        <div className="layout-container flex justify-center px-4 md:px-10 lg:px-40">
          <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              {/* Brand Column */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-6 text-primary">
                    <span className="material-symbols-outlined text-2xl">forest</span>
                  </div>
                  <h3 className="text-xl font-bold">{footerConfig.brand.name}</h3>
                </div>
                <p className="text-[#cbbc90] text-sm leading-relaxed">
                  {footerConfig.brand.description}
                </p>
              </div>
              
              {/* Main Navigation Column */}
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold">Quick Links</h4>
                <div className="flex flex-col gap-2 text-[#cbbc90] text-sm">
                  {footerConfig.navigation.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Safari Services Column */}
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold">Safari Services</h4>
                <div className="flex flex-col gap-2 text-[#cbbc90] text-sm">
                  {footerConfig.services.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href} 
                      className="hover:text-primary transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Contact Details Column */}
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold">Contact Us</h4>
                <div className="flex flex-col gap-3 text-[#cbbc90] text-sm">
                  <a 
                    href={`tel:${footerConfig.contact.phone}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>{footerConfig.contact.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${footerConfig.contact.email}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    <span>{footerConfig.contact.email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{footerConfig.contact.location}</span>
                  </div>
                  {footerConfig.contact.whatsapp && (
                    <a 
                      href={`https://wa.me/${footerConfig.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>WhatsApp Us</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t border-[#493f22] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#cbbc90] text-xs">{footerConfig.copyright}</p>
              <div className="flex gap-4">
                {footerConfig.legal.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="text-[#cbbc90] hover:text-white transition-colors text-xs"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
