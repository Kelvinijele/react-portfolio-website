import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About emmanuel image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                5 Years + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Sc. Computer Science <br /> & Engineering. <br /> M.Sc. In Progress
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                2640+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I'm a problem solver with a background in Computer Science & Engineering, 
            Product Design, & Entrepreneurship. Alongside System Administration, i'm Experienced Front-End JavaScript Developer with 5+ years of experience and a track record of creating flagship products. Proficient in React, Vue.js, PHP, WordPress, Recoil, and Git. Demonstrated leadership in overseeing multiple large-scale projects.
          </p>
          <p>
            In recent years, I've worked in the Coaching Industry with fintech's & 
            in the Banking industires, Education sector were I thrive in a role
            where I can use my broad knowledge to break down complex problems
            and where the tasks require interaction between Design &
            Functionality.
          </p>
          <p>
            After a career focused on the FrontEnd Developer side of IT, I've immersed
            myself in the technical side, and become a fullstack developer
            through Academic Work's 12-week intensive training in JavaScript.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
