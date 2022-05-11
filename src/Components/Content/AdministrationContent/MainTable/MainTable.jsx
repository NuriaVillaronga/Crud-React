import React, { useState, Fragment } from 'react';
import EditableMT from './Editable/EditableMT';
import NoEditableMT from './NoEditable/NoEditableMT';
import HeaderMainTable from './HeaderMainTable';
import SearchBar from './SearchBar';
import Title from '../Title';
 

function MainTable ( props ) { 

    const [arrayUsuarios, setArrayUsuarios] = useState(props.users);
  
    const [idUserEdit, setIdUserEdit] = useState(null);  
  
    const [editionForm, setEditionForm] = useState({id : "", name : "", email: "", rol: "", password: "", state: "",  address : "", cp: "", phone: "", register_data: "", city: "", provincia: "", apartment: ""});

    const [passwordValue, setPassword] = useState({field:"", valid: null});

    const bcrypt = require("bcryptjs");

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
        var th_check_mt = document.getElementById("th-check-mt");
        var td_check_mt = document.getElementById("td-check-mt");

        th_check_mt.style.display = "block";
        td_check_mt.style.display = "block";
    }

    const [contador, setContador] = useState(0);

    const tocado = (check) => {
      var btn = document.getElementById("btn-contador-oculto");
      var btn_export = document.getElementById("btn-exportar-oculto");
      var span = document.getElementById("span-contador-oculto");

      if (check == true) {
        setContador(contador + 1);
        if (contador+1 > 0) {
          btn.setAttribute("style", "display: block");
          btn_export.setAttribute("style", "display: block");
          span.setAttribute("style", "color: black");
        }
        if (contador+1 == 0) {
          btn.setAttribute("style", "display: none");
          btn_export.setAttribute("style", "display: none");
          span.setAttribute("style", "color: grey");
        }
      }
      else if (check == false) {
        setContador(contador - 1);
        if (contador > 0) {
          btn.setAttribute("style", "display: block");
          btn_export.setAttribute("style", "display: block");
          span.setAttribute("style", "color: black");
        }
        if (contador-1 == 0) {
          btn.setAttribute("style", "display: none");
          btn_export.setAttribute("style", "display: none");
          span.setAttribute("style", "color: grey");
        }
      }
    }
    
    //Si no hay busquedas se muestra un mensaje de error

    return (<Fragment>
            <div className="row">
              <div className="col-12">
                <Title/>
                <SearchBar users={props.users} setArrayUsuarios={setArrayUsuarios}/>
                <div>Se han encontrado X busquedas con coincidencias en YYY, OOO...</div>
                <div className="row">
                  <div className="col-12">
                      <form onSubmit={handleSaveFormSubmit} className="form-mainTable"> 
                        <table className="mainTable">
                            <thead>
                                <HeaderMainTable users={props.users} arrayUsuarios={arrayUsuarios} setArrayUsuarios={setArrayUsuarios}></HeaderMainTable>
                            </thead>
                            <tbody>
                              {
                                arrayUsuarios.map((user) => (
                                  <Fragment key={user.id}> 
                                    {
                                      idUserEdit === user.id ? 
                                      <EditableMT passwordValue={passwordValue} setPassword={setPassword} element={user} idUserEdit={idUserEdit} editionForm={editionForm} setEditionForm={setEditionForm} handleCancelClick={handleCancelClick}/>
                                       : <NoEditableMT element={user} setContador={setContador} contador={contador} arrayUsuarios={arrayUsuarios} tocado={tocado} setArrayUsuarios={setArrayUsuarios} setEditionForm={setEditionForm} setIdUserEdit={setIdUserEdit}  editedUserId={idUserEdit} editionForm={editionForm}/>
                                    }
                                  </Fragment>  
                                ))
                              }
                            </tbody>
                        </table>
                      </form>
                      <div className="row container-contador-checks">
                        <div className="col-2 col-contador-title"><span id="span-contador-oculto"><b>{contador}</b> elementos seleccionados</span></div>
                        <div className="col-10 col-contador-action">
                          <button type="button" className="btn" id="btn-contador-oculto">Eliminar seleccionados</button>
                          <button type="button" className="btn" id="btn-exportar-oculto">Exportar datos (CSV)</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            </Fragment>);   
}; 


export default MainTable;