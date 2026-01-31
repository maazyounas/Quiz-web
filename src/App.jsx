import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import Leaderboard from "./assets/Components/Leaderboard/Leaderboard";
import Login from "./assets/Components/Login/Login";
import Quiz from "./assets/Components/Quiz/Quiz";
import Signup from "./assets/Components/Signup/Signup";
import Footer from "./assets/Components/Footer/Footer";
import CreateQuiz from "./assets/Components/CreateQuiz/CreateQuiz";
import HtmlQuiz from "./assets/Components/HtmlQuiz/HtmlQuiz";
import ForgotPass from "./assets/Components/ForgotPassword/ForgotPass";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPass/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/createQuiz" element={<CreateQuiz />} />
        <Route path="htmlquiz" element={<HtmlQuiz/>} />
        <Route path="*" element={<Home />} />  {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
