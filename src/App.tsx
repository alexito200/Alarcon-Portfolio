import './App.css'
import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Toggle } from "./context/ThemeToggle";
import { ReactTyped } from "react-typed";
import  BackToTopButton  from "./components/topButton";
import TechStack from './components/techStack';


export const App = () => {
  const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : true;
  const [isDark, setIsDark] = useState(savedTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (

    <>
      <div id='container' data-theme={isDark ? "dark" : "light"}>
        
        {/* --------------------------------------------------- Navbar Section --------------------------------------------------- */}
        <nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid d-flex justify-content-between align-items-center w-100">
    <a className="navbar-brand" href="/">Alarcon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbarNavAltMarkup">
      <div className="d-flex justify-content-center flex-grow-1">
        <div className="barNav navbar-nav" id="navButtons">
          <a className="nav-item nav-link py-2 px-2" href="#projectContainer">Projects</a>
          <a className="nav-item nav-link py-2 px-2" href="#aboutContainer">About</a>
          <a className="nav-item nav-link py-2 px-2" href="#xpContainer">Skills</a>
          <Link className="nav-item nav-link py-2 px-2" to="/contact">Contact</Link>
        </div>
      </div>

      <div className="navbar-nav ms-lg-auto mt-2 mt-lg-0">
  <div 
    className="nav-item nav-link px-4 py-4" 
    id="themeButton"
    onClick={() => setIsDark(!isDark)}
    style={{ cursor: "pointer" }}
  >
    <Toggle isChecked={isDark} handleChange={setIsDark} />
  </div>
</div>

    </div>
  </div>
</nav>


        {/* --------------------------------------------------- Hero Section --------------------------------------------------- */}
        <div id="heroContainer" className="d-flex flex-column flex-lg-row justify-content-center align-items-center mx-md-5">
          <div>
            <img id="personImage" src="./profile-picture.jpeg" alt="Profile" className="img-fluid" />
          </div>
          <div id="heroTextContainer" className="text-center text-lg-start">
            <div id="typewriterContainer">
              <h1>Hi, It&#39;s <span>Alex</span></h1>
              <p>
  I&apos;m a{" "}
  <ReactTyped
    strings={[
      '<span class="typed-color-1">Web Designer</span>',
      '<span class="typed-color-2">Software Engineer</span>',
      '<span class="typed-color-3">National Guardsman</span>',
      '<span class="typed-color-4">Fullstack Developer</span>'
    ]}
    typeSpeed={140}
    loop
    smartBackspace
  />
</p>

            </div>
            <div id="typewriterContainer2">
              <p>
              From <strong>Air Force discipline</strong> to <strong>full-stack efficiency</strong>—versatile, team-driven, and ready to build.
              </p>
            </div>

            <Button 
              className="btn" 
              id="contactButton" 
              onClick={() => document.getElementById("projectContainer")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Projects
            </Button>

            <BackToTopButton />
          </div>
        </div>

        {/* --------------------------------------------------- Projects Section --------------------------------------------------- */}
        <div id="projectContainer" className="container ">
  <h1 id="projectsHeader" className="text-center mb-5">Code in <span>Action</span></h1>

  <div id="projectCardContainer" className="row g-4">
  
  {/* E-commerce App */}
  <div className="col-12 col-sm-5.5 col-md-6 col-lg-4 d-flex topCard">
    <div className="card projectCard d-flex flex-column w-100">
      <a href='https://react-flask-project-qxux.vercel.app/' target="_blank" rel="noopener noreferrer" className="projectImgContainer">
        <img src="./react-flask.jpeg" className="card-img-top" alt="React Flask Project" />
      </a>
      <div className="card-body projectCardItem d-flex flex-column flex-grow-1">
        <h5 className="card-title">E-commerce App</h5>
        <p className="card-text techStack">React, TypeScript, HTML, CSS</p>
        <p className="card-text flex-grow-1 projectDesc">Shop around with a mock E-commerce app complete with customers, products, orders, and a shopping cart.</p>
        <div className="icon-container2">
          <a href="https://github.com/alexito200/react-flask-project" target="_blank" rel="noopener noreferrer" className="tooltip-container">
            <i className="bi bi-github gitIcon"></i>
            <span className="tooltip">View on GitHub</span>
          </a>
          <a href="https://react-flask-project-qxux.vercel.app/" target="_blank" rel="noopener noreferrer" className="tooltip-container">
            <i className="bi bi-arrow-up-right-circle-fill circleIcon"></i>
            <span className="tooltip">Visit Project</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Marvel API */}
  <div className="col-12 col-sm-6.5 col-md-6 col-lg-4 d-flex topCard">
    <div className="card projectCard d-flex flex-column w-100">
      <a href="https://comic-book-library-al9bibs1m-alex-alarcons-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="projectImgContainer">
        <img src="./marvel-library-home.png" className="card-img-top" alt="Marvel API" />
      </a>
      <div className="card-body projectCardItem d-flex flex-column flex-grow-1">
        <h5 className="card-title">Marvel API</h5>
        <p className="card-text techStack">React, HTML, CSS</p>
        <p className="card-text flex-grow-1 projectDesc">Search for your favorite Marvel character or comic book with this website connected to the Marvel API.</p>
        <div className="icon-container2">
          <a href="https://github.com/alexito200/comic-book-library" target="_blank" rel="noopener noreferrer" className="tooltip-container">
            <i className="bi bi-github gitIcon"></i>
            <span className="tooltip">View on GitHub</span>
          </a>
          <a href="https://comic-book-library-al9bibs1m-alex-alarcons-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="tooltip-container">
            <i className="bi bi-arrow-up-right-circle-fill circleIcon"></i>
            <span className="tooltip">Visit Project</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Task Manager App */}
  <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex order-md-last mx-auto topCard">
    <div className="card projectCard d-flex flex-column w-100">
      <a href="https://task-mngt-app-rjmb.vercel.app/" target="_blank" rel="noopener noreferrer" className="projectImgContainer">
        <img src="./new-taskmngt-home.png" className="card-img-top" alt="Task Management App" />
      </a>
      <div className="card-body projectCardItem d-flex flex-column flex-grow-1">
        <h5 className="card-title">Task Manager App</h5>
        <p className="card-text techStack">TypeScript, JS, HTML, CSS, Auth0</p>
        <p className="card-text flex-grow-1 projectDesc">The Task Management App allows users to log in via Auth0, create, view, edit, and manage tasks through a structured dashboard.</p>
        <div className="icon-container2">
          <a href="https://github.com/alexito200/task-mngt-app" target="_blank" rel="noopener noreferrer" className="tooltip-container">
            <i className="bi bi-github gitIcon"></i>
            <span className="tooltip">View on GitHub</span>
          </a>
          <a href="https://task-mngt-app-rjmb.vercel.app/" target="_blank" rel="noopener noreferrer" className="tooltip-container">
            <i className="bi bi-arrow-up-right-circle-fill circleIcon"></i>
            <span className="tooltip">Visit Project</span>
          </a>
        </div>
      </div>
    </div>
  </div>

</div>


</div>



        {/* --------------------------------------------------- About Section --------------------------------------------------- */}
          <div id="aboutContainer">
          <h1 id='aboutHeader'>A Dev & <span>A Dream</span></h1>
        {/* <div className="wrapper"> */}
  <div className="one-item">
  <div className="about-text">
    <div className="aboutPContainer">
      <p>
        What makes me different? My drive. At twenty-eight, I decided to join the Air Force National Guard &#40;part-time&#41;, quit my civilian job, and pursue a career I knew little about. I've decided to give everything to this pursuit and I won't settle. My journey began September of &#39;24 where I started my software engineering cohort at Coding Temple. Six long months later and I have graduated. I truly believe that nothing is impossible if you put your mind to it. 
      </p>
      </div>
  <div className="about-image">
      <img src="./air-force-profile-picture.jpg" alt="Your Name" />
  </div>
    </div>

  </div>
  {/* </div> */}



</div>



        {/* --------------------------------------------------- Skills/Experience Section --------------------------------------------------- */}
        <div id="xpContainer">
          <h1 id="skillsHeader">My Competitive <span>Edge</span></h1>
          <div className="wrapper2">
        <div className="three-item">
  <div className="about-cards">
    {/* Fullstack Development */}
    <div className="custom-card-wrapper">
      <div className="custom-card">
        <i className="bi bi-code-slash"></i>
        <h4>Fullstack Development</h4>
        <p>Combining elegant front-end design with powerful back-end functionality to deliver seamless web experiences from concept to launch.</p>
      </div>
    </div>

    {/* Software Engineering */}
    <div className="custom-card-wrapper">
      <div className="custom-card">
        <i className="bi bi-gear-fill"></i>
        <h4>Software Engineering</h4>
        <p>I specialize in creating scalable solutions that enhance efficiency, support growth, and ensure long-term adaptability for evolving technological needs.</p>
      </div>
    </div>

    {/* Problem-Solving */}
    <div className="custom-card-wrapper">
      <div className="custom-card">
        <i className="bi bi-tools"></i>
        <h4>Solution Bringer</h4>
        <p>I've battled through the <a href="https://www.codewars.com/users/alexito17/stats" className="codewarsText">Codewars</a> ranks, slicing through katas with <strong>408 honor</strong> to my name and a <strong>5 kyu belt</strong>—just enough to flex, but not enough to retire.</p>
      </div>
    </div>
  </div>
</div>

  <TechStack />

</div>

</div>

        {/* --------------------------------------------------- Footer Section --------------------------------------------------- */}

        <footer className="footer mt-auto">
    <div className="footerContainer">
        <p className="mb-2 footer-text">Designed and Coded by <span>Alex Alarcon</span></p>
        <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/alexito200" className="footer-icon" aria-label="GitHub">
                <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/alex-alarcon-82fb088/" className="footer-icon" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:your-email@example.com?subject=Let's Connect&body=Hi Alex, I found your portfolio and I'd love to connect!" 
  className="footer-icon" 
  aria-label="Email">
    <i className="bi bi-envelope"></i>
</a>
        </div>
    </div>
</footer>


      </div>
    </>
  )
}

export default App