import React from 'react'
import style from '../styles/Events.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import partners from '../data/partners'

export default function Partners() {
  return (
    <div className={style.partners}>
        <h1>Partners</h1>
        <div className={style.partners_container}>
            {partners.map(partner => (
                <Link key={partner.id} href={partner.url} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <div className={style.partner} title={partner.name}>
                            <Image src={partner.logo} alt="partner" width={200} height={200} quality={100} priority unoptimized={true} />
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    </div>
  )
}
