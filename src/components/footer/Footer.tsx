import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Ranit Dey</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/ranit-dey-199102131/"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/ranit.dey.5473/"><FaFacebookF /></a>
                <a href="https://www.instagram.com/nero_rony/"><BsInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Created by Ranit Dey All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer
