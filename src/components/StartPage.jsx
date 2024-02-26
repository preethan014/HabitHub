import React, { useEffect } from "react";
import "../styles/startpage.css";
import startpageright from "../images/startpageright.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const StartPage = () => {
  const isLoggedIn=useSelector(state=>state.user.isLoggedIn);
  const navigate=useNavigate();

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/a");
    }

  },[])
  function handleLogin(){
    navigate("login");
  }
  return (
    <div className="start-page-outer">
      <div className="start-page-inner">
        <div className="start-page-up">
          <div className="start-page-up-left">
            <p className="spul-p1">
              Do your tasks<span className="spul-s"> quickly </span > and<span className="spul-s"> easy </span>
            </p>
            <p className="spul-p2">Your tasks, your rules, our support.</p>
            <button onClick={handleLogin}>Get started</button>
          </div>
          <div className="start-page-up-right">
            <img src={startpageright} />
          </div>
        </div>
        <div className="start-page-down">
          <div className="start-page-down-inner">
            <div className="start-page-inner-box">
              <h3>Easy to use</h3>
              <p>
                Simplified chore lists with intuitive layout for seamless daily
                planning
              </p>
            </div>
            <div className="start-page-inner-box">
              <h3>Full Support</h3>
              <p>
                Empower your productivity with personalized task management
                guided by your rules
              </p>
            </div>
            <div className="start-page-inner-box">
              <h3>Never feel lost</h3>
              <p>
                Stay seamlessly connected to your tasks anytime, anywhere with
                our sync mobile app
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
