import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image"
import style from "../styles/Contact.module.css"

export default function Message() {
    const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ua8wc8p",
        "template_4v8rz1k",
        formRef.current,
        "wtQTOM4wVY_B0lzHf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className={style.message__container}>
        <h1 style={{textAlign: "center", color: "#0b5b05", marginBottom: "50px"}}>GET IN TOUCH WITH US</h1>
        <div className={style.message}>
            <div className={style.message__left}>
                <div className={style.message__image}>
                    <Image src={"/images/contact_us.svg"} alt="contact us" width={400} height={400} />
                </div>
            </div>
            <div className={style.message__right}>
                <form className={style.message__form} ref={formRef} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="text" name="user_email"/>
                    <label>Subject</label>
                    <input type="text" name="user_subject"/>
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <button>Send</button>
                    {done && (
                        <p className={style.m_done}>Your message has been sent. Thank you!</p>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}
