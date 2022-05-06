import React, { useState, Fragment } from 'react';
import SecundaryTable from '../../SecundaryTable/SecundaryTable';
import Icon from '../../../../Icon';
import InputALL from '../../InputALL';
import SelectALL from '../../SelectALL';
import PasswordForm from '../../PasswordForm/PasswordForm';

function EditableMT (props) {  

    const optionsRol = [ { value: 'Admin', label: 'Admin' }, { value: 'User', label: 'User' } ]
    const optionsState = [ { value: 'Activo', label: 'Activo' }, { value: 'Inactivo', label: 'Inactivo' } ]

    const [stateValue, setStateValue] = useState(props.editionForm.state);
    const [rolValue, setRolValue] = useState(props.editionForm.rol);
    
    const [nameValue, setName] = useState({field:"", valid: null}); 
    const [emailValue, setEmail] = useState({field:"", valid: null});
  
    const regExp_letters = /^[a-zA-ZÀ-ÿŸ\u00f1\u00d1\s]+$/;
    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //<InputALL name="password" value={props.editionForm.password} required="required" status={passwordValue} changeStatus={setPassword} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_pass)} error_message="Formato: 8-16 caracteres, un dígito, una minúscula, una mayúscula"/>

    return (<Fragment>
                <tr className="row-editable-mainTable">
                    <td><input type="checkbox"></input></td>
                    <td><InputALL name="name" value={props.editionForm.name} required="required" status={nameValue} changeStatus={setName} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_letters)} error_message="Nombre solo puede contener letras y espacios"/></td>
                    <td><InputALL name="email" value={props.editionForm.email} required="required" status={emailValue} changeStatus={setEmail} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_email)} error_message="Ejemplo de formato: foo-bar.baz@example.com"/></td>
                    <td><input className="form-control" type="text" name="password" value={props.editionForm.password} onChange={props.handleEditChange} readOnly/></td>
                    <td> 
                        <SelectALL name="rol" options={optionsRol} estado={rolValue} setEstado={setRolValue} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/>
                    </td>
                    <td><input className="form-control" type="text" name="register_data" value={props.editionForm.register_data} onChange={props.handleEditChange} readOnly/></td>
                    <td>
                        <SelectALL name="state" options={optionsState} estado={stateValue} setEstado={setStateValue} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/>
                    </td>
                    <td className="col_acciones">
                        <button className="icon-button save-cancel-button" type="submit"><Icon id="save" size="2x"/></button>
                        <button className="icon-button save-cancel-button" type="button" onClick={props.handleCancelClick}><Icon id="cancel" size="2x"/></button>
                    </td>
                </tr>
                <tr className="row-editable-secundaryTable"> 
                    <td colSpan="8">
                        <div className='div-editable-secundaryTable'>
                            <SecundaryTable editionForm={props.editionForm} setEditionForm={props.setEditionForm} idUserEdit={props.idUserEdit} element={props.element}/>
                        </div>
                        <div className='div-editable-passwordForm'>
                            <PasswordForm passwordValue={props.passwordValue} setPassword={props.setPassword} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/>
                        </div>
                    </td>
                </tr>
            </Fragment>); 
}

export default EditableMT;