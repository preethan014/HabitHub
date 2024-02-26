import React from 'react'
import { useSelector } from 'react-redux'

const SelectedDate = () => {
    const selDate=useSelector(state=>state.calendar.selectedDay)

  return (
    <div>
        <h4>{selDate.selectedDate} {selDate.selectedMonth} {selDate.selectedYear}</h4>
      
    </div>
  )
}

export default SelectedDate
