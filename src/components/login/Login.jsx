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
        <div className="user-info-card col-lg-6 col-md-12">
            <h1>Welcome to {login.rounds} {(login.rounds === "1") ? "round" : "rounds"} of Hangman, {login.userName}</h1>
            <form onSubmit={handleClick}>
                <Input name="userName"
                    value={login.userName}
                    placeholder="Enter a Username"
                    type="text"
                    onChange={handleChange}
                />

                <Input name="rounds"
                    value={login.rounds}
                    placeholder="How many rounds of Hangman do you want to play?"
                    type="number"
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>

        <div className="instruction-card col-lg-6 col-md-12">
            <div className="card">
                <div className="card-body">
                    <h4><u>Instructions</u></h4>
                    <p>The Hangman Game is a game where the player attempts to guess the letters of an unknown word. For each incorrect guess, a part of the hanged man will be drawn. The round ends when the full hanged man is drawn. Try your best to guess the word before the full hanged man is drawn!</p>
                    <span id="more">
                        <ol>
                            <li>Input your username (for leaderboard purposes)</li>
                            <li>Choose your preferred number of rounds you wish to play for. (5, 10, 15)</li>
                            <li>Select <span id="next">"Next→"</span> and select your preferred theme for the rounds. Do note that you are given a fixed time of 1 minute per round.</li>
                            <li>Input a single alphabet as your guess.</li>
                            <li>If you require a hint, you may select the <span id="help">"Get Help"</span> button.</li>
                            <li>If you opt to give up and skip to the next word, you may select<span id="skip">"Skip to next"</span> button.</li>
                            <li>Should you opt to exit the game, you may select the <span id="exit">"Exit Game"</span> button.</li>
                            <li>All the best!</li>
                        </ol>
                    </span>
                    <button onclick="showMore()" id="myBtn">For more instructions</button>

                </div>
            </div>
        </div>


    </div>
    );
}
export default Login;