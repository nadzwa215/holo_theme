import React from "react"
import AboutTeamCard from "./aboutTeamCard"

// Import local images
import Team1 from "../../images/pemanah.jpg"  // Ganti dengan path yang benar
import Team2 from "../../images/berkuda.jpg"  
import Team3 from "../../images/anakBerkuda.jpg"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc={Team1}  // Menggunakan imported image
        position="Kegiatan memanah sore"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Team2}
        position="latihan rutin"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Team3}
        position="kegiatan anak berkuda"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid