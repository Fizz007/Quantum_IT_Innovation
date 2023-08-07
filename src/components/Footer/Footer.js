import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footertext">
                <h1>Subscribe Our Newsletter For More Update</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ab omnis quibusdam. Aliquid odit consequatur at ratione ut nemo, sequi velit quas tempora autem tempore placeat asperiores voluptate recusandae modi?</p>
            </div>
            <div className="footersearch">
                <input type="text" className='input' placeholder='Enter Your Mail' />
                <button className="btn">Subscribe</button>
            </div>
        </div>
    )
}

export default Footer