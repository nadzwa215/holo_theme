import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = ({ post }) => {
  const image = getImage(post.node.frontmatter.featuredimage)
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <Fade duration={2200}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          
          {/* Content Section - Mobile: full width, Desktop: 1/2 */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500">
              
              {/* Category Badge */}
              <div className="inline-block bg-gradient-to-r from-green to-lightGreen text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                {post.node.frontmatter.categories?.[0] || "Blog"}
              </div>

              {/* Title */}
              <Link
                to={post.node.fields.slug}
                className="no-underline group"
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-['Poppins'] mb-3 sm:mb-4 leading-tight group-hover:text-green transition-colors duration-300">
                  {post.node.frontmatter.title}
                </h1>
              </Link>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                {post.node.frontmatter.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 gap-3 sm:gap-0">
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {new Date(post.node.frontmatter.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  
                  {post.node.frontmatter.tags && post.node.frontmatter.tags.length > 0 && (
                    <span className="flex items-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                      </svg>
                      {post.node.frontmatter.tags[0]}
                    </span>
                  )}
                </div>

                {/* Read More Button */}
                <Link
                  to={post.node.fields.slug}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green to-lightGreen hover:from-green hover:to-green-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
                >
                  Baca Artikel
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section - Mobile: full width, Desktop: 1/2 */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Gradient Background Effect - hanya untuk desktop */}
              <div className="hidden lg:block absolute -inset-4 bg-gradient-to-r from-green to-lightGreen rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
                {post.node.frontmatter.featuredimage && (
                  <Link
                    to={post.node.fields.slug}
                    className="no-underline block"
                  >
                    <GatsbyImage
                      image={image}
                      alt={post.node.frontmatter.title}
                      className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      placeholder="dominantColor"
                      backgroundColor="#f3f4f6"
                      formats={["auto", "webp", "avif"]}
                      quality={90}
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                )}
              </div>

              {/* Decorative Elements - hanya untuk desktop */}
              <div className="hidden lg:block absolute -bottom-2 -right-2 w-6 h-6 bg-green rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden lg:block absolute -top-2 -left-2 w-4 h-4 bg-lightGreen rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogHeader