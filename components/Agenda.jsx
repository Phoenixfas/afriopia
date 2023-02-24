import React from 'react'

export default function Agenda() {
  return (
    <div style={{position: "relative", marginTop: "50px", marginBottom: "50px", padding: "20px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{flex: "1", maxWidth: "700px", padding: "10px", paddingLeft: "20px", paddingRight: "20px", fontSize: "1.5rem", border: "solid", borderColor: "#4eaee5", borderWidth: "2px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap"}}>
            Full Event Agenda
            <button style={{padding: "20px", border: "none", outline: "none", backgroundColor: "#4eaee5", color: "#fff", fontSize: "1.1rem", borderRadius: "10px", cursor: "pointer"}} onClick={() => window.location.href="/files/TTS2023_Draft_Agenda.docx"}>DOWNLOAD</button>
        </div>
    </div>
  )
}
