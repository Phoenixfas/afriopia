import style from "../styles/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTelegram } from "react-icons/fa"
import { useRouter } from "next/router";

export default function Footer() {
  const route = useRouter().pathname;
  return (
    <div className={style.footer} style={route.includes("/events") || route==="/book-a-stand" ? {backgroundColor: "#050752"} : {}}>
      <div className={`${style.footer_con} ${style.footer__logo}`}>
        <Image src="/images/Logo.svg" alt="Logo" width={60} height={60} />
        <p>Afriopia Unified Systems.</p>
      </div>
      <div className={`${style.footer_con} ${style.footer__link}`}>
        <Link href="/" >Home</Link>
        <Link href="/services" >Servives</Link>
        <Link href="/trainings" >Trainings</Link>
        <Link href="/prices" >Pricing</Link>
        <Link href="/events" >Events</Link>
        <Link href="/about-us" >About Us</Link>
        <Link href="/our-team" >Our Team</Link>
        <Link href="/contact-us" >Contact Us</Link>
      </div>
      <div className={`${style.footer_con} ${style.footer__socials}`}>
        <Link href="https://www.facebook.com/afriopia" ><div><FaFacebookF className={style.footer__icon} size={25} /></div></Link>
        <Link href="https://twitter.com/afriopia" ><div><FaTwitter className={style.footer__icon} size={25} /></div></Link>
        <Link href="https://www.linkedin.com/company/afriopia-unified-systems/" ><div><FaLinkedinIn className={style.footer__icon} size={25} /></div></Link>
        <Link href="https://www.instagram.com/afriopia5/" ><div><FaInstagram className={style.footer__icon} size={25} /></div></Link>
        <Link href="https://t.me/afriopia5" ><div><FaTelegram className={style.footer__icon} size={25} /></div></Link>
      </div>
      <div className={`${style.footer_con} ${style.footer__copy}`}>
        <p>&copy; Copyright 2022, Afriopia. All Rights Reserved.</p>
      </div>
    </div>
  )
}
