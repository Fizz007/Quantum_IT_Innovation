import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>

            <div className="header-info">
                <p>+91 8299380981</p>
                <p>faisalabrar@proton.me</p>
            </div>
            <div className="header-icon">
                <FaTwitter />
                <FaLinkedinIn />
                <FaFacebookF />
                <FaInstagram />
            </div>

        </div>
    )
}

export default Header