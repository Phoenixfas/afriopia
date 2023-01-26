import React, { useState, useEffect } from 'react'
import style from '../styles/Booking.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function StartupForm() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [company_website, setCompanyWebsite] = useState('');
    const [company_description, setCompanyDescription] = useState('');
    const [company_stage, setCompanyStage] = useState('');
    const [company_industry, setCompanyIndustry] = useState('');
    const [company_size, setCompanySize] = useState('');

    const [error, setError] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        if (name === '' || company_description === '' || company_name === '' || email === '' || phone === '') {
            setError('Please fill in all required fields');
        }
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    position,
                    email,
                    phone,
                    company_name,
                    company_website,
                    company_description,
                    company_stage,
                    company_industry,
                    company_size,
                })
            }
            const res = await fetch('https://api.afriopia.com/startup', config);
            const data = await res.json();
            if (res.status === 400) {
                setError(data.error);
                return;
            }
            if (data.capacity === 'full') {
                window.location.href = '/booking-full';
            } else {
                // console.log(data);
                window.location.href = '/register-success';
            }
        } catch (err) {
            console.error(err);
        }
    }

    // send a get request to the server to check if booking is full and redirect to /booking-full if it is
    useEffect(() => {
        const checkBooking = async() => {
            try {
                const res = await fetch('https://api.afriopia.com/startup-capacity');
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
        <h1>Startup Registration</h1>
        {error && <p style={{color: "#fff", backgroundColor: "orange", padding: "10px 20px", borderRadius: "5px", transition: .3}}>{error}</p>}
        <form onSubmit={onSubmit}>
            <div className={style.formInput}>
                <label htmlFor="name">Full Name*</label>
                <input type="text" name="name" id="name" placeholder='(Required)' required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="position">Position*</label>
                <input type="text" name="position" id="position" placeholder='(Required)' required value={position} onChange={(e) => setPosition(e.target.value)} />
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
                <label htmlFor="company_name">Company Name*</label>
                <input type="text" name="company_name" id="company_name" placeholder='(Required)' required value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="company_website">Company Website*</label>
                <input type="text" name="company_website" id="company_website" placeholder='(Required)' required value={company_website} onChange={(e) => setCompanyWebsite(e.target.value)} />
            </div>
            <div className={style.formInputT}>
                <label htmlFor="company_description">Company Description*</label>
                <textarea name="company_description" id="company_description" placeholder='(Required) (write short description about your startup company)' required value={company_description} onChange={(e) => setCompanyDescription(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="company_stage">Company Stage*</label>
                <input type="text" name="company_stage" id="company_stage" placeholder='(Required) (Ex: pre-seed, early, etc.)' required value={company_stage} onChange={(e) => setCompanyStage(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="company_industry">Company Industry*</label>
                <input type="text" name="company_industry" id="company_industry" placeholder='(Required)' required value={company_industry} onChange={(e) => setCompanyIndustry(e.target.value)} />
            </div>
            <div className={style.formInput}>
                <label htmlFor="company_size">Company Size*</label>
                <input type="text" name="company_size" id="company_size" placeholder='(Required) (no. of employees)' required value={company_size} onChange={(e) => setCompanySize(e.target.value)} />
            </div>
            <div className={style.formSubmit}>
                <button type="submit">Book</button>
            </div>
        </form>
    </div>
  )
}
