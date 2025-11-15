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
        <div className="transition duration-1000 ease-in-out md:hidden">
          <div className="md-px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-1000 ease-in-out">
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat" // Mengurangi padding vertikal
              href="/"
            >
              Home
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
              href="/about"
            >
              About
            </a>

            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
              href="/gallery"
            >
              Gallery
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
              href="/contact"
            >
              Contact
            </a>
            <div className="items-center py-2"> {/* Mengurangi padding */}
              <a
                href="tel:#"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-6 py-2 text-sm font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent" // Mengurangi ukuran tombol
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar