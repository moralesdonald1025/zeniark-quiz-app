import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const QuizResultData = ({ questionData, index, userAnswers }) => {
    const { question, correct_answer } = questionData;
    const isUserAnswerCorrect = userAnswers[index] === correct_answer;

    return (
        <>
         <div className='quiz-result-data-container'>
            <div>
                <div className="question-container">
                    <p>{index + 1}. </p>
                    <p className="question-from-result"> {question}</p>
                </div>
                <div className="answers-container">
                    <p>The correct answer is <span className={correct_answer === 'True' ? 'answer-true' : 'answer-false'}>{correct_answer}.  </span><span>You answered <span className={userAnswers[index] !== 'True' ? 'user-false' : 'user-true'}>{userAnswers[index]}.</span></span></p>
                </div>
            </div>
            <div className="result-icon">
                {isUserAnswerCorrect && <FaCheck style={{ color: "#83DB14", fontSize: "24px"}} />}
                {!isUserAnswerCorrect && <FaXmark style={{ color: "#E33131", fontSize: "24px"}} />}
            </div>
        </div>
        <hr />
        </>
    );
};


export default QuizResultData;