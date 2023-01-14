import React from 'react'
import { BsCalendarEvent, BsMap } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import style from '../styles/Events.module.css'

export default function Location() {
  return (
    <div className={style.loc__container}>
        <Link href={"https://goo.gl/maps/PMrLyg8EGkSwHMqQ6"} passHref>
            <a target="_blank" rel="noopener noreferrer">
                <div className={style.hero__info}>
                    <div className={style.hero__icon}>
                        <BsCalendarEvent size={30} color={"#78e0f4"} />
                        <p>Mar 10-12, 2023</p>
                    </div>
                    <div className={style.hero__icon}>
                        <MdLocationPin size={30} color={"#78e0f4"} /> <p>Addis Ababa</p>
                    </div>
                    <div className={style.hero__icon}>
                        <BsMap size={30} color={"#78e0f4"} />{" "}
                        <p>Arat Kilo, Science and Art Museum</p>
                    </div>
                </div>
            </a>
        </Link>
        {/* <Link href={"/"}>
            <div className={style.hero__btn}>Open</div>
        </Link> */}
    </div>
  )
}
