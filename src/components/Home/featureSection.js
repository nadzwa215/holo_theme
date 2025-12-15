import React from "react"

// Assets
import HeroImage from "../../images/wel.webp"
import Image1 from "../../images/f1-small.webp"
import Image2 from "../../images/f2-small.webp"
import Image3 from "../../images/f3-small.webp"

const programs = [
  { name: "Berkuda Dasar", desc: "Untuk pemula semua usia" },
  { name: "Berkuda Lanjutan", desc: "Teknik Berkuda dan Memanah" },
  { name: "Memanah", desc: "Teknik Dasar Memanah" }
]

const pillars = [
  { title: "Memanah", desc: "Latih fokus, kendalikan diri, dan niatkan untuk sunnah." },
  { title: "Berkuda", desc: "Seimbang, kuat, dan berani belajar dengan adab dan amanah." },
  { title: "Adab & Sunnah", desc: "Meneladani Rasulullah ﷺ dalam setiap gerak dan niat." },
  { title: "Saiga Spirit", desc: "Keteguhan, kebersamaan, dan niat lurus di jalan sunnah." }
]

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">

      {/* HERO */}
      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 mt-10 lg:mt-12 flex flex-col lg:flex-row gap-6">

          {/* Hero Image */}
          <div className="lg:w-1/2 my-4 min-h-[400px]">
            <img
              src={HeroImage}
              alt="Saiga Stable Hero"
              width="800"
              height="600"
              className="rounded-xl w-full object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Hero Text */}
          <div className="lg:w-1/2 text-center lg:text-right flex flex-col justify-center">
            <h3 className="text-green text-4xl lg:text-6xl font-bold font-['Poppins']">
              Mahir Berkuda, Meneladani Sunnah
            </h3>

            <p className="mt-4 text-base text-gray-700 sm:text-lg md:text-xl">
              Pembelajaran berkuda yang mengajarkan teknik profesional sekaligus menanamkan adab & nilai islami.
            </p>

            <div className="mt-6 flex justify-center lg:justify-end">
              <a
                href="/gallery"
                className="border-2 border-lightGreen hover:bg-green text-black hover:text-white px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center"
              >
                View Gallery
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 4 PILAR */}
      <div className="mt-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-['Poppins'] text-green">
            Empat Pilar Pembelajaran Kami
          </h2>
          <p className="text-lg text-gray-600">Integrasi lengkap antara skill dan nilai spiritual</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-green-700 text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRAM */}
      <div className="mt-16 px-4">
        <div className="bg-gradient-to-r from-green to-lightGreen rounded-2xl p-8 relative overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 relative z-10">

            <div className="lg:w-2/5">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">PROGRAM KAMI</h2>

              <div className="space-y-6">
                {programs.map((p, i) => (
                  <div key={i} className="border-l-4 border-white pl-4 group hover:border-lightGreen transition-all">
                    <h3 className="text-xl font-semibold text-white group-hover:text-lightGreen transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-3/5 bg-white bg-opacity-95 p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-green mb-4">
                Kuasai Seni Berkuda & Memanah ala Sunnah
              </h2>
              <p className="text-gray-700 text-lg">
                Menghidupkan kembali tradisi Rasulullah melalui pembelajaran berkuda & memanah yang menggabungkan teknik profesional dan nilai-nilai islami.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* METODE */}
      <div className="mt-16 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-gray-500 text-xl font-semibold mb-2">METODE PEMBELAJARAN ISLAMI</h2>
        <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-green">
          Kuasai Dua Keahlian Sunnah yang Mulia
        </h3>
        <p className="text-gray-600 text-lg">
          Kurikulum yang menggabungkan teknik, adab, disiplin, dan nilai-nilai sunnah dalam satu perjalanan pembelajaran.
        </p>
      </div>

      {/* GALLERY */}
      <div className="mt-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[Image1, Image2, Image3].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg min-h-[300px]">
              <img
                src={img}
                alt="Saiga Stable Gallery"
                width="800"
                height="800"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 px-8 text-center bg-gradient-to-r from-green to-lightGreen rounded-2xl py-16 mx-4 relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Sunnah Anda?
          </h2>
          <p className="text-white text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Bergabunglah dan rasakan pengalaman belajar yang berbeda bersama komunitas Saiga Stable.
          </p>
          <a
            href="/contact"
            className="group bg-white text-green px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center shadow-2xl transition-all hover:shadow-3xl hover:-translate-y-1"
          >
            Hubungi Kami Sekarang
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>

    </div>
  )
}

export default FeatureSection
