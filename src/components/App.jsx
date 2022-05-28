import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Choose from "./choose/Choose";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./game/Game";


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="choose" element={<Choose />} />
                        <Route path="game" element={<Game />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
export default App; 