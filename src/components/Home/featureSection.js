import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/wel.jpg"
import Image1 from "../../images/f1.jpg"
import Image2 from "../../images/f2.jpg"
import Image3 from "../../images/f3.jpg"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
  <Fade bottom cascade>
    <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
      
      <div className="w-1/3 bg-green p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
        <h3 className="text-[#cfe78d] text-2xl font-semibold tracking-wide">Memanah</h3>
        <h4 className="mt-6 text-white opacity-90 text-lg leading-relaxed">
          Latih fokus, kendalikan diri, dan niatkan untuk sunnah.
        </h4>
      </div>

      <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
        <h3 className="text-[#d6c97a] text-2xl font-semibold tracking-wide">Berkuda</h3>
        <h4 className="mt-6 text-white opacity-90 text-lg leading-relaxed">
          Seimbang, kuat, dan berani  belajar dengan adab dan amanah.
        </h4>
      </div>
      
      <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
        <h3 className="text-[#d6c97a] text-2xl font-semibold tracking-wide">Adab & Sunnah</h3>
        <h4 className="mt-6 text-white opacity-90 text-lg leading-relaxed">
          Meneladani Rasulullah ﷺ dalam setiap gerak dan niat.
        </h4>
      </div>
      
      <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
        <h3 className="text-[#d6c97a] text-2xl font-semibold tracking-wide">Saiga Spirit</h3>
        <h4 className="mt-6 text-white opacity-90 text-lg leading-relaxed">
          Keteguhan, kebersamaan, dan niat lurus di jalan sunnah.
        </h4>
      </div>
      
    </div>
  </Fade>


      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold"></h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-lightGreen to-green">
              Mahir Berkuda, Meneladani Sunnah
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Kami menghadirkan pembelajaran berkuda yang 
              tidak hanya mengajarkan teknik profesional, tetapi juga menanamkan akhlak 
              mulia dan tradisi islami dalam setiap langkahnya.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-green text-black hover:text-green border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Call Us Now
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-green hover:text-black bg-transparent hover:bg-green md:py-3 md:text-lg md:px-10"
                >
                  View Gallery
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-transparant p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              PROGRAM KAMI
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Berkuda Dasar</p>
                <p className="text-black opacity-50 text-sm">Untuk pemula semua usia</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Berkuda Lanjutan</p>
                <p className="text-black opacity-50 text-sm">Teknik Berkuda dan Memanah</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Memanah</p>
                <p className="text-black opacity-50 text-sm">
                  Teknik Dasar Memanah 
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-green p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-[#cfe78d] text-5xl font-semibold tracking-wide">
              Kuasai Seni Berkuda dan Memanah ala Sunnah
            </h2>
            <p className="mt-6 text-white opacity-90 text-lg leading-relaxed">
              Saiga Stable for Sunnah menghidupkan kembali tradisi Rasulullah dengan 
              program berkuda dan memanah yang terintegrasi. Pelajari dua keahlian 
              mulia ini dalam satu kurikulum yang menggabungkan teknik profesional 
              dengan nilai-nilai islami untuk membentuk pribadi yang kuat dan berakhlak.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          METODE PEMBELAJARAN ISLAMI
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-green to-lightGreen">
          Kuasai Dua Keahlian Sunnah yang Mulia
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Kami mengembangkan kurikulum berkuda dan memanah yang tidak hanya 
          fokus pada teknik, tetapi juga integrasi nilai-nilai sunnah. Setiap 
          sesi latihan dirancang untuk membangun akhlak, disiplin, dan rasa 
          tanggung jawab, mengikuti teladan Rasulullah dalam berolahraga.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          KOLABORASI & KEMITRAAN
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-green to-lightGreen">
          Wujudkan Komunitas Berkuda Islami
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
           Dalam rangka mewujudkan visi menyebarkan manfaat olahraga sunnah, 
            Saiga Stable membangun jaringan kemitraan yang komprehensif dengan 
            berbagai pihak terkemuka. Kami bekerja sama dengan pondok pesantren 
            untuk integrasi nilai-nilai keislaman, klub olahraga profesional 
            untuk standar teknik yang tinggi, serta komunitas-komunitas islami 
            untuk memperluas dampak sosial. Sinergi ini memungkinkan kami 
            menyediakan program berkuda dan memanah yang berkualitas, terjangkau, 
            dan sesuai dengan nilai-nilai islami untuk masyarakat luas.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-green text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="f1" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="f2" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="f3" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
  <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
    <div className="w-1/3 bg-green p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
      <h3 className="text-[#cfe78d] text-2xl font-semibold tracking-wide">Program Berkuda</h3>
      <h4 className="mt-10 text-black opacity-70 text-xl">Latihan & Ketangkasan</h4>
    </div>

    <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
      <h3 className="text-[#d6c97a] text-2xl font-semibold tracking-wide">Program Memanah</h3>
      <h4 className="mt-10 text-white opacity-70 text-xl">
        Fokus & Ketenangan
      </h4>
    </div>

    <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
      <h3 className="text-[#d6c97a] text-2xl font-semibold tracking-wide">Adab & Sunnah</h3>
      <h4 className="mt-10 text-white opacity-70 text-xl">
        Pembentukan Karakter Islami
      </h4>
    </div>
  </div>
</Fade>
    </div>
  )
}

export default FeatureSection
