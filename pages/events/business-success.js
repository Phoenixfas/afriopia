import React from 'react'
import ParticlesBackground from "../../components/ParticlesBackground";
import Head from "next/head";
import style from "../../styles/Booking.module.css"

export default function bookingSuccess() {
  return (
    <div className={style.booking}>
        <Head>
            <title>Afriopia | Register | TTS</title>
            <meta name="description" content="Registration Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
        </Head>

        <ParticlesBackground color={"#78e0f4"} amount={40} />
        <div className={style.booking_success}>
            <p>
                Registration Successfull, We will be in touch with you soon.
            </p>
        </div>
    </div>
  )
}
