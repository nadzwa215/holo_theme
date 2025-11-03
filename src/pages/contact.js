import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"
import Seo from "../components/seo"

import image from "../images/contact.png"

const Contact = () => {
  // URL Google Maps untuk alamat Saiga Stable
  const mapsUrl = "https://maps.app.goo.gl/JXqNDM7fUa3GLESy9"

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Ambil data dari form
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const program = formData.get('program')
    const message = formData.get('message')
    
    // Format pesan untuk WhatsApp
    const whatsappText = 
      `Assalamu'alaikum Saiga Stable! 🐎\n\n` +
      `*DATA PENDAFTARAN*\n` +
      `Nama: ${name}\n` +
      `Email: ${email || '-'}\n` +
      `WhatsApp: ${phone}\n` +
      `Program yang diminati: ${program || 'Berkuda/Memanah'}\n\n` +
      `*PESAN:*\n${message}\n\n` +
      `Saya ingin informasi lebih lanjut tentang program di Saiga Stable.`
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappText)
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/6285881579317?text=${encodedMessage}`, '_blank')
    
    // Reset form setelah kirim
    e.target.reset()
  }

  return (
    <Layout>
      <Seo
        title="Kontak - Saiga Stable"
        description="Hubungi Saiga Stable untuk informasi program berkuda dan memanah ala sunnah"
      ></Seo>

      <div className="max-w-7xl mx-auto mt-20 flex text-white xxs:flex-col sm:flex-row">
        <Fade duration={1200}>
          <div className="bg-green p-8 rounded-xl w-2/3 m-5 ">  {/* dari p-10 jadi p-8 */}
            <h1 className="text-3xl text-white font-['Poppins']">HUBUNGI KAMI</h1>
            <h2 className="text-white text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl font-['Poppins']">
              Saiga Stable
            </h2>
            <p className="text-lg mt-2 opacity-90 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Mari mulai perjalanan sunnah berkuda dan memanah Anda bersama kami.
            </p>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-ful mt-10">
              <div className="flex flex-wrap">
                {/* WhatsApp */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-lightGreen p-4 text-white">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold text-white">
                        WhatsApp
                      </p>
                      <p className="text-white opacity-90 mb-2">
                        <a href="https://wa.me/6285881579317" className="hover:underline">
                          +62 858-8157-9317
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-lightGreen p-4 text-white">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold text-white">
                        Email
                      </p>
                      <p className="text-white opacity-90 mb-2">
                        <a href="mailto:saigastableteam@gmail.com" className="hover:underline">
                          saigastableteam@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Alamat - Bisa Diklik */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-lightGreen p-4 text-white">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold text-white">
                        Alamat
                      </p>
                      <a 
                        href={mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white opacity-90 mb-2 text-sm hover:underline block"
                      >
                        Jl. Sumatra, Jombang, Kec. Ciputat, <br/>
                        Kota Tangerang Selatan, Banten 15414
                      </a>
                    </div>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-lightGreen p-4 text-white">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold text-white">
                        Jam Operasional
                      </p>
                      <p className="text-white opacity-90 mb-2">
                        Setiap Hari <br/>
                        07.00 - 21.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="font-bold text-white mb-4">Follow Kami:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://tiktok.com/@saigastable" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <span className="text-green font-bold text-sm">TikTok</span>
                </a>
                <a 
                  href="https://instagram.com/saiga.stable" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <span className="text-green font-bold text-sm">Instagram</span>
                </a>
              </div>
            </div>

            {/* Contact Form dengan WhatsApp */}
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Nama Lengkap *"
                      type="text"
                      name="name"
                      required
                    />
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                    />
                  </label>
                </div>
              </div>

              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Nomor WhatsApp *"
                      type="tel"
                      name="phone"
                      required
                    />
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    <Input
                      placeholder="Minat Program"
                      type="text"
                      name="program"
                    />
                  </label>
                </div>
              </div>
              
              <label>
                <textarea
                  className="mt-5 w-full bg-white bg-opacity-20 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-lightGreen focus:border-transparent text-white placeholder-white placeholder-opacity-70"
                  rows="5"
                  placeholder="Pesan untuk kami... *"
                  name="message"
                  required
                />
              </label>
              
              <div>
                <Button
                  type="submit"
                  title="Kirim via WhatsApp"
                  colorClass="bg-lightGreen hover:bg-green font-montserrat"
                  marginClass="mt-5"
                />
              </div>
              
           </form>
          </div>
        </Fade>
        
        <Fade bottom cascade>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt="Saiga Stable Contact"
            />
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Contact