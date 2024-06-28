import React, {useEffect, useState} from "react";
import "./editPassword.css";

function EditPassword(props) {
    const [password, setPassword] = useState("");
    const [origin, setOrigin] = useState("");
    const [originURL, setOriginURL] = useState("");
    const [passwordString, setPasswordString] = useState("");
    const [originString, setOriginString] = useState("");
    const [originURLString, setOriginURLString] = useState("");
    const [isUrlValid, setIsUrlValid] = useState(true);

    useEffect(() => {
        async function fetchPassword() {
            const origin_id = Number(props.whichPage.split("_")[0]);
            const user_get = await fetch("/auth/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${props.JWT}`,
                }
            })
            const user_get_json = await user_get.json();
            const user_id = user_get_json.userId;
            // fetches the password and the origin
            const password = await fetch(`/passwords/${Number(origin_id)}/${user_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.JWT}`,
                },
            });
            const origin = await fetch(`/origins/${Number(origin_id)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.JWT}`,
                },
            })
            // sets the password and the origin into the useStates, so they can be displayed in the input fields
            const passwordJson = await password.json();
            const originJson = await origin.json();
            setPasswordString(passwordJson.password);
            setOriginString(originJson.origin_name);
            setOriginURLString(originJson.origin_url);
        }
        fetchPassword().then(r => {
            console.log("Password fetched");
        });
    }, [props.whichPage]);

    // function that handles the submit of the form and updates the origin and the password
    async function handleSubmit(e) {
        e.preventDefault();
        const origin_id = Number(props.whichPage.split("_")[0]);
        await fetch(`/origins/${origin_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.JWT}`,
            },
            body: JSON.stringify({
                origin_id: origin_id,
                origin_name: origin,
                origin_url: originURL
            })
        })
        const user_get = await fetch("/auth/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${props.JWT}`,
            }
        })
        const user_get_json = await user_get.json();
        const user_id = user_get_json.userId;
        await fetch(`/passwords/${origin_id}/${user_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.JWT}`,
            },
            body: JSON.stringify({
                origin_id: origin_id,
                user_id: user_id,
                password: password
            })
        })
        props.whichPage_func("main");
    }

    // sends the user back to the main page
    const handleBackClick = () => {
        props.whichPage_func("main");
    }

    // function that checks if the URL is valid
    const handleURLChange = (e) => {
        const url = e.target.value;
        setOriginURL(url);

        const urlPattern = /^(https?:\/\/)[\w.-]+(\.[a-z]{2,})+$/i;
        setIsUrlValid(urlPattern.test(url));
        if (isUrlValid) {
            e.target.setCustomValidity('');
        }else {
            e.target.setCustomValidity('Please enter a valid URL');
        }
    }

    return (
        <div className="editPassword">
            <div className="editPasswordContainer">
            <h1>Edit Password</h1>
            <form name="editPasswordForm" id="editPasswordForm" onSubmit={handleSubmit}>
                <label htmlFor="origin">Origin: </label>
                <input type="text" id="origin" name="origin" required onChange={e => setOrigin(e.target.value)} placeholder={originString}/>
                <br />
                <label htmlFor="originURL">Origin URL: </label>
                <input type="text" id="originURL" name="originURL" required onChange={handleURLChange} placeholder={originURLString} />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} placeholder={passwordString} />
                <br />
                <div className="SubmitButtonContainer">
                    <button type="submit" className="editPasswordButton">Edit</button>
                </div>
            </form>
            <button className="editPasswordButton" onClick={handleBackClick}>Back</button>
        </div>
        </div>
    )
}

export default EditPassword;