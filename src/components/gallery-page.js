import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"

import HeroImage from "../images/PIC2.png"
// Import gambar-gambar gallery baru di sini
import Gallery1 from "../images/galery4.jpg"
import Gallery2 from "../images/galery2.jpg"
import Gallery3 from "../images/galery5.png"
import Gallery4 from "../images/h.jpg"
import Gallery5 from "../images/galery3.jpg"
import Gallery6 from "../images/galery6.png"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeCategory, setActiveCategory] = useState("semua")

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Gallery data with categories
  const galleryData = [
    {
      id: 1,
      image: Gallery1,
      title: "Latihan memanah Pemula",
      category: "memanah",
      description: "Sesi latihan dasar memanah untuk anggota baru",
      date: "2024-01-15",
      tags: ["memanah", "latihan", "pemula"]
    },
    {
      id: 2,
      image: Gallery2,
      title: "Latihan Berkuda Pemula",
      category: "berkuda",
      description: "Sesi Setelah latihan dasar berkuda untuk anak",
      date: "2024-01-20",
      tags: ["berkuda", "latihan", "pemula"]
    },
    {
      id: 3,
      image: Gallery3,
      title: "Perawatan Kuda Professional",
      category: "berkuda",
      description: "Sesi perawatan dan grooming kuda yang tepat",
      date: "2024-02-05",
      tags: ["berkuda", "perawatan", "professional"]
    },
    {
      id: 4,
      image: Gallery4,
      title: "Event Komunitas Tahunan",
      category: "event",
      description: "Pertemuan besar komunitas Saiga Stable",
      date: "2024-02-10",
      tags: ["event", "komunitas", "tahunan"]
    },
    {
      id: 5,
      image: Gallery5,
     title: "Workshop Berkuda",
      category: "workshop",
      description: "Diskusi dan praktik berkuda",
      date: "2024-01-25",
      tags: ["workshop", "praktik", "edukasi"]
    },
    {
      id: 6,
      image: Gallery6,
      title: "Workshop Sunnah Rasulullah",
      category: "workshop",
      description: "Diskusi dan praktik sunnah memanah",
      date: "2024-01-25",
      tags: ["workshop", "sunnah", "edukasi"]
    },
    {
      id: 7,
      image: Gallery6,
      title: "Aktivitas Harian Stable",
      category: "komunitas",
      description: "Kegiatan sehari-hari di Saiga Stable",
      date: "2024-01-30",
      tags: ["komunitas", "harian", "aktivitas"]
    },
  ]

  // Categories dengan count
  const categories = [
    { id: "semua", name: "Semua", count: galleryData.length },
    { id: "berkuda", name: "Berkuda", count: galleryData.filter(item => item.category === "berkuda").length },
    { id: "memanah", name: "Memanah", count: galleryData.filter(item => item.category === "memanah").length },
    { id: "komunitas", name: "Komunitas", count: galleryData.filter(item => item.category === "komunitas").length },
    { id: "workshop", name: "Workshop", count: galleryData.filter(item => item.category === "workshop").length },
    { id: "event", name: "Event", count: galleryData.filter(item => item.category === "event").length }
  ]

  // Filter gallery by category
  const filteredGallery = activeCategory === "semua" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory)

  // Handle image click
  const handleImageClick = (item, index) => {
    setSelectedImage({ ...item, index })
    document.body.style.overflow = 'hidden'
  }

  // Handle back to gallery
  const handleBackToGallery = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  // Handle navigation
  const handleNavigateImage = (direction) => {
    if (!selectedImage) return

    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id)
    let newIndex = currentIndex + direction

    if (newIndex < 0) newIndex = filteredGallery.length - 1
    if (newIndex >= filteredGallery.length) newIndex = 0

    setSelectedImage({ ...filteredGallery[newIndex], index: newIndex })
  }

  // Lightbox Modal
  if (selectedImage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={handleBackToGallery}
          className="absolute top-4 right-4 md:top-6 md:right-6 bg-white text-green p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300 z-10 shadow-lg"
          aria-label="Tutup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Navigation Arrows - Desktop */}
        {!isMobile && (
          <>
            <button
              onClick={() => handleNavigateImage(-1)}
              className="absolute left-6 bg-white text-green p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300 z-10 shadow-lg"
              aria-label="Gambar sebelumnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <button
              onClick={() => handleNavigateImage(1)}
              className="absolute right-6 bg-white text-green p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300 z-10 shadow-lg"
              aria-label="Gambar berikutnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </>
        )}

        {/* Image Display */}
        <div className="relative max-w-6xl max-h-full w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Info Panel */}
            <div className="flex-1 max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green text-white text-sm font-semibold rounded-full mb-3">
                  {categories.find(cat => cat.id === selectedImage.category)?.name}
                </span>
                <h3 className="text-2xl font-bold font-['Poppins'] mb-3">{selectedImage.title}</h3>
                <p className="text-gray-200 mb-4">{selectedImage.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>{new Date(selectedImage.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMobile && (
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/20">
                  <button
                    onClick={() => handleNavigateImage(-1)}
                    className="flex items-center px-4 py-2 bg-white text-green rounded-lg hover:bg-green hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Sebelumnya
                  </button>
                  
                  <span className="text-gray-300">
                    {selectedImage.index + 1} / {filteredGallery.length}
                  </span>
                  
                  <button
                    onClick={() => handleNavigateImage(1)}
                    className="flex items-center px-4 py-2 bg-white text-green rounded-lg hover:bg-green hover:text-white transition-all duration-300"
                  >
                    Berikutnya
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-hidden"> {/* FIX: Prevent horizontal overflow */}
      {/* Main Container dengan padding yang lebih aman untuk mobile */}
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 lg:mt-16 px-3 sm:px-4 lg:px-8">
        {/* Hero Section - FIXED PADDING */}
        <Fade duration={1500}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 md:mb-12 lg:mb-20 gap-6 md:gap-8">
            {/* Left Text Section */}
            <div className="lg:w-1/2 w-full px-2 sm:px-0">
              <div className="bg-gradient-to-br from-green to-lightGreen p-5 md:p-6 lg:p-8 rounded-2xl shadow-xl">
                <div className="mb-4">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white/20 text-white rounded-full text-xs md:text-sm font-semibold mb-3">
                    Galeri Visual
                  </span>
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-['Poppins'] leading-tight">
                    Jelajahi Momen
                    <br />
                    <span className="text-yellow-200">Saiga Stable</span>
                  </h1>
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed opacity-90 mb-4 md:mb-0">
                  Dokumentasi visual perjalanan kami dalam melestarikan sunnah berkuda dan memanah. 
                  Setiap gambar adalah cerita tentang dedikasi, kebersamaan, dan spiritualitas.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{galleryData.length}+</div>
                    <div className="text-white/80 text-xs sm:text-sm">Foto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{categories.length}</div>
                    <div className="text-white/80 text-xs sm:text-sm">Kategori</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">24/7</div>
                    <div className="text-white/80 text-xs sm:text-sm">Aktif</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image Section */}
            <div className="lg:w-1/2 w-full flex justify-center px-2 sm:px-0">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-green to-lightGreen rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src={HeroImage} 
                  alt="Saiga Stable Gallery" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Fade>

        {/* Category Filter - FIXED TEXT CUTTING */}
        <Fade bottom>
          <div className="mb-6 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 font-['Poppins'] text-center px-2">
              Kategori Galeri
            </h2>
            
            {/* Desktop Category Filter */}
            <div className="hidden md:flex flex-wrap justify-center gap-2 lg:gap-3 px-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    activeCategory === category.id
                      ? 'bg-green text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-sm lg:text-base">{category.name}</span>
                  <span className="ml-1.5 lg:ml-2 px-1.5 lg:px-2 py-0.5 text-xs rounded-full bg-white/20">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Category Filter - IMPROVED */}
            <div className="md:hidden">
              <div className="relative w-full overflow-hidden">
                {/* Background untuk mobile filter */}
                <div className="absolute inset-0 bg-white rounded-xl border border-gray-100"></div>
                
                <div className="relative px-3 py-3">
                  <div className="overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-4 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                            activeCategory === category.id
                              ? 'bg-green text-white shadow-md'
                              : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-green/30'
                          }`}
                        >
                          <span className="text-sm">{category.name}</span>
                          <span className={`ml-1.5 px-1.5 py-0.5 text-xs rounded-full ${
                            activeCategory === category.id
                              ? 'bg-white/30 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Active category indicator untuk mobile */}
              <div className="text-center mt-3 px-2">
                <span className="inline-block px-3 py-1.5 bg-green/10 text-green rounded-lg text-xs font-medium">
                  Kategori aktif: <strong>{categories.find(c => c.id === activeCategory)?.name}</strong>
                </span>
              </div>
            </div>
          </div>
        </Fade>

        {/* Gallery Grid - FIXED PADDING */}
        <Fade bottom cascade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 md:hover:-translate-y-2 mx-1 sm:mx-0"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-square overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(item, index)}
                >
                  <img
                    src={item.image}
                    loading="lazy"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center bg-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Lihat Detail
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm text-green text-xs font-semibold rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content - FIXED PADDING */}
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs flex items-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {new Date(item.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 font-['Poppins'] line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-block bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleImageClick(item, index)}
                    className="inline-flex items-center text-green hover:text-lightGreen font-semibold text-xs sm:text-sm transition-colors duration-300 group/btn w-full justify-center"
                  >
                    <span>Lihat Detail</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Fade>

        {/* Empty State */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12 sm:py-16 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Tidak ada gambar</h3>
            <p className="text-gray-600 text-sm sm:text-base">Tidak ada gambar yang ditemukan untuk kategori ini.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredGallery.length > 6 && (
          <div className="text-center mt-6 sm:mt-8 md:mt-12 px-4">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green text-white rounded-full font-semibold hover:bg-lightGreen transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Muat Lebih Banyak
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery