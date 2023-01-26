import React, { useState, useEffect } from 'react'
import style from '../styles/Booking.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function EventRegisterForm({event, route}) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [telegram, setTelegram] = useState('');
    const [gender, setGender] = useState('');
    const [have_team, setHaveTeam] = useState('');
    const [previous_experience, setPreviousExperience] = useState('');
    const [why_participate, setWhyParticipate] = useState('');
    const [additional_info, setAdditionalInfo] = useState('');

    const [error, setError] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        if (first_name === '' || last_name === '' || email === '' || phone === ''|| telegram === '' || gender === '' || have_team === '' || previous_experience === '' ) {
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
                    gender,
                    have_team,
                    previous_experience,
                    why_participate,
                    additional_info,
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
            <div className={style.formInputS}>
                <label htmlFor="have_team">Do You Have a Team?*</label>
                <select name="have_team" id="have_team" placeholder='(Required)' value={have_team} onChange={(e) => setHaveTeam(e.target.value)} >
                    <option>choose</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className={style.formInputS}>
                <label htmlFor="previous_experience">Do You Have a Previous Experience?*</label>
                <select name="previous_experience" id="previous_experience" placeholder='(Required)' value={previous_experience} onChange={(e) => setPreviousExperience(e.target.value)} >
                    <option>choose</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className={style.formInputT}>
                <label htmlFor="why_participate">Why Participate?</label>
                <textarea type="text" name="why_participate" id="why_participate" placeholder='(Optional)' value={why_participate} onChange={(e) => setWhyParticipate(e.target.value)} />
            </div>
            <div className={style.formInputT}>
                <label htmlFor="additional_info">Additional Information We Should Know About</label>
                <textarea type="text" name="additional_info" id="additional_info" placeholder='(Optional)' value={additional_info} onChange={(e) => setAdditionalInfo(e.target.value)} />
            </div>
            <div className={style.formSubmit}>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}
