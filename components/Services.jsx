import style from "../styles/Home.module.css"
import Image from "next/future/image"
import Link from "next/link"
import services from "../data/services"

export default function Services() {
  return (
    <div className={style.services}>
        <div className={style.services__title}>
            <h2>Services</h2>
        </div>
        <div className={style.services__container}>
            {services?.map((service) => (
                <div className={style.services__card} key={service.id}>
                    <div className={style.services__cardImg}>
                        <Image src={service.image} alt="cable" width={300} height={300} quality={100} priority unoptimized={true} />
                    </div>
                    <div className={style.services__content}>
                        <p><span>{service.name}</span></p>
                        <p>{service.desc}</p>
                    </div>
                    <div className={style.services__btnHolder}>
                        <Link href={service.url} >
                            <div className={style.services__button}>
                                More
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
