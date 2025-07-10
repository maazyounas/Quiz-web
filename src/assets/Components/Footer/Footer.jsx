import React from 'react'
import './Footer.css'
import { GiBrain } from "react-icons/gi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h2>
          <GiBrain /> Buster
        </h2>
        <p>
          Brain Buster is your go-to platform for fun, engaging, and
          informative quizzes that challenge your knowledge across various
          topics. Whether you're a programming wizard or just starting out,
          there's a quiz for you.
        </p>
      </div>
      <div className="footer-section-links">
        <h2>Quick Links</h2>
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
            <a href="/Login">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-section-social">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#facebook">
            <FaFacebookF />
          </a>
          <a href="#twitter">
            <FaTwitter />
          </a>
          <a href="#instagram">
            <FaInstagram />
          </a>
          <a href="#linkedin">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Brain Buster. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer;
