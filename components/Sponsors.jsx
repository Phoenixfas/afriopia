import React from 'react'
import style from '../styles/Events.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import sponsors from '../data/sponsors'

export default function Sponsors() {
  return (
    <div className={style.partners}>
        <h1>Sponsors</h1>
        <div className={style.partners_container}>
            {sponsors.map(sponsor => (
                <Link key={sponsor.id} href={sponsor.url} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <div className={style.partner} title={sponsor.name}>
                            <Image src={sponsor.logo} alt="partner" width={200} height={200} quality={100} priority unoptimized={true} />
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    </div>
  )
}
