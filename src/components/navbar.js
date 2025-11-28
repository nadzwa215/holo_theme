import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="bg-white fixed w-full top-0 z-20 shadow-md border-b-2 border-green ">
      {/* Mengurangi padding dan tinggi container */}
      <div className="max-w-7xl mx-auto px-3 py-3 rounded-md"> {/* Mengubah py-5 menjadi py-3 */}
        <div className="flex items-center justify-between h-12"> {/* Mengurangi h-16 menjadi h-12 */}
          <div className="w-full justify-between flex items-center">
            <a
              className="text-black flex-shrink-0 font-montserrat font-semibold"
              href="/"
            >
              <span className="text-gradient bg-gradient-to-r from-lightGreen to-lightGreen font-bold font-montserrat text-2xl"> {/* Mengurangi text-9xl menjadi text-2xl */}
                Saiga Stable
              </span>
            </a>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-lightGreen opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-bold font-montserrat"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-lightGreen opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-bold font-montserrat"
                  to="/about"
                >
                  About
                </Link>

                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-lightGreen opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-bold font-montserrat"
                  to="/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-lightGreen opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-bold font-montserrat"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-lightGreen opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-bold"
                  to="/contact"
                >
                  Contact
                </Link>
                <div className="items-center">
                  {/* <a
                    href="tel:#"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out bg-transparent py-2 px-3 text-sm font-bold text-center text-lightGreen rounded-lg border border-purple hover:text-white border-white hover:bg-purple" // Mengurangi ukuran tombol
                  >
                    Call Us Now
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              id="al"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="black"
                className="h-6 w-6" // Mengurangi ukuran ikon menu
                viewBox="0 0 1792 1792"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="transition duration-300 ease-in-out md:hidden">
  <div className="px-4 py-6 space-y-4 bg-white border-t border-gray-200 shadow-lg">
    {/* Navigation Links */}
    <div className="space-y-3">
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/gallery", label: "Gallery" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" }
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group flex items-center text-gray-700 hover:text-green px-4 py-3 rounded-xl text-base font-semibold font-['Poppins'] transition-all duration-300 hover:bg-green-50 border border-transparent hover:border-green-100"
        >
          <div className="w-2 h-2 bg-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {item.label}
          <svg 
            className="w-4 h-4 ml-auto transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      ))}
    </div>

    {/* Additional Info */}
    <div className="text-center px-4">
      <p className="text-xs text-gray-500 mt-4">
        Setiap Hari 07.00 - 21.00 WIB
      </p>
    </div>
  </div>
</div>
      )}
    </nav>
  )
}

export default Navbar