import React, {useState} from "react";
import MainPage from "./pages/mainPage";
import './App.css'

function App() {
    // the most important useStates in the whole app, whichPage is the page that gets displayed, JWT is the JSON Web Token
    const [whichPage, setWhichPage] = useState("login");
    const [JWT, setJWT] = useState("")

    const switchToPasswordPage = (id) => {
        setWhichPage(id);
    }

    return (
            <div className="App">
                <MainPage whichPage_func={switchToPasswordPage}  whichPage={whichPage} setWhichPage={setWhichPage} JWT={JWT} setJWT={setJWT} />
            </div>
    );
}

export default App;