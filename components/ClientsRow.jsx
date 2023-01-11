import style from "../styles/Home.module.css"
import Image from "next/future/image"

export default function ClientsRow() {
  return (
    <div className={style.clients__holder}>
            <div className={style.client}>
                <Image src={"/images/clients/el_ouzeir.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={style.client}>
                <Image src={"/images/clients/Green_Floral.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={style.client}>
                <Image src={"/images/clients/kabyenad.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={style.client}>
                <Image src={"/images/clients/restore.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={style.client}>
                <Image src={"/images/clients/sid.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={`${style.client} ${style.clientShort}`}>
                <Image src={"/images/clients/waterdrilling.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={style.client}>
                <Image src={"/images/clients/YuYana_Logo.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
            <div className={style.client}>
                <Image src={"/images/clients/zagol.png"}
                    alt="client"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    unoptimized={true} 
                />
            </div>
        </div>
  )
}
