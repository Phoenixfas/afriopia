import style from "../styles/ArticlesList.module.css";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import ArticleList from "../components/ArticleList";

export default function articles() {
  return (
    <div className={style.articlesList}>
      <Head>
        <title>Afriopia | Articles</title>
        <meta name="description" content="Afriopia Service Page" />
      </Head>
      <ParticlesBackground amount={40} />
      <div className={style.articles__gapG}>
        <h1>
          <em className="a">A</em>RTICLES
          {/* <em className="a">A</em>FRIOPI<em className="a">A</em>{" "}
          PROVIDES */}
        </h1>
      </div>
      {/* <ServiceRow /> */}
      <ArticleList />
    </div>
  );
}
