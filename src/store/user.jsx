import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userid: "",
  },
  reducers: {
   setLogin(state, action) {
    state.isLoggedIn=true,
    state.userid=action.payload.uid
      
    },
    setLogout(state, action) {
      state.isLoggedIn = false;
      state.userid = "";
    },
  
  },
});

export const userActions = userSlice.actions;

export default userSlice;
