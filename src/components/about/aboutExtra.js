import React from "react"

const AboutExtra = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 lg:px-8">
      {/* Header Section dengan gradient */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-green to-lightGreen text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
          Visi & Misi Kami
        </div>
        
        <h2 className="text-gray-600 text-lg font-medium uppercase tracking-wider mb-4">
          NILAI UTAMA KAMI
        </h2>
        
        <h3 className="text-gray-900 text-4xl lg:text-5xl font-bold font-['Poppins'] mb-6 leading-tight">
          Menghidupkan Sunnah Melalui{' '}
          <span className="bg-gradient-to-r from-green to-lightGreen bg-clip-text text-transparent">
            Berkuda & Memanah
          </span>
        </h3>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-xl leading-relaxed">
            Saiga Stable hadir dengan misi menghidupkan kembali sunnah Rasulullah ﷺ 
            dalam berkuda dan memanah. Kami percaya bahwa kedua aktivitas ini bukan 
            hanya sekadar olahraga, tetapi juga{' '}
            <span className="text-green font-semibold">media pembentukan karakter</span>{' '}
            dan <span className="text-green font-semibold">pendekatan kepada Allah SWT</span>.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Misi Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 font-['Poppins']">Misi Kami</h4>
          </div>
          
          <ul className="space-y-4">
            {[
              "Mengajarkan berkuda dan memanah dengan teknik yang benar dan aman",
              "Menanamkan nilai-nilai sunnah dalam setiap aktivitas pembelajaran",
              "Membentuk generasi yang kuat fisiknya dan mulia akhlaknya",
              "Menciptakan komunitas muslim yang sehat dan aktif"
            ].map((item, index) => (
              <li key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-green-100 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                </div>
                <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nilai Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
              <div className="w-4 h-1 bg-white rounded-full"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 font-['Poppins']">Nilai Kami</h4>
          </div>
          
          <ul className="space-y-4">
            {[
              { principle: "Ikhlas", description: "Semua aktivitas diniatkan untuk ibadah" },
              { principle: "Profesional", description: "Teknik yang benar dan safety first" },
              { principle: "Islami", description: "Mengedepankan adab dan akhlak" },
              { principle: "Komunitas", description: "Silaturahmi dan ukhuwah islamiyah" }
            ].map((item, index) => (
              <li key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-green-100 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                </div>
                <div>
                  <strong className="text-green font-semibold">{item.principle}</strong>
                  <span className="text-gray-600 ml-2">- {item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-12 border border-gray-200">
        <h4 className="text-2xl font-bold text-gray-900 font-['Poppins'] mb-4">
          Siap Bergabung dengan Perjalanan Sunnah Kami?
        </h4>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Mari bersama-sama menghidupkan sunnah berkuda dan memanah dalam komunitas yang penuh berkah.
        </p>
        <a
          href="/contact/"
          className="inline-flex items-center bg-gradient-to-r from-green to-lightGreen hover:from-green hover:to-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Gabung Komunitas Kami
          <svg
            className="w-5 h-5 ml-3"
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
  )
}

export default AboutExtra