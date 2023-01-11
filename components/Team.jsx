import Image from "next/future/image"
import style from "../styles/Team.module.css"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import Link from "next/link"
import team from "../data/team"
import { useEffect, useState } from "react"

export default function Team() {

    useEffect(() => {
        // Set the hero-cards width for the scrolling animation 
          const teamCards = document.getElementById("team-cards");
          const cardsWidth = team.length * 280;
          teamCards.style.setProperty("--team-width", -cardsWidth + "px");
        }, []);


  return (
    <div className={style.team__container} id="team-cards">
        
        {team.map(member => (
            <div className={style.team__card} key={member.id}>
                <div className={style.team__cardTop}>
                    <Image src={member.image}
                        alt="team"
                        width={300}
                        height={400}
                        quality={100}
                        priority
                        unoptimized={true} 
                    />
                </div>
                <div className={style.team__cardBottom}>
                    <div className={style.team__cardName}>
                        <p><span>{member.name}</span></p>
                        <p>{member.position}</p>
                    </div>
                    <div className={style.team__socials}>
                        <Link href={member.email} ><div><SiGmail className={style.team__icon} size={20} /></div></Link>
                        <Link href={member.twitter} ><div><FaTwitter className={style.team__icon} size={20} /></div></Link>
                        <Link href={member.linkedin} ><div><FaLinkedinIn className={style.team__icon} size={20} /></div></Link>
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  )
}
