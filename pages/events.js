import MainEvent from "../components/MainEvent";
import style from "../styles/Events.module.css";
import { BsCalendarEvent, BsMap } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import UpcomingEvents from "../components/UpcomingEvents";
import ParticlesBackground from "../components/ParticlesBackground";
import Link from "next/link";
import WhyVisit from "../components/WhyVisit";
import Location from "../components/Location";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Speakers from "../components/Speakers";
import Head from "next/head";

export default function events() {
  return (
    <div className={style.events}>
      <Head>
        <title>Afriopia | Tech Trade Show</title>
        <meta name="description" content="Tech Trade Show" />
        <link rel="icon" href="/images/events/Logo.svg" />
      </Head>
      <ParticlesBackground color={"#78e0f4"} amount={40} />
      <div className={style.title__container}>
        <h1>Tech Trade Show</h1>
      </div>

      <MainEvent />
      <Location />
      <WhyVisit />
      {/* <Features /> */}
      <Speakers />
      <UpcomingEvents />
      <Partners />
    </div>
  );
}
