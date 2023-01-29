import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import style from "../styles/Trainings.module.css";
import TrainingRow from "../components/TrainingRow";
import Instructors from "../components/Instructors";

export default function trainings() {
  return (
    <div className={style.trainings}>
      <Head>
        <title>Afriopia | Trainings</title>
        <meta name="description" content="Afriopia Training Page" />
      </Head>
      <ParticlesBackground amount={40} />
      <div className={style.trainings__gapG}>
        <h1>
          TR
          <em className="a" style={{ textTransform: "lowercase" }}>
            A
          </em>
          ININGS
        </h1>
      </div>
      <TrainingRow />
      <h1>Our Certified Instructors</h1>
      <div className={style.ourTeam__holder} id="team-holder">
          <Instructors />
          <Instructors />
          <Instructors />
        </div>
    </div>
  );
}
