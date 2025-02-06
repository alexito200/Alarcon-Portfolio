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
        
        {/* Navbar */}
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

        {/* Hero Section */}
        <div id="heroContainer">
          <div>
            <img id="personImage" src="./profile-picture.jpeg" alt="..." />
          </div>
          <div id="heroTextContainer">
            <div id="typewriterContainer">
              <h1>
              I&apos;m{" "}
              <ReactTyped strings={["Alex Alarcon"]} typeSpeed={100} loop />
              </h1>
              <p>Full Stack Developer | Passionate about Web Technologies</p>
            </div>
            <div id="typewriterContainer2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut iure dignissimos alias temporibus est aliquid eaque.  Consequuntur, facilis in!
              </p>
            </div>
            <Link to="/contact" className="link-button">
              <Button className="btn" id="contactButton">
                Contact Me
              </Button>
            </Link>

          </div>
        </div>

        {/* About */}
        <div id="aboutContainer">
          <div id="aboutImgContainer">
            <img src="./animated-person-bg.png" alt="" />
          </div>

          <div id="aboutTextContainer">
            <h1>About Me</h1>

            <div className="card pointCard mb-3" id="firstPointContainer">
              <div className="row g-0">
                <div className="col-md-4 pointImgContainer">
                  <img src="./1-circle.svg" className="img-fluid rounded-start pointImg" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body pointCardBodyItem">
                    <h5 className="card-title">First Point</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card pointCard mb-3" id="secondPointContainer" style={{maxWidth: "540px"}}>
              <div className="row g-0">
                <div className="col-md-4 pointImgContainer">
                  <img src="./2-circle.svg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body pointCardBodyItem">
                    <h5 className="card-title">Second Point</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card pointCard mb-3" id="thirdPointContainer" style={{maxWidth: "540px"}}>
              <div className="row g-0">
                <div className="col-md-4 pointImgContainer">
                  <img src="./3-circle.svg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body pointCardBodyItem">
                    <h5 className="card-title">Third Point</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Experience */}
        <div id="xpContainer">
          <h1 className="xp">Experience</h1>
          <div className="logos">
            <div className="logos-slide">
              <img src="./html.png" alt="" className="tech-logo" />
              <img src="./css.png" alt="" className="tech-logo"/>
              <img src="./figma.png" alt="" className="tech-logo"/>
              <img src="./js.png" alt="" className="tech-logo"/>
              <img src="./bootstrap.png" alt="" className="tech-logo"/>
              <img src="./python.png" alt="" className="tech-logo"/>
              <img src="./mysql.png" alt="" className="tech-logo"/>
              <img src="./react.png" alt="" className="tech-logo"/>
              <img src="./flask.png" alt="" className="tech-logo"/>
            </div>
            <div className="logos-slide">
              <img src="./html.png" alt="" className="tech-logo"/>
              <img src="./css.png" alt="" className="tech-logo"/>
              <img src="./figma.png" alt="" className="tech-logo"/>
              <img src="./js.png" alt="" className="tech-logo"/>
              <img src="./bootstrap.png" alt="" className="tech-logo"/>
              <img src="./python.png" alt="" className="tech-logo"/>
              <img src="./mysql.png" alt="" className="tech-logo"/>
              <img src="./react.png" alt="" className="tech-logo"/>
              <img src="./flask.png" alt="" className="tech-logo"/>
            </div>
            <div className="logos-slide">
              <img src="./html.png" alt="" className="tech-logo"/>
              <img src="./css.png" alt="" className="tech-logo"/>
              <img src="./figma.png" alt="" className="tech-logo"/>
              <img src="./js.png" alt="" className="tech-logo"/>
              <img src="./bootstrap.png" alt="" className="tech-logo"/>
              <img src="./python.png" alt="" className="tech-logo"/>
              <img src="./mysql.png" alt="" className="tech-logo"/>
              <img src="./react.png" alt="" className="tech-logo"/>
              <img src="./flask.png" alt="" className="tech-logo"/>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projectContainer">

          <h1 id="projectsHeader">Projects</h1>

        <div id="projectCardContainer">
          <div className="card projectCard" style={{width: "18rem"}}>
            <img src="./react-flask.jpeg" className="card-img-top" alt="..." />
            <div className="card-body projectCardItem">
              <h5 className="card-title">React-Flask</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/alexito200/react-flask-project" target="_blank" rel="noopener noreferrer"><i className="bi bi-github gitIcon fs-3"></i></a>
            </div>
          </div>
          <div className="card projectCard" style={{width: "18rem"}}>
            <img src="./comic-library.jpeg" className="card-img-top" alt="..." />
            <div className="card-body projectCardItem">
              <h5 className="card-title">Marvel API</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/alexito200/comic-book-library" target="_blank" rel="noopener noreferrer"><i className="bi bi-github gitIcon fs-3"></i></a>
            </div>
          </div>
          <div className="card projectCard" style={{width: "18rem"}}>
            <img src="./poke-api.jpeg" className="card-img-top" alt="..." />
            <div className="card-body projectCardItem">
              <h5 className="card-title">Poke API</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/alexito200/poke-api-project" target="_blank" rel="noopener noreferrer"><i className="bi bi-github gitIcon fs-3"></i></a>
            </div>
          </div>
        </div>

        </div>

      </div>
    </>

  )
}

export default App
