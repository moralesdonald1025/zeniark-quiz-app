import React from "react";
import Quiz from "./zeniark_quiz_app/components/quiz/quiz";
import Home from "./zeniark_quiz_app/pages/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App;
