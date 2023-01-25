import React from 'react'
import ParticlesBackground from "../../../components/ParticlesBackground";
import Head from "next/head";
import style from "../../../styles/Booking.module.css"
import EventRegisterForm from '../../../components/EventRegisterForm';


export default function hackathon() {
  return (
    <div className={style.booking}>
        <Head>
            <title>Afriopia | Hackathon Registration | TTS</title>
            <meta name="description" content="Hackathon Registration Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
        </Head>

        <ParticlesBackground color={"#78e0f4"} amount={40} />
        <EventRegisterForm event={"Lan Party"} route={"lanparty"} />
    </div>
  )
}
