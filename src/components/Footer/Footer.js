import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footertext">
                <h1>Subscribe Our Newsletter For More Update</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, suscipit maxime! Necessitatibus vitae illo quaerat aliquam culpa ratione commodi tempora sequi et error, fugiat voluptatum!</p>
            </div>
            <div className="footersearch">
                <input type="text" className='input' placeholder='Enter Your Mail' />
                <button className="btn">Subscribe</button>
            </div>
        </div>
    )
}

export default Footer