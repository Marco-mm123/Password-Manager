import React from "react";
import Sidebar from "./components/sidebar";
import SubSidebar from "./components/subSidebar";
import MainPage from "./pages/mainPage";
import './App.css'


function App() {
  return (
    <div className="App">
        <div className="sidebars">
            <Sidebar />
            <SubSidebar />
        </div>
      <MainPage />
    </div>
  );
}

export default App;
