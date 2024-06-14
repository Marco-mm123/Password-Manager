import React from "react";

function DeleteButton(props) {

    const handleDelete = async (e) => {
        e.preventDefault()
        const origin_id = props.origin.origin_id
        await fetch(`/origins/${origin_id}`, {
            method: "DELETE",
        })
        window.location.reload()
    }

    return (
        <button className="deleteButton" onClick={handleDelete}></button>
    )
}

export default DeleteButton;