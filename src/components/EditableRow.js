import React from 'react'

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <tr>
        <td className='user-td'>
          <input
            type="number"
            required="required"
            // placeholder="Enter a name..."
            // name="fullName"
            value={editFormData.id}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            // type="number"
            // required="required"
            // placeholder="Enter a name..."
            // name="fullName"
            value={editFormData.photography}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="text"
            // required="required"
            placeholder="Enter a name..."
            name="surname"
            value={editFormData.surname}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="text"
            required="required"
            placeholder="Enter an address..."
            name="address"
            value={editFormData.address}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="text"
            required="required"
            placeholder="Enter a phone number..."
            name="phoneNumber"
            value={editFormData.phoneNumber}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="email"
            required="required"
            placeholder="Enter an email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="text"
            // required="required"
            placeholder="Enter a role..."
            name="role"
            value={editFormData.role}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <input
            type="number"
            // required="required"
            // placeholder="Enter a name..."
            // name="fullName"
            value={editFormData.approve}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className='user-td'>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };
  
  export default EditableRow;