import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendar";
import userSlice from "./user";
const store=configureStore(
    {
        reducer:{
            calendar:calendarSlice.reducer,
            user:userSlice.reducer
        }
    }
)
export default store;