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
        <h4>Create Task </h4>
        <nav id="manageTaskNav">
            <NavLink to="/managetasks/presentation"><Presentation/></NavLink>
            <NavLink to="/managetasks/taskReview"><TaskReview></TaskReview></NavLink>
            <NavLink to="/managetasks/createTask"><CreateTask></CreateTask></NavLink>
            <NavLink to="/managetasks/classAttendance"><ClassroomAttendance></ClassroomAttendance></NavLink>
        </nav>
     <Outlet/>
        </>

    )
}

export default ManageTasks