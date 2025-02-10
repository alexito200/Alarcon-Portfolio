import './App.css'
import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Toggle } from "./context/ThemeToggle";
import { ReactTyped } from "react-typed";


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
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center w-100">
          <a className="navbar-brand" href="/">Alarcon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="d-flex justify-content-center flex-grow-1">
              <div className="barNav navbar-nav" id="navButtons">
                <a className="nav-item nav-link" href="#aboutContainer">About</a>
                <a className="nav-item nav-link" href="#xpContainer">Experience</a>
                <a className="nav-item nav-link" href="#projectContainer">Projects</a>
                <Link className="nav-item nav-link" to="/contact">Contact</Link>
              </div>
            </div>
          </div>

          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" id="themeButton" href="#">
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
            </a>
          </div>

        </div>
        </nav>

        {/* --------------------------------------------------- Hero Section --------------------------------------------------- */}
        <div id="heroContainer" className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div>
            <img id="personImage" src="./profile-picture.jpeg" alt="Profile" className="img-fluid" />
          </div>
          <div id="heroTextContainer" className="text-center text-lg-start">
            <div id="typewriterContainer">
              <h1>
              I&apos;m{" "}
              <ReactTyped strings={["Alex Alarcon"]} typeSpeed={100} loop />
              </h1>
              <p>Full Stack Developer | Passionate about Web Technologies</p>
            </div>
            <div id="typewriterContainer2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut iure dignissimos alias temporibus est aliquid eaque. Consequuntur, facilis in!
              </p>
            </div>
            <Link to="/contact" className="link-button">
              <Button className="btn" id="contactButton">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* --------------------------------------------------- About Section --------------------------------------------------- */}
        <div id="aboutContainer" className="container py-5">
          <h1 id="aboutHeader"className="text-center mb-5">About Me</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="custom-card p-4" id="firstPointContainer">
                  <div className="icon-container">
                      <i className="bi bi-laptop"></i>
                  </div>
                  <h4 className="mt-2">Web Development</h4>
                  <p>Build modern, responsive, and efficient websites with the latest technologies.</p>
              </div>
            </div>

            <div className="col">
              <div className="custom-card p-4" id="secondPointContainer">
                  <div className="icon-container">
                      <i className="bi bi-gear-fill"></i>
                  </div>
                  <h4 className="mt-2">Software Engineering</h4>
                  <p>Design and develop high-quality software solutions with best practices.</p>
              </div>
            </div>

            <div className="col">
              <div className="custom-card p-4" id="thirdPointContainer">
                  <div className="icon-container">
                      <i className="bi bi-graph-up"></i>
                  </div>
                  <h4 className="mt-2">Data Analytics</h4>
                  <p>Analyze and interpret data to drive business insights and decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------- Experience Section --------------------------------------------------- */}
        {/* <div id="xpContainer" className="container py-5">
          <h1 className="text-center">Experience</h1>
          <div className="logos">
            <div className="logos-slide">
              <img src="./html.png" alt="HTML" className="tech-logo" />
              <img src="./css.png" alt="CSS" className="tech-logo"/>
              <img src="./figma.png" alt="Figma" className="tech-logo"/>
              <img src="./js.png" alt="JavaScript" className="tech-logo"/>
              <img src="./bootstrap.png" alt="Bootstrap" className="tech-logo"/>
              <img src="./python.png" alt="Python" className="tech-logo"/>
              <img src="./mysql.png" alt="MySQL" className="tech-logo"/>
              <img src="./react.png" alt="React" className="tech-logo"/>
              <img src="./flask.png" alt="Flask" className="tech-logo"/>
            </div>
            <div className="logos-slide d-flex justify-content-center">
              <img src="./html.png" alt="HTML" className="tech-logo" />
              <img src="./css.png" alt="CSS" className="tech-logo"/>
              <img src="./figma.png" alt="Figma" className="tech-logo"/>
              <img src="./js.png" alt="JavaScript" className="tech-logo"/>
              <img src="./bootstrap.png" alt="Bootstrap" className="tech-logo"/>
              <img src="./python.png" alt="Python" className="tech-logo"/>
              <img src="./mysql.png" alt="MySQL" className="tech-logo"/>
              <img src="./react.png" alt="React" className="tech-logo"/>
              <img src="./flask.png" alt="Flask" className="tech-logo"/>
            </div>
            <div className="logos-slide d-flex justify-content-center">
              <img src="./html.png" alt="HTML" className="tech-logo" />
              <img src="./css.png" alt="CSS" className="tech-logo"/>
              <img src="./figma.png" alt="Figma" className="tech-logo"/>
              <img src="./js.png" alt="JavaScript" className="tech-logo"/>
              <img src="./bootstrap.png" alt="Bootstrap" className="tech-logo"/>
              <img src="./python.png" alt="Python" className="tech-logo"/>
              <img src="./mysql.png" alt="MySQL" className="tech-logo"/>
              <img src="./react.png" alt="React" className="tech-logo"/>
              <img src="./flask.png" alt="Flask" className="tech-logo"/>
            </div>
          </div>
        </div> */}
<section id="experience">
  <h1 id="xpHeader"className="mb-5">Experience</h1>
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
</section>



        {/* --------------------------------------------------- Projects Section --------------------------------------------------- */}
        <div id="projectContainer" className="container py-5">
          <h1 id="projectsHeader" className="text-center mb-5">Projects</h1>

          <div id="projectCardContainer" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div className="card projectCard">
                <img src="./react-flask.jpeg" className="card-img-top" alt="React Flask Project" />
                <div className="card-body projectCardItem">
                  <h5 className="card-title">React-Flask</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://github.com/alexito200/react-flask-project" target="_blank" rel="noopener noreferrer"><i className="bi bi-github gitIcon fs-3"></i></a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card projectCard">
                <img src="./comic-library.jpeg" className="card-img-top" alt="Marvel API" />
                <div className="card-body projectCardItem">
                  <h5 className="card-title">Marvel API</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://github.com/alexito200/comic-book-library" target="_blank" rel="noopener noreferrer"><i className="bi bi-github gitIcon fs-3"></i></a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card projectCard">
                <img src="./poke-api.jpeg" className="card-img-top" alt="Poke API" />
                <div className="card-body projectCardItem">
                  <h5 className="card-title">Poke API</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://github.com/alexito200/poke-api-project" target="_blank" rel="noopener noreferrer"><i className="bi bi-github gitIcon fs-3"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
