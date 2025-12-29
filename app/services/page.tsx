import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Morning Safari",
      price: "$50",
      duration: "4 Hours",
      icon1: "schedule",
      detail1: "4 Hours",
      icon2: "groups",
      detail2: "Shared/Private",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_XKKHRD3BLdIfHL6cp9PpVnl3K7iIGsNdcFdpjIE5j2BdfARi9skOBS9AL9d6aSOZUxWi2vOGJYJpbmlPno0vTowKxr9g6EIKZqxBzhLZZ8CfV-O4Ncl7Vi5TdP5PHQYLqwFN7mK1-fmNjn-6pjYof_E1GQx4ikcZ2QQEYDFwsVouuoMt2ST8liIBUUV8M17_KnLDLdtS9PGvz1s-9FAMLmkKsQ6USmtobPxd72nQGrPc2WnmB5xQj2RNBLUYfy-JB14ZV9dJ96xs",
      description: "Catch the jungle waking up. Best for bird watching and spotting early risers.",
      badge: "Best Seller",
      badgeColor: "primary",
      link: "/services/morning-safari"
    },
    {
      title: "Evening Safari",
      price: "$50",
      duration: "3.5 Hours",
      icon1: "schedule",
      detail1: "3.5 Hours",
      icon2: "wb_twilight",
      detail2: "Sunset View",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCcNFnfc_VxoEhgY0eEM9zmDIxrmri8hfbHdfq9IhLdw3wHmQCBjkroJHh1Ra7nvYWVKt2j7K7r6sCyqUVHJxa0H7W-ouQDlb2UL-fsz7q8Zwu9TSgOeQx3I1YH-k5zptmZcd59Or4GqAP5IukJJf4aPjz7qZ_uaw4XIlpOsNusZY-71R8Jyhkmh1i9mxc5Wz1xGS2neCydz0aTTaCzJJBTekezzQCN-NfcO4uHijVKm8eOrcgNoqQnVweIA2x1CE6-5uBoY2XcoY",
      description: "Witness the wildlife activity during the golden hour as the heat of the day subsides.",
      link: "/services/evening-safari"
    },
    {
      title: "Full-Day Safari",
      price: "$110",
      duration: "12 Hours",
      icon1: "schedule",
      detail1: "12 Hours",
      icon2: "restaurant",
      detail2: "Meals Included",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt5a7vYAHNrYxfRw0Fdb5oY1xXiZy7179yxvuYnT32TBMqAsZRVjXWEO8bIgxCF4inwnLvPaO8sMgN4c8bSAy34mZd1vOQibMu9YOEbx1AlwodwIo3odfV83OM1991HUwgUhfozd4Qwt4Y8zc8koO4FFFuWs9XbTjOrnX-WLt9I3YjkVo-omlAySsA1zVygCibG_ijX6IWy_HvoxKRJ9wga5Y_PA9aWJZvXmn_ibGvaj5zocOrfS42d_VoN_URhYG3JHtSMJcDO9Cr",
      description: "A complete 12-hour immersion in the wild. Maximize your chances of spotting the big 3.",
      badge: "Includes Lunch",
      badgeColor: "white",
      link: "/services/full-day-safari"
    },
    {
      title: "Private Safari Tours",
      price: "$80",
      duration: "4 Hours",
      icon1: "schedule",
      detail1: "4 Hours",
      icon2: "person",
      detail2: "Dedicated Guide",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcRH-FY0HbzgJm1K2Fs2u2hDbXzLmIbnE78HN27Q8cPa4YCLte0A_0aLX9HmDTtXW_0xt7mjYZATqSsa3wEx09cyt03igvlo2vioLe40yUXYy36dxcB_3exr3wbDL9MJiTkCLsn97MlJPsY95i5i7hGHtTY8Dnb_FKVGlL8_EUcvDhJtbCUwIdgLrTHjbKkAcCCk348HUay6YNi9DaOUjInfJxUrrFyDQ_sKVxaiYcBXFA4URp6YiURVgTOnSpK9djmNE-J8v61-g-",
      description: "Exclusive jeep for you and your family with a dedicated naturalist guide.",
      link: "/services/private-safari"
    },
    {
      title: "Photography Safari",
      price: "$200",
      priceUnit: "group",
      duration: "Full Day",
      icon1: "schedule",
      detail1: "Full Day",
      icon2: "camera_alt",
      detail2: "Bean Bags",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lANpd9s2bUY4ONmLBHCL6kx_cKZ7CiCHJDfzvabj5Gj8wMilwdMzGdNEgLEgwEbR4f3oarTy-q1GMrMhosbYM8ioFWbOZKQOhPpcYOWkGaQL5iAoai61n7AgH4iTZLPdLCmo_tz7194-USs0Cv-n4Is3i_jWV6RP2LsnUyit4M6sMICQMYYM3HdaYvEuIrMUhfyh5bkDqAysCqTrSDo-x7nHCmtE59Rq5JuprKSdANZAowBoF6jWK45_09oRlOG2M3iwXUEaFwi_",
      description: "Dedicated positioning for the perfect shot. Specialized driver for stability.",
      badge: "For Pros",
      badgeColor: "primary",
      link: "/services/photography-safari"
    },
    {
      title: "Luxury Safari",
      price: "$120",
      duration: "5 Hours",
      icon1: "schedule",
      detail1: "5 Hours",
      icon2: "wine_bar",
      detail2: "Gourmet",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2tpyVtQ9FSK1TY2Gh3S41Z1BcZZ3_GPywft6K3ivOiI1X6eYYQJa2ELBhIzlKQd0wAn_Tw5ZYGgcqI3WSiSm4VgccVJjJB2ZhBacp6GQS5lVFdGP65ZnwzMYwb47Omj8Eruh3EMmilEc1oIqgM15UGnPQ2OK8yCrHDDFz6ROhmhwc1FGX98vB7dxcQVKTtPJVyXCOK1Mq_DXxniw1Qr5otA0aoH0Ui8JQspmF_LKA_vrjOESN98-VN-lCJRnbVS5F5KCkETyFlO_z",
      description: "Premium jeep, gourmet bush breakfast, and a senior naturalist.",
      badge: "Premium",
      badgeColor: "primary",
      link: "/services/luxury-safari"
    }
  ]

  return (
    <>
      <Header />
      
      <div className="relative w-full dark:bg-background-dark">
        {/* Hero Section */}
        <div className="px-4 py-8 md:px-40 md:py-10 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div 
                  className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-8 relative overflow-hidden group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuChIOWwzdf23cBwHqMdpTMnnhqTLPNJ4Ouj9_77G63UCCmLYYC9tN5S4u9YMKH-Ctoax0aQJpG--ggwQg2NwiaN-Cv9lDvst6QEXwxPY95QzuD1vZKiUilw7CF7GLw9NyTSOJ8vbDDDkVvn0NzqoYIzIjNeQV8MEwwC9oIfHPqloLFWiqBV4uiXOO1wLFoUx7HaoPGT_rDPA-gDdBRWY5sl9kUPmRfi5ZjbCloGtrE6YehzrKwSUaEvImKKFH6rtftbps81RKc1eHTh")`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
                  <div className="flex flex-col gap-4 text-center relative z-10 max-w-2xl">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Welcome to the Jungle</span>
                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                      Discover the Wild Heart of Yala
                    </h1>
                    <h2 className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto drop-shadow-md">
                      Choose your adventure. From golden sunrises to elusive leopards, experience Sri Lanka's premier wildlife sanctuary.
                    </h2>
                  </div>
                  <div className="flex gap-4 relative z-10 flex-wrap justify-center">
                    <Link href="/pricing">
                      <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-primary hover:bg-[#dca60e] transition-all transform hover:scale-105 text-background-dark text-base font-bold">
                        View Safari Packages
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-white text-base font-bold">
                        Plan Your Trip
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 md:px-40 py-5 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between px-4 pb-6 pt-5 gap-4">
              <div>
                <h2 className="text-slate-900 dark:text-white text-[32px] font-bold leading-tight tracking-[-0.015em]">
                  Our Safari Experiences
                </h2>
                <p className="text-slate-600 dark:text-[#cbbc90] mt-2 text-base">
                  Expertly curated tours for every kind of explorer
                </p>
              </div>
              {/* Filter Chips */}
              <div className="flex gap-2 flex-wrap">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary text-background-dark pl-4 pr-4 transition-transform hover:-translate-y-0.5 shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  <p className="text-sm font-bold leading-normal">All Safaris</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface-dark border border-[#493f22] hover:border-primary/50 pl-4 pr-4 transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-white/70 group-hover:text-primary">diamond</span>
                  <p className="text-white/90 text-sm font-medium leading-normal group-hover:text-white">Luxury</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface-dark border border-[#493f22] hover:border-primary/50 pl-4 pr-4 transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-white/70 group-hover:text-primary">photo_camera</span>
                  <p className="text-white/90 text-sm font-medium leading-normal group-hover:text-white">Photography</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-surface-dark border border-[#493f22] hover:border-primary/50 pl-4 pr-4 transition-colors group">
                  <span className="material-symbols-outlined text-[18px] text-white/70 group-hover:text-primary">savings</span>
                  <p className="text-white/90 text-sm font-medium leading-normal group-hover:text-white">Budget</p>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex flex-col bg-surface-dark rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group border border-[#3a321d]"
                >
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover relative"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  >
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        <p className={`text-xs font-${service.badgeColor === 'primary' ? 'bold' : 'medium'} uppercase tracking-wider ${service.badgeColor === 'primary' ? 'text-primary' : 'text-white'}`}>
                          {service.badge}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#cbbc90] text-sm font-normal leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="my-2 h-px w-full bg-[#493f22]" />
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1.5 text-white/80">
                        <span className="material-symbols-outlined text-[18px] text-primary">{service.icon1}</span>
                        <span>{service.detail1}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/80">
                        <span className="material-symbols-outlined text-[18px] text-primary">{service.icon2}</span>
                        <span>{service.detail2}</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="text-xs text-[#cbbc90]">Starting from</span>
                        <span className="text-lg font-bold text-white">
                          {service.price} <span className="text-xs font-normal text-white/50">/ {service.priceUnit || 'person'}</span>
                        </span>
                      </div>
                      <Link href={service.link} className="flex-1">
                        <button className="w-full cursor-pointer bg-primary hover:bg-[#dca60e] text-background-dark font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                          Book Now
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
