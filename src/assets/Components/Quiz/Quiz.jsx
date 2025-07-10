import React from "react";
import "./Quiz.css";
import { GiBrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <div className="quizpage">
      <div className="quizheader">
        <button onClick={() => navigate("/home")} className="quizhome">
          Home
        </button>
        <button onClick={() => navigate("/createQuiz")} className="quizhome">
          Create Quiz
        </button>
      </div>

      <div className="quizlogo">
        <h1>
          <GiBrain /> Buster
        </h1>
      </div>

      <p>Choose a Category</p>

      <div className="quizbtns">
        <button onClick={() => navigate("/htmlquiz")}>HTML</button>
        <button onClick={() => navigate("/cssquiz")}>CSS</button>
        <button onClick={() => navigate("/javascriptquiz")}>JavaScript</button>
        <button onClick={() => navigate("/sqlquiz")}>SQL</button>
        <button onClick={() => navigate("/pythonquiz")}>Python</button>
        <button onClick={() => navigate("/javaquiz")}>Java</button>
      </div>
    </div>
  );
};

export default Quiz;
