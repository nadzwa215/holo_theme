import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
  <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
    {/* Kotak 1 - Tingkat Kepuasan */}
    <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:shadow-lg transition-all duration-300">
      <h3 className="text-black text-2xl font-semibold">Tingkat Kepuasan</h3>
      <h4 className="mt-6 text-black opacity-80 text-4xl font-bold">95%</h4>
      <p className="mt-3 text-black opacity-60 text-sm">Siswa & Orang Tua</p>
    </div>

    {/* Kotak 2 - Fasilitas Lengkap */}
    <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:shadow-lg transition-all duration-300">
      <h3 className="text-white text-2xl font-semibold">Fasilitas Lengkap</h3>
      <h4 className="mt-6 text-white opacity-90 text-4xl font-bold">100%</h4>
      <p className="mt-3 text-white opacity-70 text-sm">Akses & Kenyamanan</p>
    </div>

    {/* Kotak 3 - Kuda Terlatih */}
    <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 hover:shadow-lg transition-all duration-300">
      <h3 className="text-white text-2xl font-semibold">Kuda Terlatih</h3>
      <h4 className="mt-6 text-white opacity-90 text-4xl font-bold">50+</h4>
      <p className="mt-3 text-white opacity-70 text-sm">Professional & Aman</p>
    </div>

    {/* Kotak 4 - Pengalaman */}
    <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block hover:shadow-lg transition-all duration-300">
      <h3 className="text-white text-2xl font-semibold">Pengalaman</h3>
      <h4 className="mt-6 text-white opacity-90 text-4xl font-bold">10+</h4>
      <p className="mt-3 text-white opacity-70 text-sm">Tahun Mengajar</p>
    </div>
  </div>
</Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold">PERFORMANCE</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Time to lock new speeds
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
