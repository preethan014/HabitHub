import React from "react";
import "../styles/task.css";
const Task = (props) => {
  const { id, name, description } = props.each;
  return (
    <div key={id} className="task-outer">
      <div className="task-name">Task Name: {name}</div>
      <div className="task-description">Task Description: {description}</div>
      <div className="task-btn-outer">
        <button className="button-3" role="button">
          <span className="text">Edit</span>
        </button>
        <button className="button-3" role="button">
          <span className="text">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
