import React from 'react'
import style from '../styles/Events.module.css'
import Image from 'next/future/image'

export default function Features() {
  return (
    <div className={style.features}>
        <div className={style.features_h}>
            <h1>CONNECT, NETWORK, AND ADVERTISE IN THE BIGGEST <span>TECH TRADE SHOW</span></h1>
        </div>
        <div className={style.features__container}>

            <div className={style.feature__card}>
                <div className={style.feature_cardContent}>
                    <h2>Startups</h2>
                    <p>Strongly founded, innately innovative startups with great potential in being the next unicorn companies, equipped with the most powerful and robust technologies.</p>
                </div>
                <Image src="/images/events/features/startups.jpg" alt="feature1" width={300} height={300} quality={100} priority  />
            </div>
            <div className={style.feature__card}>
                <div className={style.feature_cardContent}>
                    <h2>Global Tech Execs</h2>
                    <p>Internationally-acclaimed, multi-million executives who withhold, raised and compiled their companies in a way that is evident in the tech world nowadays.</p>
                </div>
                <Image src="/images/events/features/GTE.jpg" alt="feature1" width={300} height={300} quality={100} priority />
            </div>
            <div className={style.feature__card}>
                <div className={style.feature_cardContent}>
                    <h2>Investors and VCs</h2>
                    <p>Never miss the chance to connect with globally known investors as well as vigorous venture capital firms who shaped the world of funding for tech companies.</p>
                </div>
                <Image src="/images/events/features/IAVC.jpg" alt="feature1" width={300} height={300} quality={100} priority />
            </div>
            <div className={style.feature__card}>
                <div className={style.feature_cardContent}>
                    <h2>Government</h2>
                    <p>Key decision-makers and highly-profiled government officials are invited to cogitate the next era in the country&apos;s most important asset: technology.</p>
                </div>
                <Image src="/images/events/features/government.jpg" alt="feature1" width={300} height={300} quality={100} priority />
            </div>
            <div className={style.feature__card}>
                <div className={style.feature_cardContent}>
                    <h2>Youths</h2>
                    <p>Enthusiast, driven, and interested juvenile in tech who bring value in a local and international context in terms of marketability, reliability, and standardization.</p>
                </div>
                <Image src="/images/events/features/youths.jpg" alt="feature1" width={300} height={300} quality={100} priority />
            </div>
            <div className={style.feature__card}>
                <div className={style.feature_cardContent}>
                    <h2>Software Developers</h2>
                    <p>Meet and recruit extensively trusted, result-oriented, and deeply vetted software developers with long-term experiences in their field whom you can confide in</p>
                </div>
                <Image src="/images/events/features/developers.jpg" alt="feature1" width={300} height={300} quality={100} priority />
            </div>
            
        </div>
    </div>
  )
}
