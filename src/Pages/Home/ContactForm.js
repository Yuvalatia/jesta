import React, {useState} from 'react';


import './ContactForm.css';
const ContactForm = (props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        content: '',
    });

    const formSent = (e) => {
        e.preventDefault(); // dosent refresh
    }

    return(
            
            <div className="contactform__container">
                <form onSubmit={formSent}>
                    <h2>דבר איתנו</h2>
                    <label>שם מלא</label>
                    <input placeholder="name" />
                    <label>דוא"ל</label>
                    <input type='email'  />
                    <label>הודעה</label>
                    <textarea />
                    <button type='submit'>שלח</button>
                </form>
            </div>
            
    );
}

export default ContactForm;