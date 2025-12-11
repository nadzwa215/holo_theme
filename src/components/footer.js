import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo-small.webp"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer 
      className="bg-gray-50 border-t border-green mt-16 shadow-sm"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LOGO + MOTO */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img 
                src={logo} 
                alt="Saiga Stable Logo" 
                className="h-16 w-16"
              />
              <div>
                <h3 className="text-green font-bold text-2xl">Saiga Stable</h3>
                <p className="text-xs text-green opacity-80">
                  dengan semangat.
                </p>
              </div>
            </div>

            <p className="text-green text-sm mt-4 italic opacity-80 max-w-xs mx-auto md:mx-0">
              "Di setiap langkah kuda dan tarikan busur, ada kesabaran dan keteguhan hati."
            </p>
          </div>

          {/* LINK NAVIGASI */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-green text-lg mb-3">Navigasi</h4>
            <ul className="space-y-2">
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
                    className="text-green opacity-80 hover:opacity-100 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KONTAK */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-green text-lg mb-3">Kontak</h4>

            <div className="space-y-2 text-green text-sm opacity-80">

              <p>Setiap Hari 07.00 - 21.00 WIB</p>

              <a 
                href="https://wa.me/6285881579317"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-100 transition"
              >
                +62 858-8157-9317
              </a>

              <a 
                href="mailto:saigastableteam@gmail.com"
                className="block hover:opacity-100 transition"
              >
                saigastableteam@gmail.com
              </a>

              <a
                href="https://maps.app.goo.gl/JXqNDM7fUa3GLESy9"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline hover:text-green"
              >
                Buka Maps →
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 pt-6 border-t border-green text-center">
          <p className="text-green text-sm opacity-80 font-semibold">
            © {year} Saiga Stable — Berkuda • Memanah • Sunnah
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
