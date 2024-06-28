import React, {useState, useEffect} from "react";
import './Sidebar.css';
import OriginItem from './OriginItem';

function Sidebar(props) {
    const [origins, setOrigins] = useState([]);

    // everytime the props.whichPage Variable gets changed the useEffect gets triggered
    useEffect(() => {
        getOrigins().then(r => {
            console.log('Origins fetched');
        });
    }, [props.whichPage]);

    // function that fetches all origins from the user
    async function getOrigins() {
        //gets the user_id using the JWT
        const user_get = await fetch("/auth/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${props.JWT}`,
            }
        })
        const user_get_json = await user_get.json();
        const user_id = user_get_json.userId;
        const user_all_passwords = await fetch(`/passwords/user/${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.JWT}`,
            }
        })
        //checks if the JWT is still valid, if not the user gets redirected to the login page
        if (user_all_passwords.status === 401) {
            alert("Your Session has expired. Please login again.")
            props.whichPage_func("login")
        } else {
            const user_all_passwordsJson = await user_all_passwords.json();
            let user_all_passwordsArray = [];

            //(ChatGPT) makes sure that the user_all_passwordsJson is an array, so it doesn't throw an error
            if (Array.isArray(user_all_passwordsJson)) {
                user_all_passwordsArray = user_all_passwordsJson;
            } else if (typeof user_all_passwordsJson === 'object' && user_all_passwordsJson !== null) {
                user_all_passwordsArray = Object.values(user_all_passwordsJson);
            }

            const originsTemp = [];
            for (const userAllPassword of user_all_passwordsArray) {
                const origin = await fetch(`/origins/${userAllPassword.origin_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${props.JWT}`,
                    }
                })
                originsTemp.push(await origin.json());
            }
            setOrigins(originsTemp);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (props.whichPage === "password") {
            props.whichPage_func("main")
        } else {
            props.whichPage_func("password")
        }
    }

    // creates the Sidebar and maps all origins to the OriginItem Component
    return (
        <div className="sidebar">
            <button id="newPasswordButton" onClick={handleClick}>{props.whichPage === "password" ? "Go Back" : "New Password"}</button>
            <h2>Passwords</h2>
            <ul id="AllOrigins">
                {origins.map(origin => <OriginItem origin={origin} whichPage_func={props.whichPage_func} JWT={props.JWT}/>)}
            </ul>
        </div>
    )
}

export default Sidebar;