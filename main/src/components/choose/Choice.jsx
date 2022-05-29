import React from "react";

function Choice(props) {
    function handleClick() {
        props.onSelect(props.id);
    }

    return (
        <div className="choice col-md-3">
            <button className="btn-light" onClick={handleClick}>{props.title}</button>
        </div>
    );
}

export default Choice;