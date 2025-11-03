import React from "react"

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="px-4 lg:px-8">
        {/* Badge */}
        <div className="inline-block bg-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Visi & Misi Kami
        </div>
        
        <h2 className="text-gray-600 text-xl font-semibold">NILAI UTAMA KAMI</h2>
        <h3 className="text-gray-900 text-4xl lg:text-5xl font-bold font-['Poppins'] mt-2">
          Menghidupkan Sunnah Melalui{' '}
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Berkuda & Memanah
          </span>
        </h3>
        
        <p className="text-gray-700 text-lg leading-relaxed mt-6 max-w-4xl">
          Saiga Stable hadir dengan misi menghidupkan kembali sunnah Rasulullah ﷺ dalam 
          berkuda dan memanah. Kami percaya bahwa kedua aktivitas ini bukan hanya sekadar 
          olahraga, tetapi juga <span className="text-green-600 font-medium">media pembentukan karakter</span> 
          {' '}dan <span className="text-green-600 font-medium">pendekatan kepada Allah SWT</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h4 className="text-green-700 text-xl font-semibold">Misi Kami</h4>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Mengajarkan berkuda dan memanah dengan teknik yang benar dan aman
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Menanamkan nilai-nilai sunnah dalam setiap aktivitas pembelajaran
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Membentuk generasi yang kuat fisiknya dan mulia akhlaknya
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Menciptakan komunitas muslim yang sehat dan aktif
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-green-700 text-xl font-semibold">Nilai Kami</h4>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>Ikhlas</strong> - Semua aktivitas diniatkan untuk ibadah
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>Profesional</strong> - Teknik yang benar dan safety first
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>Islami</strong> - Mengedepankan adab dan akhlak
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>Komunitas</strong> - Silaturahmi dan ukhuwah islamiyah
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/contact/"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Gabung Komunitas Kami
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutExtra