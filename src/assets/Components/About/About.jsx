import React from "react";
import "./About.css";
import { GiBrain } from "react-icons/gi";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  // Handle navigation to the Home page
  const handlehome = () => {
    navigate('/Home'); // Corrected the path for proper navigation
  };

  // Set document title dynamically for SEO optimization
  React.useEffect(() => {
    document.title = "About - Brain Buster";
  }, []);

  return (
    <div className="aboutpage">
      {/* Navigation bar */}
      <div className="aboutnav">
        <div className="abouthome">
          <button onClick={handlehome} className='abouthome'>Home</button>
        </div>
        <div className="aboutlogo">
          <h1>
            <GiBrain />
            Buster
          </h1>
        </div>
      </div>

      {/* About Us section */}
      <div className="beforefooter">
        <h1>About Us</h1>
        <div className="rightleft">
          <div className="beforefooterleft">
            <h1>
              Today, <span>Brain Buster</span> is trusted by educators worldwide, offering a
              rich library of custom-made <span>quizzes & exercises</span> designed to make
              learning fun and effective.
            </h1>
          </div>
          <div className="beforefooterright">
            <img src="cube.png" alt="cube" />
          </div>
        </div>
      </div>

      {/* Our Mission section */}
      <div className="aboutcontent">
        <h1>Our Mission</h1>
        <div className="rightleft">
          <div className="aboutrightcontent">
            <h2>
              We empower <span>curious minds</span> and <span>quiz enthusiasts</span> daily.
            </h2>
            <p>
              In a world driven by knowledge, we provide engaging, insightful
              quizzes that challenge your intellect and push you to expand your
              understanding.
              <br /><br />
              Designed for learners, trivia lovers, and experts alike, Brain
              Buster has grown from a small idea into a thriving platform for
              thousands of users. We aim to entertain and educate our users,
              helping them sharpen their skills and boost their confidence.
              <br /><br /><br />
              <span>Brain Buster is owned by a dedicated team of innovators, all working
              to bring fun and knowledge to your fingertips.</span>
            </p>
          </div>
          <div className="aboutleftcontent">
            <img src="brain.png" alt="brain"></img>
          </div>
        </div>
      </div>

      {/* Team Members section */}
      <div className="teaminfo">
        <div className="tophead">
          <h2>Meet the Team</h2>
        </div>
        <div className="member">
          <div className="teammember">
            <img src="maz.jpg" alt="team1" />
            <h3>Muhammad Maaz Younas</h3>
            <p>Founder and CEO</p>
          </div>
          <div className="teammember">
            <img src="team2.jpg" alt="team2" />
            <h3>James Udell</h3>
            <p>Behavioral Data Analyst</p>
          </div>
          <div className="teammember">
            <img src="team3.jpg" alt="team3" />
            <h3>Zohrab Amirkhanyan</h3>
            <p>Web Developer</p>
          </div>
          <div className="teammember">
            <img src="team4.jpg" alt="team4" />
            <h3>Vahan Petrosyan</h3>
            <p>Director of Technology</p>
          </div>
          <div className="teammember">
            <img src="team5.jpg" alt="team5" />
            <h3>Matt Southern</h3>
            <p>Senior News Writer</p>
          </div>
          <div className="teammember">
            <img src="team6.jpg" alt="team6" />
            <h3>Katie Morton</h3>
            <p>Audience Lifecycle</p>
          </div>
          <div className="teammember">
            <img src="team1.jpg" alt="team7" />
            <h3>Jonathan Dermid</h3>
            <p>Digital Marketing Specialist</p>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default About;
