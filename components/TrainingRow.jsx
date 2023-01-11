import style from "../styles/Trainings.module.css"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"
import trainings from "../data/trainings"
import Link from "next/link"

export default function TrainingRow() {
  return (
    <>
        {trainings.map((training) => (
            <div key={training.id} id={training.idTag} className={`${style.trainingRow} ${training.id%2===0 && style.blue}`}>
                
                {training.id%2!==0 && <TImage img={training.img} id={training.id} title={training.title} />}
                
                <div className={style.trainingRow__right_r}>
                    <h2>{training.title}</h2>
                    <p>{training.description}</p>
                    <div className={style.trainingRow__list}>
                        {training.items.map((item, index) => (
                            <div key={index} className={style.trainingRow__item}>
                                <FaCheck size={20} className={style.itemIcon} />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className={style.trainingRow__btn}>
                        <Link href={`/payment/${training.id}`} target="_blank" rel="noreferrer"><p>Enroll Now<em>{training.price} ETB / ${training.price_usd}</em></p></Link>
                    </div>
                </div>

                {training.id%2===0 && <TImage img={training.img} id={training.id} title={training.title} />}

            </div>

        ))}

        
    </>
  )
}

function TImage({img, id, title}) {
    return (
        <div className={id%2===0 ? style.trainingRow__right : style.trainingRow__left_r}>
            <Image src={img} alt={title} objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
        </div>
    )
}
