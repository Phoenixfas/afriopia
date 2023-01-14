import style from "../styles/Events.module.css"
import Image from "next/future/image"
import { BsCalendarEvent } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import events from "../data/events";
import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <div className={style.upcoming}>
        <h1>Featuring in the <span>Event</span></h1>

        <div className={style.events__holder}>

            {events.map(event => (
                <div key={event.id} className={style.event__card}>
                    <Image src={event.image} alt="team" width={300} height={400} quality={100} priority unoptimized={true} />
                    <Link href={`/events/${event.id}`}>
                        <div className={style.event__container}>
                            <p className={style.event__title}>{event.name}</p>
                            <div className={style.event__catDat}>
                                <p className={style.event__category}>{event.category}</p>
                                <div className={style.event__date}>
                                    <BsCalendarEvent size={20} color={"#050752"} /> <p>{event.date}</p>
                                </div>
                            </div>
                            <p className={style.event__desc}>{event.desc}</p>
                            <div className={style.event__info}>
                                <div className={style.event__icon}>
                                    <MdLocationPin size={30} color={"#4eaee5"} /> <p>{event.location}</p>
                                </div>
                                {/* <div className={style.event__icon}>
                                    <GiMoneyStack size={30} color={"#4eaee5"} /> <p>{event.fee}</p>
                                </div> */}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
        <Link href="/book-a-stand"> 
            <a className={style.hero__btn}>Book a Stand</a>
        </Link>
    </div>
  )
}
