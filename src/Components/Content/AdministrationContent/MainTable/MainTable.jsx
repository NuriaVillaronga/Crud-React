import React, { useState, Fragment } from 'react';
import EditableMT from './Editable/EditableMT';
import NoEditableMT from './NoEditable/NoEditableMT'; 
import Icon from '../../../Icon';
 

function MainTable ( props ) { 

    const [arrayUsuarios, setArrayUsuarios] = useState(props.users);
  
    const [idUserEdit, setIdUserEdit] = useState(null);  
  
    const [editionForm, setEditionForm] = useState({id : "", name : "", email: "", rol: "", password: "", state: "",  address : "", cp: "", phone: "", register_data: "", city: "", provincia: "", apartment: ""});
  
    const [visibility, setVisibility] = useState(false);

    const [passwordValue, setPassword] = useState({field:"", valid: null});

    const bcrypt = require("bcryptjs");

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
          password_final_value = bcrypt.hashSync(passwordValue.field, bcrypt.genSaltSync());
      }
      else {
          password_final_value = editionForm.password;
      }
  
      const user_on_edition = { id : idUserEdit, name : editionForm.name, email: editionForm.email, rol: editionForm.rol, password: password_final_value, state: editionForm.state, address: editionForm.address, cp: editionForm.cp, phone: editionForm.phone, register_data: editionForm.register_data, city: editionForm.city, provincia: editionForm.provincia, apartment: editionForm.apartment };
  
      const new_users_array = [...arrayUsuarios]; // Con ... se copian todas las propinombrees del array de usuarios "users"

      const index = arrayUsuarios.findIndex((user) => user.id === idUserEdit);
  
      new_users_array[index] = user_on_edition; 
      setArrayUsuarios(new_users_array)
      setIdUserEdit(null);
    }
  
    const handleCancelClick = () => {
      setIdUserEdit(null);
    }
  
    const handleDeleteClick = (userId) => {

      const new_users_array = [...arrayUsuarios];
  
      const index = arrayUsuarios.findIndex((user) => user.id === userId);
  
      new_users_array.splice(index, 1);
  
      setArrayUsuarios(new_users_array)
    }
  

    const handleDisplayClick = (id_user) => { 
  
      var row_read_ST = document.getElementById(`row-read-secundaryTable-${id_user}`);
      var icon_arrow = document.getElementById(`icon-arrow-${id_user}`);
      var row_read_MT = document.getElementById(`row-read-mainTable-${id_user}`);
      var input_password = document.getElementById(`input-read-password-${id_user}`);
  
      if (visibility == true) {
        row_read_ST.style.display = "none";
        icon_arrow.setAttribute("style", "transform: rotate(360deg)");
        row_read_MT.setAttribute("style", "background-color: white");
        input_password.setAttribute("style", "background-color: white !important");
        setVisibility(false);
      }
      else if(visibility == false) {
        icon_arrow.setAttribute("style", "transform: rotate(180deg)");
        row_read_MT.setAttribute("style", "box-shadow: 0 0 5px rgb(231, 227, 205) !important; background-color: rgb(233, 230, 216)");
        row_read_ST.setAttribute("style", "display:table-row");
        input_password.setAttribute("style", "background-color: rgb(233, 230, 216) !important");
        setVisibility(true);
      }

    }

    const handleClickSort = (event, key) => { 

      var btn_icon_arrow = document.getElementById(`icon-sort-${key}`);

      var sortedList = [...props.users].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))  
      btn_icon_arrow.setAttribute("style", "transform: rotate(180deg)");

      if (sortedList[0] === arrayUsuarios[0]) {
        sortedList = [...props.users].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)) 
        btn_icon_arrow.setAttribute("style", "transform: rotate(360deg)");
      }

      setArrayUsuarios(sortedList)
    }

    const [busqueda, setBusqueda] = useState(""); 

    const handleSearchChange =  (event) => {
      setBusqueda(event.target.value);
      filtrar(event.target.value);
    }

    //Si no encuentra ningun elemento se tiene que ocultar la tabla y la paginacion (cuando la haya) y mostrar un mensaje --> añadir clasesName
    const filtrar = (terminoBusqueda) => {
      var resultadoBusqueda = props.users.filter((elemento)=>{
        if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return elemento;
        }
      });
      setArrayUsuarios(resultadoBusqueda);
    }
    
    return (<Fragment>
            <h1>GESTION DE USUARIOS</h1>
            <input placeholder='Buscar' value={busqueda} onChange={handleSearchChange}/>
            <form onSubmit={handleSaveFormSubmit} className="form-mainTable"> 
              <table className="mainTable">
                  <thead>
                    <tr>
                        <th className="col_nombre">
                          Nombre (completo)
                          <button className="icon-button-sort" type="button" id="icon-sort-name" onClick={(event) => handleClickSort(event, 'name')}><Icon id="arrowDown" size="1x"/></button>
                        </th>
                        <th className="col_email">
                          Email
                          <button className="icon-button-sort" type="button" id="icon-sort-email" onClick={(event) => handleClickSort(event, 'email')}><Icon id="arrowDown" size="1x"/></button>
                        </th>
                        <th className="col_contraseña">Contraseña</th>
                        <th className="col_rol">
                          Rol
                          <button className="icon-button-sort" type="button" id="icon-sort-rol" onClick={(event) => handleClickSort(event, 'rol')}><Icon id="arrowDown" size="1x"/></button>
                        </th>
                        <th className="col_registro">
                          Registro
                          <button className="icon-button-sort" type="button" id="icon-sort-register_data" onClick={(event) => handleClickSort(event, 'register_data')}><Icon id="arrowDown" size="1x"/></button>
                        </th>
                        <th className="col_estado">
                          Estado
                          <button className="icon-button-sort" type="button" id="icon-sort-state" onClick={(event) => handleClickSort(event, 'state')}><Icon id="arrowDown" size="1x"/></button>
                        </th>
                        <th className="col_acciones">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      arrayUsuarios.map((user) => (
                        <Fragment key={user.id}> 
                          {
                            idUserEdit === user.id ? <EditableMT passwordValue={passwordValue} setPassword={setPassword} element={user} idUserEdit={idUserEdit} editionForm={editionForm} setEditionForm={setEditionForm} handleCancelClick={handleCancelClick} handleDisplayClick={handleDisplayClick} visibilidad={visibility}/> : <NoEditableMT element={user} user_on_editionId={idUserEdit} editionForm={editionForm} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleDisplayClick={handleDisplayClick}/>
                          }
                        </Fragment>  
                      ))
                    }
                  </tbody>
              </table>
            </form>
            </Fragment>);   
}; 


export default MainTable;