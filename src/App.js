import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import userData from "./users-data.json"

//"xs","lg","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"; 
const IconAction = ({ id, size = '2x' }) => {

  let imgIcon = '';
  let iconColor = '';

  if(id == "delete") {
      imgIcon = faTrashCan;
      iconColor = "rgb(185, 9, 9)";
  }
  else if(id == "save") {
      imgIcon = faFloppyDisk;
      iconColor = "rgb(40, 122, 177)";
  }
  else if(id == "update") {
      imgIcon = faPenToSquare;
      iconColor = "rgb(63, 109, 69)";
  }
  else if(id == "cancel") {
      imgIcon = faXmark;
      iconColor = "rgb(185, 9, 9)"; 
  }

  return (<FontAwesomeIcon id={id} icon={imgIcon} size={size} color={iconColor} className="iconsCrud"/>);   
}; 


const ReadOnlyRow = ({ element, handleEdit }) => {
  return (<tr>
    <td>{element.name}</td>
    <td>{element.email}</td>
    <td>{element.rol}</td> 
    <td>
        <button className="btnIcon" type="button" onClick={(event) => handleEdit(event, element)}><IconAction id="update" size="2x"/></button>
        <button className="btnIcon"><IconAction id="delete" size="2x"/></button>
    </td>
  </tr>); 
}

const EditableRow = ({ editForm, handleEditChange, handleCancel }) => {
  return (<tr>
    <td><input className="form-control" type="text" required="required" name="name" value={editForm.name} onChange={handleEditChange}></input></td>
    <td><input className="form-control" type="text" required="required" name="email" value={editForm.email} onChange={handleEditChange}></input></td>
    <td> 
      <select className="form-select" required="required" name="rol" value={editForm.rol} onChange={handleEditChange}>
        <option>Admin</option>
        <option>User</option>
      </select>
    </td>
    <td>
        <button className="btnIcon" type="submit"><IconAction id="save" size="2x"/></button>
        <button className="btnIcon" type="button" onClick={handleCancel}><IconAction id="cancel" size="2x"/></button>
    </td>
  </tr>); 
}

const TableCrud = ({ filter }) => {

  const [users, setUsers] = useState(userData);

  const [editUserId, setEditUserId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    name : "",
    email: "",
    rol: "",
  })

  const handleEditClick = (event, user) => {
    event.preventDefault(); //preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    setEditUserId(user.id);

    const formValues = {
      name : user.name,
      email: user.email,
      rol: user.rol,
    }

    setEditFormData(formValues);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData  };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

  }

  const handleSaveFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id : editUserId,
      name : editFormData.name,
      email: editFormData.email,
      rol: editFormData.rol,
    }

    const newUsers = [...users];
    const index = users.findIndex((user) => user.id === editUserId);


    newUsers[index] = editedUser;
    setUsers(newUsers);
    setEditUserId(null);
  }

  const handleCancelClick = () => {
    setEditUserId(null);
  }

  //---------Falta--------------
  const handleDeleteClick = () => {

  }

  let attrFilter = '';
  if(filter == false) {
    attrFilter = 'hidde';
  }
  
  return (<form onSubmit={handleSaveFormSubmit}>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className={attrFilter}> 
          <td><input className="form-control"></input></td>
          <td><input className="form-control"></input></td>
          <td><input className="form-control"></input></td>
          <td></td>
        </tr>
        {
          users.map((user) => (
            <Fragment key={user.id}>
              {
                editUserId === user.id ? <EditableRow editForm={editFormData} handleCancel={handleCancelClick} handleEditChange={handleEditFormChange}/> : <ReadOnlyRow element={user} handleEdit={handleEditClick}/>
              }
            </Fragment>
          ))
        }
      </tbody>
    </table>
    </form>);   
}; 

function App() {
  return (
    <div>
        <TableCrud filter={false}/>
    </div>
  );
}

export default App;
