import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#231e10] text-white pt-16 pb-8 border-t border-[#493f22]">
      <div className="layout-container flex justify-center px-4 md:px-10 lg:px-40">
        <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-6 text-primary">
                  <span className="material-symbols-outlined text-2xl">forest</span>
                </div>
                <h3 className="text-xl font-bold">Yala Safari</h3>
              </div>
              <p className="text-[#cbbc90] text-sm leading-relaxed">
                Experience the untamed beauty of Sri Lanka's most famous national park. We are dedicated to
                sustainable tourism and wildlife conservation.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <div className="flex flex-col gap-2 text-[#cbbc90] text-sm">
                <Link href="/services" className="hover:text-primary transition-colors">
                  Our Safaris
                </Link>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Wildlife Gallery
                </Link>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Plan Your Trip
                </Link>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold">Contact Us</h4>
              <div className="flex flex-col gap-2 text-[#cbbc90] text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  <span>hello@yalasafari.lk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Tissamaharama, Sri Lanka</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold">Newsletter</h4>
              <p className="text-[#cbbc90] text-xs">Subscribe for wildlife updates and special offers.</p>
              <div className="flex gap-2">
                <input
                  className="bg-[#1a160b] border border-[#493f22] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-primary focus:outline-none text-[#231e10] rounded-lg px-3 py-2 font-bold hover:bg-yellow-500">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#493f22] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#cbbc90] text-xs">© 2023 Yala Safari Tours. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-[#cbbc90] hover:text-white transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#cbbc90] hover:text-white transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
