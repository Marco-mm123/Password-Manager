import React from "react";
import './mainPage.css';
import Sidebar from "../components/sidebar";
import SubSidebar from "../components/subSidebar";

function mainPage(props) {
    return (
        <>
            <div className="sidebars">
                <Sidebar/>
                <SubSidebar/>
            </div>
            <div className="mainPage">
                <h1>Welcome to the Website</h1>
                <p>This is Main content 👍</p>
            </div>
            <button id="loginButton" onClick={props.func}>Login</button>
        </>
    )
}

export default mainPage;