import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='myProjects'>
      <div className="movie_recommendation project">
        <div className="project_desc">
          <h2 className='pb-4'>Movie Recommendation Model</h2>
          <p>The aim of the model is to suggest user movies by analyzing the genres, casts, directors etc based on the example movie they provide.
            <br />The model uses Scikit-learn for vectorization and cosine similarities to compute distance between feature vectors.
          </p>
        </div>
        <div className="project_img">
          <img className="project_img" src="movie_recom-img.jpg" alt="project preview" />
        </div>
      </div>

      <div className="todo project">
        <div className="project_desc">
          <h2 className='pb-4'>TODO APP</h2>
          <p>Enable users to schedule their daily tasks. <br />
          The app maintains a clean and easy-to-use interface so users can focus on their tasks without distractions. <br />
          It uses react's various hooks, like useState() and useRef().
          </p>
        </div>
        <div className="project_img">
          <img className="project_img" src="todo_img.webp" alt="project preview" />
        </div>
      </div>

      <div className="music project">
        <div className="project_desc">
          <h2 className='pb-4'>Music Website</h2>
          <p>The goal of the project is to create visually appealing and responsive music website with the help of HTML, CSS and Javascript. <br />
          The website is not completed yet.
          </p>
        </div>
        <div className="project_img">
          <img className="project_img" src="music_img.avif" alt="project preview" />
        </div>
      </div>
    </div>
  )
}

export default Projects
