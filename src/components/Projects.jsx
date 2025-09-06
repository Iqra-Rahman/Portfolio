
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "AI Powered Chatbot",
      description:
        "An AI-driven medical assistant built to provide users with instant, informative, and conversational healthcare guidance.",
      img: "images/Screenshot 2025-09-05 202906.png",
      demo: "https://medi-bot-vtdi.onrender.com/",
      details: "https://github.com/Iqra-Rahman/Medi-Bot",
    },
    {
      title: "TODO APP",
      description:
        "A lightweight and intuitive task manager that allows you to add tasks, mark them as completed, and delete them when no longer needed. Clean, distraction-free, and designed to help you stay organized.",
      img: "images/Screenshot 2025-09-05 205715.png",
      demo: "https://todo-app-six-beta-49.vercel.app/",
      details: "https://github.com/Iqra-Rahman/TODO-APP",
    },
    {
      title: "Music Website (Spotify Clone)",
      description:
        "A responsive Spotify-inspired music website with a clean design, interactive controls, and a seamless user experience across all devices.",
      img: "images/Screenshot 2025-09-05 210130.png",
      demo: "",
      details: "https://github.com/Iqra-Rahman/Music-Website-SpotifyClone-",
    },
    {
      title: "Movie Recommendation Model",
      description:
        "A model that suggests movies by analyzing genres, casts, directors etc. Uses Scikit-learn for vectorization and cosine similarities to compute distance between feature vectors.",
      img: "images/Generated Image September 05, 2025 - 8_46PM.jpeg",
      demo: "",
      details: "https://github.com/Iqra-Rahman/Movie-Recommendation-Engine---Machine-Learning-",
    },
    {
      title: "Resume Recommendation Model",
      description:
        "A machine learning model that recommends the best resume format based on job descriptions. Utilizes NLP techniques to analyze and match key skills and qualifications.",
      img: "images/Generated Image September 05, 2025 - 8_51PM.jpeg",
      demo: "",
      details: "https://github.com/Iqra-Rahman/Resume-Recommendation",
    },
  ];

  return (
    <div className="myProjects">
      {projectData.map((project, index) => (
        <div className="projectCard" key={index}>
          <img src={project.img} alt={project.title} className="projectImage" />
          <h2 className="projectTitle">{project.title}</h2>
          <p className="projectDesc">{project.description}</p>
          <div className="projectBtns">
            {project.demo && project.demo.trim() !== "" ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btnActive"
              >
                Live Demo
              </a>
            ) : (
              <span className="btnDisabled">Live Demo</span>
            )}
            <a
              href={project.details}
              target="_blank"
              rel="noopener noreferrer"
              className="btnActive"
            >
              Details →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
