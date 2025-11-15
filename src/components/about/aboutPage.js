import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-6xl mx-auto pt-16 px-4 lg:px-8">
      
      {/* Stats Section - Lebih Elegan */}
      <Fade bottom cascade>
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-green to-lightGreen text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Pencapaian Kami
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-bold text-gray-900 mb-12">
            Perjalanan Kami Dalam Angka
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-green-100 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative text-4xl lg:text-5xl font-bold text-green mb-2 px-6 py-4">5</div>
              </div>
              <div className="text-gray-800 font-semibold text-lg">Kuda Pilihan</div>
              <div className="text-gray-600 text-sm mt-2">Terlatih & Bersahabat</div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-green-100 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative text-4xl lg:text-5xl font-bold text-green mb-2 px-6 py-4">2</div>
              </div>
              <div className="text-gray-800 font-semibold text-lg">Program Utama</div>
              <div className="text-gray-600 text-sm mt-2">Berkuda & Memanah</div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-green-100 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative text-4xl lg:text-5xl font-bold text-green mb-2 px-6 py-4">20+</div>
              </div>
              <div className="text-gray-800 font-semibold text-lg">Siswa Aktif</div>
              <div className="text-gray-600 text-sm mt-2">Dari Berbagai Usia</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-green-100 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
                <div className="relative text-4xl lg:text-5xl font-bold text-green mb-2 px-6 py-4">3</div>
              </div>
              <div className="text-gray-800 font-semibold text-lg">Pelatih Ahli</div>
              <div className="text-gray-600 text-sm mt-2">Berkuda & Memanah</div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-bold text-gray-900 mb-6">
            Komitmen Kami Dalam Menghidupkan Sunnah
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-green to-lightGreen mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Kuda Pilihan Terlatih</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Kami memiliki <strong className="text-green">5 kuda pilihan</strong> yang sudah terlatih dengan baik dan 
                bersahabat dengan penunggang. Setiap kuda dipilih dengan teliti untuk memastikan 
                keamanan dan kenyamanan belajar, khususnya untuk pemula dan anak-anak.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
                  <div className="w-4 h-1 bg-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Program Memanah Sunnah</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Selain berkuda, kami menyediakan <strong className="text-green">program memanah</strong> yang mengajarkan 
                teknik dasar hingga menengah. Peralatan memanah kami sesuaikan dengan berbagai usia, 
                dari anak-anak hingga dewasa, dengan penekanan pada konsentrasi dan ketenangan jiwa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
                  <div className="w-3 h-3 bg-white rounded-full transform rotate-45"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Fasilitas yang Nyaman</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Meski masih dalam perkembangan, kami menyediakan <strong className="text-green">fasilitas yang aman dan nyaman</strong> 
                untuk belajar. Arena latihan kami dirancang khusus untuk pemula dengan lingkungan 
                yang mendukung proses belajar.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Pelatih Berpengalaman</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-green">3 pelatih berpengalaman</strong> siap membimbing dengan pendekatan personal. 
                Mereka tidak hanya mahir dalam teknik berkuda dan memanah, tetapi juga memahami 
                nilai-nilai sunnah yang ingin kami tanamkan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green to-lightGreen rounded-xl flex items-center justify-center mr-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Komunitas yang Hangat</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-green">20+ siswa aktif</strong> telah bergabung dan membentuk komunitas belajar 
                yang supportive. Di sini, tidak hanya skill yang berkembang, tetapi juga silaturahmi 
                dan nilai-nilai ukhuwah islamiyah.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-12 border border-gray-200 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-800 text-xl leading-relaxed font-medium mb-6">
              "Dari yang sederhana, kami berkomitmen memberikan yang terbaik. 
              Setiap langkah adalah ibadah, setiap pembelajaran adalah sedekah ilmu"
            </p>
            <div className="w-16 h-0.5 bg-green mx-auto mb-6"></div>
            <p className="text-gray-600 font-semibold">
              Tim Saiga Stable
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage