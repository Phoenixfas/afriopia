import style from "../styles/Payment.module.css";
import trainings from "../data/trainings";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Enroll() {
    const [spinner, setSpinner] = useState(false);
    const [c, setC] = useState([]);
    const [course, setCourse] = useState({});
    const router = useRouter();
    const { paymentId } = router.query;

    /// form data states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    
    useEffect(() => {
        const cours = trainings.find((c) => c.id === parseInt(paymentId));
        if(cours) {
            setC(c => [...c, cours])
            setCourse(cours)
        }
        
    }, [paymentId]);
    
    
    const onSubmit = async(e) => {
        e.preventDefault();

        if(c.length > 0) {
            
            if(firstName === "" || lastName === "" || email === "") {
                alert("Please fill in all fields")
            }else{
                


                fetch("https://api.afriopia.com/create-checkout-session", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  course: {
                    id: course.id,
                  },
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                }),
              })
                .then((res) => {
                  if (res.ok) return res.json();
                  return res.json().then((json) => Promise.reject(json));
                })
                .then(({ url }) => {
                    // router.push(url)
                    //   console.log(url);
                  window.location = url
                })
                .catch((e) => {
                  console.error(e.error);
                });
            
            setFirstName("")
            setLastName("")
            setEmail("")
            setSpinner(true)




            }
            
            
        }else{
            alert("Course not found. Please try again")
            router.push("/trainings")
        }
        
    }


  return (
    <div className={style.p__moduleHolder}>
        {spinner && <Spinner />}
        <h2>Enroll Now</h2>
        <div className={style.p__module}>
            <div className={style.p__moduleLeft}>
                <div className={style.p__moduleLeft__title}>
                    <h3>Course</h3>
                </div>
                <div className={style.p__moduleLeft__course}>
                    <h4>{course?.title}</h4>
                    <p>{course?.description?.length > 300 ? `${course.description.substr(0, 300)}...` : course?.description}</p>
                </div>
            </div>

            <div className={style.p__moduleRight}>
            <div className={style.p__moduleRight__form}>
                <form onSubmit={onSubmit}>
                <div className={style.p__moduleRight__form__group}>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </div>
                <div className={style.p__moduleRight__form__group}>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </div>
                <div className={style.p__moduleRight__form__group}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className={style.p__moduleRight__form__group}>
                    <label htmlFor="amount">Amount</label>
                    <p className={style.amount}>{course?.price}</p>
                </div>
                <div className={style.p__moduleRight__form__group}>
                    <button type="submit">Checkout to chapa</button>
                </div>
                </form>
            </div>
            </div>
        </div>
      </div>
  )
  
}


