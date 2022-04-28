import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    textDecorationColor: "red",
    // backgroundColor: "#845EC2",
    color: "#2184A0",
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/home">
          <img src="./images/logo.png" alt="" />
        </NavLink>
        <Nav className="me-auto nav-link">
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/dailystatusupdate"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            DailyStatusUpdate
          </NavLink>
          <NavLink
            to="/tasks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tasks
          </NavLink>
          <NavLink
            to="/messages"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Messages
          </NavLink>

          <NavDropdown title="More" id="basic-nav-dropdown" className="drop">
          <NavDropdown.Item href="#action/3.1" className="text-dark">Create a Request</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="text-dark">Apply Leave</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="text-dark">Curriculum</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
