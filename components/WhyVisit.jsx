import React from 'react'
import style from '../styles/Events.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import { useEffect, useRef} from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
  visible: { opacity: 1, y: 0, transition: { duration: .5, type: "spring", stiffness: 150} },
  hidden: { opacity: 0, y: 100, transition: { duration: .5, } }
}
const variants2 = {
  visible: { opacity: 1, y: 0, transition: { delay: .2, duration: .5, type: "spring", stiffness: 150} },
  hidden: { opacity: 0, y: 100, transition: { duration: .5, } }
}
const variants3 = {
  visible: { opacity: 1, y: 0, transition: { delay: .5, duration: .2, type: "spring", stiffness: 150} },
  hidden: { opacity: 0, y: 100, transition: { duration: .5, } }
}

export default function WhyVisit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50px", once: true})
  const controls = useAnimationControls()

  useEffect(() => {
      controls.start(isInView ? "visible" : "hidden")
  }, [isInView]);


  return (
    <div ref={ref} className={style.whyvisit}>
        {/* <div className={style.whyvisit_l}>
            <motion.div animate={controls} variants={variants1} className={style.whyvisit_l_svg}>
                <Image src={"/images/events/Logo.svg"} alt="team" width={300} height={300} quality={100} priority  />
            </motion.div>
        </div> */}
        <div className={style.whyvisit_r}>
            <motion.h1 animate={controls} variants={variants1} >Why Visit</motion.h1>
            <motion.p animate={controls} variants={variants2} >Not only will you have access to tens of thousands of exhibitors, but also get the golden opportunity of meeting up with local and international businesses to network, market, and sell up your products/services. There has never been such a suitable environment for businesses to flourish in Ethiopia, especially tech-oriented ones, which greatly attract attention in a wide-scale range. This tech trade show, being the largest of all time ever occurring in Ethiopia, is your supreme gateway to not only exhibitors but also businesses, companies, and private equity shareholders.</motion.p>
            <motion.div animate={controls} variants={variants3} className={style.whyvisit_b}>
                <Link href="/events/participate">Register as Exhibitor</Link>
                <Link href="/events/startup">Register as a Startup</Link>
            </motion.div>
        </div>
    </div>
  )
}
