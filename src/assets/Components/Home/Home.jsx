import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handlejoinus = () => {
    console.log("Navigating to Signup");
    navigate("/signup");
  };

  const handlesuggestion = () => {
    console.log("Navigating to Contact");
    navigate("/contact");
  };

  const handlequiz = () => {
    console.log("Navigating to Quiz");
    navigate("/quiz");
  };

  const handleabout = () => {
    console.log("Navigating to About");
    navigate("/about");
  };

  const handlehtml=()=>{
    console.log("Navigating to Html");
    navigate("/htmlquiz");
  }

  return (
    <div className="home">
      <div className="nav">
        <div className="logo">
          <h1>
            <GiBrain />
            Buster
          </h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Quiz">Quiz</a>
            </li>
            <li>
              <a href="/Leaderboard">Leaderboard</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/Login" className="login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="firstportion">
        <div className="firstcontent">
          <h2>Introducing Brain Buster</h2>
          <h1>"I didn’t know quizzes could be this engaging!"</h1>
          <span>- Almost everyone</span>
          <div className="divider"></div>
          <p>
            Create and deliver mind-stimulating quizzes that challenge learners,
            entertain trivia lovers, and sharpen the skills of every user.
          </p>
          <button className="btn" onClick={handlejoinus}>
            Signup
          </button>
          <button className="btn" onClick={handleabout}>
            About more
          </button>
        </div>
      </div>

      <div className="secondportion">
        <div className="leftcontent">
          <div className="content">
            <h1>Why Join Brain Buster?</h1>
            <p>
              At Brain Buster, we believe that learning should be fun,
              challenging, and rewarding! Whether you're a trivia enthusiast or
              looking to sharpen your knowledge across various programming
              topics, our platform offers engaging quizzes that test your
              brainpower. Compete with friends, climb the leaderboards, and
              discover new facts with each quiz. Join us today and become part
              of a community that loves to learn and challenge the mind!
            </p>
            <button className="joinus" onClick={handlejoinus}>
              Join us
            </button>
          </div>
        </div>

        <div className="rightcontent">
          <img src="img.png" alt="img" />
        </div>
      </div>

      <div className="thirdportion">
        <h1>Quiz Categories We Included</h1>
        <div className="topics">
          <div className="topic-item">
            <img src="cplus.png" alt="C++ Logo" />
            <p>C++</p>
          </div>
          <div className="topic-item">
            <img src="css.jpeg" alt="CSS Logo" />
            <p>Cascading Style Sheets</p>
          </div>
          <div className="topic-item">
            <img src="html.jpeg" alt="HTML Logo" />
            <p onClick={handlehtml}>Hypertext Markup Language</p>
          </div>
          <div className="topic-item">
            <img src="js.png" alt="JavaScript Logo" />
            <p>JavaScript</p>
          </div>
          <div className="topic-item">
            <img src="python.jpeg" alt="Python Logo" />
            <p>Python</p>
          </div>
          <div className="topic-item">
            <img src="sql.jpeg" alt="SQL Logo" />
            <p>Structured Query Language</p>
          </div>
        </div>
        <button className="suggest" onClick={handlesuggestion}>
          Suggest Us
        </button>
      </div>

      <div className="fourthportion">
        <div className="forthleft">
          <h1>Want to Test Your Knowledge?</h1>
          <p>Tap on the Quiz Below!</p>
          <button className="quiz" onClick={handlequiz}>
            Quiz
          </button>
        </div>

        <div className="forthright">
          <img src="quizimg.png" alt="quizimg" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
