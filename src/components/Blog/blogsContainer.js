import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogsContainer = ({ data }) => {
  let posts = data?.map(item => {
    return {
      featuredimage: item.node.frontmatter.featuredimage,
      title: item.node.frontmatter.title,
      description: item.node.frontmatter.description,
      slug: item.node.fields.slug,
      date: item.node.frontmatter.date,
      categories: item.node.frontmatter.categories,
      tags: item.node.frontmatter.tags
    }
  })

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 lg:px-8">
      {/* Blog Grid Section */}
      <Fade bottom cascade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((blog, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Link to={blog.slug} className="no-underline">
                  <GatsbyImage
                    image={getImage(blog.featuredimage)}
                    alt={blog.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    placeholder="dominantColor"
                    backgroundColor="#f3f4f6"
                    formats={["auto", "webp", "avif"]}
                    quality={90}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center bg-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Baca Artikel
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Category Badge */}
                {blog.categories && blog.categories.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-green px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.categories[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Date */}
                {blog.date && (
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {new Date(blog.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                )}

                {/* Title */}
                <Link to={blog.slug} className="no-underline group">
                  <h3 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3 leading-tight group-hover:text-green transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 2 && (
                      <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* Read More Link */}
                <Link 
                  to={blog.slug}
                  className="inline-flex items-center text-green hover:text-lightGreen font-semibold text-sm transition-colors duration-300 group/readmore"
                >
                  Baca Selengkapnya
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover/readmore:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {/* Newsletter Section - Updated Design */}
      <Fade bottom>
        <div className="bg-gradient-to-br from-green to-lightGreen rounded-2xl p-12 text-center text-white mb-16">
          <div className="max-w-2xl mx-auto">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>

            <h2 className="text-3xl font-bold font-['Poppins'] mb-4">
              Tetap Terupdate dengan Artikel Terbaru
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Dapatkan insight terbaru seputar berkuda, memanah, dan sunnah Rasulullah langsung di inbox Anda. 
              Kami hanya mengirimkan konten berkualitas.
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input 
                  placeholder="Masukkan email Anda"
                  className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-white/40"
                />
              </div>
              
              <Button
                title="Berlangganan"
                colorClass="bg-white text-green hover:bg-gray-100 font-semibold border-2 border-white"
                marginClass="mt-0"
                className="whitespace-nowrap transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-white/70 text-sm mt-4">
              Kami menghormati privasi Anda. Tidak ada spam.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogsContainer