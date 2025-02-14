import "./Contact.css";
import { Toggle } from "./context/ThemeToggle";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Contact = () => {
    const savedTheme = localStorage.getItem("theme")
        ? localStorage.getItem("theme") === "dark"
        : true;
    const [isDark, setIsDark] = useState(savedTheme);
    const [formStatus, setFormStatus] = useState("");
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("Submitting...");
        
        const formData = new FormData(e.currentTarget);
        const formDataString = new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzSRQ2nhCQmhJNy-e8AAQ1DhqTdPfmuVPNM3FHPZlJh8lm82Wrgc-6AbpJngyeP9dec/exec",
                {
                    method: "POST",
                    body: formDataString,
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                }
            );

            if (!response.ok) throw new Error("Failed to submit the form");

            setFormStatus("Data submitted successfully!");

            if (formRef.current) {
                formRef.current.reset();
            }

            setTimeout(() => setFormStatus(""), 2600);
        } catch (error) {
            console.error(error);
            setFormStatus("An error occurred while submitting the form.");
        }
    };

    return (
        <div id="totalContainer" data-theme={isDark ? "dark" : "light"}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between align-items-center w-100">
                    <Link to="/">
                        <Button className="btn back-nav-item backButton">Back</Button>
                    </Link>

                    <div className="navbar-nav ms-auto">
                        <a className="nav-item nav-link" id="themeButton" href="#">
                            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                        </a>
                    </div>
                </div>
            </nav>

            <div id="totalFormContainer" className="d-flex justify-content-center align-items-center">
                <form
                    ref={formRef}
                    id="form"
                    className="d-flex flex-column justify-content-between needs-validation formContainer"
                    onSubmit={handleSubmit}
                >
                    <div id="titleContainer" className="text-white text-center">
                        <h1>Contact me</h1>
                    </div>

                    <div id="emailPasswordNameContainer" className="d-flex flex-column flex-grow-1 justify-content-center">
                        <div className="mb-4 nameContainer">
                            <input type="text" name="Name" className="form-control w-100 px-2" placeholder="Name" required />
                        </div>
                        <div className="mb-4 emailContainer">
                            <input type="email" name="Email" className="form-control w-100 px-2" placeholder="Email" required />
                        </div>
                        <div className="mb-5 messageContainer">
                            <textarea className="form-control w-100 px-2" name="Message" placeholder="Message..." rows={4}></textarea>
                        </div>
                    </div>

                    <div id="submitContainer" className="text-center">
                        {/* <button type="submit" className="btn btn-two">Submit</button> */}
                        <Button type="submit" className="btn btn-two" id="contactButton2">
                            Submit
                        </Button>
                    </div>

                    {formStatus && (
                        <div id="message" className="text-center mt-3" style={{ color: formStatus.includes("error") ? "red" : "green" }}>
                            {formStatus}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
