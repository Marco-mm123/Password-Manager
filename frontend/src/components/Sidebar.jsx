import React, {useState, useEffect} from "react";
import './Sidebar.css';
import OriginItem from './OriginItem';

function Sidebar(props) {
    const [origins, setOrigins] = useState([]);

    useEffect(() => {
        getOrigins().then(r => {
            console.log('Origins fetched');
        });
    }, [props.whichPage]);

    async function getOrigins() {
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
        if (user_all_passwords.status === 401) {
            props.whichPage_func("login")
        } else {
            const user_all_passwordsJson = await user_all_passwords.json();
            let user_all_passwordsArray = [];

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

    return (
        <div className="subSidebar">
            <button id="newPasswordButton"
                    onClick={handleClick}>{props.whichPage === "password" ? "Go Back" : "New Password"}</button>
            <h2>Passwords</h2>
            <ul id="AllOrigins">
                {origins.map(origin => <OriginItem origin={origin} whichPage_func={props.whichPage_func}
                                                   JWT={props.JWT}/>)}
            </ul>
        </div>
    )
}

export default Sidebar;