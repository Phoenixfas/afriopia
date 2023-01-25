import React from 'react'
import style from '../styles/Events.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import panelists from '../data/panelists'

export default function Panelists() {
  return (
    <div style={{marginTop: "-100px"}} className={style.speakers}>
        <h1>Panelists</h1>
        <div className={style.speakers__container}>
            {panelists.map(panelist => (
                <div key={panelist.id} className={style.speaker}>
                    <div className={style.speaker__content}>
                        <Image src={panelist.image} alt="panelist" width={200} height={200} quality={100} priority unoptimized={true} />
                        <p className={style.speaker__name}>{panelist.name}</p>
                        <p className={style.speaker__title}>{panelist.title}</p>
                    </div>
                    <div className={style.speaker__social}>
                        <Link href={panelist.socials.facebook} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={25} color={"#050752"} />
                            </a>
                        </Link>
                        <Link href={panelist.socials.linkedin} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={25} color={"#050752"} />
                            </a>
                        </Link>
                        <Link href={panelist.socials.twitter} passHref>
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
