import { useEffect, useState } from "react"
import style from "../styles/Home.module.css"
import Image from "next/image"
import { FaCloudDownloadAlt, FaWifi } from "react-icons/fa"
import { BiCodeAlt } from "react-icons/bi"
import { MdOndemandVideo } from "react-icons/md"
import { motion, AnimatePresence, transform } from "framer-motion"
import Link from "next/link"
// import ParticlesBackground from "./ParticlesBackground"

export default function Hero() {
    const [iscard1, setIscard1] = useState(false);

    useEffect(() => {
        const card1 = document.getElementById("card1")
        const card2 = document.getElementById("card2")

        card1.addEventListener("mouseenter", () => {
            card1.classList.add(style.card__big)
            card2.classList.remove(style.card__big)
            setIscard1(true)
        })
        card1.addEventListener("mouseleave", () => {
            card1.classList.remove(style.card__big)
            card2.classList.add(style.card__big)
            setIscard1(false)
        })
    }, [iscard1])

    

  return (
    <>
        <div className={style.hero__background}>
                {/* <ParticlesBackground /> */}
            <motion.div 
                className={style.hero__backgroundLeft}
                initial={{x: "-40%"}}
                animate={{x: "0%", transition:{duration: 0.8, ease: "easeInOut"}}}
            ></motion.div>
            <div className={style.hero__backgroundRight}></div>
        </div>
        <div className={style.hero}>
            <div className={style.hero__left}>
                <h1>M<span className="a">a</span>KING <span className="a">a</span> DIFFERENCE ONE BYTE <span className="a">a</span>T <span className="a">a</span> TIME</h1>
                <Link href={"/services"}><button>Discover</button></Link>
            </div>
            <div className={style.hero__right}>
                {/* <Herocard /> */}
                <Link href={"/services/#visp"}>
                    <div className={`${style.hero__card} ${style.hero__card1}`} id="card1" >
                        <div className={style.card__background}>
                            <Image src={"/images/hero/cloud.webp"} alt="hero-card1" layout="fill" priority quality={100} unoptimized objectFit="cover" />
                        </div>
                        {/* <Image src={"/images/"} */}
                        <FaWifi size={100} className={style.hero__cardIcon} />
                        <p>Internet Service (VISP)</p>
                    </div>
                </Link>

                <Link href={"/services/#hosting"}>
                    <div className={`${style.hero__card} ${style.hero__card2} ${style.card__big}`} id="card2" >
                        <div className={style.card__background}>
                            <Image src={"/images/hero/server.jpg"} alt="hero-card2" layout="fill" priority quality={100} unoptimized objectFit="cover" />
                        </div>
                        {/* <Image src={"/images/"} */}
                        <BiCodeAlt size={100} className={style.hero__cardIcon} />
                        <p>Web Hosting</p>
                    </div>
                </Link>

            </div>
        </div>
    </>
  )
}
