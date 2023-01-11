import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
// import ServiceRow from "../components/ServiceRow";
import style from "../styles/Trainings.module.css";
import TrainingRow from "../components/TrainingRow";

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
      {/* <ServiceRow /> */}
    </div>
  );
}

// visp
// saas
// stream
// web
// mobile
// network installa
// trainin

// yordanos-finance
