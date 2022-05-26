import React from "react";

function Input(props) {
    return <input
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}></input>

}
export default Input;