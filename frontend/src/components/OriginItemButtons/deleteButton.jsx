import React from "react";

function DeleteButton(props) {

    // function that handles deleting the Origin. (Password gets deleted automatically because of the foreign key constraint)
    const handleDelete = async (e) => {
        e.preventDefault()
        const origin_id = props.origin.origin_id
        await fetch(`/origins/${origin_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${props.JWT}`,
            }
        })
        props.whichPage_func("main")
    }

    return (
        <button className="deleteButton" onClick={handleDelete}></button>
    )
}

export default DeleteButton;