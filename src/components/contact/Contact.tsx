import React, { useState } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        message: ''
    }
    const [contactMessage, setcontactMessage] = useState(initialState)
    const [errorClass, setErrorClass] = useState('')
    const handleChange = (event: any) => {
        setErrorClass('')
        setcontactMessage({ ...contactMessage, [event.target.name]: event.target.value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (contactMessage.name == '') {
            setErrorClass('name')
            toast.error('Please enter your name', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            return
        }
        if (contactMessage.email == '') {
            setErrorClass('email')
            toast.error('Please enter your email address', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            return
        }
        if (contactMessage.message == '') {
            setErrorClass('message')
            toast.error('Please enter a message', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            return
        }
        emailjs.send("service_vdzjy16", "template_vcvojqe", contactMessage, "qsqhVydQURVz-HOxR").then(
            (res) => {
                if (res.status === 200)
                    toast.success("Email Sent Successfully !", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    })

                setcontactMessage(initialState)

            }).catch(err => {
                toast.error("Server Down It will be fixed shortly", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
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
                    <input type="text" name='name' className={(errorClass == 'name' && !contactMessage.name) ? 'error' : ''} value={contactMessage.name} placeholder='Your Full Name' required onChange={(e) => handleChange(e)} />
                    <input type="email" name='email' className={(errorClass == 'email' && !contactMessage.email) ? 'error' : ''} value={contactMessage.email} placeholder=' Your Email' required onChange={(e) => handleChange(e)} />
                    <textarea name="message" className={(errorClass == 'message' && !contactMessage.message) ? 'error' : ''} placeholder='Your Message' value={contactMessage.message} rows={7} required onChange={(e) => handleChange(e)}></textarea>
                    <button type='submit' className='btn btn-primary' onClick={(e) => onSubmit(e)}>Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact
