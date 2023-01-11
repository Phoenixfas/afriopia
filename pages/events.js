import MainEvent from "../components/MainEvent";
import style from "../styles/Events.module.css";
import { BsCalendarEvent, BsMap } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import UpcomingEvents from "../components/UpcomingEvents";
import ParticlesBackground from "../components/ParticlesBackground";
import Link from "next/link";

export default function events() {
  return (
    <div className={style.events}>
      <ParticlesBackground color={"#78e0f4"} />
      <div className={style.hero__container}>
        <h1>Tech Trade Show</h1>
        <div className={style.hero__info}>
          <div className={style.hero__icon}>
            <BsCalendarEvent size={30} color={"#78e0f4"} />
            <p>Feb 10-12, 2023</p>
          </div>
          <div className={style.hero__icon}>
            <MdLocationPin size={30} color={"#78e0f4"} /> <p>Addis Ababa</p>
          </div>
          <div className={style.hero__icon}>
            <BsMap size={30} color={"#78e0f4"} />{" "}
            <p>Arat Kilo, Science and Art Museum</p>
          </div>
        </div>
        <Link href={"/"}>
          <div className={style.hero__btn}>Open</div>
        </Link>
      </div>
      <MainEvent />
      <UpcomingEvents />
    </div>
  );
}
