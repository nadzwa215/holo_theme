import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            Don’t Miss Out
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Latest Posts
          </h3>
          <div className="blog-hover bg-transparent border mt-10 border-dp rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Harmoni Dua Sunnah Integrasi Berkuda dan Memanah dalam Kehidupan Modern

            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              Di Saiga Stable, kami meyakini bahwa kedua sunnah ini justru semakin relevan di zaman now. 
              Berkuda menjadi sarana digital detox yang alami, mengajak kita kembali terhubung dengan 
              alam setelah sekian lama terpaku pada layar gawai. Sementara memanah melatih fokus dan konsentrasi
              yang justru semakin tumpul di era informasi yang overload.
            </p>
            <a
              href="/blog/blog-post"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-bold font-montserrat text-center text-green hover:text-dp rounded-lg border border-dp  hover:bg-green"
            >
              Baca Artikel
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
          {/* <div className="grid md:grid-cols-2 gap-8"> */}
            {/* <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Saiga Stable: Membangun Jiwa Tangguh dengan Sunnah
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Kami menghadirkan pengalaman belajar berkuda dan memanah yang berpadu dengan 
                nilai-nilai Islam.Sebuah wadah untuk mengasah fisik, menumbuhkan akhlak, 
                dan menapaki jalan sunnah dengan semangat.
              </p>
              <a
                href="/blog/blog-post-1"
                 className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-bold font-montserrat text-center text-green hover:text-dp rounded-lg border border-dp  hover:bg-green"
            
              >
                Baca Artikel
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
            </div> */}
            <div className="blog-hover bg-transparent border mt-10 border-dp rounded-lg p-8 md:p-12 mb-8">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Seni Berkuda dalam Perspektif Islam Menghidupkan Sunnah di Era Modern
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Rasulullah ﷺbersabda: “Ajarlah anak-anak kalian berkuda, berenang,
                dan memanah.” (HR. Bukhari dan Muslim). Hadits ini bukan sekadar anjuran, tetapi
                petunjuk edukatif yang menyeluruh. Di Saiga Stable, kami menghidupkan sunnah ini dengan 
                pendekatan yang terintegrasi antara teknik modern dan nilai-nilai islami.
              </p>
              <a
                href="/blog/blog-post-2"
                 className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-bold font-montserrat text-center text-green hover:text-dp rounded-lg border border-dp  hover:bg-green"
            
              >
                Baca Artikel
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
      {/* </div> */}
    </Fade>
  )
}

export default FeaturedBlog
