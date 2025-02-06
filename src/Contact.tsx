import './Contact.css';
import { Toggle } from "./context/ThemeToggle";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Contact = () => {
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

        <div id="totalContainer" data-theme={isDark ? "dark" : "light"}>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center w-100" >
                <Link to="/">
                    <Button className="btn">
                        Back
                    </Button>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"  aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="d-flex justify-content-center flex-grow-1">
                        <div className="barNav navbar-nav" id="navButtons">

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
            <div id="totalFormContainer">
                <form id="formContainer" className="d-flex flex-column justify-content-between">
                    <div id="titleContainer" className="text-white text-center">
                        <h1>Contact me</h1>
                    </div>
                    <div id="emailPasswordNameContainer" className="d-flex flex-column">
                        <div className="mb-3 nameContainer">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="mb-3 emailContainer">
                            <input type="email" className="form-control" aria-describedby="emailHelp" id="floatingInput" placeholder="Email address" />
                        </div>
                        <div className="mb-5  passwordContainer">
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                    </div>
                    <div id="submitContainer" className="text-center mt-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}
export default Contact