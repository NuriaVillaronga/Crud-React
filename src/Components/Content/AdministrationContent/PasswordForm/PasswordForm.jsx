import React,  { useState } from 'react';
import InputALL from '../InputALL';
import InputPassword from './InputPassword';

function PasswordForm ( props ) {

    const regExp_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    return (<div className="container-update-password">
        <div className="row">
    <div className="col-2"></div>
    <div className="col-3 col-update-label-password">   
        <label>Contraseña</label> 
    </div>
    <div className="col-3 col-update-input-password"> 
        <InputPassword type="password" name="new_password" status={props.passwordValue} changeStatus={props.setPassword} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_pass)} error_message="Formato: 8-16 caracteres, un dígito, una minúscula, una mayúscula"/>
    </div>
    <div className="col-4"></div>
</div>
<div className="row row-repeat-password">
    <div className="col-2"></div>
    <div className="col-3 col-update-label-password"> 
        <label>Repite la contraseña</label>
    </div>
    <div className="col-3 col-update-input-password">
        <input className="form-control" type='repeat_password'/>
    </div>
    <div className="col-4"></div>
</div>
    </div>);
}

export default PasswordForm;