import React from "react";
import navbarlogo from "../images/navimg.png";
import "../styles/navbar.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user";
const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  function handleGoToHome() {
    navigate("/");
  }
  function handleLogout() {
    dispatch(userActions.setLogout());
    navigate("/");
  }
  function handleLogin() {
    navigate("login");
  }

  return (
    <div style={{ display: "block" }}>
 
      <nav className="navbar-outer">
        <div className="navbar-inner">
          <div className="navabr-logo-outer">
            <img className="navbar-logo-img" src={navbarlogo} />
            <h1 onClick={handleGoToHome} className="navbar-logo-name">
              HabitHUB
            </h1>
          </div>
          <div className="navbar-links">
            <a>About us</a>
            <a>Contacts</a>
            {isLoggedIn ? (
              <a onClick={handleLogout}>Logout</a>
            ) : (
              <a onClick={handleLogin}>Login</a>
            )}
          </div>
        </div>
      </nav>
      <div className="navbar-outlet-outer">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
