import React from "react";
import './sidebar.css'

function Sidebar() {
    return(
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li><button id="allPasswords" className="categories">All Passwords</button></li>
                <li><button id="favorites" className="categories">Favorites</button></li>
            </ul>
        </div>
    );
}

export default Sidebar;