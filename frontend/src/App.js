import React, {useState} from "react";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/auth/loginPage";
import './App.css'

function App() {
    const [login, setLogin] = useState(false);
    const [addPassword, setAddPassword] = useState(false);

    const switchToLogin = () => {
        setLogin(!login);
    }

    const switchToAddPassword = () => {
        setAddPassword(!addPassword);
    }

    return (
        <div className="App">
            {
                login ? <LoginPage func={switchToLogin}/> : <MainPage login_func={switchToLogin} addPassword_func={switchToAddPassword} addPassword={addPassword} />
            }
        </div>
    );
}

export default App;