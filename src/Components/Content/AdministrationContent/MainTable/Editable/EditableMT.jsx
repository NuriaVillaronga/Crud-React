import React, { useState, Fragment } from 'react';
import SecundaryTable from '../../SecundaryTable/SecundaryTable';
import Icon from '../../../../Icon';
import InputALL from '../../InputALL';
import SelectALL from '../../SelectALL';

function EditableMT (props) {  

    const optionsState = [ { value: 'Activo', label: 'Activo' }, { value: 'Inactivo', label: 'Inactivo' } ]
    const optionsRol = [ { value: 'Admin', label: 'Admin' }, { value: 'User', label: 'User' } ]

    const [rolValue, setRolValue] = useState("");
    const [stateValue, setStateValue] = useState(props.editionForm.state); 

    const handleChangeRol = ( {value} ) => {
  
        if (value === null) {
            setRolValue("")
        }
        else if (value === "Admin") {
            setRolValue("Admin")
        }
        else if(value === "User") {
            setRolValue("User")
        }
      }
    
      const handleChangeState = ( {value} ) => {
        
        console.log(value)
        if (value === null) {
            setStateValue("")
        }
        if (value == stateValue) {
            setStateValue(value)
        }
        
    }

    const handleEditChange = (event) => {
        
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = {...props.editionForm};
        newFormData[fieldName] = fieldValue;
    
        props.setEditionForm(newFormData);
    }
    
    const [nameValue, setName] = useState({field:"", valid: null}); 
    const [emailValue, setEmail] = useState({field:"", valid: null});
    const [passwordValue, setPassword] = useState({field:"", valid: null});
  
    const regExp_letters = /^[a-zA-ZÀ-ÿŸ\u00f1\u00d1\s]+$/;
    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const regExp_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    return (<Fragment>
                <tr className="row-editable-mainTable">
                    <td><InputALL name="name" value={props.editionForm.name} required="required" status={nameValue} changeStatus={setName} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_letters)} error_message="Nombre solo puede contener letras y espacios"/></td>
                    <td><InputALL name="email" value={props.editionForm.email} required="required" status={emailValue} changeStatus={setEmail} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_email)} error_message="Ejemplo de formato: foo-bar.baz@example.com"/></td>
                    <td><InputALL name="password" value={props.editionForm.password} required="required" status={passwordValue} changeStatus={setPassword} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_pass)} error_message="Formato: 8-16 caracteres, un dígito, una minúscula, una mayúscula"/></td>
                    <td> 
                        <select className="form-select" required="required" name="rol" value={props.editionForm.rol} onChange={handleEditChange}>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </td>
                    <td><input className="form-control" type="text" required="required" name="register_data" value={props.editionForm.register_data} onChange={props.handleEditChange} readOnly/></td>
                    <td>
                        <select className="form-select" required="required" name="state" value={props.editionForm.state} onChange={handleEditChange}>
                            <option>Activo</option>
                            <option>Inactivo</option>
                        </select>
                        <SelectALL/>
                    </td>
                    <td className="col_acciones">
                        <button className="icon-button save-cancel-button" type="submit"><Icon id="save" size="2x"/></button>
                        <button className="icon-button save-cancel-button" type="button" onClick={props.handleCancelClick}><Icon id="cancel" size="2x"/></button>
                    </td>
                </tr>
                <tr className="row-editable-secundaryTable"> 
                    <td colSpan="7">
                        <div className='div-editable-secundaryTable'>
                            <SecundaryTable editionForm={props.editionForm} setEditionForm={props.setEditionForm} idUserEdit={props.idUserEdit} element={props.element} handleEditChange={handleEditChange}/>
                        </div>
                    </td>
                </tr>
            </Fragment>); 
}

export default EditableMT;