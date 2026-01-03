import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav 
      className="bg-white fixed w-full top-0 z-30 border-b border-green shadow-sm"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="text-lightGreen font-bold text-2xl font-montserrat"
        >
          Saiga Stable
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-700 hover:text-green font-medium" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-green font-medium" to="/about">About</Link>
          <Link className="text-gray-700 hover:text-green font-medium" to="/gallery">Gallery</Link>
          <Link className="text-gray-700 hover:text-green font-medium" to="/blog">Blog</Link>
          <Link className="text-gray-700 hover:text-green font-medium" to="/contact">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-green"
        >
          <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} 
            />
          </svg>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="flex flex-col px-4 py-4 space-y-3">
            <Link className="text-gray-700 hover:text-green font-medium" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-green font-medium" to="/about">About</Link>
            <Link className="text-gray-700 hover:text-green font-medium" to="/gallery">Gallery</Link>
            <Link className="text-gray-700 hover:text-green font-medium" to="/blog">Blog</Link>
            <Link className="text-gray-700 hover:text-green font-medium" to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
