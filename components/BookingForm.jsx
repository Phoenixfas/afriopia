import React, { useState, useEffect } from 'react'
import style from '../styles/Booking.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function BookingForm() {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [company_website, setCompanyWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        if (first_name === '' || last_name === '' || company_name === '' || email === '' || phone === '') {
            setError('Please fill in all required fields');
        }
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    middle_name,
                    last_name,
                    company_name,
                    company_website,
                    email,
                    phone
                })
            }
            const res = await fetch('https://api.afriopia.com/booth-vendor', config);
            const data = await res.json();
            if (res.status === 400) {
                setError(data.error);
                return;
            }
            if (data.capacity === 'full') {
                window.location.href = '/booking-full';
            } else {
                // console.log(data);
                window.location.href = data.payment_url;
            }
        } catch (err) {
            console.error(err);
        }
    }

    // send a get request to the server to check if booking is full and redirect to /booking-full if it is
    useEffect(() => {
        const checkBooking = async() => {
            try {
                const res = await fetch('https://api.afriopia.com/booth/capacity');
                const data = await res.json();
                if (data.capacity === 'full') {
                    window.location.href = '/booking-full';
                }
            } catch (err) {
                console.error(err);
            }
        }
        checkBooking();
    }, [])
    

  return (
    <div className={style.bookingForm}>
        <h1>Book A Stand</h1>
        {error && <p style={{color: "#fff", backgroundColor: "orange", padding: "10px 20px", borderRadius: "5px", transition: .3}}>{error}</p>}
        <form onSubmit={onSubmit}>
            <div className={style.formInput}>
                <label htmlFor="first_name">First Name*</label>
                <input type="text" name="first_name" id="first_name" placeholder='(Required)' required value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="middle_name">Middle Name</label>
                <input type="text" name="middle_name" id="middle_name" placeholder='(Optional)' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="last_name">Last Name*</label>
                <input type="text" name="last_name" id="last_name" placeholder='(Required)' required value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="company_name">Company Name*</label>
                <input type="text" name="company_name" id="company_name" placeholder='(Required)' required value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="company_website">Company Website</label>
                <input type="text" name="company_website" id="company_website" placeholder='(Optional)' value={company_website} onChange={(e) => setCompanyWebsite(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" placeholder='(Required)' required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="phone">Phone*</label>
                <PhoneInput type="tel" name="phone" id="phone" placeholder='(Required)' required value={phone} onChange={setPhone} />
            </div>
            <div className={style.formSubmit}>
                <button type="submit">Book</button>
            </div>
        </form>
    </div>
  )
}
