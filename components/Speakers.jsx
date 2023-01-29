import React from 'react'
import style from '../styles/Events.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import speakers from '../data/speakers'

export default function Speakers() {
  return (
    <div className={style.speakers}>
        <h1>Speakers</h1>
        <div className={style.speakers__container}>
            {speakers.map(speaker => (
                <div key={speaker.id} className={`${style.speaker} ${speaker.keynote && style.keynote}`}>
                    <div className={style.speaker__content}>
                        <Image src={speaker.image} alt="speaker" width={200} height={200} quality={100} priority unoptimized={true} />
                        <p className={style.speaker__name}>{speaker.name}</p>
                        <p className={style.speaker__title}>{speaker.title}</p>
                        {speaker.keynote && <p style={{textAlign: "center", color: "#FFD700", fontWeight: "bold"}}>Keynote</p> }
                    </div>
                    <div className={style.speaker__social}>
                        <Link href={speaker.socials.facebook} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={25} color={"#050752"} />
                            </a>
                        </Link>
                        <Link href={speaker.socials.linkedin} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={25} color={"#050752"} />
                            </a>
                        </Link>
                        <Link href={speaker.socials.twitter} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={25} color={"#050752"} />
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
