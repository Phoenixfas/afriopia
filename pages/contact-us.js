import Head from "next/head";
import style from "../styles/Contact.module.css";
import { SiGmail } from "react-icons/si";
import { MdLocationPin, MdCall } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import Link from "next/link";
import Message from "../components/Message";
import ParticlesBackground from "../components/ParticlesBackground";
// import Map from "../components/Map";

export default function contactUs() {
  return (
    <div className={style.contact}>
      <Head>
        <title>Afriopia | Contact Us</title>
        <meta name="description" content="Afriopia Contact Us Page" />
      </Head>
      {/* <div className={style.contact__background}></div> */}
      <ParticlesBackground />
      <div className={style.contact__background}></div>
      <div className={style.contact__top}>
        <h1>
          CONT<em className="a">A</em>CT US
        </h1>
        <div className={style.contact__cardHolder}>
          <Link href={"mailto:hello@afriopia.com"}>
            <div className={style.contact__card}>
              <div className={style.contact__icon}>
                <SiGmail className={style.team__icon} size={50} />
              </div>
              <h3>Mail Here</h3>
              <p>hello@afriopia.com</p>
            </div>
          </Link>
          <Link
            href={
              "https://www.google.com.et/maps/place/Kaldi's+Coffee/@9.0003084,38.7877521,20z/data=!4m5!3m4!1s0x164b85ba01780cc5:0x6b9f759d06cec764!8m2!3d9.0003136!4d38.7879323?hl=en"
            }
          >
            <div className={style.contact__card}>
              <div className={style.contact__icon}>
                <MdLocationPin className={style.team__icon} size={50} />
              </div>
              <h3>Visit Here</h3>
              <p>
                Edna Mall to 22 Road, on the building where kaldis is located,
                4th Floor Nº 404
              </p>
            </div>
          </Link>

          <Link href={"tel:+251 911 023 143"}>
            <div className={style.contact__card}>
              <div className={style.contact__icon}>
                <MdCall className={style.team__icon} size={50} />
              </div>
              <h3>Call Here</h3>
              <p>+251-911-023-143</p>
              <p>+251-939-506-897</p>
            </div>
          </Link>
        </div>
      </div>

      {/* <Map /> */}
      <div className={style.mapHolder}>
        <div className={style.mapouter}>
          <div className={style.gmap_canvas}>
            <iframe
              className="gmap_iframe"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=650&amp;height=242&amp;hl=en&amp;q=9.000358217387392, 38.7879154142762&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={style.messageHolder}>
        <Message />
        <Link href="https://wa.me/+251911023143">
          <div className={style.message__whatsapp}>
            <ImWhatsapp className={style.message__icon} size={40} />
            <p>WhatsApp</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
