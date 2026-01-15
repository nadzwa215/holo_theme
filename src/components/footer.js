import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo-small.webp"

const Footer = () => {
  const year = new Date().getFullYear()

  const SAFE_TEXT_CLASS = "text-gray-700"
  const FONT_CLASS = "font-poppins"

  return (
    <footer
      className="bg-gray-50 border-t border-green mt-20"
      role="contentinfo"
    >
      <div
        className="
          mx-auto
          max-w-sm
          sm:max-w-md
          md:max-w-xl
          lg:max-w-7xl
          px-6
          py-14
        "
      >
        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-start">

          {/* 1. LOGO & DESKRIPSI */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img
                src={logo}
                alt="Logo Saiga Stable"
                className="h-14 w-14"
                loading="lazy"
              />
              <div>
                <h3 className={`text-green font-bold text-2xl ${FONT_CLASS}`}>
                  Saiga Stable
                </h3>
                <p className={`${SAFE_TEXT_CLASS} text-xs ${FONT_CLASS}`}>
                  Berkuda • Memanah • Sunnah
                </p>
              </div>
            </div>

            <p className={`mt-5 ${SAFE_TEXT_CLASS} text-sm italic max-w-sm mx-auto md:mx-0 ${FONT_CLASS}`}>
              “Di setiap langkah kuda dan tarikan busur, ada kesabaran,
              keteguhan hati, dan niat yang lurus.”
            </p>
          </div>

          {/* 2. NAVIGASI */}
          <nav aria-label="Navigasi Footer" className="text-center md:text-left">
            <h3 className={`font-semibold text-green text-lg mb-4 ${FONT_CLASS}`}>
              Navigasi
            </h3>

            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`
                      ${SAFE_TEXT_CLASS}
                      text-sm
                      hover:text-green
                      hover:translate-x-1
                      inline-block
                      transition
                      ${FONT_CLASS}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. KONTAK + MAPS */}
          <div className="text-center md:text-right">
            <h3 className={`font-semibold text-green text-lg mb-4 ${FONT_CLASS}`}>
              Kontak
            </h3>

            <div className="space-y-3 text-sm">

              <p className={`${SAFE_TEXT_CLASS} ${FONT_CLASS}`}>
                Setiap hari • 07.00 – 21.00 WIB
              </p>

              <a
                href="https://wa.me/6285881579317"
                target="_blank"
                rel="noopener noreferrer"
                className={`block font-semibold text-green hover:text-black transition ${FONT_CLASS}`}
              >
                +62 858-8157-9317
              </a>

              <a
                href="mailto:saigastableteam@gmail.com"
                className={`block text-green hover:text-black transition ${FONT_CLASS}`}
              >
                saigastableteam@gmail.com
              </a>

              <a
                href="https://maps.app.goo.gl/JXqNDM7fUa3GLESy9"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex
                  items-center
                  gap-1
                  font-medium
                  text-green
                  underline
                  underline-offset-4
                  hover:text-black
                  transition
                  ${FONT_CLASS}
                `}
              >
                Buka Lokasi
                <span aria-hidden="true">→</span>
              </a>

              {/* GOOGLE MAPS */}
              <div className="mt-4 overflow-hidden rounded-xl shadow-md">
  <iframe
    title="Lokasi Saiga Stable"
    src="https://www.google.com/maps?q=Saiga+Stable&output=embed"
    className="w-full h-48 border-0"
    loading="lazy"
  />
</div>


            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 pt-6 border-t border-green text-center">
          <p className={`${SAFE_TEXT_CLASS} text-sm font-medium ${FONT_CLASS}`}>
            © {year} Saiga Stable — Semua Hak Dilindungi
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
