import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HtmlQuiz.css";

const HtmlQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Hyper Trainer Marking Language", isCorrect: false },
        { answerText: "Hyper Text Markup Language", isCorrect: true },
        { answerText: "Hyper Text Marketing Language", isCorrect: false },
        { answerText: "Hyper Text Markup Leveler", isCorrect: false },
      ],
    },
    {
      questionText: "Which HTML tag is used to define an internal style sheet?",
      answerOptions: [
        { answerText: "<style>", isCorrect: true },
        { answerText: "<script>", isCorrect: false },
        { answerText: "<link>", isCorrect: false },
        { answerText: "<css>", isCorrect: false },
      ],
    },
    {
      questionText: "What is the correct HTML element for the largest heading?",
      answerOptions: [
        { answerText: "<heading>", isCorrect: false },
        { answerText: "<h6>", isCorrect: false },
        { answerText: "<h1>", isCorrect: true },
        { answerText: "<head>", isCorrect: false },
      ],
    },
    {
      questionText: "Which HTML attribute is used to define inline styles?",
      answerOptions: [
        { answerText: "styles", isCorrect: false },
        { answerText: "style", isCorrect: true },
        { answerText: "class", isCorrect: false },
        { answerText: "font", isCorrect: false },
      ],
    },
    {
      questionText: "Which tag is used to create a hyperlink in HTML?",
      answerOptions: [
        { answerText: "<link>", isCorrect: false },
        { answerText: "<a>", isCorrect: true },
        { answerText: "<href>", isCorrect: false },
        { answerText: "<nav>", isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="htmlquiz">
      <div className="htmlquizheader">
        <button onClick={() => navigate("/home")}>Home</button>
        <h1>HTML Quiz</h1>
      </div>

      <div className="htmlquizbody">
        {showScore ? (
          <div className="score-section">
            <h2>
              You scored {score} out of {questions.length}
            </h2>
            <button onClick={handleRestart}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <h2>{questions[currentQuestion].questionText}</h2>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HtmlQuiz;
