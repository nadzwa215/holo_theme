import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <section className="bg-transparent">
        <div
          className="
            mx-auto
            max-w-sm
            sm:max-w-md
            md:max-w-3xl
            lg:max-w-screen-xl
            px-6
            pt-6
            lg:px-0
            lg:pt-8
          "
        >
          {/* JUDUL */}
          <div className="text-center md:text-left">
            <h2 className="text-black text-2xl sm:text-3xl opacity-70 font-semibold">
              Don’t Miss Out
            </h2>
            <h3 className="
              mt-2
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gradient
              bg-gradient-to-r
              from-pink
              to-purple
            ">
              Latest Posts
            </h3>
          </div>

          {/* ARTIKEL UTAMA */}
          <article className="blog-hover bg-transparent border border-dp rounded-lg p-6 md:p-10 mt-10">
            <h2 className="text-black text-2xl md:text-3xl font-semibold mb-3">
              Harmoni Dua Sunnah Integrasi Berkuda dan Memanah dalam Kehidupan Modern
            </h2>

            <p className="text-base md:text-lg text-black/70 mb-6">
              Di Saiga Stable, kami meyakini bahwa kedua sunnah ini semakin relevan
              di zaman modern. Berkuda menjadi sarana digital detox alami yang
              mengajak kembali terhubung dengan alam, sementara memanah melatih
              fokus dan ketenangan di tengah derasnya informasi.
            </p>

            <a
              href="/blog/blog-post"
              className="
                inline-flex
                items-center
                gap-2
                py-2.5
                px-5
                text-base
                font-bold
                text-green
                border
                border-dp
                rounded-lg
                hover:bg-green
                hover:text-dp
                transition
              "
            >
              Baca Artikel
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </article>

          {/* ARTIKEL KEDUA */}
          <article className="blog-hover bg-transparent border border-dp rounded-lg p-6 md:p-10 mt-8 mb-10">
            <h2 className="text-black text-2xl md:text-3xl font-semibold mb-3">
              Seni Berkuda dalam Perspektif Islam Menghidupkan Sunnah di Era Modern
            </h2>

            <p className="text-base md:text-lg text-black/70 mb-6">
              Rasulullah ﷺ bersabda: “Ajarlah anak-anak kalian berkuda, berenang,
              dan memanah.” Hadits ini menjadi landasan edukatif yang kami hidupkan
              di Saiga Stable melalui pendekatan modern yang tetap berakar pada
              nilai-nilai Islam.
            </p>

            <a
              href="/blog/blog-post-2"
              className="
                inline-flex
                items-center
                gap-2
                py-2.5
                px-5
                text-base
                font-bold
                text-green
                border
                border-dp
                rounded-lg
                hover:bg-green
                hover:text-dp
                transition
              "
            >
              Baca Artikel
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </article>
        </div>
      </section>
    </Fade>
  )
}

export default FeaturedBlog
