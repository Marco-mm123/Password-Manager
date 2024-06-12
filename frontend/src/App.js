import React, {useState} from "react";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import './App.css'


function App() {
    const [login, setLogin] = useState(false);

    const switchToLogin = () => {
        setLogin(!login);
    }

  return (
      <div className="App">
          {
              login ? <LoginPage func={switchToLogin}/> : <MainPage func={switchToLogin}/>
          }
      </div>
  );
}

export default App;
