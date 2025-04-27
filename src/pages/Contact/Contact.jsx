import { useState,useRef } from 'react';
import { RiBook2Line, RiMailLine, RiMap2Line, RiSendPlaneLine, RiUser3Line } from "react-icons/ri";
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [MessageColor, setMessageColor] = useState('');

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const sendEmail = (e) =>{
        e.preventDefault();
         
        if(!formData.name || !formData.email || !formData.subject || !formData.message){
            setMessageColor('color-red');
            setFeedbackMessage('Write all the input feilds');

            setTimeout(() => setFeedbackMessage(''),3000);
            return;
        }
        emailjs
        .sendForm('service_y65hjxv', 'template_wzco18u', form.current,'LVw-cstK6JjAKe7Wn')
        .then(
          () => {
            setMessageColor('color-first');
            setFeedbackMessage('Message sent ');
            setTimeout(() => setFeedbackMessage(''),5000);

            setFormData({name: '', email:'', subject: '', message:''});
          },
          (error) => {
            console.log(error);
           alert('OOPs! SOMETHING WENT WRONG...', error);
          },
        );
    }

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

            <form ref={form} className='contact-form grid' onSubmit={sendEmail} >
                <div className="contact-form-group grid">
                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Full Name <span>*</span></label>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} className='contact-form-input' />
                </div>

                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Email Address <span>*</span></label>
                    <input type="email" name='email' onChange={handleChange} value={formData.email} className='contact-form-input' />
                </div>
                </div>

                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Subject <span>*</span></label>
                    <input type="text" name='subject' onChange={handleChange} value={formData.subject} className='contact-form-input' />
                </div>

                <div className="contact-form-div">
                    <label htmlFor="" className="contact-form-label">You Message <span>*</span></label>
                   <textarea name="message" onChange={handleChange} value={formData.message} className='contact-form-input contact-form-area' ></textarea>
                </div>

                <div className="contact-button">
                    <button className="button">Send Message <span className='button-icon' ><RiSendPlaneLine/></span> </button>
                </div>
                {feedbackMessage && (
                    <p className={`contact-message ${MessageColor}`} >{feedbackMessage}</p>
                
                )}
                
            </form>
        </div>
       </section>
    )
}

export default Contact
