import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/about.png"

const AboutHeader = () => {
  return (
    <div className="max-w-4xl mx-auto pt-20 px-4">
      
      {/* Title dengan animasi fade in pertama */}
      <Fade top duration={800}>
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold bg-gradient-to-r from-lightGreen to-green bg-clip-text text-transparent mb-4">
            Saiga Stable
          </h1>
        </div>
      </Fade>

      {/* Subtitle dengan animasi delay */}
      <Fade top duration={800} delay={200}>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl text-gray-700 font-['Poppins'] mb-8">
            Menghidupkan Tradisi{" "}
            <span className="text-green font-['Poppins'] font-semibold">Berkuda & Memanah</span>
          </h2>
        </div>
      </Fade>

      {/* Tagline dengan animasi bounce subtle */}
      <Fade bottom duration={800} delay={400}>
        <div className="text-center">
          <div className="bg-green inline-block px-4 py-2 rounded-full mb-8 transform hover:scale-105 transition-transform duration-300">
            <span className="text-white font-medium">ala Sunnah</span>
          </div>
        </div>
      </Fade>

      {/* Description dengan animasi fade */}
      <Fade bottom duration={800} delay={600}>
        <div className="text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Mengintegrasikan teknik profesional dengan{" "}
            <span className="text-green-600 font-medium">nilai-nilai islami</span>{" "}
            dalam setiap pembelajaran, menciptakan pengalaman yang bermakna dan{" "}
            <span className="text-green-600 font-medium">penuh barakah</span>.
          </p>
        </div>
      </Fade>

      {/* Image dengan animasi zoom in subtle */}
      <Fade duration={1000} delay={800}>
        <div className="mt-12 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            alt="Saiga Stable" 
            src={Image3} 
            className="w-full h-68 object-cover"
          />
        </div>
      </Fade>

    </div>
  )
}

export default AboutHeader