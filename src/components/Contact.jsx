import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-me'>

        <div className="contact">
          <img className='icon' src="mail_logo.png" alt="gmail" />
          <a href="rahmaniqra697@gmail.com">rahmaniqra697@gmail.com</a>
        </div>
        <div className="contact">
          <img className='icon' src="insta_logo.webp" alt="instagram" />
          <a href="https://www.instagram.com/iqra_rahman_13?igsh=NmRraDk5eGZxOWNj">@iqra_rahman_13</a>
        </div>
        <div className="contact">
          <img className='icon' src="linkdein2.png" alt="linkdIn" />
          <a href="https://www.linkedin.com/in/iqra-rahman-6814812ab"> Iqra Rahman</a>
        </div>
      </div>
  
  )
}

export default Contact
