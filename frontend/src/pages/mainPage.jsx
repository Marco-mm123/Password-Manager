import React from "react";
import './mainPage.css';
import Sidebar from "../components/Sidebar";
import AddPassword from "./PasswordPages/addPassword";
import MainPageContent from "./mainPageContent";
import PasswordPage from "./PasswordPages/passwordPage";
import EditPassword from "./PasswordPages/editPassword";

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
                props.whichPage.endsWith("_edit") ? <EditPassword whichPage={props.whichPage}/> : null
            }
            {
                props.whichPage !== "main" && props.whichPage !== "password" && props.whichPage.split("_")[1] !== "edit" ? <PasswordPage whichPage_func={props.whichPage_func} whichPage={props.whichPage} /> : null
            }
            <button id="loginButton" onClick={props.login_func}>Login</button>
        </>
    )
}

export default MainPage;