import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import userData from "./users-data.json";
import Icon from './Components/Icon'; 

const TableSecundaryInformation = () => {
  return (<table className='suplementary-table'>
            <tr>
              <th>Direccion</th>
              <th>CP</th>
              <th>Teléfono</th>
            </tr>
            <tr>
              <td>dfagdfgdh</td>
              <td>fddfhdfh</td>
              <td>dfhdfhdf</td>
            </tr>
          </table>);
}

const ReadOnlyRow = ({ element, handleEdit, handleDelete, handleDisplay }) => {

  return (<Fragment>
    <tr>
    <td><button className="btnIcon" id={`angleDown-${element.id}`} onClick={() => handleDisplay(element.id)}><Icon id="angleDown" size="1x"/></button>{element.name}</td>
    <td>{element.email}</td>
    <td>{element.password}</td> 
    <td>{element.rol}</td> 
    <td>{element.register_data}</td>
    <td>{element.state}</td>
    <td>
        <button className="btnIcon" type="button" onClick={(event) => handleEdit(event, element)}><Icon id="update" size="2x"/></button>
        <button className="btnIcon" type="button" onClick={() => handleDelete(element.id)}><Icon id="delete" size="2x"/></button> 
    </td>
  </tr>
  <tr className='row-suplementary-table' id={`row-suplementary${element.id}`}>
      <td colSpan="7">
        <div className='div-suplementary-table'>
          <TableSecundaryInformation/>
        </div>
      </td>
    </tr>
    </Fragment>); 
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
        <button className="btnIcon" type="submit"><Icon id="save" size="2x"/></button>
        <button className="btnIcon" type="button" onClick={handleCancel}><Icon id="cancel" size="2x"/></button>
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
  });

  const [visibility, setVisibility] = useState(false);

  const [addFormData, setAddFormData] = useState({
    name : "",
    email: "",
    rol: "",
  });

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

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  }

  const handleDesplegarFormulario = () => {
    document.getElementById("addUserForm").style.display = "block";
    document.getElementById("btnAddUser").style.display = "none";
  }
  
  const handleOcultarFormShowBtn = () => {
    document.getElementById("addUserForm").style.display = "none";
    document.getElementById("btnAddUser").style.display = "block";
  }


  const handleDisplayTable = (userId) => {

    var elemento = document.getElementById(`row-suplementary${userId}`);
    var flechaCambio = document.getElementById(`angleDown-${userId}`);

    if (visibility == true) {
      elemento.style.display = "none";
      flechaCambio.setAttribute("style","transform: rotate(360deg)");
      setVisibility(false);
    }
    else if(visibility == false) {
      elemento.style.display = "table-row";
      flechaCambio.setAttribute("style","transform: rotate(180deg)");
      setVisibility(true);
    }
    
  }

  let attrFilter = '';
  if(filter == false) {
    attrFilter = 'hidde';
  }
  
  return (<Fragment>
        <div className="row">
            <div className="col-12 newUserCol">
              <AddUser desplegarFormulario={handleDesplegarFormulario} ocultarFormShowBtn={handleOcultarFormShowBtn}/>
            </div>
          </div>
          <div className="row">
              <div className="col-12">
                <form onSubmit={handleSaveFormSubmit}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre completo</th>
                      <th>Email</th>
                      <th>Contraseña</th>
                      <th>Rol</th>
                      <th>Fecha de registro</th>
                      <th>Estado</th>
                      <th>Acciones</th>
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
                            editUserId === user.id ? <EditableRow editForm={editFormData} handleCancel={handleCancelClick} handleEditChange={handleEditFormChange}/> : <ReadOnlyRow element={user} handleEdit={handleEditClick} handleDelete={handleDeleteClick} handleDisplay={handleDisplayTable}/>
                          }
                        </Fragment>
                      ))
                    }
                  </tbody>
                </table>
                </form>
              </div>
          </div>
        </Fragment>
  );   
}; 

const AddUser = ({desplegarFormulario, ocultarFormShowBtn}) => {
  return (<Fragment>
        <button className="btn btn-primary" id="btnAddUser" type="button" onClick={desplegarFormulario}>Añadir nuevo usuario</button>
        <form id="addUserForm">
            <h4>Formulario de registro de usuarios</h4>
            <label>Nombre</label><input className="form-control" placeholder="Nombre" name="name" required="required"></input>
            <label>Email</label><input className="form-control" placeholder="Email" name="email" required="required"></input>
            <label>Rol</label><select className="form-select" name="" required="required">
              <option>Admin</option>
              <option>User</option>
            </select>
            <button className="btn btn-primary" type="submit">Guardar</button>
            <button className="btn btn-danger" type="button" onClick={ocultarFormShowBtn}>Cancelar</button>
        </form>
    </Fragment>);
}


function App() {
  return (
    <div className="container">
        <TableCrud filter={false}/>
    </div>
  );
}

export default App;
