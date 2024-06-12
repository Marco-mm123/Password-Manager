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
            <button id="backToMain" onClick={props.func}>Back</button>
            </div>
        </div>
    )
}

export default LoginPage;