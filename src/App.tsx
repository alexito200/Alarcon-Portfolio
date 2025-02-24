import './App.css'
import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Toggle } from "./context/ThemeToggle";
import { ReactTyped } from "react-typed";
import  BackToTopButton  from "./components/topButton";


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
          <a className="nav-item nav-link py-2 px-2" href="#experience">Skills</a>
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
              From Air Force discipline to full-stack efficiency—versatile, team-driven, and ready to build.
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
  <h1 id="projectsHeader" className="text-center mb-5">Projects</h1>

  <div id="projectCardContainer" className="row g-4">
    <div className="col-12 col-sm-5.5 col-md-6 col-lg-4 d-flex topCard">
      <div className="card projectCard d-flex flex-column w-100">
        <a href='https://react-flask-project-qxux.vercel.app/' target="_blank" rel="noopener noreferrer">
          <img src="./react-flask.jpeg" className="card-img-top" alt="React Flask Project" />
        </a>
        <div className="card-body projectCardItem d-flex flex-column flex-grow-1">
          <h5 className="card-title">E-commerce App</h5>
          <p className="card-text techStack">React, TypeScript, HTML, CSS</p>
          <p className="card-text flex-grow-1">Shop around with a mock E-commerce app complete with customers, products, orders, and a shopping cart.</p>
          <div className="icon-container2">
            <a href="https://github.com/alexito200/react-flask-project" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github gitIcon"></i>
              <div className="comment-box">View Source Code</div>
            </a>
            <a href="https://react-flask-project-qxux.vercel.app/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-arrow-up-right-circle-fill circleIcon"></i>
              <div className="comment-box">Live Demo</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6.5 col-md-6 col-lg-4 d-flex">
      <div className="card projectCard d-flex flex-column w-100">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./psylocke-home.png" className="card-img-top" alt="Marvel API" />
        </a>
        <div className="card-body projectCardItem d-flex flex-column flex-grow-1">
          <h5 className="card-title">Marvel API</h5>
          <p className="card-text techStack">React, HTML, CSS</p>
          <p className="card-text flex-grow-1">Search for your favorite Marvel character or comic book with this website connected to the Marvel API.</p>
          <div className="icon-container2">
            <a href="https://github.com/alexito200/comic-book-library" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github gitIcon"></i>
              <div className="comment-box">View Source Code</div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-arrow-up-right-circle-fill circleIcon"></i>
              <div className="comment-box">Live Demo</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex order-md-last mx-auto">
      <div className="card projectCard d-flex flex-column w-100">
        <a href="https://task-mngt-app-rjmb.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="./task-mngt-app-login.png" className="card-img-top" alt="Task Management App" />
        </a>
        <div className="card-body projectCardItem d-flex flex-column flex-grow-1">
          <h5 className="card-title">Task Manager App</h5>
          <p className="card-text techStack">TypeScript, JS, HTML, CSS, Auth0</p>
          <p className="card-text flex-grow-1">The Task Management App allows users to log in via Auth0, create, view, edit, and manage tasks through a structured dashboard.</p>
          <div className="icon-container2">
            <a href="https://github.com/alexito200/task-mngt-app" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github gitIcon"></i>
              <div className="comment-box">View Source Code</div>
            </a>
            <a href="https://task-mngt-app-rjmb.vercel.app/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-arrow-up-right-circle-fill circleIcon"></i>
              <div className="comment-box">Live Demo</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        {/* --------------------------------------------------- About Section --------------------------------------------------- */}
          <h1 id='aboutHeader'>About Me</h1>
        <div className="wrapper">
  <div className="one-item">
  <div className="about-text">
      <p>
        I’m a **Full-Stack Developer** passionate about building scalable, user-friendly applications. 
        With a background in the **Air National Guard**, I bring discipline, adaptability, and problem-solving to every project. 
        My expertise includes **React, TypeScript, Firebase, Python, and SQL**, and I love turning ideas into impactful solutions.
      </p>
    </div>
  </div>
  <div className="two-item">
  <div className="about-image">
      <img src="./air-force-profile-picture.jpg" alt="Your Name" />
    </div>
  </div>
  <div className="three-item">
  <div className="about-cards">
      <div className="custom-card">
        <i className="bi bi-code-slash"></i>
        <h4>Fullstack Development</h4>
        <p>Combining elegant front-end design with powerful back-end functionality to deliver seamless web experiences from concept to launch.</p>
      </div>

      <div className="custom-card">
        <i className="bi bi-gear-fill"></i>
        <h4>Software Engineering</h4>
        <p>I specialize in creating scalable solutions that enhance efficiency, support growth, and ensure long-term adaptability for evolving technological needs.</p>
      </div>

      <div className="custom-card">
        <i className="bi bi-puzzle-fill"></i>
        <h4>Problem-Solving</h4>
        <p>I specialize in optimizing workflows and enhancing efficiency by implementing streamlined processes, automation, and scalable solutions that improve productivity and performance.</p>
      </div>
    </div>
  </div>
  <div className="four-item">
  <div className="tech-stack">
  {[
    "./html.png",
    "./css.png",
    "./js.png",
    "./react.png",
    "./vite.png",
    "./firebase.png",
    "./python.png",
    "./mysql.png",
    "./flask.png",
    "./github.png",
    "./figma.png",
    "./redux.png",
    "./vs-code.png",
    "./typescript.png",
    "./bootstrap.png",
    "./react-bootstrap.png",
    "./postman.png",
    "./vercel.png",
  ].map((src, index) => (
    <div key={index} className="tech-card">
      <img src={src} alt={`Tech ${index}`} className="tech-icon" />
    </div>
  ))}
</div>

  </div>
</div>



        {/* --------------------------------------------------- Experience Section --------------------------------------------------- */}
        {/* <div className="wrapper">
  <div className="one-item">
  <div className="about-text">
      <p>
        I’m a **Full-Stack Developer** passionate about building scalable, user-friendly applications. 
        With a background in the **Air National Guard**, I bring discipline, adaptability, and problem-solving to every project. 
        My expertise includes **React, TypeScript, Firebase, Python, and SQL**, and I love turning ideas into impactful solutions.
      </p>
    </div>
  </div>
  <div className="two-item">
  <div className="about-image">
      <img src="./profile-picture.jpeg" alt="Your Name" />
    </div>
  </div>
  <div className="three-item">
  <div className="about-cards">
      <div className="custom-card">
        <i className="bi bi-laptop"></i>
        <h4>Web Development</h4>
        <p>Building modern web applications.</p>
      </div>

      <div className="custom-card">
        <i className="bi bi-gear-fill"></i>
        <h4>Software Engineering</h4>
        <p>Creating scalable solutions.</p>
      </div>

      <div className="custom-card">
        <i className="bi bi-graph-up"></i>
        <h4>Problem-Solving</h4>
        <p>Optimizing workflows & efficiency.</p>
      </div>
    </div>
  </div>
  <div className="four-item">
  <div className="tech-stack">
      {Array.from({ length: 18 }).map((_, index) => (
        <div key={index} className="tech-card">
          <i className="bi bi-code-slash"></i>
        </div>
      ))}
    </div>
  </div>
</div> */}

        
        {/* <section id="experience">
  <h1 id="xpHeader"className="mb-5">Skills</h1>
  <div id="cardsContainer">
    <div id="cards">
      <div className="card">
        <div className="icon-text-container">
          <img src="./html.png" alt="HTML" className="tech-logo" />
          <span>HTML</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./css.png" alt="CSS" className="tech-logo" />
          <span>CSS</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./js.png" alt="JavaScript" className="tech-logo" />
          <span>JavaScript</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./react.png" alt="React" className="tech-logo" />
          <span>React</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./postman.png" alt="Postman" className="tech-logo" />
          <span>Postman</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./python.png" alt="Python" className="tech-logo" />
          <span>Python</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./mysql.png" alt="MySQL" className="tech-logo" />
          <span>MySQL</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./figma.png" alt="Figma" className="tech-logo" />
          <span>Figma</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./bootstrap.png" alt="Bootstrap" className="tech-logo" />
          <span>Bootstrap</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./react-bootstrap.png" alt="React-Bootstrap" className="tech-logo" />
          <span>React-Bootstrap</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./redux.png" alt="Redux" className="tech-logo" />
          <span>Redux</span>
        </div>
      </div>
      <div className="card">
        <div className="icon-text-container">
          <img src="./typescript.png" alt="TypeScript" className="tech-logo" />
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  </div>
</section> */}

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
