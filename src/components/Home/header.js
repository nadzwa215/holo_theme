import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/header.webp"

const Header = () => {
    // *** Variabel Warna dan Font ***
    const FONT_CLASS = "font-poppins";
    
    return (
        <Fade duration={2200}>
            {/* PERBAIKAN: Menambahkan -mt-12 (Margin Top Negatif) untuk menarik konten ke atas */}
            <div className="max-w-7xl mx-auto lg:px-6 md:px-3 pt-2 -mt-12"> 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 flex gap-6 lg:flex-row flex-col-reverse">

                    {/* TEXT SECTION - Mengambil 50% lebar di layar besar */}
                    <div className="text-center lg:text-left flex flex-col justify-center lg:w-1/2">
                        <div className="mb-3 flex items-center justify-center lg:justify-start space-x-3">
                            
                            {/* H1 Utama */}
                            <h1 className={`text-black text-gradient bg-gradient-to-r from-lightGreen to-green text-6xl font-['Poppins'] font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl ${FONT_CLASS}`}>
                                Saiga Stable
                            </h1>
                            
                            {/* Tag badge */}
                            <span className="bg-green text-white px-3 py-1 rounded-lg text-sm font-bold mt-2">
                                for sunnah
                            </span>
                        </div>

                        {/* H2 Subjudul */}
                        <h2 className={`text-black text-3xl font-['Poppins'] font-semibold mb-3 ${FONT_CLASS}`}>
                            SELAMAT DATANG DI WEBSITE KAMI
                        </h2>

                        {/* Paragraf Deskripsi */}
                        <p className={`mt-2 text-base text-black-70 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-xl lg:mx-0 ${FONT_CLASS}`}>
                            Saiga Stable for Sunnah Sekolah berkuda yang mengintegrasikan seni berkuda dengan nilai-nilai sunnah Nabi.
                            Kami menghadirkan pembelajaran berkuda yang tidak hanya mengajarkan teknik profesional,
                            tetapi juga menanamkan akhlak mulia dan tradisi islami dalam setiap langkahnya.
                        </p>


                        {/* Tombol dengan jarak mt-8 */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-8">
                            <a
                                href="/contact"
                                className={`border-2 border-lightGreen hover:bg-green text-black hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 ${FONT_CLASS}`}
                            >
                                Contact Us
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>

                            <a
                                href="/about"
                                className={`border-2 border-lightGreen text-black hover:bg-green hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${FONT_CLASS}`}
                            >
                                Get To Know Us
                            </a>
                        </div>
                    </div>

                    {/* IMAGE SECTION - Mengambil 50% lebar di layar besar */}
                    <div className="lg:w-1/2 my-2 flex lg:justify-end justify-center">
                        <img
                            src={hero}
                            alt="Saiga Stable Hero"
                            width="800"
                            height="1200"
                            className="
                                rounded-xl
                                w-full
                                max-w-[480px]
                                sm:max-w-[550px]
                                md:max-w-full
                                h-auto
                                object-cover
                                mx-auto
                            "
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </Fade>
    )
}

export default Header