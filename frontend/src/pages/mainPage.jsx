import React from "react";
import './mainPage.css';
import Sidebar from "../components/sidebar";
import SubSidebar from "../components/subSidebar";
import AddPassword from "../pages/CreatePages/addPassword";

function MainPage(props) {

    return (
        <>
            <div className="sidebars">
                <Sidebar/>
                <SubSidebar addPassword_func={props.addPassword_func} isAddPassword={props.addPassword}/>
            </div>
            {props.addPassword ? <AddPassword /> :
                <div className="mainPage">
                    <h1>Welcome to the Website</h1>
                    <p>This is Main content 👍</p>
                </div>}
            <button id="loginButton" onClick={props.login_func}>Login</button>
        </>
    )
}

export default MainPage;