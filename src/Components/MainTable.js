import React, { useState, Fragment } from 'react';
import EditableRowMT from './EditableRowMT'; 
import ReadOnlyRowMT from './ReadOnlyRowMT'; 
import userData from "../users-data.json";

function MainTable () { 

    const [users, setUsers] = useState(userData);
  
    const [editUserId, setEditUserId] = useState(null);
  
    const [editionForm, setEditionForm] = useState({
      id : "",
      name : "",
      email: "",
      rol: "",
      password: "",
      state: "", 
      address : "",
      cp: "",
      phone: "",
      register_data: ""
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
        password: user.password,
        state: user.state,
        address : user.address,
        cp: user.cp,
        phone: user.phone,
        register_data: user.register_data 
      }

      setEditionForm(formValues);
    }

    const handleSaveFormSubmit = (event) => {
      event.preventDefault();
  
      const editedUser = {
        id : editUserId,
        name : editionForm.name,
        email: editionForm.email,
        rol: editionForm.rol, 
        password: editionForm.password,
        state: editionForm.state, 
        address: editionForm.address,
        cp: editionForm.cp,
        phone: editionForm.phone,
        register_data: editionForm.register_data 
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
  

    const handleDisplayClick = (id_user) => { 
  
      var row_read_ST = document.getElementById(`row-read-secundaryTable-${id_user}`);
      var icon_arrow = document.getElementById(`icon-arrow-${id_user}`);
  
      if (visibility == true) {
        row_read_ST.style.display = "none";
        icon_arrow.setAttribute("style", "transform: rotate(360deg)");
        setVisibility(false);
      }
      else if(visibility == false) {
        row_read_ST.style.display = "table-row";
        icon_arrow.setAttribute("style", "transform: rotate(180deg)");
        setVisibility(true);
      }

    }
    
    return (<form onSubmit={handleSaveFormSubmit}>
              <table className="mainTable">
                  <thead>
                  <tr>
                      <th className="col_nombre">Nombre (completo)</th>
                      <th className="col_email">Email</th>
                      <th className="col_contraseña">Contraseña</th>
                      <th className="col_rol">Rol</th>
                      <th className="col_registro">Registro</th>
                      <th className="col_estado">Estado</th>
                      <th className="col_acciones">Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((user) => (
                        <Fragment key={user.id}> 
                          {
                            editUserId === user.id ? <EditableRowMT element={user} editedUserId={editUserId} editionForm={editionForm} handleCancelClick={handleCancelClick} handleEditChange={handleEditChange} handleDisplayClick={handleDisplayClick} visibilidad={visibility}/> : <ReadOnlyRowMT element={user} editedUserId={editUserId} editionForm={editionForm} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleEditChange={handleEditChange} handleDisplayClick={handleDisplayClick}/>
                          }
                        </Fragment> 
                      ))
                    }
                  </tbody>
              </table>
            </form>);   
}; 


export default MainTable;