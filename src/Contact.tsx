import './Contact.css';
import { Toggle } from "./context/ThemeToggle";
import { useState } from "react";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Contact = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <>
        
        <div id="totalContainer" data-theme={isDark ? "dark" : "light"}>
            <Link to="/">
                <Button className="btn">
                    Back home
                </Button>
            </Link>
            <div className="ms-auto navbar-nav">
                <a className="nav-item nav-link" id="themeButton" href="#">
                    {/* <Classic style={{color: "white"}} duration={750} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> */}
                <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
                />
                </a>
            </div>
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