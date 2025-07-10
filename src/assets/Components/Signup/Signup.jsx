import React from "react";
import "./Signup.css";
import { GiBrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signuppage">
      <div className="signupheader">
        <button onClick={() => navigate("/home")}>Back</button>
        <h1>
          <GiBrain /> Buster SignUp
        </h1>
      </div>

      <div className="signupcontainer">
        <form>
          <div className="signupuserinputbox">
            <input type="text" placeholder="Enter username" required />
            <br />
            <input type="text" placeholder="Enter email" required />
            <br />
            <input type="password" placeholder="Enter password" required />
            <br />
            <input
              type="password"
              placeholder="Enter confirm password"
              required
            />
          </div>

          <button type="submit" className="signupsubmit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
