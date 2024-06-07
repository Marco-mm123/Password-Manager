import React from "react";
import './subSidebar.css';

function SubSidebar() {
    return (
        <div className="subSidebar">
            <h2>Which Password?</h2>
            <ul>
                <li><button id="Google" className="origins">Google</button><button className="deleteButton"></button></li>
                <li><button id="Microsoft" className="origins">Microsoft</button><button className="deleteButton"></button></li>
            </ul>
        </div>
    )
}

export default SubSidebar;