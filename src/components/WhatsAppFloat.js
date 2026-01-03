import React from "react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6285881579317?text=Halo%20Admin,%20saya%20ingin%20bertanya"
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
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        cursor: "pointer",
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
