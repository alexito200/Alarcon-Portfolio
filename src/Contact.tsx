import './Contact.css';
import { Toggle } from "./context/ThemeToggle";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
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
                    <div className="container-fluid d-flex justify-content-between align-items-center w-100">
                        <Link to="/">
                            <Button className="btn backButton">
                                Back
                            </Button>
                        </Link>

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

                <div id="totalFormContainer" className="d-flex justify-content-center align-items-center">
                    <form id="formContainer" className="d-flex flex-column justify-content-between">
                        {/* Title at the top */}
                        <div id="titleContainer" className="text-white text-center">
                            <h1>Contact me</h1>
                        </div>

                        {/* Centered Input Fields */}
                        <div id="emailPasswordNameContainer" className="d-flex flex-column flex-grow-1 justify-content-center">
                            <div className="mb-4 nameContainer">
                                <input type="text" className="form-control w-100 px-2" placeholder="Name" />
                            </div>
                            <div className="mb-4 emailContainer">
                                <input type="email" className="form-control w-100 px-2" aria-describedby="emailHelp" id="floatingInput" placeholder="Email" />
                            </div>
                            <div className="mb-5 passwordContainer">
                                <input type="password" className="form-control w-100 px-2" placeholder="Password" />
                            </div>
                        </div>

                        {/* Submit Button at the Bottom */}
                        <div id="submitContainer" className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Contact;
