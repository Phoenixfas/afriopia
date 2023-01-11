import { useState } from "react"
import { useMutation } from "@apollo/client"
import {ADD_SUBSCRIBER} from "../graphql/mutations/subscriberMutations"
import style from "../styles/Home.module.css"

export default function Subscribe() {
  const [email, setEmail] = useState("")

    const [addSubscriber] = useMutation(ADD_SUBSCRIBER, {
        variables: { email },
    })

    const ValidateEmail = () => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
          return (true)
        }
          alert("You have entered an invalid email address!")
          return (false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === "") {
            alert("Please fill in all fields")
        }
        if(ValidateEmail()){
          addSubscriber(email)
          setEmail("")
          alert("You have successfuly subscribed to our daily newsletter")
        }
    }


  return (
    <div className={style.subscribe}>
        <div className={style.subscribe__title}>
            <h2>Subscribe to our d<em className="a" style={{textTransform: "lowercase"}}>a</em>ily newsletter</h2>
        </div>
        <form onSubmit={onSubmit} className={style.subscribe__container}>
            <input placeholder="Enter Email Adress" type="email" name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required  />
            <button type="submit" name="submit">Subscribe</button>
        </form>
    </div>
  )
}
