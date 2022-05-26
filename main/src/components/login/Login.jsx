import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom"


function Login() {
    const [login, setLogin] = useState({
        userName: "User",
        rounds: "1"
    })

    const navigate = useNavigate()
    function handleClick() {
        navigate('/choose')
    }

    function handleChange(event) {
        const { name, value } = event.target
        setLogin(prevItems => {
            return { ...prevItems, [name]: value }
        })
    }

    return (<div>
        <h1>Welcome to {login.rounds} {(login.rounds === "1") ? "round" : "rounds"} of Hangman, {login.userName}</h1>
        <form onSubmit={handleClick}>
            <Input name="userName"
                value={login.userName}
                placeholder="Enter a Username"
                onChange={handleChange}
            />
            <Input name="rounds"
                value={login.rounds}
                placeholder="How many rounds of Hangman do you want to play?"
                onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    </div>
    );
}
export default Login;