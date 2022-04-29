import AdminHeader from "./AdminHeader"
import { NavLink, Outlet } from "react-router-dom"
import ClassroomAttendance from "../ManageTaskComponents/ClassroomAttendance"
import CreateTask from "../ManageTaskComponents/CreateTask"
import Presentation from "../ManageTaskComponents/Presentation"
import TaskReview from "../ManageTaskComponents/TaskReview"

const ManageTasks=()=>{
      
    let highlightNavLink = (obj)=>
    {
        if(obj.isActive == true)
        {
            return {padding:'3px', backgroundColor:"rgb(93, 190, 190)",color:"white"}
        }
    }

    return(
        <>
        <AdminHeader/>
        <div>
        <h4>Create Task </h4>
        <nav className="manageTaskNav">
            <NavLink to="/managetasks/presentation" style={(obj)=>highlightNavLink(obj)}>Presentation</NavLink>
            <NavLink to="/managetasks/taskReview" style={(obj)=>highlightNavLink(obj)}>Task Review</NavLink>
            <NavLink to="/managetasks/createTask" style={(obj)=>highlightNavLink(obj)}>Create Task</NavLink>
            <NavLink to="/managetasks/classAttendance" style={(obj)=>highlightNavLink(obj)}>Classroom Attendance</NavLink>
        </nav>
     <Outlet/>
      </div>
        </>

    )
}

export default ManageTasks