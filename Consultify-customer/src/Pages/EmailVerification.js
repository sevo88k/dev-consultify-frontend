import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EmailVerification() {
  return (
    <>
      <div className='container'>
      <div className='verify_email_box'>
        <div className='email_box_v'>
            <img src={require("../assets/img/greenchecked.png")} className='img-fluid' />
            
            <h2>Thank you !</h2>
            <p>Your submission has been sent</p>
            <NavLink className="email_back" to="/">Home</NavLink>
        </div>
     </div>
           </div>
    </>
  )
}
