import React from "react"
import Fade from "react-reveal/Fade"

// Assets (sudah WebP)
import HeroImage from "../../images/wel.webp"
import Image1 from "../../images/f1.webp"
import Image2 from "../../images/f2.webp"
import Image3 from "../../images/f3.webp"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 lg:px-0 xl:mt-14 flex flex-col lg:flex-row gap-6">

          {/* Hero Image */}
          <div className="lg:w-1/2 my-4 flex justify-center">
            <picture>
              <img
                src={HeroImage}
                loading="lazy"
                width={1200}
                height={800}
                className="
                  rounded-xl 
                  w-full 
                  max-w-[380px]        /* khusus mobile: width dibatasi */
                  sm:max-w-[480px] 
                  md:max-w-none 
                  h-56 object-cover 
                  sm:h-72 md:h-96 
                  lg:w-full lg:h-full 
                  shadow-lg
                "
                alt="Hero Section"
              />
            </picture>
          </div>

          {/* Hero Text */}
          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h3 className="text-black text-4xl lg:text-6xl font-['Poppins'] font-bold xxs:text-2xl xs:text-3xl sm:text-5xl text-gradient bg-gradient-to-r from-lightGreen to-green">
              Mahir Berkuda, Meneladani Sunnah
            </h3>

            <p className="mt-4 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Kami menghadirkan pembelajaran berkuda yang tidak hanya mengajarkan teknik profesional,
              tetapi juga menanamkan akhlak mulia dan tradisi islami dalam setiap langkahnya.
            </p>

            <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-end space-x-4">
              <a
                href="/gallery"
                className="border-2 border-lightGreen hover:bg-green text-black hover:text-white px-6 py-3 rounded-lg font-bold font-montserrat transition-all duration-300 inline-flex items-center"
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
      <Fade bottom cascade>
        <div className="mt-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-bold text-gray-900 mb-4">
              Empat Pilar Pembelajaran Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrasi lengkap antara skill fisik dan nilai spiritual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Memanah", desc: "Latih fokus, kendalikan diri, dan niatkan untuk sunnah." },
              { title: "Berkuda", desc: "Seimbang, kuat, dan berani belajar dengan adab dan amanah." },
              { title: "Adab & Sunnah", desc: "Meneladani Rasulullah ﷺ dalam setiap gerak dan niat." },
              { title: "Saiga Spirit", desc: "Keteguhan, kebersamaan, dan niat lurus di jalan sunnah." }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-green-700 text-xl font-semibold font-['Poppins'] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* PROGRAM KAMI */}
      <Fade bottom>
        <div className="mt-16 px-4">
          <div className="bg-gradient-to-r from-green to-lightGreen rounded-2xl p-8 relative overflow-hidden">
            
            <div className="flex flex-col lg:flex-row gap-8 relative z-10">

              <div className="lg:w-2/5">
                <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-bold text-white mb-6">
                  PROGRAM KAMI
                </h2>
                <div className="space-y-6">
                  {[
                    { name: "Berkuda Dasar", desc: "Untuk pemula semua usia" },
                    { name: "Berkuda Lanjutan", desc: "Teknik Berkuda dan Memanah" },
                    { name: "Memanah", desc: "Teknik Dasar Memanah" }
                  ].map((program, index) => (
                    <div key={index} className="border-l-4 border-white pl-4">
                      <h3 className="text-xl font-semibold text-white">{program.name}</h3>
                      <p className="text-white text-sm mt-1 opacity-90">{program.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-3/5 bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl">
                <h2 className="text-2xl lg:text-3xl font-['Poppins'] font-bold text-gray-900 mb-4">
                  Kuasai Seni Berkuda dan Memanah ala Sunnah
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Saiga Stable for Sunnah menghidupkan kembali tradisi Rasulullah dengan program berkuda
                  dan memanah yang terintegrasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* GALLERY */}
      <Fade bottom>
        <div className="mt-16 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-xl overflow-hidden shadow-lg flex justify-center">
              <img
                src={Image1}
                loading="lazy"
                width={800}
                height={600}
                className="
                  w-full 
                  max-w-[360px]    /* width mobile */
                  sm:max-w-[480px]
                  md:max-w-none
                  h-68 object-cover
                "
                alt="Kegiatan Memanah"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg flex justify-center">
              <img
                src={Image2}
                loading="lazy"
                width={800}
                height={600}
                className="
                  w-full 
                  max-w-[360px]
                  sm:max-w-[480px]
                  md:max-w-none
                  h-68 object-cover
                "
                alt="Latihan Berkuda"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg flex justify-center">
              <img
                src={Image3}
                loading="lazy"
                width={800}
                height={600}
                className="
                  w-full 
                  max-w-[360px]
                  sm:max-w-[480px]
                  md:max-w-none
                  h-68 object-cover
                "
                alt="Komunitas Saiga"
              />
            </div>

          </div>
        </div>
      </Fade>

      {/* CTA */}
      <div className="mt-16 px-8 text-center bg-gradient-to-r from-green to-lightGreen rounded-2xl py-16 mx-4 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl lg:text-4xl font-['Poppins'] font-bold text-white mb-6">
            Siap Memulai Perjalanan Sunnah Anda?
          </h2>
          <p className="text-white text-lg lg:text-xl mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Bergabunglah dengan komunitas Saiga Stable dan rasakan pengalaman belajar berkuda & memanah.
          </p>
          <a
            href="/contact"
            className="group bg-white text-green hover:bg-gray-100 px-10 py-4 rounded-xl font-bold font-['Poppins'] text-lg transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Hubungi Kami Sekarang
            <svg
              className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}

export default FeatureSection
