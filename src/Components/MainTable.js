import React, { useState, Fragment } from 'react';
import EditableRow from './EditableRow'; 
import ReadOnlyRow from './ReadOnlyRow'; 
import userData from "../users-data.json";

function MainTable () { 

    const [users, setUsers] = useState(userData);
  
    const [editUserId, setEditUserId] = useState(null);
  
    const [editionForm, setEditionForm] = useState({
      name : "",
      email: "",
      rol: "", 
    });
  
    const [visibility, setVisibility] = useState(false);
  
    const handleEditClick = (event, user) => {
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
    
    return (<table className="table">
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
            </table>);   
}; 

export default MainTable;