import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"
import Seo from "../components/seo"

import image from "../images/contact.png"

const Contact = () => {
  const mapsUrl = "https://maps.app.goo.gl/JXqNDM7fUa3GLESy9"

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const program = formData.get("program")
    const message = formData.get("message")

    const whatsappText =
      `Assalamu'alaikum Saiga Stable! 🐎\n\n` +
      `*DATA PENDAFTARAN*\n` +
      `Nama: ${name}\n` +
      `Email: ${email || "-"}\n` +
      `WhatsApp: ${phone}\n` +
      `Program yang diminati: ${program || "Berkuda/Memanah"}\n\n` +
      `*PESAN:*\n${message}\n\n` +
      `Saya ingin informasi lebih lanjut tentang program di Saiga Stable.`

    const encodedMessage = encodeURIComponent(whatsappText)

    window.open(`https://wa.me/6285881579317?text=${encodedMessage}`, "_blank")

    e.target.reset()
  }

  const contactInfo = [
    {
      title: "WhatsApp",
      content: "+62 858-8157-9317",
      link: "https://wa.me/6285881579317",
      type: "phone",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      ),
    },
    {
      title: "Email",
      content: "saigastableteam@gmail.com",
      link: "mailto:saigastableteam@gmail.com",
      type: "email",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Alamat",
      content: "Jl. Sumatra, Jombang, Ciputat, Tangerang Selatan, Banten",
      link: mapsUrl,
      type: "address",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Jam Operasional",
      content: "Setiap Hari 07.00 - 21.00 WIB",
      link: null,
      type: "hours",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
  ]

  const socialMedia = [
    { name: "TikTok", url: "https://tiktok.com/@saigastable" },
    { name: "Instagram", url: "https://instagram.com/saiga.stable" }
  ]

  return (
    <Layout>
      <Seo 
        title="Kontak - Saiga Stable"
        description="Hubungi Saiga Stable untuk informasi program berkuda dan memanah ala sunnah"
      />

      <div className="max-w-7xl mx-auto mt-8 lg:mt-20 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* MAIN CONTENT */}
          <Fade duration={1200}>
            <div className="w-full lg:w-2/3 bg-gradient-to-br from-green to-lightGreen p-6 lg:p-10 rounded-2xl lg:rounded-3xl shadow-2xl">

              {/* HEADER */}
              <div className="text-center lg:text-left mb-8 lg:mb-12">
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Hubungi Kami
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Saiga Stable</h1>

                <p className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">
                  Mari mulai perjalanan sunnah berkuda dan memanah Anda bersama kami.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* CONTACT INFO */}
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm p-3 rounded-2xl group-hover:bg-white/30 transition">
                        <div className="text-white">{item.icon}</div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.type === "address" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="text-white/90 hover:text-white transition block break-words"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white/90">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* SOCIAL */}
                  <div className="pt-4">
                    <p className="text-white font-semibold mb-3">Follow Kami:</p>

                    <div className="flex space-x-3">
                      {socialMedia.map((s, i) => (
                        <a
                          key={i}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-2xl shadow-lg text-center flex-1 hover:bg-gray-100 transition transform hover:scale-105"
                        >
                          <span className="text-green font-semibold">{s.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CONTACT FORM */}
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* INPUT GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Nama Lengkap *" required 
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 w-full" />

                      <Input name="email" placeholder="Email" type="email"
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 w-full" />

                      <Input name="phone" placeholder="Nomor WhatsApp *" required
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 w-full" />

                      <Input name="program" placeholder="Minat Program"
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 w-full" />
                    </div>

                    {/* TEXTAREA */}
                    <textarea
                      rows="4"
                      name="message"
                      required
                      placeholder="Pesan untuk kami... *"
                      className="w-full bg-white/20 border border-white/30 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 resize-none"
                    />

                    {/* BUTTON */}
                    <Button
                      type="submit"
                      title="Kirim via WhatsApp"
                      colorClass="bg-white text-green hover:bg-gray-100 font-semibold border-2 border-white"
                      marginClass="mt-2"
                      className="w-full transform hover:-translate-y-1 transition"
                    />
                  </form>
                </div>
              </div>

            </div>
          </Fade>

          {/* SIDE IMAGE - DESKTOP ONLY */}
          <Fade bottom cascade>
            <div className="hidden lg:block lg:w-1/3">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={image} className="w-full h-full object-cover" alt="Saiga Stable Contact" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

                <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-2xl">
                  <p className="text-green font-semibold text-sm">🐎 Saiga Stable</p>
                </div>
              </div>
            </div>
          </Fade>

        </div>
      </div>
    </Layout>
  )
}

export default Contact
