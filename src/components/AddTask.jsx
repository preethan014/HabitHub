import React, { useState } from "react";
import "../styles/addtask.css";
import { TiTick } from "react-icons/ti";
import addreaction from "../images/addreaction.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const AddTask = () => {
  const dispatch = useDispatch();
  let d = useSelector((state) => state.calendar.selectedDay.selectedDate);
  let m = useSelector((state) => state.calendar.selectedDay.selectedMonth);
  let y = useSelector((state) => state.calendar.selectedDay.selectedYear);
  const uid = useSelector((state) => state.user.userid);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function addTask() {
   await axios
      .post("http://127.0.0.1:4545/api/addtask", {
        userid: uid,
        taskName: name,
        taskDescription: description,
        date:
          new Date().getDate().toString() +
          new Date().getMonth().toString() +
          new Date().getFullYear().toString(),
      })
      .then((res) => {
        if (res.data.msg === "success") {
          setName(""), setDescription("");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
  function handleAddTask(e) {
    e.preventDefault();
    addTask();
  }

  return (
    <div className="add-task-outer">
      <div className="a-t-h1-outer">
        New Task
        <div className="a-t-icon">
          <img src={addreaction} />
        </div>
      </div>
      <div className="a-t-form-outer">
        <form onSubmit={handleAddTask} className="a-t-form-main">
          <div>
            <h3>
              Adding task on {d}-{m}-{y}{" "}
            </h3>
          </div>
          <div className="a-t-i1-outer">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name your new task"
              value={name}
            />
          </div>
          <div className="a-t-i2-outer">
            <input
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your new task"
              type="text"
              value={description}
            />
          </div>
          <div className="a-t-btn-outer">
            <button type="submit">
              <TiTick size={25} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
