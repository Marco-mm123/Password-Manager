import React from 'react';

function OriginItem({ origin }) {
    return (
        <li id={origin.origin_id}>
            <button id={origin.origin_name} className="origins">{origin.origin_name}</button>
            <button className="editButton"></button>
            <button className="deleteButton"></button>
        </li>
    );
}

export default OriginItem;