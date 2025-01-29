import React from 'react'
import './Home.css';

const Home = () => {

  return (
    <div>
      <div className="body text-blue-100 h-940px">

        <div className="main">
          <div className="bg-img"><img className='fade-img' src="tech-portfolio-background.jpg" alt="" />
          </div>
          <div className="photo pfp"></div>
          <div className="info">
            <div className="name text-4xl font-bold ">Hi, there! <br />I am <br /><h2>Iqra Rahman</h2></div>
            <div className="desc h-44">I have a strong passion for Web Development.
               I’ve been actively applying these skills in projects to deepened my development skills. <br/>
               Alongside web development, I am also diving into the exciting world of Machine Learning 
               and Data Science.</div>
          </div>
        </div>
        <div className="line1 relative w-[70%] bg-amber-50"><p></p></div>  
        <div className="skills">
          <div className="head flex justify-center"><h2 className='text-3xl font-bold'>Skills</h2></div>
          <div className="skillCards p-6 m-1.5 flex w-full justify-evenly">
            <div className=" web_dev cards w-[30%]">
              <h2>Web Development</h2>
              <p>I'm proficient in frontend development, with hands-on experience in HTML, CSS, JavaScript and React. <br />
                 At the moment, I'm diving into backend development to broaden my skills</p>
            </div>
            <div className="languages cards w-[30%]">
            <h2>Programming Languages</h2>
              <p>I have a solid understanding of JAVA and PYTHON. <br />
              Along with that I have also used Python libraries like NumPy, pandas, and Matplotlib</p>
            </div>
            <div className="ml cards w-[30%]"><h2>Machine Learning</h2>
            <p>My approach to machine learning includes understanding the dataset, cleaning and preprocessing it, and selecting appropriate algorithms. <br />
                I’m passionate about the endless possibilities in this field and eager to dive deeper</p></div>
          </div>
        </div>

        <div className="footer flex justify-evenly">
          <p>© 2025 Iqra Rahman. All rights reserved.</p>
          <p>Let's collaborate!</p>
          <p>Find me on <a className='text-blue-300' href="https://www.linkedin.com/in/iqra-rahman-6814812ab" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>email: rahmaniqra697@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Home
