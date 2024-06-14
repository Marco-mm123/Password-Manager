import React, { useState, useEffect } from 'react';

function PasswordPage(props) {
    const [password, setPassword] = useState([]);

    useEffect(() => {
        const showPassword = async () => {
            const passwords = await fetch("/passwords", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const passwordsJson = await passwords.json()
            for (const passwordsJsonElement of passwordsJson) {
                if (passwordsJsonElement.origin_id === Number(props.whichPage)) {
                    setPassword(passwordsJsonElement)
                }
            }
        }
        showPassword().then(r => {
            console.log("Passwords fetched")
        })
    }, [props.whichPage]);



    return (
        <div>
            <h1>Password Page</h1>
            <p>{
                password.password
            }</p>
        </div>
    )
}

export default PasswordPage;