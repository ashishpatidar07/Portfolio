import React from "react";
import "./Works.css"; 
import realEstate from '../../assets/real-Estate.jpg'; 
import todoList from '../../assets/todoList.webp'; 


const Works = () => {
  return (
    <section id="works">
      <span id="workTittle">My Portfolio</span>
      <span id="workDesc">
        Welcome to my portfolio! Here, you'll find a collection of projects that
        showcase my skills and creativity in web design, UI/UX design, and app
        development. Each project reflects my commitment to crafting
        user-friendly, responsive, and visually engaging solutions tailored to
        specific goals and audiences.
      </span>
      <br />
      <br />

      {/* Project Section */}
      <section className="projects">
        <div className="projects-container">
          <h2>My Projects</h2>
          <div className="projects-list">
            {/* Project 1 */}
            <div className="project-card">
              <img
                src={realEstate} 
                alt="Real Estate Application"
                className="project-image"
              />
              <div className="project-content">
                <h3>Real Estate</h3>
                <p>
                  A web application for browsing and managing real estate
                  listings with an intuitive UI.
                </p>
                <div className="project-links">
                  <a href="https://github.com/ashishpatidar07/Real_Estate_project" className="project-link-1">
                    View Code
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <img
                src={todoList}
                alt="To-Do List Application"
                className="project-image"
              />
              <div className="project-content">
                <h3>To-Do List</h3>
                <p>
                  A simple and intuitive to-do list application to track your
                  daily tasks.
                </p>
                <div className="project-links">
                  <a href="https://github.com/ashishpatidar07/Todo-list" className="project-link-2">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Works;
