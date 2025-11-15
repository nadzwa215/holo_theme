import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/header.png"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3 pt-2"> {/* pt-2 saja */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 flex gap-6 lg:flex-justify lg:flex lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            {/* Logo Section - Kembali ke warna awal */}
            <div className="mb-3 flex items-center justify-center lg:justify-start space-x-3">
              <h2 className="text-black text-gradient bg-gradient-to-r from-lightGreen to-green text-6xl font-['Poppins'] font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
                Saiga Stable
              </h2>
              <span className="bg-green text-white px-3 py-1 rounded-lg text-sm font-bold mt-2">
                for sunnah
              </span>
            </div>

            {/* Welcome Message */}
            <h1 className="text-black text-3xl font-['Poppins'] font-semibold opacity-70 mb-3">
              SELAMAT DATANG DI WEBSITE KAMI
            </h1>

            {/* Description */}
            <p className="mt-2 text-base text-black-70 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-xl lg:mx-0">
              Saiga Stable for Sunnah  Sekolah berkuda yang mengintegrasikan seni berkuda dengan nilai-nilai sunnah Nabi. 
              Kami menghadirkan pembelajaran berkuda yang tidak hanya mengajarkan teknik profesional, 
              tetapi juga menanamkan akhlak mulia dan tradisi islami dalam setiap langkahnya.
            </p>

           {/* CTA Buttons - Diperbaiki styling */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="/contact"
                className="border-2 border-lightGreen hover:bg-green text-black hover:text-white px-6 py-3 rounded-lg font-bold font-montserrat transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a
                href="/about"
                className="border-2 border-lightGreen text-black hover:bg-green hover:text-white px-6 py-3 rounded-lg font-bold font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get To Know Us
              </a>
            </div>

            {/* Trust badges dihapus */}
          </div>

          {/* Image Section - tanpa decorative element */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-2 flex lg:justify-end justify-center">
            <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt="Saiga Stable Hero"
            />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header