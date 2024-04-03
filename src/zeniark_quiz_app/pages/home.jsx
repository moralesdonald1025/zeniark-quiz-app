import React from "react";
import "../components/quiz/styles/quiz.css";
import "./home.css";
import logo from '../../images/zeniark_logo.jpg'; // Import the logo image
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="container">
            <div className="logo-container"> {/* Container to center the logo */}
                <img src={logo} className="zeniark_logo" alt="logo" /> {/* Render the logo */}
            </div>
            <h2 className="welcome-title">Welcome to the Trivia Challenge!</h2>
            <p className="presented">You will be presented with 10 True or False questions.</p>
            <div className="can-you-score">
                <p>Can you score 10/10?</p>
            </div>
            <button className="lets-start">
                <Link to="/quiz" className="text-start">LET’S START!</Link>
            </button>
        </div>

    )
}

export default Home;