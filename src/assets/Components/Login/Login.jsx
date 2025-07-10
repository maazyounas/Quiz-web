import React from "react";
import "./Login.css";
import { GiBrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="loginpage">
      <div className="loginheader">
        <button onClick={() => navigate("/home")}>Back</button>
        <h1>
          <GiBrain /> Buster LogIn
        </h1>
      </div>

      <div className="logincontainer">
        <form>
          <div className="loginuserinputbox">
            <input type="text" placeholder="Enter username" required />
            <br />
            <input type="password" placeholder="Enter password" required />
          </div>

          <div className="loginoption">
            <a href="#">Forget password?</a>
          </div>
          <button type="submit" className="loginsubmit">
            Log In
          </button>
          <br />
          <button className="newacc" onClick={() => navigate("/Signup")}>
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
