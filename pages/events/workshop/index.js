import React from 'react'
import ParticlesBackground from "../../../components/ParticlesBackground";
import Head from "next/head";
import style from "../../../styles/Booking.module.css"
import ExhibitRegisterForm from '../../../components/ExhibitRegisterForm';


export default function participate() {
  return (
    <div className={style.booking}>
        <Head>
            <title>Afriopia | Workshop Registration | TTS</title>
            <meta name="description" content="Workshop Registration Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
        </Head>

        <ParticlesBackground color={"#78e0f4"} amount={40} />
        <ExhibitRegisterForm event={"Workshop"} route={"workshop"} />
    </div>
  )
}
