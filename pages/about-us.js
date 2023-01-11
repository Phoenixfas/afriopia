import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import style from "../styles/About.module.css";

export default function aboutUs() {
  return (
    <div className={style.about}>
      <Head>
        <title>Afriopia | About Us</title>
        <meta name="description" content="Afriopia About Us Page" />
      </Head>
      <ParticlesBackground />
      {/* <div className={style.about__background}></div> */}
      <div className={style.about__top}>
        <div className={style.about__topHolder}>
          <h1>
            <span className="a">A</span>BOUT US
          </h1>
          <p>
            We are a virtual internet service provider with a mission to connect
            the people of Ethiopia. We aim to build a more accessible and
            connected country by providing reliable internet service. We aspire
            to transform the way Ethiopians, and Africans do business by
            offering world-class infrastructure, and connectivity. Considering
            the need for the tech industry in Ethiopia in the last decade
            Afriopia is trying to make an impact, by building an infrastructure
            that connects the whole ethiopians to the internet.
          </p>
        </div>
      </div>

      <div className={style.about__middle}>
        <h1>WHY US?</h1>
        <p>
          We realized that our presence in working areas and the continued daily
          presense of our professional mobilization teams in these regions to
          perform regular and urgent repair of the equipment and networks is the
          key to success.
        </p>
        <ul>
          <li>
            <p>
              <span>Results</span> We deliver results by allying with leading
              telecom vendors and ISP, employing trained, licensed, and
              multi-skilled experts
            </p>
          </li>
          <li>
            <p>
              <span>Experience</span> Our seasoned team of technicians and
              engineers will help you drastically improve your IT capabilities.
            </p>
          </li>
          <li>
            <p>
              <span>
                S<em className="a">a</em>ve Time
              </span>{" "}
              We manage your IT scope through an exhaustive tracking system.
            </p>
          </li>
          <li>
            <p>
              <span>
                S<em className="a">a</em>ve Money
              </span>{" "}
              We provide a reliable internet connection with a reasonable price.
            </p>
          </li>
          <li>
            <p>
              <span>Support</span> We&apos;re an extension of your team and we
              support you 24/7 through a dedicated expert.
            </p>
          </li>
          <li>
            <p>
              <span>
                St<em className="a">a</em>bility
              </span>{" "}
              We&apos;re a privately owned, profitable company demonstrating
              consistent yearly growth.
            </p>
          </li>
        </ul>
      </div>

      <div className={style.about__bottom}>
        <div className={style.about__card}>
          <h2>Mission</h2>
          <p>
            Our mission is to provide highly reliable, secure, and fast internet
            services and other related services that will assist businesses,
            individuals, and non-profit organizations in connecting to the
            internet, promoting their brands, and reaching out to a wide range
            of potential customers all over the globe via the internet.
          </p>
        </div>
        <div className={style.about__card}>
          <h2>Vision</h2>
          <p>
            Our vision is to establish a world-class internet service
            infrastructure (VISPs), and build a community where technology is
            used to make people&apos;s lives better by creating the opportunity
            for everyone to succeed.
          </p>
        </div>
      </div>
    </div>
  );
}
