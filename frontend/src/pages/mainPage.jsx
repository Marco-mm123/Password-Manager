import React from "react";
import './mainPage.css';
import Sidebar from "../components/Sidebar";
import AddPassword from "./PasswordPages/addPassword";
import MainPageContent from "./mainPageContent";
import PasswordPage from "./PasswordPages/passwordPage";
import EditPassword from "./PasswordPages/editPassword";
import RegisterPage from "./auth/RegisterPage";
import LoginPage from "./auth/loginPage";

function MainPage(props) {

    function handleLoginClick() {
        props.setJWT("");
        props.whichPage_func("login");
    }

    return (
        <>
            {
                props.whichPage !== "login" && props.whichPage !== "register" ? <Sidebar addPassword_func={props.addPassword_func} whichPage_func={props.whichPage_func} whichPage={props.whichPage} JWT={props.JWT}/> : null
            }
            {
                props.whichPage === "register" ? <RegisterPage whichPage_func={props.setWhichPage} /> : null
            }
            {
                props.whichPage === "login" ? <LoginPage whichPage_func={props.setWhichPage} setJWT={props.setJWT} /> : null
            }
            {
                props.whichPage === "password" ? <AddPassword whichPage_func={props.whichPage_func} JWT={props.JWT} setJWT={props.setJWT} /> : null
            }
            {
                props.whichPage === "main" ? <MainPageContent /> : null
            }
            {
                props.whichPage.endsWith("_edit") ? <EditPassword whichPage={props.whichPage} whichPage_func={props.whichPage_func} JWT={props.JWT} setJWT={props.setJWT}/> : null
            }
            {
                props.whichPage !== "main" && props.whichPage !== "password" && props.whichPage.split("_")[1] !== "edit" && props.whichPage !== "login" && props.whichPage !== "register" ? <PasswordPage whichPage_func={props.whichPage_func} whichPage={props.whichPage} JWT={props.JWT} setJWT={props.setJWT} /> : null
            }
            {
                props.whichPage !== "login" && props.whichPage !== "register" ? <button id="loginButton" onClick={handleLoginClick}>Logout</button> : null
            }

        </>
    )
}

export default MainPage;