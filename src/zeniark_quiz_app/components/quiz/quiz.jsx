import React, { useEffect, useState } from "react";
import "./styles/quiz.css";
import { data } from "../../../mock_data/data"
import logo from '../../../images/logo.png';
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import QuizQuestion from "./quizQuestion";

const Quiz = () => {

    let [index, setIndex] = useState(0);
    //////
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [questionsData, setQuestionsData] = useState([{}]);

    useEffect(() => {
        fetch("https://zeniark-quiz-app-api.onrender.com/zeniark-quiz-data")
        .then((res) => res.json())
        .then((json) => setQuestionsData(json));
    }, []);

    const handleAnswer = (answer) => {
        setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
        setCurrentQuestion(currentQuestion + 1);
    }

    //calculate score here
    const calculateScore = () => {
        let score = 0;
        questionsData?.forEach((question, index) => {
            if (userAnswers[index] === question.correct_answer) {
                score++;
            }
        });
        return score;
    }

    return (
        <div className="container">
            {currentQuestion < questionsData?.length ? (
                <>
                    <div className="container-header">
                        <div className="logo-container">
                            <img src={logo} className="logo" alt="logo" />
                            <h2 className="category">Category: {questionsData[currentQuestion].category}</h2>
                        </div>
                        <div className="header-content">
                            <div className="index">{currentQuestion + 1} of 10</div>
                        </div>
                    </div>
                    <hr />
                    <h2 className="question">{questionsData[currentQuestion].question}</h2>
                    <hr />
                    <div className="button-answer">
                        <button className="true-button" onClick={() => handleAnswer("True")}><FaCheck className="icon" /> <span>True</span></button>
                        <div className="space"></div>
                        <button className="false-button" onClick={() => handleAnswer("False")}><FaXmark className="icon" /><span>False</span></button>
                    </div>
                </>

            ) : (
                <>
                    <div className="container-header-final-result center">
                        <div className="logo-container-final-result">
                            <img src={logo} className="logo" alt="logo" />
                            <h2 className="final-results">Final Results</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="your-score">
                        <div className="calculate-score">
                            <p>{calculateScore()}/{questionsData.length}</p>
                        </div>
                        <p className="score">Your Score</p>
                    </div>
                    <hr />
                    <QuizQuestion key={index} questionsData={questionsData} userAnswers={userAnswers} />
                </>
            )}
        </div>
    )
}

export default Quiz;