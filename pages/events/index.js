import MainEvent from "../../components/MainEvent";
import style from "../../styles/Events.module.css";
import UpcomingEvents from "../../components/UpcomingEvents";
import ParticlesBackground from "../../components/ParticlesBackground";
import WhyVisit from "../../components/WhyVisit";
import Location from "../../components/Location";
import Features from "../../components/Features";
import Partners from "../../components/Partners";
import Speakers from "../../components/Speakers";
import Head from "next/head";
import Panelists from "../../components/Panelists";
import Sponsors from "../../components/Sponsors";
import Agenda from "../../components/Agenda";

export default function events() {
  return (
    <div className={style.events}>
      <Head>
        <title>Afriopia | Tech Trade Show</title>
        <meta name="description" content="Tech Trade Show" />
        <link rel="icon" href="/images/events/Logo.svg" />
      </Head>
      <ParticlesBackground color={"#78e0f4"} amount={10} />
     

      <MainEvent />
      <Location />
      <WhyVisit />
      {/* <Features /> */}
      <Speakers />
      <Panelists />
      <UpcomingEvents />
      <Agenda />
      <Partners />
      {/* <Sponsors /> */}
    </div>
  );
}
