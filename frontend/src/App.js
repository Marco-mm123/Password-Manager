import React, {useState} from "react";
import MainPage from "./pages/mainPage";
import './App.css'

function App() {
    const [whichPage, setWhichPage] = useState("main");
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