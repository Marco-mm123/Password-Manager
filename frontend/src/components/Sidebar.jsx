import React, {useState, useEffect} from "react";
import './Sidebar.css';
import OriginItem from './OriginItem';

function Sidebar(props) {
    const [origins, setOrigins] = useState([]);
    useEffect(() => {
        async function getOrigins(){
            const allOrigins = await fetch('/origins', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + props.JWT,
                }
            })
            if (allOrigins.status === 401) {
                props.whichPage_func("login")
            }else{
                let allOriginsJson = await allOrigins.json()
                if (!Array.isArray(allOriginsJson)) {
                    allOriginsJson = [];
                }
                setOrigins(allOriginsJson)
            }
        }
        getOrigins().then(r => {
            console.log('Origins fetched');
        });
    }, [props.whichPage]);

    const handleClick = (e) => {
        e.preventDefault();
        props.whichPage_func("password")
        if(props.whichPage === "password") {
            props.whichPage_func("main")
        }else{
            props.whichPage_func("password")
        }
    }

    return (
        <div className="subSidebar">
            <button id="newPasswordButton" onClick={handleClick}>{props.whichPage === "password" ? "Go Back" : "New Password"}</button>
            <h2>Passwords</h2>
            <ul id="AllOrigins">
                {origins.map(origin => <OriginItem origin={origin} whichPage_func={props.whichPage_func} JWT={props.JWT} />)}
            </ul>
        </div>
    )
}

export default Sidebar;