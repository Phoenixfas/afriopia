import { useEffect, useState } from "react";
import style from "../styles/layout.module.css";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import {CgClose, CgMenuRight} from "react-icons/cg"

export default function NavBar() {
  const route = useRouter().pathname;
  const [toggle, setToggle] = useState(false)

  const [show, setShow] = useState(false);

  const handleButton = () => {
    setShow(!show)
  }

  useEffect(() => {
    const onScroll = (event) => {
      if (window.scrollY > 0){
        setToggle(true)
      }else 
        setToggle(false)
    };
      
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
    
  }, []);
  
  return (
    <div className={`${style.navbar} ${toggle && style.navToggled} ${toggle && route.includes("/events") || route==="/book-a-stand" ? style.navbarEvent : null}`} >
        <div className={style.navbar__left}>
            <Image src={`${"/images/Logo.svg"}`} alt="Logo" width={60} height={60} />
            <Link href="/"><p>afri<span>opia</span></p></Link>
        </div>
        <div className={`${style.navbar__right} ${route.includes("/events") || route==="/book-a-stand" ? style.navbar__rightEvent : null}`}>
            <Link href="/">HOME</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/trainings">TRAININGS</Link>
            <Link href="/prices">PRICES</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/about-us">ABOUT US</Link>
            <Link href="/our-team">OUR TEAM</Link>
            <Link href="/contact-us" ><p className={`${style.contact} ${route.includes("/events") || route==="/book-a-stand" ? style.contact__Event : null}`}>CONTACT US</p></Link>
        </div>
        <div className={style.navbar__mobile}>
          {show ? <CgClose onClick={handleButton} color={route.includes("/events") || route==="/book-a-stand" ? "#050752" : "#073703"} size={toggle ? 30 : 35} /> : <CgMenuRight onClick={handleButton} color={route.includes("/events") || route==="/book-a-stand" ? "#050752" : "#073703"} size={toggle ? 30 : 35} />}
        </div>
        <div className={`${show ? style.nav__drawer : style.invisible}`}>
            <Link href="/"><span onClick={handleButton}>HOME</span></Link>
            <Link href="/services"><span onClick={handleButton}>SERVICES</span></Link>
            <Link href="/trainings"><span onClick={handleButton}>TRAININGS</span></Link>
            <Link href="/prices"><span onClick={handleButton}>PRICES</span></Link>
            <Link href="/events"><span onClick={handleButton}>EVENTS</span></Link>
            <Link href="/about-us"><span onClick={handleButton}>ABOUT US</span></Link>
            <Link href="/our-team"><span onClick={handleButton}>OUR TEAM</span></Link>
            <Link href="/contact-us" ><p onClick={handleButton} className={`${style.contact} ${route.includes("/events") ? style.contact__Event : null}`}>CONTACT US</p></Link>
        </div>
        
    </div>
  )
}
