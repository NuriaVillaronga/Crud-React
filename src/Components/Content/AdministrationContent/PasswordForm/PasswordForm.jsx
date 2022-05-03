import React, {useState} from 'react';
import InputNP from './InputNP';
import InputCP from './InputCP';

function PasswordForm ( props ) {

    const regExp_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    const [confirmPasswordValue, setConfirmPassword] = useState({field:"", valid: null});

    return (<div className="container-update-password">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-3 col-update-label-password">   
                        <label>Contraseña</label> 
                    </div>
                    <div className="col-3 col-update-input-password"> 
                        <InputNP type="password" id="password-update" name="new_password" status={props.passwordValue} changeStatus={props.setPassword} regexp={new RegExp(regExp_pass)} error_message="Formato: 8-16 caracteres, un dígito, una minúscula, una mayúscula"/>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row row-repeat-password">
                    <div className="col-2"></div>
                    <div className="col-3 col-update-label-password"> 
                        <label>Confirma la contraseña</label>
                    </div>
                    <div className="col-3 col-update-input-password">
                        <InputCP type="password" name="confirm_password" status={confirmPasswordValue} changeStatus={setConfirmPassword} error_message="Ambas contraseñas deben coincidir"/>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>);
}

export default PasswordForm;