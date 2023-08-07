import React from 'react';
import { MdOutlineConstruction } from 'react-icons/md';
import { LuSettings } from 'react-icons/lu';
import { AiTwotoneCloud } from 'react-icons/ai';
import { GiPartyPopper, GiSunglasses } from 'react-icons/gi';
import '../Section/Section.css'

const Section = () => {
  return (
    <div>
       <div className='section'>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h1>We Are Consulting For Your Business Finances</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam unde fugit provident blanditiis,
                        error commodi aperiam hic. Nostrum atque natus,
                        quam sint incidunt perspiciatis possimus quis adipisci itaque hic.</p>

                    <button className="btn">Start Now</button>
                </div>
                <div className="img">
                    <img width={400} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUd9_AaiGGWd6O5-w7zKBMpdgi-wcVMD-7Q&usqp=CAU" alt="" />
                </div>
            </div>



            <div className="body-two">
                <div className="body2">
                    <div className="text2">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h1>We Have Many Year Experience In Consuntent Business</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam unde fugit provident blanditiis,
                            error commodi aperiam hic. Nostrum atque natus,
                            quam sint incidunt perspiciatis possimus quis adipisci itaque hic.</p>

                        <button className="btn">Know more</button>
                    </div>
                    <div className="img2">
                        <img width={400} src="https://thumb.ac-illust.com/45/457c7da008c4626d64dbe4b0aa7413ba_t.jpeg" alt="" />
                    </div>
                </div>
                <div className="style-icon">
                    <div className="iconstyle">
                        <LuSettings />
                        <p>Construction</p>
                    </div>
                    <div className="iconstyle">
                        <AiTwotoneCloud />
                        <p>Dummy-LOGO</p>
                    </div>
                    <div className="iconstyle">
                        <GiSunglasses />
                        <p>Random-LOGO</p>
                    </div>
                    <div className="iconstyle">
                        <MdOutlineConstruction />
                        <p>Random-Brand</p>
                    </div>
                </div>
            </div>

            <div className="third">
                <div className="dot1">
                    <h2 style={{ color: "rgb(102, 147, 225)" }}>Our Service</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo vitae provident fugiat consequuntur iusto a hic nobis impedit officia aut.</p>
                </div>
                <div className="dot2">
                    <div className="banner">
                        <div className="bannericon">
                            <div className="set">
                                <GiPartyPopper />
                            </div>
                        </div>
                        <div className="bannertext">
                            <h3>Finalcial consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet iure corrupti minus laboriosam tempora laborum modi tempore tenetur nulla.</p>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="bannericon">
                            <div className="set">
                                <GiPartyPopper />
                            </div>
                        </div>
                        <div className="bannertext">
                            <h3>Finalcial consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet iure corrupti minus laboriosam tempora laborum modi tempore tenetur nulla.</p>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="bannericon">
                            <div className="set">
                                <GiPartyPopper />
                            </div>
                        </div>
                        <div className="bannertext">
                            <h3>Finalcial consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet iure corrupti minus laboriosam tempora laborum modi tempore tenetur nulla.</p>
                        </div>
                    </div>
                </div>
                <div className="dot3">
                    <button className="btn">All Service</button>
                </div>
            </div>
    </div>
  )
}

export default Section
