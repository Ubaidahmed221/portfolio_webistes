import React from 'react';
import { RiBook2Line, RiMailLine, RiMap2Line, RiSendPlaneLine, RiUser3Line } from "react-icons/ri";
import './contact.css'

function Contact() {
    return (
       <section className='contact section' >
        <h2 className="section-title">Contact <span>Me</span> </h2>

        <div className="contact-container container grid">
            <div className="contact-content grid">
                <div className="contact-card">
                    <span className="contact-icon"><RiMap2Line /></span>
                    <div>
                        <h3 className="contact-title">Address</h3>
                        <p className="contact-data">North Tower, Toronto, Canada</p>
                    </div>
                </div>
                <div className="contact-card">
                    <span className="contact-icon"><RiUser3Line /></span>
                    <div>
                        <h3 className="contact-title">Freelance</h3>
                        <p className="contact-data">Available Right Now</p>
                    </div>
                </div>
                <div className="contact-card">
                    <span className="contact-icon"><RiMailLine /></span>
                    <div>
                        <h3 className="contact-title">Email</h3>
                        <p className="contact-data">ubaidahmed1282@gmail.com</p>
                    </div>
                </div>
                <div className="contact-card">
                    <span className="contact-icon"><RiBook2Line /></span>
                    <div>
                        <h3 className="contact-title">Phone</h3>
                        <p className="contact-data">+92 3120003019</p>
                    </div>
                </div>
               
            </div>

            <form action="" className='contact-form grid'>
                <div className="contact-form-group grid">
                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Full Name <span>*</span></label>
                    <input type="text" name='name' className='contact-form-input' />
                </div>

                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Email Address <span>*</span></label>
                    <input type="email" name='email' className='contact-form-input' />
                </div>
                </div>

                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Subject <span>*</span></label>
                    <input type="text" name='subject' className='contact-form-input' />
                </div>

                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Message <span>*</span></label>
                   <textarea name="message" className='contact-form-input contact-form-area' ></textarea>
                </div>

                <div className="contact-button">
                    <button className="button">Send Message <span className='button-icon' ><RiSendPlaneLine/></span> </button>
                </div>
                
            </form>
        </div>
       </section>
    )
}

export default Contact
