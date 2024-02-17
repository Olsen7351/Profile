import React from "react";
import "../CSS/AboutMe.css";
import profileImage from "../Images/profilePicture.jpg";

function AboutMe() {
  return (
    <div className="about-me-page">
      <div className="about-me-container">
        <div className="about-me-card">
          <h3 className="about-me-title">
            <strong>About Me</strong>
          </h3>
          <div className="about-me-info">
            <p>
              I am a student at VIA University College. I am currently studying
              Computer Science on 4rd semester. I am currently learning about
              web development, embbeded software, algorithms, datastructures and
              DevOps in the context to Cloud computing and CI/CD, to bind it all
              together we have a semester project where we are working in large
              groups to simulate a company team. We are using Scrum as our
              project management tool. In the project we are working in one big
              team with 3 small teams, each team has a specific task to solve. I
              am in the team that is responsible for the backend of the project.
              <br /> <br />
              In my free time I like to do a lot of sport and work on creative
              wood hobby projects. My favorite sport right now is Padeltennis, I
              also like to go for a run or a bike ride.
              <br /> <br />I am also a big fan of the outdoors and I like to go
              on hikes and camping trips.
            </p>
          </div>
        </div>
      </div>

      <div className="about-me-container">
        <div className="about-me-card">
          <div className="about-me-info">
            <img src={profileImage} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="about-me-container">
        <div className="about-me-card">
          <h3 className="about-me-title">
            <strong>Contact Information</strong>
          </h3>
          <div className="about-me-info">
            <div className="about-me-field">
              <label htmlFor="firstName" className="about-me-label">
                First Name:
              </label>
              <p className="about-me-value">Jens</p>
            </div>
            <div className="about-me-field">
              <label htmlFor="lastName" className="about-me-label">
                Last Name:
              </label>
              <p className="about-me-value">Olsen</p>
            </div>
            <div className="about-me-field">
              <label htmlFor="phone" className="about-me-label">
                Phone Number:
              </label>
              <p className="about-me-value">+45 21 12 59 50</p>
            </div>
            <div className="about-me-field">
              <label htmlFor="email" className="about-me-label">
                Email:
              </label>
              <p className="about-me-value">331187@via.dk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
