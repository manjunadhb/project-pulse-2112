import React from 'react'

const ReadOnlyRow=({ contact, handleEditClick, handleDeleteClick })=> {
  return (
    <>
      <tr>
      <td className='user-td'>{contact.id}</td>
      <td className='user-td'><img src={contact.photography}/></td>
      <td className='user-td'>{contact.fullName}</td>
      <td className='user-td'>{contact.surname}</td>
      <td className='user-td'>{contact.address}</td>
      <td className='user-td'>{contact.phoneNumber}</td>
      <td className='user-td'>{contact.email}</td>
      <td className='user-td'>{contact.role}</td>
      <td className='user-td'>{contact.approve}</td>
      <td className='user-td'>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button></td>
        <td className='user-td'>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
    </>
  )
}

export default ReadOnlyRow
