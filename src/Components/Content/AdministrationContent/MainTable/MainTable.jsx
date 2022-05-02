import React, { useState, Fragment } from 'react';
import EditableMT from './Editable/EditableMT';
import NoEditableMT from './NoEditable/NoEditableMT'; 


function MainTable ( props ) { 
  
    const [idUserEdit, setIdUserEdit] = useState(null);  
  
    const [editionForm, setEditionForm] = useState({id : "", name : "", email: "", rol: "", password: "", state: "",  address : "", cp: "", phone: "", register_data: "", city: "", provincia: "", apartment: ""});
  
    const [visibility, setVisibility] = useState(false);

    const [passwordValue, setPassword] = useState({field:"", valid: null});

    const bcrypt = require("bcryptjs");
    const rondasEncriptacion = 2;

    const handleEditClick = (event, user) => {
      event.preventDefault();
      setIdUserEdit(user.id);

      const formValues = { id : user.id, name : user.name, email: user.email, rol: user.rol, password: user.password, state: user.state, address : user.address, cp: user.cp, phone: user.phone, register_data: user.register_data, city: user.city, provincia: user.provincia, apartment: user.apartment };

      setEditionForm(formValues);
    }

    const handleSaveFormSubmit = (event) => {
      event.preventDefault();

      var password_final_value = "";
      if (passwordValue.field != "") {
          password_final_value = passwordValue.field; 
          //Info: https://parzibyte.me/blog/2020/08/13/encriptar-contrasenas-node/

          bcrypt.hash(passwordValue.field, rondasEncriptacion, (err, password_encriptado) => {
            if (err) {
              console.log("Error hasheando:", err);
            } else {
              console.log(password_encriptado);
            }
          });
      }
      else {
          password_final_value = editionForm.password;
      }
  
      const user_on_edition = { id : idUserEdit, name : editionForm.name, email: editionForm.email, rol: editionForm.rol, password: password_final_value, state: editionForm.state, address: editionForm.address, cp: editionForm.cp, phone: editionForm.phone, register_data: editionForm.register_data, city: editionForm.city, provincia: editionForm.provincia, apartment: editionForm.apartment };
  
      const new_users_array = [...props.users]; // Con ... se copian todas las propiedades del array de usuarios "users"

      const index = props.users.findIndex((user) => user.id === idUserEdit);
  
      new_users_array[index] = user_on_edition; 
      props.setUsers(new_users_array); 
      setIdUserEdit(null);
    }
  
    const handleCancelClick = () => {
      setIdUserEdit(null);
    }
  
    const handleDeleteClick = (userId) => {
      const new_users_array = [...props.users];
  
      const index = props.users.findIndex((user) => user.id === userId);
  
      new_users_array.splice(index, 1);
  
      props.setUsers(new_users_array);
    }
  

    const handleDisplayClick = (id_user) => { 
  
      var row_read_ST = document.getElementById(`row-read-secundaryTable-${id_user}`);
      var icon_arrow = document.getElementById(`icon-arrow-${id_user}`);
      var row_read_MT = document.getElementById(`row-read-mainTable-${id_user}`);
  
      if (visibility == true) {
        row_read_ST.style.display = "none";
        icon_arrow.setAttribute("style", "transform: rotate(360deg)");
        row_read_MT.setAttribute("style", "background-color: white");
        setVisibility(false);
      }
      else if(visibility == false) {
        icon_arrow.setAttribute("style", "transform: rotate(180deg)");
        row_read_MT.setAttribute("style", "border-top: 3px solid rgb(233, 148, 79) !important; background-color: rgb(255, 232, 207)");
        row_read_ST.setAttribute("style", "display:table-row");
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
                      props.users.map((user) => (
                        <Fragment key={user.id}> 
                          {
                            idUserEdit === user.id ? <EditableMT passwordValue={passwordValue} setPassword={setPassword} element={user} idUserEdit={idUserEdit} editionForm={editionForm} setEditionForm={setEditionForm} handleCancelClick={handleCancelClick} handleDisplayClick={handleDisplayClick} visibilidad={visibility}/> : <NoEditableMT element={user} user_on_editionId={idUserEdit} editionForm={editionForm} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleDisplayClick={handleDisplayClick}/>
                          }
                        </Fragment>  
                      ))
                    }
                  </tbody>
              </table>
            </form>);   
}; 


export default MainTable;