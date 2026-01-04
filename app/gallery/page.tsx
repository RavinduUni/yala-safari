import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Gallery() {
  const images = [
    {
      url: "images/wildlife/leopard2.jpg",
      title: "The Alpha Male",
      category: "Leopard",
      aspect: "aspect-[3/4]"
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9oMXGUqVV4mIv6VQ3bRDMM5a9HhXWCrFQ8NF0pK07xxBpm_1ib18ZIaIRBozq9k5-2fRdcybRqmId_xq0HYcsZ3cCyTHEAXxZgF_LqyCOwnwhglM5m5WUktavTKZy9zVGNCzT8FmzV1EmLIooueCQz2N9av91c1gMkE4oucydXASiX1BAUZpX2srC4ZfEmnx0XLE6n0UQ7QauQ32dsL40WM29YEo_fzAvT3-LXYFBY2kg1JGyB_SdSFsJTd1wDBt6y-t-sPbtcK32",
      title: "Family Migration",
      category: "Elephant",
      aspect: "aspect-video"
    },
    {
      url: "images/wildlife/peacock (1).jpg",
      title: "Royal Dance",
      category: "Peacock",
      aspect: "aspect-square"
    },
    {
      url: "images/wildlife/slothBear.jpg",
      title: "Morning Forage",
      category: "Sloth Bear",
      aspect: "aspect-[4/5]"
    },
    {
      url: "images/landscapes/patanagala.jpg",
      title: "Patanangala Rock",
      category: "Landscape",
      aspect: "aspect-[16/10]"
    },
    {
      url: "images/wildlife/buffalo.jpg",
      title: "River Guardians",
      category: "Buffalo",
      aspect: "aspect-square"
    },
    {
      url: "images/wildlife/crocodile.jpg",
      title: "Silent Predator",
      category: "Crocodile",
      aspect: "aspect-[4/3]"
    }
  ]

  return (
    <>
      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full dark:bg-background-dark dark:text-white">
        {/* Hero Section */}
        <section 
          className="w-full relative h-[80vh] min-h-[500px] flex items-end justify-start bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 30, 16, 0.2) 0%, rgba(34, 30, 16, 0.9) 100%), url("/images/wildlife/galleryImg.png")`
          }}
        >
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-2xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 w-fit">
                <span className="material-symbols-outlined text-primary text-sm">photo_camera</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Wildlife Gallery</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Witness the Wild.<br />
                <span className="text-primary">Kingdom of the Leopard.</span>
              </h2>
              <p className="text-lg text-white/80 max-w-lg font-light leading-relaxed">
                Explore the raw beauty of Yala National Park through our curated collection of wildlife photography.
              </p>
              <div className="pt-4">
                <Link href="/book">
                  <button className="flex items-center gap-2 h-12 px-6 rounded-xl bg-primary text-background-dark font-bold hover:bg-white transition-colors duration-300">
                    <span>Book Safari Tour</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10">
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((image, index) => (
              <div key={index} className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer bg-surface-dark">
                <div className={`relative w-full ${image.aspect}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${image.url}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-wider text-primary bg-black/40 backdrop-blur-sm rounded">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                      <span className="material-symbols-outlined text-primary text-sm">visibility</span>
                      <span className="text-xs font-bold text-white uppercase tracking-wide">View Detail</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="w-full bg-[#1a170d] border-t border-white/5 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Turn Inspiration Into Reality
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Don't just look at the photos. Experience the thrill of the wild with our expert-guided safari tours in the heart of Yala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/book">
                <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary text-background-dark font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20">
                  Book Your Safari
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <Link href="/pricing">
                <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/5 hover:border-white transition-all duration-300">
                  View Safari Packages
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
