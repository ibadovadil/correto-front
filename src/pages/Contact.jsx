import React from 'react'
import '../assets/styles/contact.scss'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const sendEmail=(e)=>{
        e.preventDefault();
        alert('Submitted')
        emailjs.sendForm('service_feb90g4','template_id',e.target,'pubic_key')
    }
    return (
        <div className='contact'>
            <div className="top">
                <h2>Contact Us</h2>
            </div>
            <div className="bottom">
                <form className='form' onSubmit={sendEmail}>
                    <div className="form-group mt-4">
                        <input type="email" name='email_from' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-4">
                        <input type="input" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group my-4">
                        <textarea type="input" className="form-control" placeholder="Message Here..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact