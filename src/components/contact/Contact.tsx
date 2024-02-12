import React, { useState } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        message: ''
    }
    const [contactMessage, setcontactMessage] = useState(initialState)
    const handleChange = (event: any) => {
        setcontactMessage({ ...contactMessage, [event.target.name]: event.target.value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        emailjs.send("service_vdzjy16", "template_vcvojqe", contactMessage, "qsqhVydQURVz-HOxR").then(
            (res) => {
                toast("easssssyyyyyynpm")
                toast.success("Mail sent successfully", {
                    position: toast.POSITION.TOP_CENTER,
                })
                setcontactMessage(initialState)

            }).catch(err => {
                toast.error("Server Down It will be fixed shortly", {
                    position: toast.POSITION.TOP_CENTER,
                })
            })
    }
    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>ranitdey.rani@gmail.com</h5>
                        <a href="mailto:ranitdey.rani@gmail.com" target='_blank'>Send Mail</a>
                    </article>
                    <article className='contact__option'>
                        <FaFacebookMessenger className='contact__option-icon' />
                        <h4>Massenger</h4>
                        <h5>Ranit Dey</h5>
                        <a href="https://m.me/ranit.dey.5473/" target='_blank'>Send Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>Ranit Dey</h5>
                        <a href="https://wa.me/9679695275" target='_blank'>Whatsapp Me</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' value={contactMessage.name} placeholder='Your Full Name' required onChange={(e) => handleChange(e)} />
                    <input type="email" name='email' value={contactMessage.email} placeholder=' Your Email' required onChange={(e) => handleChange(e)} />
                    <textarea name="message" placeholder='Your Message' value={contactMessage.message} rows={7} required onChange={(e) => handleChange(e)}></textarea>
                    <button type='submit' className='btn btn-primary' onClick={(e) => onSubmit(e)}>Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact
