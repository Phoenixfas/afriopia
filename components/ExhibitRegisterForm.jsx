import React, { useState, useEffect } from 'react'
import style from '../styles/Booking.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function ExhibitRegisterForm({event, route}) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [telegram, setTelegram] = useState('');
    const [gender, setGender] = useState('');

    const [error, setError] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        if (first_name === '' || last_name === '' || email === '' || phone === ''|| telegram === '' || gender === '' ) {
            setError('Please fill in all required fields');
            return;
        }
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    phone,
                    telegram,
                    gender
                })
            }
            const res = await fetch(`https://api.afriopia.com/${route}`, config);
            const data = await res.json();
            if (res.status !== 201) {
                setError(data.error);
                return;
            }
            window.location.href = '/register-success';
            
        } catch (err) {
            console.error(err);
        }
    }

    

  return (
    <div className={style.bookingForm}>
        <h1>{event} Registration</h1>
        {error && <p style={{color: "#fff", backgroundColor: "orange", padding: "10px 20px", borderRadius: "5px", transition: .3}}>{error}</p>}
        <form onSubmit={onSubmit}>
            <div className={style.formInput}>
                <label htmlFor="first_name">First Name*</label>
                <input type="text" name="first_name" id="first_name" placeholder='(Required)' required value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="last_name">Last Name*</label>
                <input type="text" name="last_name" id="last_name" placeholder='(Required)' required value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" placeholder='(Required)' required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="phone">Phone*</label>
                <PhoneInput type="tel" name="phone" id="phone" placeholder='(Required)' required value={phone} onChange={setPhone} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="telegram">Telegram username*</label>
                <input type="text" name="telegram" id="telegram" required placeholder='(Required) Please dont include @ symbol' value={telegram} onChange={(e) => setTelegram(e.target.value)} />
            </div>
            <div className={style.formInputS}>
                <label htmlFor="gender">Gender*</label>
                <select name="gender" id="gender" placeholder='(Required)' required value={gender} onChange={(e) => setGender(e.target.value)} >
                    <option>choose</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </div>
            
            <div className={style.formSubmit}>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}
