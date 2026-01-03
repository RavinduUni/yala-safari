import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllBlogs } from '@/config/blog-config'

export default function Blog() {
  const blogs = getAllBlogs()

  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col dark:bg-background-dark dark:text-white">
        {/* Hero Section */}
        <section className="relative min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#231e10] via-[#2c2614] to-[#3a321d]">
          <div className="relative z-10 container mx-auto px-4 lg:px-10 text-center max-w-4xl py-20">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
              Yala Wildlife Blog
            </h1>
            <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Expert insights, wildlife guides, and conservation stories from Sri Lanka's premier national park
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 px-4 md:px-10 lg:px-40">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article 
                  key={blog.id}
                  className="group flex flex-col bg-surface-dark rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border border-[#3a321d]"
                >
                  {/* Blog Image */}
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover relative overflow-hidden"
                    style={{ backgroundImage: `url("${blog.image}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {blog.category && (
                      <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#231e10]">
                          {blog.category}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Blog Content */}
                  <div className="flex flex-col gap-3 p-6 flex-1">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-[#cbbc90] text-xs">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                      <time dateTime={blog.publishDate}>
                        {new Date(blog.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-[#cbbc90] text-sm leading-relaxed line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    
                    {/* Read More Button */}
                    <Link href={`/blog/${blog.slug}`}>
                      <button className="group/btn flex items-center gap-2 text-primary hover:text-[#eeb410] transition-colors text-sm font-bold mt-2">
                        <span>Read Blog</span>
                        <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">
                          arrow_forward
                        </span>
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-10 lg:px-40 bg-[#2c2614]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
              Ready to Experience Yala?
            </h2>
            <p className="text-[#cbbc90] text-lg mb-8">
              Transform knowledge into adventure. Book your safari and witness these stories come to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-yellow-500 transition-all transform hover:scale-105 text-[#231e10] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
                  <span className="truncate">Book Your Safari</span>
                </button>
              </Link>
              <Link href="/services">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent border-2 border-primary hover:bg-primary/10 transition-all text-primary text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">View Safari Packages</span>
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
