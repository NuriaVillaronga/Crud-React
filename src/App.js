import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import userData from "./users-data.json";
import Icon from './Components/Icon'; 
import SecundaryTable from './Components/SecundaryTable';
import EditableRow from './Components/EditableRow';



const ReadOnlyRow = ({ element, handleEditClick, handleDeleteClick, handleDisplayClick }) => {

  return (<Fragment>
    <tr>
    <td><button className="btnIcon" id={`angleDown-${element.id}`} onClick={() => handleDisplayClick(element.id)}><Icon id="angleDown" size="1x"/></button>{element.name}</td>
    <td>{element.email}</td>
    <td>{element.password}</td> 
    <td>{element.rol}</td> 
    <td>{element.register_data}</td>
    <td>{element.state}</td>
    <td>
        <button className="btnIcon" type="button" onClick={(event) => handleEditClick(event, element)}><Icon id="update" size="2x"/></button>
        <button className="btnIcon" type="button" onClick={() => handleDeleteClick(element.id)}><Icon id="delete" size="2x"/></button> 
    </td>
  </tr>
  <tr className='row-suplementary-table' id={`row-suplementary${element.id}`}>
      <td colSpan="7">
        <div className='div-suplementary-table'>
          <SecundaryTable/>
        </div>
      </td>
    </tr>
    </Fragment>); 
}


/*
const EditableRow = ({ editionForm, handleEditChange, handleCancelClick }) => {  
  return (<tr>
                <td>
                    <input className="form-control" type="text" required="required" name="name" value={editionForm.name} onChange={handleEditChange}/>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="email" value={editionForm.email} onChange={handleEditChange}/>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="password" value={editionForm.password} onChange={handleEditChange}/>
                </td>
                <td> 
                    <select className="form-select" required="required" name="rol" value={editionForm.rol} onChange={handleEditChange}>
                    <option>Admin</option>
                    <option>User</option>
                    </select>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="register_data" value={editionForm.register_data} onChange={handleEditChange}/>
                </td>
                <td>
                    <select className="form-select" required="required" name="state" value={editionForm.state} onChange={handleEditChange}>
                    <option>Habilitado</option>
                    <option>Deshabilitado</option>
                    </select>
                </td>
                <td>
                    <button className="btnIcon" type="submit"><Icon id="save" size="2x"/></button>
                    <button className="btnIcon" type="button" onClick={handleCancelClick}><Icon id="cancel" size="2x"/></button>
                </td>
            </tr>);
}
*/



const MainTable = ( ) => {

  const [users, setUsers] = useState(userData);

  const [editUserId, setEditUserId] = useState(null);

  const [editionForm, setEditionForm] = useState({ 
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

  const handleEditClick = (event, user ) => {
    event.preventDefault(); //preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    setEditUserId(user.id);
  
    const formValues = {
      name : user.name,
      email: user.email,
      rol: user.rol,
    }
  
    setEditionForm(formValues);
  }
  
  const handleEditChange = (event) => {

    event.preventDefault();
  
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormData = { ...editionForm  };
    newFormData[fieldName] = fieldValue;
  
    setEditionForm(newFormData);
  
  }
  
  const handleSaveFormSubmit = ( event ) => {
    event.preventDefault();
  
    const editedUser = {
      id : editUserId,
      name : editionForm.name,
      email: editionForm.email,
      rol: editionForm.rol,
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
  
  const handleDeleteClick = ( userId ) => {
    const newUsers = [...users];
  
    const index = users.findIndex((user) => user.id === userId);
  
    newUsers.splice(index, 1);
  
    setUsers(newUsers);
  }


  const handleDisplayClick = ( userId ) => {

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

  /*
  let handleHola = () => {
    console.log("Holaaa");
  }
  */

  return (<form onSubmit={handleSaveFormSubmit}>
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
                {
                  users.map((user) => (
                    <Fragment key={user.id}> 
                      {
                        editUserId === user.id ? <EditableRow editionForm={editionForm} handleCancelClick={handleCancelClick} handleEditChange={handleEditChange}/> : <ReadOnlyRow element={user} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleDisplayClick={handleDisplayClick}/>
                      }
                    </Fragment>
                  ))
                }
              </tbody>
            </table>
          </form>);
}

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

const ContainerMainTable = () => {

  const handleDesplegarFormulario = () => {
    document.getElementById("addUserForm").style.display = "block";
    document.getElementById("btnAddUser").style.display = "none";
  }
  
  const handleOcultarFormShowBtn = () => {
    document.getElementById("addUserForm").style.display = "none";
    document.getElementById("btnAddUser").style.display = "block";
  }

    return (<Fragment>
      <div className="row">
          <div className="col-12 newUserCol">
            <AddUser desplegarFormulario={handleDesplegarFormulario} ocultarFormShowBtn={handleOcultarFormShowBtn}/>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
              <MainTable/>
            </div>
        </div>
      </Fragment>
  ); 
}


function App() {
  return (
    <div className="container">
        <ContainerMainTable/>
    </div>
  );
}

export default App;
