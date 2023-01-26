import React from 'react'
import ParticlesBackground from "../components/ParticlesBackground";
import Head from "next/head";
import style from "../styles/Booking.module.css"

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
                Registration Successfull, we have sent you an email with the details of your registration, and everything you need to know. Make sure to check your spam folder if you don&apos;t see it in your inbox.
            </p>
        </div>
    </div>
  )
}
