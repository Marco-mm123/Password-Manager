import React from "react";
import './loginPage.css';

function LoginPage(props) {
    return (
        <div className="LoginPage">
            <div className="loginContainer">
            <h1>Login</h1>
            <form name="loginForm" id="loginForm">
                <label form="username">Username</label>
                <input type="text" id="username" name="username" required></input> <br />
                <label form="password">Password</label>
                <input type="password" id="password" name="password" required></input><br />
            </form>
                <div className="loginButtons">
                    <button className="loginButton" onClick={props.func}>Back</button>
                    <button className="loginButton" onClick={props.register_func}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;