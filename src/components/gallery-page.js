import React, { useState } from "react"
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

  // Group gallery items into sets of 3
  const gallerySets = [
    {
      images: [Gallery1, Gallery2, Gallery3],
      title: "Aktivitas Berkuda & Memanah",
      category: "Kegiatan Utama",
      description: "Momen-momen latihan berkuda dan memanah yang penuh makna"
    },
    {
      images: [Gallery4, Gallery5, Gallery6],
      title: "Komunitas & Event",
      category: "Kegiatan Sosial",
      description: "Kebersamaan komunitas dan event khusus Saiga Stable"
    }
  ]

  // Function untuk handle klik lihat detail
  const handleViewDetail = (imageSet, imageIndex) => {
    setSelectedImage({ imageSet, imageIndex })
  }

  // Function untuk kembali ke gallery
  const handleBackToGallery = () => {
    setSelectedImage(null)
  }

  // Function untuk navigasi gambar
  const handleNavigateImage = (direction) => {
    if (!selectedImage) return

    const { imageSet, imageIndex } = selectedImage
    let newIndex = imageIndex + direction

    // Circular navigation
    if (newIndex < 0) newIndex = imageSet.images.length - 1
    if (newIndex >= imageSet.images.length) newIndex = 0

    setSelectedImage({ imageSet, imageIndex: newIndex })
  }

  if (selectedImage) {
    // Tampilkan gambar besar dengan navigasi
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        {/* Back Button */}
        <button
          onClick={handleBackToGallery}
          className="absolute top-4 left-4 bg-white text-green p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300 z-10 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigateImage(-1)}
          className="absolute left-4 bg-white text-green p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300 z-10 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          onClick={() => handleNavigateImage(1)}
          className="absolute right-4 bg-white text-green p-3 rounded-full hover:bg-green hover:text-white transition-all duration-300 z-10 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        {/* Image Display */}
        <div className="relative max-w-4xl max-h-full mx-4">
          <img
            src={selectedImage.imageSet.images[selectedImage.imageIndex]}
            alt={selectedImage.imageSet.title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          
          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <h3 className="text-xl font-bold font-['Poppins']">{selectedImage.imageSet.title}</h3>
            <p className="text-sm opacity-90">{selectedImage.imageSet.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs bg-green px-2 py-1 rounded-full">
                {selectedImage.imageSet.category}
              </span>
              <span className="text-xs">
                {selectedImage.imageIndex + 1} / {selectedImage.imageSet.images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {/* Hero Section */}
      <Fade duration={2200}>
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 px-4">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="bg-gradient-to-r from-green to-lightGreen p-8 rounded-2xl shadow-xl">
              <h1 className="text-white text-4xl font-bold mb-4 font-['Poppins']">
                GALLERY
              </h1>
              <h2 className="text-white text-5xl font-bold mb-6 xxs:text-3xl xs:text-4xl sm:text-5xl font-['Poppins']">
                Saiga Stable
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-90">
                Jelajahi momen-momen berharga di Saiga Stable. Dari latihan berkuda yang penuh semangat, 
                sesi memanah yang fokus, hingga kebersamaan komunitas yang hangat. Setiap gambar menceritakan 
                perjalanan sunnah yang hidup dan bermakna.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green to-lightGreen rounded-2xl opacity-20 blur-lg"></div>
              <img 
                src={HeroImage} 
                alt="Saiga Stable" 
                className="relative rounded-2xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </Fade>

      {/* Gallery Grid */}
      <div className="px-4">
        <Fade bottom cascade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gallerySets.map((set, setIndex) => (
              <div
                key={setIndex}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image Grid - 3 images in one card */}
                <div className="grid grid-cols-3 gap-1 p-1">
                  {set.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative aspect-square overflow-hidden cursor-pointer"
                      onClick={() => handleViewDetail(set, imageIndex)}
                    >
                      <img
                        src={image}
                        loading="lazy"
                        alt={`${set.title} ${imageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      
                      {/* Click Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-2 rounded-full">
                          <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full">
                      {set.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {set.images.length} foto
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-['Poppins']">
                    {set.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {set.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleViewDetail(set, 0)}
                      className="inline-flex items-center text-green hover:text-lightGreen font-semibold text-sm transition-colors duration-300 group/btn"
                    >
                      Lihat Galeri
                      <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </button>
                    
                    <div className="flex space-x-1">
                      {set.images.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className="w-2 h-2 bg-green rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery