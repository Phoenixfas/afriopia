import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import ServiceRow from "../components/ServiceRow";
import style from "../styles/Services.module.css";

export default function services() {
  return (
    <div className={style.services}>
      <Head>
        <title>Afriopia | Services</title>
        <meta name="description" content="Afriopia Service Page" />
      </Head>
      <ParticlesBackground amount={40} />
      <div className={style.services__gapG}>
        <h1>
          SERVICES
          {/* <em className="a">A</em>FRIOPI<em className="a">A</em>{" "}
          PROVIDES */}
        </h1>
      </div>
      <ServiceRow />
    </div>
  );
}
