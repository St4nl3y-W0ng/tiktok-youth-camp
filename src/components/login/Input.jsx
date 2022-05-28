import React from "react";

function Input(props) {
    return <input className="logininfo"
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}></input>

}
export default Input;