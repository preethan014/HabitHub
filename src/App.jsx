import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
import HomeLayout from "./components/HomeLayout";
import Calendar from "./components/Calendar";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import Register from "./components/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home/>} />
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="a" element={<HomeLayout/>}>
        <Route index element={<TasksList/>}/>
        <Route path="add-task" element={<AddTask/>}/>

      </Route>
    </Route>
  )
);
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
