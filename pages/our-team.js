import style from "../styles/Team.module.css";
import Image from "next/future/image";
import Team from "../components/Team";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";

export default function ourTeam() {
  return (
    <div className={style.ourTeam}>
      <Head>
        <title>Afriopia | Team</title>
        <meta name="description" content="Afriopia Our Team Page" />
      </Head>
      <ParticlesBackground />
      <div className={style.ourTeam__top}>
        <Image
          src={"/images/team/team.jpg"}
          alt="team"
          width={300}
          height={400}
          quality={100}
          priority
          unoptimized={true}
        />
      </div>
      <div className={style.ourTeam__bottom}>
        <h1>
          MEET OUR <em className="a">A</em>WESOME TE<em className="a">A</em>M
        </h1>
        <div className={style.ourTeam__holder} id="team-holder">
          <Team />
          <Team />
        </div>
      </div>
    </div>
  );
}
