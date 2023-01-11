import Head from "next/head";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Services from "../components/Services";
import style from "../styles/Home.module.css";
import ParticlesBackground from "../components/ParticlesBackground";
import Articles from "../components/Articles";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>Afriopia</title>
        <meta name="description" content="Afriopia Home Page" />
      </Head>
      <ParticlesBackground />
      <Hero />
      <Services />
      <Articles />
      <Clients />
      <Subscribe />
    </div>
  );
}
