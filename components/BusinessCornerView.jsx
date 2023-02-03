import style from '../styles/Business.module.css'
import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import businessCorner from '../data/businessCorner'
import BusinessCornerForm from './BusinessCornerForm'

export default function BusinessCornerView() {
    const router = useRouter()
    const { order } = router.query
    const [activity, setActivity] = useState({})
    const [participants, setParticipants] = useState({})

    useEffect(() => {
        if (order) {
            const day1 = businessCorner.find(e => e.id === 1)
            const day2 = businessCorner.find(e => e.id === 2)
            const day3 = businessCorner.find(e => e.id === 3)
            const day1Activity = day1.activities.find(e => e.order === order)
            const day2Activity = day2.activities.find(e => e.order === order)
            const day3Activity = day3.activities.find(e => e.order === order)
            if (day1Activity) {
                setActivity(day1Activity)
            } else if (day2Activity) {
                setActivity(day2Activity)
            } else if (day3Activity) {
                setActivity(day3Activity)
            }
        }
        setParticipants(activity.participants_expected)
    }, [order, activity])

  return (
    <div className={style.eventFeatures}>
            {/* <ParticlesBackground color={"#78e0f4"} amount={10} /> */}
            <div className={style.eventFeatures_hero}>
                <div className={style.eventFeatures_title}>
                    <h1>{activity.name}</h1>
                    <p>{activity.time}</p>
                </div>
                <Image src={activity.image} alt={activity.name} width={300} height={300} quality={100} priority unoptimized/>
            </div>
            <div className={style.eventFeatures_content}>
                <div className={style.eventFeatures_content_t}>
                    <p>{activity.description}</p>
                    <ul>
                        <li><span>Format: </span>{activity.format}</li>
                        {activity.invited_panelists && <li><span>Invited Panelists: </span>{activity.invited_panelists}</li>}
                        <li><span>Moderator: </span>{activity.moderator}</li>
                        <li><span>Setup: </span>{activity.setup}</li>
                        <li><span>Participants Expected: </span> {participants?.startups ? <ul><br /><span>Startups: </span> {participants.startups} <br /> <span>Corporates: </span>{participants.corporates}</ul> : participants?.other}</li>
                    </ul>
                </div>
                <BusinessCornerForm activity={activity} route={order} />
            </div>
    </div>
  )
}
