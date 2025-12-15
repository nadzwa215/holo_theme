import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo-small.webp"

const Footer = () => {
  const year = new Date().getFullYear()

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

          {/* LOGO & DESKRIPSI */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img
                src={logo}
                alt="Logo Saiga Stable"
                className="h-14 w-14"
                loading="lazy"
              />
              <div>
                <h3 className="text-green font-bold text-2xl">
                  Saiga Stable
                </h3>
                <p className="text-green/80 text-xs">
                  Berkuda • Memanah • Sunnah
                </p>
              </div>
            </div>

            <p className="mt-5 text-green/80 text-sm italic max-w-sm mx-auto md:mx-0">
              “Di setiap langkah kuda dan tarikan busur, ada kesabaran,
              keteguhan hati, dan niat yang lurus.”
            </p>
          </div>

          {/* NAVIGASI */}
          <nav
            aria-label="Navigasi Footer"
            className="text-center md:text-left"
          >
            <h4 className="font-semibold text-green text-lg mb-4">
              Navigasi
            </h4>

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
                    className="
                      text-green/80
                      text-sm
                      hover:text-green
                      hover:translate-x-1
                      inline-block
                      transition
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* KONTAK */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-green text-lg mb-4">
              Kontak
            </h4>

            <div className="space-y-3 text-sm">

              <p className="text-green/70">
                Setiap hari • 07.00 – 21.00 WIB
              </p>

              <a
                href="https://wa.me/6285881579317"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  font-semibold
                  text-green
                  hover:text-black
                  transition
                "
              >
                +62 858-8157-9317
              </a>

              <a
                href="mailto:saigastableteam@gmail.com"
                className="
                  block
                  text-green
                  hover:text-black
                  transition
                "
              >
                saigastableteam@gmail.com
              </a>

              <a
                href="https://maps.app.goo.gl/JXqNDM7fUa3GLESy9"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1
                  font-medium
                  text-green
                  underline
                  underline-offset-4
                  hover:text-black
                  transition
                "
              >
                Buka Lokasi
                <span aria-hidden="true">→</span>
              </a>

            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 pt-6 border-t border-green text-center">
          <p className="text-green/80 text-sm font-medium">
            © {year} Saiga Stable — Semua Hak Dilindungi
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
