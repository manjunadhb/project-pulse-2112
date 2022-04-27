import AdminHeader from "./AdminHeader"
import { NavLink, Outlet } from "react-router-dom"
import ClassroomAttendance from "../ManageTaskComponents/ClassroomAttendance"
import CreateTask from "../ManageTaskComponents/CreateTask"
import Presentation from "../ManageTaskComponents/Presentation"
import TaskReview from "../ManageTaskComponents/TaskReview"

const ManageTasks=()=>{
    return(
        <>
        <AdminHeader/>
        <div>
        <h4>Create Task </h4>
        <nav className="manageTaskNav">
            <NavLink to="/managetasks/presentation">Presentation</NavLink>
            <NavLink to="/managetasks/taskReview">Task Review</NavLink>
            <NavLink to="/managetasks/createTask">Create Task</NavLink>
            <NavLink to="/managetasks/classAttendance">Classroom Attendance</NavLink>
        </nav>
     <Outlet/>
      </div>
        </>

    )
}

export default ManageTasks