import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo-small.webp"

const Footer = () => {
  const mapsUrl = "https://maps.app.goo.gl/JXqNDM7fUa3GLESy9"

  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-16 h-auto">
        <div className="footer bg-gray-50 border-2 border-green p-6 sm:p-8 rounded-2xl shadow-lg">

          {/* Grid footer dengan responsive lebih baik */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

            {/* Logo dan deskripsi */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center space-x-4">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  src={logo}
                  alt="Saiga Stable Logo"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green font-['Poppins']">
                    Saiga Stable
                  </h3>
                  <p className="text-green text-xs sm:text-sm mt-1 opacity-80">dengan semangat.</p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-green text-xs sm:text-sm mt-4 italic leading-relaxed opacity-80 max-w-xs mx-auto lg:mx-0">
                "Di setiap langkah kuda dan tarikan busur, ada kesabaran dan keteguhan hati."
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/saiga.stable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full hover:shadow-md transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="mailto:saigastableteam@gmail.com"
                  className="bg-green p-2 rounded-full hover:shadow-md transition-all duration-300"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/6285881579317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green p-2 rounded-full hover:shadow-md transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="text-center md:text-left">
              <h4 className="text-green font-bold text-lg mb-4 font-['Poppins'] border-b border-green pb-2 opacity-80">
                Baca Artikel
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="text-green hover:text-green font-semibold text-sm transition-colors duration-300 opacity-80 hover:opacity-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-green font-bold text-lg mb-4 font-['Poppins'] border-b border-green pb-2 opacity-80">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity duration-300 text-green"
                >
                  Quick Links →
                </a>
              </h4>
              <div className="space-y-3 text-sm text-green max-w-xs mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <span className="w-2 h-2 bg-green rounded-full opacity-80 flex-shrink-0"></span>
                  <span className="opacity-80 text-left">Setiap Hari 07.00 - 21.00 WIB</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <span className="w-2 h-2 bg-green rounded-full opacity-80 flex-shrink-0"></span>
                  <a
                    href="https://wa.me/6285881579317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity duration-300 opacity-80 text-left text-green"
                  >
                    +62 858-8157-9317
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <span className="w-2 h-2 bg-green rounded-full opacity-80 flex-shrink-0"></span>
                  <a
                    href="mailto:saigastableteam@gmail.com"
                    className="hover:opacity-100 transition-opacity duration-300 opacity-80 text-left text-green"
                  >
                    saigastableteam@gmail.com
                  </a>
                </div>
                <p className="text-xs italic mt-4 leading-relaxed opacity-80 text-center md:text-right">
                  "Tempat dimana sunnah berkuda dan memanah hidup kembali"
                </p>
              </div>
            </div>

          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-6 border-t border-green text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-green text-sm font-semibold opacity-80">
                &copy; {new Date().getFullYear()} Saiga Stable. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-green text-xs font-montserrat font-semibold opacity-80">
                  BERKUDA
                </span>
                <span className="text-green text-xs font-montserrat font-semibold opacity-80">
                  MEMANAH
                </span>
                <span className="text-green text-xs font-montserrat font-semibold opacity-80">
                  SUNNAH
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
