import React, { useState } from "react";
import './addPassword.css';

function AddPassword(props) {
    const [origin_name, setOriginName] = useState("");
    const [origin_url, setOriginUrl] = useState("");
    const [site_password, setSitePassword] = useState("");
    const [isUrlValid, setIsUrlValid] = useState(true);

    const handleAddPassword = async (e) => {
        e.preventDefault()
        // POST request to add the origin
        const origin = await fetch("/origins", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.JWT}`,
            },
            body: JSON.stringify({
                origin_name: origin_name,
                origin_url: origin_url
            })
        })
        /*const origins = await fetch("/origins", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.JWT}`,
            }
        })
        const originsJSON = await origins.json()
        let password_origin_id;

        for (const originsJSONElement of originsJSON) {
            if (originsJSONElement.origin_name === origin_name) {
                password_origin_id = Number(originsJSONElement.origin_id)
            }
        }*/
        const originJson = await origin.json();
        const password_origin_id = originJson.origin_id;
        const user_get = await fetch("/auth/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${props.JWT}`,
            }
        })
        const user_get_json = await user_get.json();
        const user_id = user_get_json.userId;
        // creates a new password with the origin_id and the user_id
        await fetch("/passwords", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.JWT}`
            },
            body: JSON.stringify({
                origin_id: password_origin_id,
                user_id: user_id,
                password: site_password,
            })
        })
        props.whichPage_func("main")
    }

    // sens a GET request to the server to generate a password
    const generatePasswd = async () => {
        const generatedPassword = await fetch("/passwords/gen", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const generatedPasswordJson = await generatedPassword.json()
        return generatedPasswordJson.password
    }

    // adds the generated password to the site_password state and the input field
    const handleGenPasswd = () => {
        generatePasswd().then(r => {
            setSitePassword(r)
            document.getElementById("site_password").value = r
        })
    }

    // checks if the URL is valid
    const handleURLChange = (e) => {
       const url = e.target.value;
       setOriginUrl(url);

       const urlPattern = /^(https?:\/\/)[\w.-]+(\.[a-z]{2,})+$/i;
       setIsUrlValid(urlPattern.test(url));
       if (isUrlValid) {
           e.target.setCustomValidity('');
       }else {
           e.target.setCustomValidity('Please enter a valid URL');
       }
    }

    return (
        <div className="addPassword">
            <div className="addPasswordContainer">
            <h2>Add Password</h2>
            <form name="addPassword" id="addPassword" onSubmit={handleAddPassword}>
                <label htmlFor="origin_name">Where is this Password from:</label>
                <input type="text" id="origin_name" name="origin_name" required
                       onChange={e => setOriginName(e.target.value)}/> <br/>
                <label htmlFor="origin_url">Enter URL:</label>
                <input type="text" id="origin_url" name="origin_url" required placeholder="https://example.com"
                       onChange={handleURLChange}/>
                <label htmlFor="site_password">Enter Password:</label>
                <input type="password" id="site_password" name="site_password" required
                       onChange={e => setSitePassword(e.target.value)}/>
                <div className="SubmitButtonContainer">
                    <button type="submit" className="addPasswordButton">Submit</button>
                </div>
            </form>
            <button onClick={handleGenPasswd} className="addPasswordButton">Generate Password</button>
        </div>
        </div>
    )
}

export default AddPassword;