import React from "react";
import './addPassword.css';

function AddPassword() {
    return (
        <div className="addPassword">
            <h2>Add Password</h2>
            <form name="addPassword" id="addPassword" action="/origins" method="POST">
                <label htmlFor="origin_name">Where is this Password from:</label>
                <input type="text" id="origin_name" name="origin_name" required /> <br />
                <label htmlFor="origin_url">Enter URL:</label>
                <input type="text" id="origin_url" name="origin_url" required />
            </form>
        </div>
    )
}

export default AddPassword;