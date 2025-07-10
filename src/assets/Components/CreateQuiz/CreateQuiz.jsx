import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import "./CreateQuiz.css";

const CreateQuiz = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // Handle language selection
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle question input
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Handle option input
  const handleOptionChange = (index, e) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  // Add more options
  const addOptionField = () => {
    setOptions([...options, ""]);
  };

  // Handle correct answer selection
  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  // Handle Add More button (Reset form to create another quiz)
  const handleAddMore = () => {
    setSelectedOption("");
    setQuestion("");
    setOptions([""]);
    setCorrectAnswer("");
  };

  return (
    <div className="createquizpage">
      {/* Header section */}
      <div className="CQHeader">
        <button onClick={() => navigate("/quiz")} aria-label="Go Back">
          Back
        </button>
        <h1>
          <GiBrain /> Buster
        </h1>
      </div>

      {/* Main body content */}
      <div className="CQBody">
        <h1>Create a Quiz</h1>

        {/* Language selection */}
        <label htmlFor="options">Select Language</label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleChange}
          required
          aria-label="Select Language"
        >
          <option value="">Select a Language</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Java">Java</option>
        </select>

        {/* Question input */}
        <div className="question-section">
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Write Question here"
            required
            aria-label="Question Input"
          />
        </div>

        {/* Options input */}
        <div className="options-section">
          {options.map((option, index) => (
            <div key={index} className="option-input">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e)}
                placeholder={`Option ${index + 1}`}
                required
                aria-label={`Option ${index + 1}`}
              />
            </div>
          ))}
          <button
            type="button"
            className="quiz-button"
            onClick={addOptionField}
            aria-label="Add another option"
          >
            Add another option
          </button>
        </div>

        {/* Correct answer selection */}
        <div className="correct-answer-section">
          <label htmlFor="correctAnswer">Correct Answer</label>
          <select
            id="correctAnswer"
            value={correctAnswer}
            onChange={handleCorrectAnswerChange}
            required
            aria-label="Select Correct Answer"
          >
            <option value="">Select Correct Answer</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option || `Option ${index + 1}`}
              </option>
            ))}
          </select>
        </div>

        {/* Button container */}
        <div className="button-container">
          <button className="quiz-button" aria-label="Submit Quiz">
            Submit
          </button>
          <button
            className="quiz-button add-more"
            onClick={handleAddMore}
            aria-label="Add More Quizzes"
          >
            Add More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
