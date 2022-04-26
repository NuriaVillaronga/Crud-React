import React, { useState, Fragment } from 'react';
import EditableRowMT from './EditableRowMT'; 
import ReadOnlyRowMT from './ReadOnlyRowMT'; 
import userData from "../users-data.json";

function MainTable () { 

    const [users, setUsers] = useState(userData);
  
    const [idUserEdit, setIdUserEdit] = useState(null);  
  
    const [editionForm, setEditionForm] = useState({id : "", name : "", email: "", rol: "", password: "", state: "",  address : "", cp: "", phone: "", register_data: "", city: "", provincia: "", apartment: ""});
  
    const [visibility, setVisibility] = useState(false);
  
    const handleEditClick = (event, user) => {
      event.preventDefault();
      setIdUserEdit(user.id);

      const formValues = { id : user.id, name : user.name, email: user.email, rol: user.rol, password: user.password, state: user.state, address : user.address, cp: user.cp, phone: user.phone, register_data: user.register_data, city: user.city, provincia: user.provincia, apartment: user.apartment };

      setEditionForm(formValues);
    }

    const handleSaveFormSubmit = (event) => {
      event.preventDefault();
  
      const user_on_edition = { id : idUserEdit, name : editionForm.name, email: editionForm.email, rol: editionForm.rol, password: editionForm.password, state: editionForm.state, address: editionForm.address, cp: editionForm.cp, phone: editionForm.phone, register_data: editionForm.register_data, city: editionForm.city, provincia: editionForm.provincia, apartment: editionForm.apartment };
  
      const new_users_array = [...users]; // Con ... se copian todas las propiedades del array de usuarios "users"

      const index = users.findIndex((user) => user.id === idUserEdit);
  
      new_users_array[index] = user_on_edition; 
      setUsers(new_users_array); 
      setIdUserEdit(null);
    }
  
    const handleEditChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = {...editionForm};
      newFormData[fieldName] = fieldValue;
  
      setEditionForm(newFormData);
    }
  
    const handleCancelClick = () => {
      setIdUserEdit(null);
    }
  
    const handleDeleteClick = (userId) => {
      const new_users_array = [...users];
  
      const index = users.findIndex((user) => user.id === userId);
  
      new_users_array.splice(index, 1);
  
      setUsers(new_users_array);
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
                            idUserEdit === user.id ? <EditableRowMT element={user} user_on_editionId={idUserEdit} editionForm={editionForm} handleCancelClick={handleCancelClick} handleEditChange={handleEditChange} handleDisplayClick={handleDisplayClick} visibilidad={visibility}/> : <ReadOnlyRowMT element={user} user_on_editionId={idUserEdit} editionForm={editionForm} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleEditChange={handleEditChange} handleDisplayClick={handleDisplayClick}/>
                          }
                        </Fragment> 
                      ))
                    }
                  </tbody>
              </table>
            </form>);   
}; 


export default MainTable;