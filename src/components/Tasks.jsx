import React from 'react'
import "../styles/tasks.css"
import { useNavigate } from 'react-router-dom'
const Tasks = () => {
  const navigate=useNavigate();
  function handleTodayHome(){
    navigate("");

  }
  return (
    <div className='tasks-outer'>
        <div className='tasks-o1'>
        <h5>Tasks</h5>
        </div>
        <div onClick={handleTodayHome} className='tasks-o2'>
        <p>Today</p>
        <h6>2</h6>
        </div>


      
    </div>
  )
}

export default Tasks
