/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import WhatsAppFloat from "./WhatsAppFloat"


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="pt-20"> {/* TAMBAHKAN INI - semua halaman otomatis dapat jarak */}
        {children}
        <WhatsAppFloat />
      </main>
      <Footer></Footer>
    </div>
  )
}


export default Layout