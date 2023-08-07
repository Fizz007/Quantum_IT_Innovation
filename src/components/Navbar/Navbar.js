import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import '../Navbar/Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='navbar'>
            <div className="headerr" >
                <div className="logo-container">
                    <img width={100} src="https://www.pngkit.com/png/detail/398-3989650_professional-logo-design-services-business-logo-design-png.png" alt="" />
                </div>
                <div className="logo-nav">
                    <div className={click ? "nav-options active" : "nav-options"}>
                        <div className="option-three">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Project</li>
                                <li>Blog</li>
                                <li>Service</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div style={{ marginTop: '8px' }} onClick={handleClick}>
                        {click ? (
                            <RxCross2 />
                        ) : (
                            <HiOutlineBars3BottomRight />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar