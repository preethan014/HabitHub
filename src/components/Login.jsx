import React, { useState } from "react";
import "../styles/login.css";
import google from "../images/google.png";
import axios from "axios";
import fb from "../images/fb.png";
import apple from "../images/apple.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();

  async function handleCheck(){
    await axios
    .post("http://127.0.0.1:4545/api/login", {email,password})
    .then((res) => {
      if(res.data.msg==="successfull"){
       
        dispatch(
          userActions.setLogin({uid:res.data.uid})
        )

    navigate("/a")

      }
    }).catch((err)=>{
      console.log("error",err);
    });

  }
 const handleLoginAuth=async (e)=>{
    e.preventDefault();
    dispatch(handleCheck)
   
   
     
    
  }
  function handleSignUp(){
    navigate("/register")
  }
  return (
    <div className="login-outer">
      <div className="login-inner">
        <div className="login-top">
          <h3>Log in to HabitHUB</h3>
          <p>
            Welcome back! Sign in using your social account or email to continue
            us
          </p>
          <div className="login-icons">
            <img src={google} />
            <img src={fb} />
            <img src={apple} />
          </div>
        </div>
        <div className="form-outer">
          <form onSubmit={handleLoginAuth}className="form-main">
            <div className="form-inner-main">
              <label htmlFor="email">Email</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
            </div>            
            <div className="form-inner-main">
              <label htmlFor="password">
              Password
              </label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" />
            </div>
            <div className="login-btn"><button type="submit">Login</button></div>
                  <div 
            onClick={handleSignUp}
            style={{color:"blue",textAlign:"center",margin:"10px",cursor:"pointer"}}
            className="form-inner-main">
           
              Create Account
         
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
