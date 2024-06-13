import React, {useState, useEffect} from "react";
import './subSidebar.css';
import OriginItem from './OriginItem';

function SubSidebar(props) {
    const [origins, setOrigins] = useState([])

    useEffect(() => {
        async function getOrigins(){
            const allOrigins = await fetch('/origins', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const allOriginsJson = await allOrigins.json()
            setOrigins(allOriginsJson)
        }
        getOrigins().then(r => {
            console.log('Origins fetched');
        });
    }, []);

    return (
        <div className="subSidebar">
            <button id="newPasswordButton" onClick={props.addPassword_func}>{props.isAddPassword ? "Go Back" : "New Password"}</button>
            <h2>Password</h2>
            <ul id="AllOrigins">
                {origins.map(origin => <OriginItem origin={origin} />)}
            </ul>
        </div>
    )
}

export default SubSidebar;