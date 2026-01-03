import React from "react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6285881579317"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.08)"
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.3)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)"
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)"
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: "28px",
          height: "28px",
        }}
      />
    </a>
  )
}
