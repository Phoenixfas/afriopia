import React from 'react'
import ParticlesBackground from "../components/ParticlesBackground";
import Head from "next/head";
import style from "../styles/Booking.module.css"

export default function bookingFull() {
  return (
    <div className={style.booking}>
        <Head>
            <title>Afriopia | Book a Stand | TTS</title>
            <meta name="description" content="Book a Stand Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
        </Head>

        <ParticlesBackground color={"#78e0f4"} amount={40} />
        <div className={style.booking__full}>
            <h1> Sorry, We are fully booked for this event. </h1>
        </div>
    </div>
  )
}
