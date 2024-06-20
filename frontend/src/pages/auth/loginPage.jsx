import React from "react";
import './loginPage.css';

function LoginPage(props) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = document.forms.loginForm;
        const email = form.email.value;
        const password = form.password.value;

        const loginReturn = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const loginReturnJson = await loginReturn.json()
        props.setJWT(loginReturnJson.access_token);
        props.whichPage_func("main")
    }

    function handleBackButton() {
        props.whichPage_func("main")
    }

    function handleRegisterButton() {
        props.whichPage_func("register")
    }

    return (
        <div className="LoginPage">
            <div className="loginContainer">
            <h1>Login</h1>
            <form name="loginForm" id="loginForm" onSubmit={handleSubmit}>
                <label form="email">Email</label>
                <input type="email" id="email" name="email" required></input> <br />
                <label form="password">Password</label>
                <input type="password" id="password" name="password" required></input><br />
                <div className="SubmitButton">
                    <button className="loginButton" type="submit">Login</button>
                </div>
            </form>
                <div className="loginButtons">
                    <button className="loginButton" onClick={handleBackButton}>Back</button>
                    <button className="loginButton" onClick={handleRegisterButton}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;