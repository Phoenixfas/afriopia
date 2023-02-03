import React, { useState, useEffect } from 'react'
import style from '../styles/Booking.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import activityFormFields from '../data/activityFormFields'

export default function EventRegisterForm({event, route}) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [startup_sector, setStartupSector] = useState('');
    const [startup_highlight, setStartupHighlight] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    
    const fields = activityFormFields.find(field => field.order === route);

    const onSubmit = async(e) => {
        e.preventDefault();
        if (first_name === '' || last_name === '' || email === '' || phone === '') {
            setError('Please fill in all required fields');
            return;
        }

        setMsg('Please wait...');

        if(!fields?.pitchdeck) {
            const pitchdeck = "";
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
                            startup_sector,
                            startup_highlight,
                            pitchdeck,
                            company,
                            position
                        })
                    }
                    const res = await fetch(`https://api.afriopia.com/business/activity/${route}`, config);
                    const data = await res.json();
                    if (res.status !== 201) {
                        setError(data.error);
                        setMsg('');
                        return;
                    }
                    window.location.href = '/events/business-success';
                    
                } catch (err) {
                    console.error(err);
                }

        } else {
            const img = document.getElementById("pitchdeck").files[0]
            const imgData = new FormData()
            imgData.append('file', img)
            imgData.append('upload_preset', 'afriopia')

            const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
                method: 'POST',
                body: imgData
            })
            if(!res.ok) {
                setError("Please upload an image")
                setMsg('');
                return
            }
            const json = await res.json()

            if(json.secure_url === "") {
                setError("Please upload an image")
                setMsg('');
                return
            }
            if(json.secure_url !== "") {
                setError("")
                const pitchdeck = json.secure_url

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
                            startup_sector,
                            startup_highlight,
                            pitchdeck,
                            company,
                            position
                        })
                    }
                    const res = await fetch(`https://api.afriopia.com/business/activity/${route}`, config);
                    const data = await res.json();
                    if (res.status !== 201) {
                        setError(data.error);
                        setMsg('');
                        return;
                    }
                    window.location.href = '/events/business-success';
                    setMsg('');
                    
                } catch (err) {
                    console.error(err);
                }
            }
        }
        
    }

    

  return (
    <div className={style.bookingForm}>
        {error && <p style={{color: "#fff", backgroundColor: "red", padding: "10px 20px", borderRadius: "5px", transition: .3}}>{error}</p>}
        {msg && <p style={{color: "#fff", backgroundColor: "orange", padding: "10px 20px", borderRadius: "5px", transition: .3}}>{msg}</p>}
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
            {fields?.startup_sector && <div className={style.formInputS}>
                <label htmlFor="startup_sector">Startup Sector*</label>
                <select name="startup_sector" id="startup_sector" placeholder='(Required)' required value={startup_sector} onChange={(e) => setStartupSector(e.target.value)} >
                    <option>choose</option>
                    <option value="agriTech">AgriTech</option>
                    <option value="healthTech">HealthTech</option>
                    <option value="eduTech">EduTech</option>
                    <option value="finTech">FinTech</option>
                    <option value="trasportTech">Transport Tech</option>
                    <option value="other">Other</option>
                </select>
            </div>}
            {fields?.startup_highlight && <div className={style.formInputT}>
                <label htmlFor="startup_highlight">Highlight about your business*</label>
                <textarea type="text" name="startup_highlight" id="startup_highlight" required placeholder='(Required)' value={startup_highlight} onChange={(e) => setStartupHighlight(e.target.value)} />
            </div>}

            

            {fields?.pitchdeck && <div className={`${style.formInputT} ${style.hNote}`}>
                <label htmlFor="pitchdeck">Upload Pitchdeck*</label>
                <p>
                    Note: Your pitchdeck should include at least the following info. to increase your likelihood of being shortlisted: Overview of your business( including, location, website, Industry etc), Problem, Solution, Traction, Market Opportunity/TAM, SAM, SOM/, Partners, Team, Media coverage, Advisors and/or Investors (if any), the Ask, Use of Fund)
                </p>
                <input type="file" accept="Application/pdf" name="pitchdeck" id="pitchdeck" required placeholder='(Required) Upload only .pdf file' />
            </div>}
            {fields?.company && <div className={style.formInput}>
                <label htmlFor="company">Company Name*</label>
                <input type="text" name="company" id="company" required placeholder='(Required)' value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>}
            {fields?.position && <div className={style.formInput}>
                <label htmlFor="position">Position*</label>
                <input type="text" name="position" id="position" required placeholder='(Required)' value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>}
            <div className={style.formSubmit}>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}
