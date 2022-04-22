import React, { useState, Fragment } from 'react';
import EditableRow from './EditableRow'; 
import ReadOnlyRow from './ReadOnlyRow'; 
import userData from "../users-data.json";

function MainTable () { 

    const [users, setUsers] = useState(userData);
  
    const [editUserId, setEditUserId] = useState(null);
  
    const [editionForm, setEditionForm] = useState({
      id : "",
      name : "",
      email: "",
      rol: "", 
      direccion : "",
      cp: "",
      telefono: ""
    });

    /*
      const [addFormData, setAddFormData] = useState({
        name : "",
        email: "",
        rol: "",
      });
    */
  
    const [visibility, setVisibility] = useState(false);
  
    const handleEditClick = (event, user) => {
      event.preventDefault(); //preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
      setEditUserId(user.id);
  
      const formValues = {
        id : user.id,
        name : user.name,
        email: user.email,
        rol: user.rol,
      }

      setEditionForm(formValues);

      var elemento = document.getElementById(`row-suplementary${user.id}`);
      var flechaCambio = document.getElementById(`angleDown-${user.id}`);

      elemento.style.display = "table-row";
      flechaCambio.setAttribute("style","transform: rotate(180deg)");
      setVisibility(true);
    }

    const handleSaveFormSubmit = (event) => {
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
  
    const handleEditChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editionForm  };
      newFormData[fieldName] = fieldValue;
  
      setEditionForm(newFormData);
  
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
  
    const handleDisplayClick = (userId) => { 
  
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
                            editUserId === user.id ? <EditableRow element={user} editionForm={editionForm} handleCancelClick={handleCancelClick} handleEditChange={handleEditChange} handleDisplayClick={handleDisplayClick} visibilidad={visibility}/> : <ReadOnlyRow element={user} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleDisplayClick={handleDisplayClick}/>
                          }
                        </Fragment>
                      ))
                    }
                  </tbody>
              </table>
            </form>);   
}; 


export default MainTable;