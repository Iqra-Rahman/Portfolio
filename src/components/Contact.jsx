// import React from 'react'
// import "./Contact.css"

// const Contact = () => {
//   return (
//     <div className='contact-me'>

//         <div className="contact">
//           <img className='icon' src="mail_logo.png" alt="gmail" />
//           <a href="rahmaniqra697@gmail.com">rahmaniqra697@gmail.com</a>
//         </div>
//         <div className="contact">
//           <img className='icon' src="insta_logo.webp" alt="instagram" />
//           <a href="https://www.instagram.com/iqra_rahman_13?igsh=NmRraDk5eGZxOWNj">@iqra_rahman_13</a>
//         </div>
//         <div className="contact">
//           <img className='icon' src="linkdein2.png" alt="linkdIn" />
//           <a href="https://www.linkedin.com/in/iqra-rahman-6814812ab"> Iqra Rahman</a>
//         </div>
//       </div>
  
//   )
// }

// export default Contact


// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import "./Contact.css";

// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_0daihlq",    // 🔹 From EmailJS Dashboard
//         "template_mqjhj78", // 🔹 Your EmailJS template
//         form.current,
//         "XrUAMlBZfQXG2H7aZ"    // 🔹 Your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           const name = form.current.user_name.value;
//           alert(`✅ Message from ${name} sent successfully!`);
//           console.log(result.text);
//         },
//         (error) => {
//           alert("❌ Failed to Send Message. Try Again.");
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-body">
//       <div className="contact-container">
//         <h2 className="contact-title">Contact Form</h2>
//         <form ref={form} onSubmit={sendEmail} className="contact-form">
//           <div className="form-row">
//             <input type="text" name="user_name" placeholder="Full name" required />
//             <input type="email" name="user_email" placeholder="Email address" required />
//           </div>
//           <input type="text" name="subject" placeholder="Subject" required />
//           <textarea name="message" placeholder="Your Message" required />

//           {/* hidden input for time */}
//           <input 
//             type="hidden" 
//             name="time" 
//             value={new Date().toLocaleString()} 
//           />

//           <button type="submit" className="contact-btn">
//             <span>📨 Send Message</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-body">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">You can reach me anytime on:</p>

        <div className="contact-links">
          <a
            href="mailto:iqrarahman1308@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/iqra-rahman-6814812ab"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com/iqra_rahman_13"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://github.com/Iqra-Rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
