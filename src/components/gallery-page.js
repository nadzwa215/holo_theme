import React from "react"
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
  const galleryItems = [
    { image: Gallery1, title: "Memanah", category: "Olahraga", description: "Seni memanah ala sunnah" },
    { image: Gallery2, title: "Kegiatan Siswa", category: "Edukasi", description: "Proses belajar yang menyenangkan" },
    { image: Gallery3, title: "Berkuda dan Memanah", category: "Kombinasi", description: "Dua sunnah dalam satu tempat" },
    { image: Gallery4, title: "Pelatihan", category: "Profesional", description: "Pelatihan berkuda berkualitas" },
    { image: Gallery5, title: "Komunitas", category: "Sosial", description: "Komunitas yang solid dan aktif" },
    { image: Gallery6, title: "Event", category: "Acara", description: "Event khusus dan turnamen" }
  ]

  // Function untuk handle klik lihat detail
  const handleViewDetail = (item) => {
    // Buka gambar di tab baru
    window.open(item.image, '_blank')
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
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleViewDetail(item)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    loading="lazy"
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-2">
                        {item.category}
                      </span>
                      <p className="text-white text-sm opacity-90">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-['Poppins']">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-green text-sm font-semibold group-hover:underline">
                      Klik untuk melihat ↗
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-green rounded-full opacity-40"></div>
                      <div className="w-2 h-2 bg-green rounded-full opacity-20"></div>
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