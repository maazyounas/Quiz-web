import React from "react";
import "./ForgotPass.css";
import { GiBrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();

  return (
    <div className="forgotpage">
      <div className="forgotheader">
        <button onClick={() => navigate("/login")}>Back</button>
        <h1>
          <GiBrain /> Buster Reset
        </h1>
      </div>

      <div className="forgotcontainer">
        <form>
          <p className="forgottext">
            Enter your email and we’ll send you a password reset link.
          </p>

          <div className="forgotinputbox">
            <input type="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" className="forgotsubmit">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
