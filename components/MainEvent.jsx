import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/future/image"
import style from "../styles/Events.module.css"
import Link from 'next/link'



export default function MainEvent() {
    const options = { delay: 5000 } // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
    const autoplay = Autoplay(options, autoplayRoot)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])

    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])


  return (
    <div className={style.embla} ref={emblaRef}>
        <div className={style.embla__container}>
            <div className={style.embla__slide}>
                <div className={style.hero__container}>
                    <h1>EXPERIENCE THE BIGGEST TECH TRADE SHOW LIKE NEVER BEFORE</h1>
                    <Link href="/book-a-stand"> 
                        <a className={style.hero__btn}>Book a Stand</a>
                    </Link>
                </div>
                <Image
                    src={"/images/events/events-hero1.webp"}
                    alt="team"
                    width={300}
                    height={400}
                    quality={100}
                    priority
                    unoptimized={true}
                />
            </div>
            <div className={style.embla__slide}>
                <div className={style.hero__container}>
                    <h1>FIRST-EVER TECH TRADE SHOW IN ETHIOPIA</h1>
                    <Link href="/book-a-stand"> 
                        <a className={style.hero__btn}>Book a Stand</a>
                    </Link>
                </div>
                <Image
                    src={"/images/events/events-hero2.jpg"}
                    alt="team"
                    width={300}
                    height={400}
                    quality={100}
                    priority
                    unoptimized={true}
                />
            </div>
            <div className={style.embla__slide}>
                <div className={style.hero__container}>
                    <h1>THE ULTIMATE WAY FOR YOUR BUSINESS AT THE BIGGEST TECH TRADE SHOW</h1>
                    <Link href="/book-a-stand"> 
                        <a className={style.hero__btn}>Book a Stand</a>
                    </Link>
                </div>
                <Image
                    src={"/images/events/events-hero3.jpg"}
                    alt="team"
                    width={300}
                    height={400}
                    quality={100}
                    priority
                    unoptimized={true}
                />
            </div>
        </div>
    </div>
  )
}
