import { Navbar,Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {" "}
          <img src="./images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link to="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Manage" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Student</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Batches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Holiday</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Course</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">AppSearchSync</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Employee</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fee Receipt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Fee Receipt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Messages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Task</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enquiry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Poll</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Notice</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reports" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Individual Student</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Batch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Custom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Attendance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fee</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Communication</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Students List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tickets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enquiry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Assignments</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Settings</Nav.Link>
          </Nav>
          <Link to="/" className="nav-link">Logout</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Admin;
