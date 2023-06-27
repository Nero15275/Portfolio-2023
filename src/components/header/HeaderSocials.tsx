import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/ranit-dey-199102131/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/Nero15275" target='_blank'><FaGithub /></a>
            <a href="https://www.facebook.com/ranit.dey.5473/" target='_blank'><FaFacebook /></a>

        </div>
    )
}

export default HeaderSocials
