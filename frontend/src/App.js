import React, {useState} from "react";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/auth/loginPage";
import './App.css'
import RegisterPage from "./pages/auth/RegisterPage";

function App() {
    const [main , setMain] = useState(true);
    const [login, setLogin] = useState(false);
    const [addPassword, setAddPassword] = useState(false);
    const [register, setRegister] = useState(false);
    const [whichPage, setWhichPage] = useState("main");
    const [previousPage, setPreviousPage] = useState(null);

    const switchToLogin = () => {
        setLogin(!login);
        setMain(!main)
    }

    const switchToAddPassword = () => {
        setAddPassword(!addPassword);
    }

    const switchToRegister = () => {
        setRegister(!register);
        setLogin(!login);
    }

    const switchToPasswordPage = (id) => {
        setPreviousPage(whichPage);
        setWhichPage(id);
    }

    return (
        <div className="App">
            {

                register ? <RegisterPage func={switchToRegister} /> : null
            }
            {
                login ? <LoginPage func={switchToLogin} register_func={switchToRegister}/> : null
            }
            {
                main ? <MainPage login_func={switchToLogin} addPassword_func={switchToAddPassword} whichPage_func={switchToPasswordPage} addPassword={addPassword} whichPage={whichPage} previousPage={previousPage} /> : null
            }
        </div>
    );
}

export default App;