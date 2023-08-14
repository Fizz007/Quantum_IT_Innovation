import React from 'react'
import '../Body/Body.css'

const Body = () => {
  return (
    <div>
       <div className='body'>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h1>We Are Consulting For Your Business Finances</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam unde fugit provident blanditiis,
                        error commodi aperiam hic. Nostrum atque natus,
                        quam sint incidunt perspiciatis possimus quis adipisci itaque hic.</p>

                    <button className="bttn">Start Now</button>
                </div>
                <div className="imgg">
                    <img width={400} src="https://img.freepik.com/free-vector/illustration-diverse-people-arms-around-each-other_53876-26693.jpg?w=2000" alt="" />
                </div>
            </div>

    </div>
  )
}

export default Body
