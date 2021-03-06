import "./App.css";
import DailyStatusUpdate from "./components/DailyStatusUpdate";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Tasks from "./components/Tasks";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Admin from "./components/Admin";
import AdminMessages from "./components/AdminMessages";
import BatchSummary from "./components/BatchesSummary";
import FeeReport from "./components/FeeReport";
import ManageTasks from "./components/ManageTasks";
import ManageUsers from "./components/ManageUsers";
import Ranking from "./components/Ranking";
import Request from "./components/Request";
import Presentation from "./ManageTaskComponents/Presentation";
import CreateTask from "./ManageTaskComponents/CreateTask";
import TaskReview from "./ManageTaskComponents/TaskReview";
import ClassroomAttendance from "./ManageTaskComponents/ClassroomAttendance";
import SignUp from "./components/SignUp";
// import { useNavigate } from "react-router-dom";
// import React,{ useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>

      <Route path="/Home" element={<Home />}></Route>
      <Route path="/dailystatusupdate" element={<DailyStatusUpdate />}></Route>
      <Route path="/messages" element={<Messages />}></Route>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/adminmessages" element={<AdminMessages />}></Route>
      <Route path="/batchsummary" element={<BatchSummary />}></Route>
      <Route path="/feereport" element={<FeeReport />}></Route>
      <Route path="/managetasks" element={<ManageTasks />}>
        <Route path ="/managetasks/presentation" element={<Presentation/>}></Route>
        <Route path ="/managetasks/createTask" element={<CreateTask/>}></Route>
        <Route path ="/managetasks/taskReview" element={<TaskReview/>}></Route>
        <Route path ="/managetasks/classAttendance" element={<ClassroomAttendance/>}></Route>
      </Route>
      <Route path="/manageusers" element={<ManageUsers />}></Route>
      <Route path="/ranking" element={<Ranking />}></Route>
      <Route path="/request" element={<Request />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
