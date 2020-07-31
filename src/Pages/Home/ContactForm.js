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
        console.log(form);
    }

    const inputChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return(
            
            <div className="contactform__container">
                <form onSubmit={formSent}>
                    <h2>דבר איתנו</h2>
                    <label>שם מלא</label>
                    <input value={form.name} name='name' onChange={inputChangeHandler} />
                    <label>דוא"ל</label>
                    <input type='email' value={form.email} name='email' onChange={inputChangeHandler}  />
                    <label>הודעה</label>
                    <textarea value={form.content} name="content" onChange={inputChangeHandler} />
                    <button type='submit'>שלח</button>
                </form>
            </div>
            
    );
}

export default ContactForm;