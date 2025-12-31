import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { getPackageBySlug, safariPackages } from '@/config/safari-config'
import Link from 'next/link'

export async function generateStaticParams() {
  return safariPackages.map((pkg) => ({
    slug: pkg.slug,
  }))
}

export default function SafariDetailPage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug)

  if (!pkg) {
    notFound()
  }

  return (
    <>
      <Header />
      
      <div className="relative w-full dark:bg-background-dark">
        {/* Hero Section */}
        <div 
          className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("${pkg.heroImage}")`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/80" />
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1 mb-4">
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                {pkg.category.replace("Private All-Inclusive ", "")}
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-4 drop-shadow-lg">
              {pkg.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              {pkg.shortDescription}
            </p>
            <div className="flex gap-6 justify-center mt-6 text-white/90">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">schedule</span>
                <span className="font-medium">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
                <span className="font-medium">From ${pkg.startingPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                <span className="font-medium">Private Tour</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 md:px-8 lg:px-40 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">info</span>
                  Package Overview
                </h2>
                <div className="prose prose-invert max-w-none">
                  {pkg.overview.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-[#cbbc90] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Pricing Table */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">request_quote</span>
                  Tiered Pricing
                </h2>
                <div className="bg-surface-dark border border-[#493f22] rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-background-dark/50">
                        <tr>
                          <th className="text-left text-white font-bold py-4 px-6">Group Size</th>
                          <th className="text-left text-white font-bold py-4 px-6">Price per Adult</th>
                          <th className="text-left text-white font-bold py-4 px-6">Child (5-11)</th>
                          <th className="text-left text-white font-bold py-4 px-6">Infant (&lt;5)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pkg.pricingTiers.map((tier, index) => (
                          <tr key={index} className="border-t border-[#493f22] hover:bg-background-dark/30 transition-colors">
                            <td className="py-4 px-6 text-white font-medium">{tier.groupSize}</td>
                            <td className="py-4 px-6 text-primary font-bold text-lg">${tier.pricePerPerson}</td>
                            <td className="py-4 px-6 text-[#cbbc90]">${tier.childPrice}</td>
                            <td className="py-4 px-6 text-[#cbbc90]">
                              {tier.infantPrice === 0 ? 'Free' : `$${tier.infantPrice}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-background-dark/50 p-4 text-sm text-white/70">
                    <p>💡 Prices are per person and decrease with larger groups. All taxes and park fees included.</p>
                  </div>
                </div>
              </section>

              {/* Wildlife Highlights */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">pets</span>
                  Wildlife Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.wildlifeHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 bg-surface-dark border border-[#493f22] rounded-lg p-4">
                      <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">check_circle</span>
                      <p className="text-[#cbbc90] leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience Highlights */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">star</span>
                  Experience Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.experienceHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 bg-surface-dark border border-[#493f22] rounded-lg p-4">
                      <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">workspace_premium</span>
                      <p className="text-[#cbbc90] leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Detailed Itinerary */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">event_note</span>
                  Detailed Itinerary
                </h2>
                <div className="space-y-6 relative before:absolute before:left-[15px] before:top-[10px] before:bottom-[10px] before:w-0.5 before:bg-primary/30">
                  {pkg.itinerary.map((item, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-background-dark text-[18px]">schedule</span>
                      </div>
                      <div className="bg-surface-dark border border-[#493f22] rounded-lg p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary font-bold text-lg">{item.time}</span>
                          <span className="text-white/50">•</span>
                          <span className="text-white font-bold">{item.activity}</span>
                        </div>
                        <p className="text-[#cbbc90] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Vehicle Standards */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">directions_car</span>
                  Vehicle Standards
                </h2>
                <div className="bg-surface-dark border border-[#493f22] rounded-xl p-6">
                  <ul className="space-y-3">
                    {pkg.vehicleStandards.map((standard, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified</span>
                        <span className="text-[#cbbc90]">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tracker Standards */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">badge</span>
                  Expert Tracker & Guide Standards
                </h2>
                <div className="bg-surface-dark border border-[#493f22] rounded-xl p-6">
                  <ul className="space-y-3">
                    {pkg.trackerStandards.map((standard, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified</span>
                        <span className="text-[#cbbc90]">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Photography Tips */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">photo_camera</span>
                  Photography Tips
                </h2>
                <div className="bg-surface-dark border border-[#493f22] rounded-xl p-6">
                  <ul className="space-y-3">
                    {pkg.photographyTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">tips_and_updates</span>
                        <span className="text-[#cbbc90]">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Packing List */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">backpack</span>
                  What to Pack
                </h2>
                <div className="bg-surface-dark border border-[#493f22] rounded-xl p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pkg.packingList.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_box</span>
                        <span className="text-[#cbbc90]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Responsible Tourism */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">eco</span>
                  Responsible Tourism
                </h2>
                <div className="bg-gradient-to-br from-green-900/20 to-background-dark border border-green-700/30 rounded-xl p-6">
                  <p className="text-white/90 mb-4 font-medium">
                    We are committed to sustainable wildlife tourism that protects Yala's ecosystem and supports local communities.
                  </p>
                  <ul className="space-y-3">
                    {pkg.responsibleTourism.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-green-400 text-[20px] mt-0.5">nature_people</span>
                        <span className="text-[#cbbc90]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[32px]">help</span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {pkg.faqs.map((faq, index) => (
                    <details key={index} className="bg-surface-dark border border-[#493f22] rounded-lg overflow-hidden group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-background-dark/50 transition-colors">
                        <span className="text-white font-bold pr-4">{faq.question}</span>
                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                          expand_more
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-[#cbbc90] leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <BookingForm packageTitle={pkg.title} pricingTiers={pkg.pricingTiers} />
              
              {/* Contact Card */}
              <div className="bg-surface-dark border border-[#493f22] rounded-xl p-6 mt-6">
                <h3 className="text-white text-lg font-bold mb-3">Need Help?</h3>
                <p className="text-[#cbbc90] text-sm mb-4">
                  Our team is available 24/7 to answer questions and help plan your perfect safari.
                </p>
                <div className="space-y-2">
                  <a href="https://wa.me/94123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-[#dca60e] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">phone</span>
                    <span className="text-sm">+94 77 123 4567</span>
                  </a>
                  <a href="mailto:info@yalasafari.com" className="flex items-center gap-2 text-primary hover:text-[#dca60e] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">email</span>
                    <span className="text-sm">info@yalasafari.com</span>
                  </a>
                </div>
              </div>

              {/* Back to Services */}
              <Link href="/services">
                <button className="w-full mt-6 bg-surface-dark hover:bg-[#2a241a] border border-[#493f22] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  Browse All Safaris
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
