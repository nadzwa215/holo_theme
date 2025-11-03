import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-6xl mx-auto pt-16 px-4 lg:px-8">
      
      {/* Stats Section - Realistis */}
      <Fade bottom cascade>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-bold text-gray-900 mb-12">
            Perjalanan Kami Sejauh Ini
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Kuda Pilihan</div>
              <div className="text-gray-500 text-sm mt-1">Terlatih & Bersahabat</div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600 font-medium">Program Utama</div>
              <div className="text-gray-500 text-sm mt-1">Berkuda & Memanah</div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Siswa Aktif</div>
              <div className="text-gray-500 text-sm mt-1">Dari Berbagai Usia</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Pelatih Berpengalaman</div>
              <div className="text-gray-500 text-sm mt-1">Bidang Berkuda & Memanah</div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Perjalanan Ikhlas untuk Umat
          </span>
        </h3>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-lg mb-6">
            Dengan semangat menghidupkan sunnah Rasulullah, Saiga Stable memulai perjalanan 
            sederhana namun penuh makna dalam mengajarkan berkuda dan memanah.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-green-600 font-semibold text-xl mb-3">Kuda Pilihan yang Terlatih</h4>
              <p>
                Kami memiliki <strong>5 kuda pilihan</strong> yang sudah terlatih dengan baik dan 
                bersahabat dengan penunggang. Setiap kuda dipilih dengan teliti untuk memastikan 
                keamanan dan kenyamanan belajar, khususnya untuk pemula dan anak-anak.
              </p>
            </div>

            <div>
              <h4 className="text-green-600 font-semibold text-xl mb-3">Program Memanah Sunnah</h4>
              <p>
                Selain berkuda, kami menyediakan <strong>program memanah</strong> yang mengajarkan 
                teknik dasar hingga menengah. Peralatan memanah kami sesuaikan dengan berbagai usia, 
                dari anak-anak hingga dewasa, dengan penekanan pada konsentrasi dan ketenangan jiwa.
              </p>
            </div>

            <div>
              <h4 className="text-green-600 font-semibold text-xl mb-3">Didampingi Pelatih Berpengalaman</h4>
              <p>
                <strong>3 pelatih berpengalaman</strong> siap membimbing dengan pendekatan personal. 
                Mereka tidak hanya mahir dalam teknik berkuda dan memanah, tetapi juga memahami 
                nilai-nilai sunnah yang ingin kami tanamkan.
              </p>
            </div>

            <div>
              <h4 className="text-green-600 font-semibold text-xl mb-3">Fasilitas yang Nyaman</h4>
              <p>
                Meski masih dalam perkembangan, kami menyediakan <strong>fasilitas yang aman dan nyaman</strong> 
                untuk belajar. Arena latihan kami dirancang khusus untuk pemula dengan lingkungan 
                yang mendukung proses belajar.
              </p>
            </div>

            <div>
              <h4 className="text-green-600 font-semibold text-xl mb-3">Komunitas yang Hangat</h4>
              <p>
                <strong>20+ siswa aktif</strong> telah bergabung dan membentuk komunitas belajar 
                yang supportive. Di sini, tidak hanya skill yang berkembang, tetapi juga silaturahmi 
                dan nilai-nilai ukhuwah islamiyah.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-green-50 rounded-xl p-6 mt-8 border border-green-200">
            <p className="text-green-800 text-center font-medium">
              "Dari yang sederhana, kami berkomitmen memberikan yang terbaik. 
              Setiap langkah adalah ibadah, setiap pembelajaran adalah sedekah ilmu"
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WorkPage