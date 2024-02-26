import React, { useState } from "react";
import "../styles/login.css";
import google from "../images/google.png";
import fb from "../images/fb.png";
import apple from "../images/apple.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  function handleRegisterAuth(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:4545/api/register", {email,userName,password})
      .then((res) => {
    
          navigate("/login")
      
      })
      .catch((err) => {
        console.log("error :", err);
      });
  }
  return (
    <div className="login-outer">
      <div className="login-inner">
        <div className="login-top">
          <h3>Register to HabitHUB</h3>
          <p>
            Welcome! Register using your social account or email to continue
            with us
          </p>
          <div className="login-icons">
            <img src={google} />
            <img src={fb} />
            <img src={apple} />
          </div>
        </div>
        <div className="form-outer">
          <form onSubmit={handleRegisterAuth} className="form-main">
            <div className="form-inner-main">
              <label htmlFor="email">Email</label>

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>

            <div className="form-inner-main">
              <label htmlFor="userNAme">Username</label>

              <input
                type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                name="userName"
              />
            </div>
            <div className="form-inner-main">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="login-btn">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
