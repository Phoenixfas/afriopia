import {useState, useEffect} from 'react'
import style from '../styles/Events.module.css'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import events from '../data/events'
import ParticlesBackground from './ParticlesBackground'

export default function EventFeatureView() {
    const router = useRouter()
    const { eventFeaturesId } = router.query
    const [feature, setFeature] = useState({})
    const [featureT, setFeatureT] = useState(false)

    // console.log(eventFeaturesId)
    // setTimeout(() => router.push("/events"), 3000)

    useEffect(() => {
        if (!eventFeaturesId){
            setFeatureT(false)
        }else{
            let feature = events.find(e => e.id === eventFeaturesId)
            if(!feature){
                router?.push("/events")
            }
            setFeature(feature)
            setFeatureT(true)
        }
        
    }, [eventFeaturesId])

   
  if (featureT) return <EventFeature feature={feature} />
  if (!featureT) return <div style={{width: "100%", height: "100vh", backgroundColor: "#050752", display: "flex", alignItems: "center", justifyContent: "center"}}>loading...</div>
}


const EventFeature = ( { feature } ) => {
    return (
        <div className={style.eventFeatures}>
            <ParticlesBackground color={"#78e0f4"} amount={10} />
            <div className={style.eventFeatures_hero}>
                <div className={style.eventFeatures_title}>
                    <h1>{feature?.name}</h1>
                </div>
                <Image src={feature?.image} alt={feature?.name} width={300} height={300} quality={100} priority unoptimized/>
            </div>
            <div className={style.eventFeatures_content}>
                <div className={style.eventFeatures_content_l}>
                    <p>{feature?.long_desc}</p>
                </div>
                <div className={style.eventFeatures_content_r}>
                    {feature?.includes.map((inc, i) => (
                        <Image key={i} title={inc.name} src={inc.image} alt={inc.name} width={300} height={300} quality={100} priority unoptimized />
                    ))}
                </div>
            </div>
        </div>
    )
}