import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <div className="dashboard ">
        <Link className="nav-link" to="/ranking">Ranking</Link>
        <Link className="nav-link" to="/feereport">FeeReport </Link>
        <Link className="nav-link" to="/batchsummary">Batches Summary </Link>
        <Link className="nav-link" to="/request">Requests </Link>
        <Link className="nav-link" to="/adminmessages">Messages </Link>
        <Link className="nav-link" to="/managetasks">ManageTasks </Link>
        <Link className="nav-link" to="/manageusers">ManageUsers </Link>
      </div>
    </div>
  );
};
export default Admin;
