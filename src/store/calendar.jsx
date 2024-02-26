import { createSlice } from "@reduxjs/toolkit";
const d = new Date();
const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    today: {
      date: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear(),
    },
    selectedDay: {
      isSelected: false,
      selectedDate: d.getDate(),
      selectedMonth: d.getMonth(),
      selectedYear: d.getFullYear(),
    },
    lists: [],
  },
  reducers: {
    changeMonthFarward(state, action) {
      if (state.selectedDay.selectedMonth == 11) {
        state.selectedDay.selectedMonth = 0;
        state.selectedDay.selectedYear += 1;
      } else {
        state.selectedDay.selectedMonth += 1;
      }
    },
    changeMonthBackward(state, action) {
      if (state.selectedDay.selectedMonth == 0) {
        state.selectedDay.selectedMonth = 11;
        state.selectedDay.selectedYear -= 1;
      } else {
        state.selectedDay.selectedMonth -= 1;
      }
    },
    setSelectedDate(state, action) {
      (state.selectedDay.isSelected = true),
        (state.selectedDay.selectedDate = action.payload.d),
        (state.selectedDay.selectedMonth = action.payload.m),
        (state.selectedDay.selectedYear = action.payload.y);
    },
    addList(state, action) {
      const taskList=action.payload;
      console.log(taskList);
      taskList.forEach((each)=>{
        state.lists.push({
          name:each.name,
          description:each.description
        })
      })
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice;
