import {useState, useEffect} from 'react'
import style from '../styles/Business.module.css'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import Link from 'next/link'
import { BsCalendarEvent } from "react-icons/bs";
import ParticlesBackground from './ParticlesBackground'
import events from '../data/events'
import businessCorner from '../data/businessCorner'

export default function BusinessCorner() {
    const feature = events.find(e => e.id === "3")
    const day1 = businessCorner.find(e => e.id === 1)
    const day2 = businessCorner.find(e => e.id === 2)
    const day3 = businessCorner.find(e => e.id === 3)
    // console.log({day1: day1.date, day2: day2.date, day3: day3.date})

    return (
        <div className={style.eventFeatures}>
            {/* <ParticlesBackground color={"#78e0f4"} amount={10} /> */}
            <div className={style.eventFeatures_hero}>
                <div className={style.eventFeatures_title}>
                    <h1>{feature?.name}</h1>
                </div>
                <Image src={feature?.image} alt={feature?.name} width={300} height={300} quality={100} priority unoptimized/>
            </div>
            <div className={style.eventFeatures_content}>
                <div className={style.eventFeatures_content_t}>
                    <p>{feature?.long_desc}</p>
                </div>
                <div className={style.eventFeatures_content_b}>


                    <div className={style.eventFeatures_card_container}>
                        <h1><BsCalendarEvent size={25} color="#fff" /> Day 1</h1>
                        <div className={style.eventFeatures_card_c}>
                            {day1.activities.map( (activity, index) =>
                                <div key={index} className={style.eventFeatures_card}>
                                    <div className={style.eventFeatures_card_title}>{activity.name}</div>
                                    <div className={style.eventFeatures_card_desc}>{activity.description.slice(0, 100)}</div>
                                    <Link href={`/events/business-corner/${activity.order}`}><div className={style.eventFeatures_card_button} >{activity.button ? activity.button : "Register Now"}</div></Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={style.eventFeatures_card_container}>
                        <h1><BsCalendarEvent size={25} color="#fff" /> Day 2</h1>
                        <div className={style.eventFeatures_card_c}>
                            {day2.activities.map( (activity, index) =>
                                <div key={index} className={style.eventFeatures_card}>
                                    <div className={style.eventFeatures_card_title}>{activity.name}</div>
                                    <div className={style.eventFeatures_card_desc}>{activity.description.slice(0, 100)}</div>
                                    <Link href={`/events/business-corner/${activity.order}`}><div className={style.eventFeatures_card_button} >{activity.button ? activity.button : "Register Now"}</div></Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={style.eventFeatures_card_container}>
                        <h1><BsCalendarEvent size={25} color="#fff" /> Day 3</h1>
                        <div className={style.eventFeatures_card_c}>
                            {day3.activities.map( (activity, index) =>
                                <div key={index} className={style.eventFeatures_card}>
                                    <div className={style.eventFeatures_card_title}>{activity.name}</div>
                                    <div className={style.eventFeatures_card_desc}>{activity.description.slice(0, 100)}</div>
                                    <Link href={`/events/business-corner/${activity.order}`}><div className={style.eventFeatures_card_button} >{activity.button ? activity.button : "Register Now"}</div></Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
