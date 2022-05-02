import AdminHeader from "./AdminHeader";
// import { Routes, Route } from "react-router-dom";
import { Navbar,Nav, Table} from "react-bootstrap";
import { FaCaretRight,FaHome,FaSearch } from "react-icons/fa";
import React,{useState,Fragment} from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import data from "./mock-data.json";



const ManageUsers = () => {

  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    id:"",
    photography:"",
    fullName: "",
    surname:"",
    address: "",
    phoneNumber: "",
    email: "",
    role:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editFormData.id,
      photography:editFormData.photography,
      fullName: editFormData.fullName,
      surname:editFormData.surname,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      role:editFormData.role,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id:contact.id,
      photography:contact.photography,
      fullName: contact.fullName,
      surname:contact.surname,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      role:contact.role,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };



  return (
    <>
      <AdminHeader />
      <h1 className='userHeading'>Manage Users <span>For Approving/Deleting Users</span></h1>

      <Navbar collapseOnSelect expand="sm" bg="secondary"  variant="dark">
        <Navbar.Brand>
          {" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="userNav">
            <FaHome/> <Nav.Link className="userDashboard" to="/dashboard">Dashboard</Nav.Link>
            <FaCaretRight/> <Nav.Link className="userManage" to="/manageusers">Manage Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="userApp-container">
      {/* <div class="container"> */}
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-8"><h1><b>Manage Users</b></h1></div>
                        <div class="col-sm-4">
                            <div class="search-box">
                              <i><FaSearch/> </i>
                             <input  type="text" class="form-control" placeholder='Search'></input>
                            </div>
                        </div>
                    </div>
                </div>
      <form className="user-Form" onSubmit={handleEditFormSubmit}>
        <table striped bordered hover size="sm" responsive='sm' className="userTable">
          <thead>
            <tr>
            <th className="user-th">Id</th>
            <th className="user-th">Photograph</th>
              <th className="user-th">First name</th>
              <th className="user-th">Surname</th>
              <th className="user-th">Address</th>
              <th className="user-th">Phone Number</th>
              <th className="user-th">Email</th>
              <th className="user-th">Role</th>
              <th className="user-th">Approve</th>
              <th className="user-th">Edit</th>
              <th className="user-th">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      </div>
      </div>
    </div>
    </>
  );
};

export default ManageUsers;
