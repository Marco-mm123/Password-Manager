import React from "react";

function EditButton(props) {

    const handleEdit = async (e) => {
        e.preventDefault()
        const origin_id = props.origin.origin_id;
        props.whichPage_func(`${origin_id}_edit`);
    }
    return (
        <button className="editButton" onClick={handleEdit}></button>
    )
}

export default EditButton;