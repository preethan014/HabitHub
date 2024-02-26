import React from "react";
import Calendar from "./Calendar";
import "../styles/homelayout.css";
import Tasks from "./Tasks";
import SelectedDate from "./SelectedDate";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div className="home-layout-outer">
      <div className="home-layout-left-outer">
      
        <Calendar />
        <Tasks />
        <SelectedDate/>
       
      </div>
      <div className="home-layout-right-outer">
        <Outlet/>
      </div>
    </div>
  );
};

export default HomeLayout;
