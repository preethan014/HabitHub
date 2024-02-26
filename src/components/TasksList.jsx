import React, { useEffect, useState } from "react";
import "../styles/taskslist.css";
import { FaPlus } from "react-icons/fa";
import emptytasks from "../images/emptytasks.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import axios from "axios";
import { calendarActions } from "../store/calendar";
const TasksList = () => {
  const dispatch=useDispatch()
  var lists = useSelector((state) => state.calendar.lists);
  const navigate = useNavigate();
  function handleAddTaskIcon() {
    navigate("add-task");
  }
  const userid=useSelector(state=>state.user.userid)
  const tasklist=useSelector(state=>state.calendar.selectedDay);
  const date=tasklist.selectedDate.toString()+tasklist.selectedMonth.toString()+tasklist.selectedYear.toString()
  console.log("date",date);
  const getTaskDetails=async ()=>{
    await axios.post("http://127.0.0.1:4545/api/gettask",{userid,date}).then((res)=>{
      console.log(res.data);
    })

    dispatch(calendarActions.addList(res.data.msg))

      

  }

  useEffect(()=>{
    dispatch( getTaskDetails)
  
  },[])

  return (
    <div className="taskslist-outer">
      <div>
        <h1>Today</h1>
      </div>
      <div className="tasks-list-mid-outer">
        {lists.length === 0 ? (
          <div className="tasks-img-outer">
            <img src={emptytasks} />
          </div>
        ) : (
          <div className="tasks-list-items">
            <Task
              each={{
                id: lists[0].id,
                name: lists[0].name,
                description: lists[0].description,
              }}
            />
          </div>
        )}
      </div>
      <div className="taskslist-bottom">
        <FaPlus className="faplus-icon" onClick={handleAddTaskIcon} size={40} />
      </div>
    </div>
  );
};

export default TasksList;
