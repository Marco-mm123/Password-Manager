import React, { useState } from "react";
import './loginPage.css';

function LoginPage(props) {
    // State to handle errors
    const [error, setError] = useState(null);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.forms.loginForm;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // Make a POST request to the login endpoint
            const loginReturn = await fetch("/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            // Check if the login was denied
            if (loginReturn.status === 401) {
                throw new Error("Invalid email or password")
            }

            // Parse the JSON response
            const loginReturnJson = await loginReturn.json();

            // Set the JWT token and navigate to the main page
            if (loginReturn.status === 201) {
                props.setJWT(loginReturnJson.access_token);
                props.whichPage_func("main");
            }
        } catch (error) {
            // Handle errors (network issues, server errors, etc.)
            setError(error.message);
        }
    };

    // Function to navigate to the register page
    function handleRegisterButton() {
        props.whichPage_func("register");
    }

    return (
        <div className="LoginPage">
            <div className="loginContainer">
                <h1>Login</h1>
                <form name="loginForm" id="loginForm" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required /> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required /> <br />
                    <button className="loginButton" type="submit">Login</button>
                </form>
                <button className="loginButton" onClick={handleRegisterButton}>Register</button>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
