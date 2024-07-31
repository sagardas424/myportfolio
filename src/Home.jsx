import React from "react";
import emoji from "./image/myemoji2.png";
import linkedin from "./image/linkedin.svg"
import github from "./image/github.svg"
import facebook from "./image/facebook.svg"

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="intro">Hii,I am Sagar!</h1>
        <div className="img">
          <img src={emoji} alt="" className="my-img" />
        </div>
        <h1 className="intro1">Front-End Developer</h1>
        <p>I build web apps with love and code beautifully simple designs</p>
      </div>
      <div className="main-content">
        <div className="sub-content">
          <div className="content-part1">
            <div className="about">
              <h1>About me</h1>
              <p>
                As a motivated and detail-oriented fresher in the field of web
                development, I am passionate about creating intuitive and
                visually appealing web applications. With a solid foundation in
                HTML, CSS, JavaScript, and experience with frameworks like
                React, I am eager to apply my skills to real-world projects. I
                am a quick learner, adept at problem-solving, and committed to
                staying updated with the latest industry trends. My goal is to
                contribute effectively to a dynamic team, continuously improve
                my technical abilities, and build innovative solutions that
                enhance user experiences.
              </p>
            </div>
            <div className="skills">
              <h1>Skills</h1>

              <div className="strong">
                <strong>HTML, CSS </strong>
                <div className="hr"></div>
              </div>
              <div className="strong">
                <strong>Javascript, ReactJs</strong>
                <div className="hr2"></div>
              </div>
              <div className="strong">
                <strong>NodeJs, ExpressJs</strong>
                <div className="hr3"></div>
              </div>
              <div className="strong">
                <strong>MoongoDB</strong>
                <div className="hr4"></div>
              </div>
            </div>
          </div>
          <div className="content-part2">
            <div className="education">
              <h1>Education</h1>
              <div className="bca-container">
                <h3>Apprenticeship in Full Stack Development</h3>
                <h4>AcesofTech Academy, Kolkata,India</h4>
                <h6>April 2020 - Present</h6>
                <p>
                   During my apprenticeship, I gained a comprehensive
                  understanding of various web development technologies and
                  tools. I learned JavaScript and honed my skills in building
                  dynamic user interfaces using React.js. I also delved into
                  backend development with Express.js and MongoDB, gaining
                  expertise in creating robust server-side applications.
                  Additionally, I explored third-party libraries such as JSON
                  Web Token for secure authentication, Multer for handling file
                  uploads, Cloudinary for image management, and Axios for making
                  HTTP requests. This experience has equipped me with a
                  versatile skill set, enabling me to develop full-stack
                  applications efficiently and effectively.
                </p>
              </div>
            </div>
            <div className="love">
              <h1>What else I Love❤️</h1>
              <p>
                In my spare time, you will find me reading books, writing
                articles, contributing to community and occasionally cooking
                especially with friends and family.
              </p>
              <p>
                I am a social person, I like listening to stories and real life
                experiences. Travelling and exploring lands are always my
                favorite break from work.
              </p>
            </div>
          </div>
          <div className="content-part3">
            <div className="contact">
              <h1>Contact</h1>
              <p>Guwahati, India</p>
              <p>Kolkata, India</p>
              <p>sagardas4work@gmail.com</p>
              <a href="https://www.linkedin.com/in/sagar-das-87669625a/">
          <img src={linkedin} alt="" className="linkedin-icons" />
          </a>
          <a href="https://github.com/sagardas424">
          <img src={github} alt="" className="github-icons" />
          </a>
          <a href="https://www.facebook.com/sagartitu.das?mibextid=LQQJ4d">
          <img src={facebook} alt="" className="facebook-icons" />
          </a>
            </div>
            <div className="experience">
              <h1>Experience</h1>
              <div className="exp-container">
                <h3>Bachelors in Computer Application</h3>
                <h4>Gauhati University, Guwahati,India</h4>
                <h6>September 2020 - Present</h6>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-part4">
        <div className="project">
          <h1>PROJECTS</h1>
          <h4>1. MY PORTFOLIO PROJECT</h4>
          <p>
            I developed a portfolio website using HTML, CSS, and
            React.js. It showcases my web development skills, projects, and
            experiences, featuring interactive elements and smooth navigation.
            The site highlights my expertise in front-end development and my
            commitment to creating user-friendly web applications. Explore my
            portfolio to learn more.
          </p>
          <h4>2. NEWS PORTAL PROJECT</h4>
          <p>
          I am developing a comprehensive News Portal utilizing HTML,
                  CSS, and React.js for the frontend, and Express.js and MongoDB
                  for the backend. The project incorporates various libraries,
                  including JSON Web Token for secure authentication and
                  Cloudinary for efficient image uploading. This project aims to
                  deliver a seamless user experience by providing up-to-date
                  news content, user authentication, and multimedia management.
                  Through this endeavor, I am honing my skills in full-stack
                  development, learning to integrate different technologies, and
                  ensuring a responsive and user-friendly interface for optimal
                  user engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
