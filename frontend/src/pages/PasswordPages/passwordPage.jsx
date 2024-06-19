import React, { useState, useEffect } from 'react';
import './passwordPage.css';

function PasswordPage(props) {
    const [password, setPassword] = useState([]);
    const [origin, setOrigin] = useState([]);

    useEffect(() => {
        const showPassword = async () => {
            const passwords = await fetch(`/passwords/${Number(props.whichPage)}/${1}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const passwordsJson = await passwords.json()
            setPassword(passwordsJson)
        }
        showPassword().then(r => {
            console.log("Password fetched")
        })
    }, [props.whichPage]);

    useEffect(() => {
        const Originof = async () => {
            const origin = await fetch(`/origins/${Number(props.whichPage)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const originJson = await origin.json()
            setOrigin(originJson)
        }
        Originof().then(r => {
            console.log("Origin fetched");
        })
    }, [props.whichPage]);



    return (
        <div className="PasswordPage">
            <h1>This is the Password for {origin.origin_name} </h1>
            <div className="passwordContainer">
                <h2 id="password">{password.password}</h2>
            </div>
        </div>
    )
}

export default PasswordPage;