import React from "react";
import './mainPage.css';
import Sidebar from "../components/Sidebar";
import AddPassword from "../pages/CreatePages/addPassword";
import MainPageContent from "./mainPageContent";
import PasswordPage from "./passwordPage";

function MainPage(props) {

    return (
        <>
            <div className="sidebars">
                <Sidebar addPassword_func={props.addPassword_func} whichPage_func={props.whichPage_func} isAddPassword={props.addPassword}/>
            </div>
            {
                props.whichPage === "password" ? <AddPassword whichPage_func={props.whichPage_func} /> : null
            }
            {
                props.whichPage === "main" ? <MainPageContent /> : null
            }
            {
                props.whichPage !== "main" && props.whichPage !== "password" ? <PasswordPage whichPage_func={props.whichPage_func} whichPage={props.whichPage} /> : null
            }
            <button id="loginButton" onClick={props.login_func}>Login</button>
        </>
    )
}

export default MainPage;