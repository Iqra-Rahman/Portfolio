// import React from 'react'
// import './Home.css';

// const Home = () => {

//   return (
//     <div>
//       <div className="body text-blue-100 h-940px">

//         <div className="main">
//           <div className="bg-img"><img className='fade-img' src="tech-portfolio-background.jpg" alt="" />
//           </div>
//           <div className="photo pfp"></div>
//           <div className="info">
//             <div className="name text-4xl font-bold ">Hi, there! <br />I am <br /><h2>Iqra Rahman</h2></div>
//             <div className="desc h-44">I have a strong passion for Web Development.
//                I’ve been actively applying these skills in projects to deepened my development skills. <br/>
//                Alongside web development, I am also diving into the exciting world of Machine Learning 
//                and Data Science.</div>
//           </div>
//         </div>
//         <div className="line1 relative w-[70%] bg-amber-50"><p></p></div>  
//         <div className="skills">
//           <div className="head flex justify-center"><h2 className='text-3xl font-bold'>Skills</h2></div>
//           <div className="skillCards p-6 m-1.5 flex w-full justify-evenly">
//             <div className=" web_dev cards w-[30%]">
//               <h2>Web Development</h2>
//               <p>I'm proficient in frontend development, with hands-on experience in HTML, CSS, JavaScript and React. <br />
//                  At the moment, I'm diving into backend development to broaden my skills</p>
//             </div>
//             <div className="languages cards w-[30%]">
//             <h2>Programming Languages</h2>
//               <p>I have a solid understanding of JAVA and PYTHON. <br />
//               Along with that I have also used Python libraries like NumPy, pandas, and Matplotlib</p>
//             </div>
//             <div className="ml cards w-[30%]"><h2>Machine Learning</h2>
//             <p>My approach to machine learning includes understanding the dataset, cleaning and preprocessing it, and selecting appropriate algorithms. <br />
//                 I’m passionate about the endless possibilities in this field and eager to dive deeper</p></div>
//           </div>
//         </div>

//         <div className="footer flex justify-evenly">
//           <p>© 2025 Iqra Rahman. All rights reserved.</p>
//           <p>Let's collaborate!</p>
//           <p>Find me on <a className='text-blue-300' href="https://www.linkedin.com/in/iqra-rahman-6814812ab" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
//           <p>email: rahmaniqra697@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home


import React from "react";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLinkedin, FaGithub, FaGoogle, FaTwitter, FaInstagram, FaCode, FaBrain, FaGlobe} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Profile Section */}
      <div className="sidebar">
        <div className="avatar">
          {/* Replace with your photo */}
          <img src="/images/Generated Image August 31, 2025 - 7_39PM.jpeg" alt="Iqra Rahman" />
        </div>
        <h2 className="name">Iqra Rahman</h2>
        <p className="role">Student</p>

        <div className="line"></div>

        <div className="contact-info">
          <p className = "type">EMAIL</p>
          <p>rahmaniqra697@gmail.com</p>
          {/* <p>📱 +91 9876543210</p>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            GitHub
          </a> */}
        </div>

        <div className="social-icons">
          <div className="flex gap-5 mt-5 text-2xl text-white">
      <a href="https://www.linkedin.com/in/iqra-rahman-6814812ab" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Iqra-Rahman" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/iqra_rahman_13?igsh=YWw1bmVub3RtNzhs" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="content">
        <div className="about">
          <h2>About Me</h2>
          <p>
            Hey there, I am a tech enthusiast who loves turning ideas into impactful digital experiences.
            I enjoy building cool projects and I’m always curious to learn something new.
            I’m currently exploring web development, problem-solving, and building projects from scratch while
            sharpening my coding skills every day.
          </p>
        </div>

        <div className="line2"></div>

        <div className="services">
          <h2>What I'm Doing</h2>
          <div className="cards">
            <div className="card">
              <h3><FaGlobe title="Web Development" /> Web Development</h3>
              <p>High-quality websites with modern UI and functionality.</p>
            </div>
            <div className="card">
              <h3><FaCode title="Coding" /> Programming</h3>
              <p>Proficient in C/C++, Python, JavaScript, and more.</p>
            </div>
            <div className="card">
              <h3><FaBrain  /> Artificial Intelligence</h3>
              <p>Building smart systems that learn, adapt, and create meaningful impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
