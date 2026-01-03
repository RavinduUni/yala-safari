import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getBlogBySlug, getAllBlogs } from '@/config/blog-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface BlogDetailProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    }
  }

  return {
    title: `${blog.title} | Yala Sri Lanka Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  }
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  // Parse content into structured sections
  const renderContent = () => {
    const lines = blog.content.split('\n')
    const elements: JSX.Element[] = []
    let key = 0

    lines.forEach((line) => {
      const trimmedLine = line.trim()
      
      if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-6 mt-12 first:mt-0">
            {trimmedLine.slice(2)}
          </h1>
        )
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-primary text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] mb-4 mt-10 border-b border-[#493f22] pb-3">
            {trimmedLine.slice(3)}
          </h2>
        )
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-white text-2xl font-bold leading-tight mb-3 mt-8">
            {trimmedLine.slice(4)}
          </h3>
        )
      } else if (trimmedLine !== '') {
        // Handle bold text with **
        if (trimmedLine.includes('**')) {
          const parts = trimmedLine.split('**')
          elements.push(
            <p key={key++} className="text-[#cbbc90] text-base md:text-lg leading-relaxed mb-4">
              {parts.map((part, i) => 
                i % 2 === 0 ? part : <strong key={i} className="text-white font-bold">{part}</strong>
              )}
            </p>
          )
        } else if (trimmedLine.includes('*') && !trimmedLine.startsWith('*')) {
          const parts = trimmedLine.split('*')
          elements.push(
            <p key={key++} className="text-[#cbbc90] text-base md:text-lg leading-relaxed mb-4">
              {parts.map((part, i) => 
                i % 2 === 0 ? part : <em key={i} className="text-primary italic">{part}</em>
              )}
            </p>
          )
        } else {
          elements.push(
            <p key={key++} className="text-[#cbbc90] text-base md:text-lg leading-relaxed mb-4">
              {trimmedLine}
            </p>
          )
        }
      }
    })

    return elements
  }

  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col dark:bg-background-dark dark:text-white">
        {/* Hero Section with Image */}
        <header className="relative flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center p-4 text-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(35, 30, 16, 0.3) 0%, rgba(35, 30, 16, 0.95) 100%), url("${blog.image}")`
            }}
          />
          <div className="relative z-10 flex flex-col gap-6 max-w-[900px] px-4 animate-fade-in-up">
            {/* Category Badge */}
            {blog.category && (
              <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full mx-auto">
                <span className="material-symbols-outlined text-sm text-[#231e10]">label</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#231e10]">
                  {blog.category}
                </span>
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter drop-shadow-lg">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                <time dateTime={blog.publishDate}>
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">schedule</span>
                <span>{Math.ceil(blog.content.split(' ').length / 200)} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Back Button Bar */}
        <section className="py-4 px-4 md:px-10 lg:px-40 bg-surface-dark/30  border-[#493f22]">
          <div className="max-w-[900px] mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-[#eeb410] transition-colors group"
            >
              <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              <span className="text-sm font-bold">Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-12 md:py-16 px-4 md:px-10 lg:px-40 bg-surface-dark/20">
          <div className="max-w-[900px] mx-auto">
            {/* Content Container with Card Style */}
            <div className="bg-surface-dark/50 backdrop-blur-sm border border-[#493f22] rounded-xl p-6 md:p-10 lg:p-12 shadow-xl">
              {renderContent()}
            </div>

            {/* Share & Navigation Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Share Card */}
              <div className="bg-surface-dark/50 backdrop-blur-sm border border-[#493f22] rounded-xl p-6">
                <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">share</span>
                  Share This Article
                </h3>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#342d18] hover:bg-primary hover:text-[#231e10] transition-all text-primary border border-[#493f22]">
                    <span className="material-symbols-outlined">link</span>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#342d18] hover:bg-primary hover:text-[#231e10] transition-all text-primary border border-[#493f22]">
                    <span className="material-symbols-outlined">mail</span>
                  </button>
                </div>
              </div>

              {/* Related Topics Card */}
              <div className="bg-surface-dark/50 backdrop-blur-sm border border-[#493f22] rounded-xl p-6">
                <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">explore</span>
                  Explore More
                </h3>
                <Link href="/blog" className="text-primary hover:text-[#eeb410] transition-colors text-sm font-medium flex items-center gap-2">
                  <span>View All Blog Posts</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  )
}
