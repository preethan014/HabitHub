import React, { useEffect, useState } from "react";
import "../styles/calendar.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../store/calendar";
const Calendar = () => {
  const dispatch = useDispatch();
  const monthNames = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  function getLastMonthTotalDays(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastMonth = month === 0 ? 11 : month - 1;
    const lastMonthYear = lastMonth === 11 ? year - 1 : year;
    const lastMonthDays = new Date(lastMonthYear, lastMonth + 1, 0).getDate();
    return lastMonthDays;
  }

  function getCurrentMonthTotalDays(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentMonthDays = new Date(year, month + 1, 0).getDate();
    return currentMonthDays;
  }

  function getStartingDayOfMonth(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return firstDayOfMonth === 0 ? 7 : firstDayOfMonth;
  }

  const m_m = useSelector((state) => state.calendar.selectedDay.selectedMonth);
  const y_m = useSelector((state) => state.calendar.selectedDay.selectedYear);
  const d_m = useSelector((state) => state.calendar.selectedDay.selectedDate);
  var date = useSelector((state) => state.calendar.today.date);
  var tmonth = useSelector((state) => state.calendar.today.month);

  useEffect(() => {}, [y_m, m_m, d_m]);

  let dates = [];
  const temp = [];
  const specificDate = new Date(Number(y_m), Number(m_m), Number(d_m));
  let k = getStartingDayOfMonth(specificDate);
  let pm = getCurrentMonthTotalDays(specificDate);
  let lm = getLastMonthTotalDays(specificDate);
  let s1 = k;
  let s2 = pm + k;
  date = date + k;
  let it = 0;
  for (let i = 0; i <= 42; i++) {
    if (i != 0 && i % 7 == 0) {
      temp.push(dates);
      dates = [];
    }
    if (i < k) {
      dates.push(it++);
    } else if (i >= k && i < pm + k) {
      dates.push(it++);
    } else {
      dates.push(it++);
    }
  }

  function handleSelectedDate(id) {
    if (id < s1) {
      if (m_m == 0) {
        let d = lm - k + id + 1;
        let m = 11;
        let y = y_m - 1;
        dispatch(calendarActions.setSelectedDate({ d, m, y }));
      } else {
        let d = lm - k + id + 1;
        let m = m_m - 1;
        let y = y_m;
        dispatch(calendarActions.setSelectedDate({ d, m, y }));
      }
    } else if (id >= s2) {
      if (m_m == 11) {
        let d = id - pm - k + 1;
        let m = 0;
        let y = y_m + 1;
        dispatch(calendarActions.setSelectedDate({ d, m, y }));
      } else {
        let d = id - pm - k + 1;
        let m = m_m + 1;
        let y = y_m;
        dispatch(calendarActions.setSelectedDate({ d, m, y }));
      }
    } else {
      let d = id - k + 1;
      let m = m_m;
      let y = y_m;
      dispatch(calendarActions.setSelectedDate({ d, m, y }));
    }
  }
  function changeMonthForward() {
    dispatch(calendarActions.changeMonthFarward());
  }
  function changeMonthBackward() {
    dispatch(calendarActions.changeMonthBackward());
  }

  return (
    <div className="calendar-outer">
      <div className="calendar-m-y-outer">
        <div className="calendar-m">{monthNames[m_m]}</div>
        <div className="calendar-y">{y_m}</div>
        <div className="change-date-outer">
          <div onClick={changeMonthForward} className="c-c-u">
            <FaArrowDown />
          </div>
          <div onClick={changeMonthBackward} className="c-c-d">
            <FaArrowUp />
          </div>
        </div>
      </div>
      <div>
        <table className="table-outer">
          <thead className="table-thead-outer">
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </thead>
          <tbody className="table-tbody-outer">
            {temp.map((each) => {
              return (
                <tr className="t-r">
                  {each.map((item) => {
                    return (
                      <React.Fragment>
                        {item >= s1 && item < s2 ? (
                          item !== date - 1 ? (
                            m_m === tmonth ? (
                              <td key={item}>
                                <b onClick={() => handleSelectedDate(item)}>
                                  {item - k + 1}
                                </b>
                              </td>
                            ) : (
                              <td
                                onClick={() => handleSelectedDate(item)}
                                key={item}
                              >
                                {item - k + 1}
                              </td>
                            )
                          ) : m_m === tmonth ? (
                            <td key={item}>
                              <b
                                onClick={() => handleSelectedDate(item)}
                                style={{
                                  backgroundColor: "violet",
                                  borderRadius: "50%",
                                  height: "25px",
                                  width: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "white",
                                }}
                              >
                                {item - k + 1}
                              </b>
                            </td>
                          ) : (
                            <td
                              key={item}
                              onClick={() => handleSelectedDate(item)}
                            >
                              {item - k + 1}
                            </td>
                          )
                        ) : (
                          <td
                            key={item}
                            onClick={() => handleSelectedDate(item)}
                          >
                            {item >= s1 ? item - pm - k + 1 : lm - k + item + 1}
                          </td>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
