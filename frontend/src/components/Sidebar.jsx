import React, {useState, useEffect} from "react";
import './Sidebar.css';
import OriginItem from './OriginItem';

function Sidebar(props) {
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

    const handleClick = (e) => {
        e.preventDefault();
        props.addPassword_func();
        if(props.isAddPassword) {
            props.whichPage_func("main")
        }else{
            props.whichPage_func("password")
        }
    }

    return (
        <div className="subSidebar">
            <button id="newPasswordButton" onClick={handleClick}>{props.isAddPassword ? "Go Back" : "New Password"}</button>
            <h2>Password</h2>
            <ul id="AllOrigins">
                {origins.map(origin => <OriginItem origin={origin} whichPage_func={props.whichPage_func} />)}
            </ul>
        </div>
    )
}

export default Sidebar;