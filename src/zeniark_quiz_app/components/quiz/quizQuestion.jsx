import React from "react";
import QuizResultData from "./quizResultData";
import { Link } from "react-router-dom";


const QuizQuestion = ({ data, userAnswers }) => {
    return (
        <div className="quiz-app">
            {data.map((questionData, index) => (
                <QuizResultData key={index} questionData={questionData} index={index} userAnswers={userAnswers} />
            ))}
            <div className="play-again">
                <button className="lets-play-again">
                    <Link to="/" className="text-again">PLAY AGAIN</Link>
                </button>
            </div>

        </div>
    );
};


export default QuizQuestion;