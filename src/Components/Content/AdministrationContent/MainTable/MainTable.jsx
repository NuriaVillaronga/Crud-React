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
      if (check == true) {
        setContador(contador + 1);
      }
      else if (check == false) {
        setContador(contador - 1);
      }
    }

    //Nota: si se pincha en editar y el elemento se selecciona, este tiene que deseleccionarse (el contador tiene que decrementarse)
    
    return (<Fragment>
            <div className="row">
              <div className="col-12">
                <Title/>
                <SearchBar users={props.users} setArrayUsuarios={setArrayUsuarios}/>
                <div><b>{contador}</b> elementos seleccionados</div>
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
                  </div>
                </div>
              </div>
            </div>
            </Fragment>);   
}; 


export default MainTable;