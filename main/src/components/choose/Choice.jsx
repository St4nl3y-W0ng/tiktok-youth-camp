import React from "react";

function Choice(props) {
    function handleClick() {
        props.onSelect(props.id);
    }

    return (

    <div className="choice">
        <button onClick={handleClick}>{props.title}</button>
    </div>

    );
}

export default Choice;