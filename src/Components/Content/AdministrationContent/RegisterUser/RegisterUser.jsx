import React, { useState, Fragment } from 'react';
import SelectCustom from './SelectRU';
import InputRU from './InputRU';
import moment from 'moment';
import { nanoid } from "nanoid";
import { Navigate } from 'react-router-dom';


function RegisterUser ( props ) { 

    const options = [
        { value: 'Pontevedra', label: 'Pontevedra' },
        { value: 'Ourense', label: 'Ourense' },
        { value: 'A Coruña', label: 'A Coruña' },
        { value: 'Lugo', label: 'Lugo' }
      ]
      
      const optionsPontevedra = [
        { value: 'Vilaxoán', label: 'Vilaxoán' },
        { value: 'Illa de Arousa', label: 'Illa de Arousa' }
      ]
      
      const optionsCoruña = [
        { value: 'Ortigueira', label: 'Ortigueira' },
        { value: 'Muros', label: 'Muros' }
      ]
      
      const optionsLugo = [
        { value: 'San Ciprián', label: 'San Ciprián' },
        { value: 'Becerreá', label: 'Becerreá' }
      ]
      
      const optionsOurense = [
        { value: 'Allariz', label: 'Allariz' },
        { value: 'Verín', label: 'Verín' }
      ]
      
      const optionsState = [
        { value: 'Activo', label: 'Activo' },
        { value: 'Inactivo', label: 'Inactivo' }
      ]
      
      const optionsRol = [
        { value: 'Admin', label: 'Admin' },
        { value: 'User', label: 'User' }
      ]

    const handleChangeSelect = ( {value} ) => {
  
        if (value === null) {
            setCityValue("");
            setOptionsCity([]);
            setProvinceValue("")
        }
        else if (value === "Pontevedra") {
            setCityValue(optionsPontevedra[0]);
            setOptionsCity(optionsPontevedra);
            setProvinceValue("Pontevedra")
        }
        else if(value === "A Coruña") {
            setCityValue(optionsCoruña[0]);
            setOptionsCity(optionsCoruña);
            setProvinceValue("A Coruña")
        }
        else if(value === "Lugo") {
            setCityValue(optionsLugo[0]);
            setOptionsCity(optionsLugo);
            setProvinceValue("Lugo")
        }
        else if(value === "Ourense") {
            setCityValue(optionsOurense[0]);
            setOptionsCity(optionsOurense); 
            setProvinceValue("Ourense")
        }
    }
  
    const handleChangeSelectCity = ( {value} ) => {
  
        for (let i=0; optionsCity.length; i++) {
            if(optionsCity[i].label == value) {
                setCityValue(optionsCity[i]);
            }
        }
    }
  
    const handleChangeRol = ( {value} ) => {
        setRolValue(value);
    }
  
    const handleChangeState = ( {value} ) => {
        setStateValue(value)
    }
  
    const [registerForm, setRegisterForm] = useState({id : "", nameAdd : "", emailAdd: "", rolAdd: "", passwordAdd: "", stateAdd: "",  addressAdd: "", cpAdd: "", phoneAdd: "", cityAdd: "", provinciaAdd: "", apartmentAdd: ""});
  
    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
  
        var registerData = moment().format("DD/MM/YYYY");
  
        const newUser = {id : nanoid(), name : registerForm.nameAdd, email: registerForm.emailAdd, register_data: registerData, rol: rolValue, password: registerForm.passwordAdd, state: stateValue,  address: registerForm.addressAdd, cp: registerForm.cpAdd, phone: registerForm.phoneAdd, city: cityValue.value, provincia: provinceValue, apartment: registerForm.apartmentAdd};
        const newUsers = [...props.users, newUser];
        props.setUser(newUsers)
  
        setRegisterFormSubmited(true);
    }
  
    const [optionsCity, setOptionsCity] = useState([]);
    const [cityValue, setCityValue] = useState("");  
    const [provinceValue, setProvinceValue] = useState("");
    const [rolValue, setRolValue] = useState("");
    const [stateValue, setStateValue] = useState(""); 
    const [registerFormSubmited, setRegisterFormSubmited] = useState(false)
  
    const [nombreValue, setNombre] = useState({field:"", valid: null}); 
    const [apellidoValue, setApellido] = useState({field:"", valid: null});
    const [phoneValue, setPhone] = useState({field:"", valid: null});
    const [addressValue, setAddress] = useState({field:"", valid: null});
    const [cpValue, setCP] = useState({field:"", valid: null});
    const [apartmentValue, setApartment] = useState({field:"", valid: null});
    const [emailValue, setEmail] = useState({field:"", valid: null});
    const [passwordValue, setPassword] = useState({field:"", valid: null});

    const [cityValidate, setCityValidate] = useState("");
    const [provinceValidate, setProvinceValidate] = useState("");
    const [rolValidate, setRolValidate] = useState("");
    const [stateValidate, setStateValidate] = useState("");
  
    const regExp_letters = /^[a-zA-ZÀ-ÿŸ\u00f1\u00d1\s]+$/;
    const regExp_cp = /^[0-9]{5}$/;
    const regExp_phone = /^[0-9]{9}$/;
    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const regExp_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const regExp_required =/^$/;
  
    return (<Fragment>
              <form id="add-form" onSubmit={handleRegisterFormSubmit}>
                  <h5>Registro de nuevos usuarios</h5>
                  <div className="row">
                    <div className="col-12 info-contacto">
                        <div className="row title-contacto">
                          <div className="col-12"><u>Información de contacto</u></div>
                        </div>
                        <div className="row">
                          <InputRU placeholder="Nombre" name="nameAdd" required="required" status={nombreValue} registerForm={registerForm} changeStatus={setNombre} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_letters)} error_message="Nombre solo puede contener letras y espacios"/>
                          <InputRU placeholder="Apellidos" name="lastNameAdd" required="required" status={apellidoValue} registerForm={registerForm} changeStatus={setApellido} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_letters)} error_message="Apellidos solo puede contener letras y espacios"/>
                          <InputRU placeholder="Teléfono" name="phoneAdd" required="required" status={phoneValue} registerForm={registerForm} changeStatus={setPhone} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_phone)} error_message="Teléfono debe contener 9 números"/>
                        </div>
                        <div className="row">
                          <InputRU placeholder="Dirección (Calle y número)" name="addressAdd" required="required" status={addressValue} registerForm={registerForm} changeStatus={setAddress} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_required)} error_message="Dirección es un campo obligatorio"/> 
                          <InputRU placeholder="Aparatmento, piso, etc" name="apartmentAdd" status={apartmentValue} registerForm={registerForm} changeStatus={setApartment} setRegisterForm={setRegisterForm}/> 
                          <InputRU placeholder="Código postal" name="cpAdd" required="required" status={cpValue} registerForm={registerForm} changeStatus={setCP} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_cp)} error_message="Código postal debe contener 5 números"/>
                        </div>
                        <div className="row">
                          <div className="col-4 container-items">
                            <SelectCustom handleChangeSelect={handleChangeSelect} status={provinceValidate} changeSelectStatus={setProvinceValidate} selected={provinceValue} options={options} placeholder="Provincia" error_message="Provincia es un campo obligatorio"/>
                          </div>
                          <div className="col-4 container-items">
                            <SelectCustom options={optionsCity} status={cityValidate} changeSelectStatus={setCityValidate} value={cityValue} selected={cityValue} handleChangeSelect={handleChangeSelectCity} placeholder="Ciudad" error_message="Ciudad es un campo obligatorio"/>  
                          </div>
                          <div className="col-4"></div> 
                        </div>
                    </div>
                    <div className="col-12 info-interna">
                        <div className="row title-interna">
                          <div className="col-12"><u>Información interna</u></div>
                        </div>
                        <div className="row"> 
                          <InputRU placeholder="Email" name="emailAdd" required="required" status={emailValue} registerForm={registerForm} changeStatus={setEmail} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_email)} error_message="Email debe seguir el siguiente formato: foo-bar.baz@example.com"/>
                          <InputRU type="password" placeholder="Contraseña" name="passwordAdd" required="required" status={passwordValue} registerForm={registerForm} changeStatus={setPassword} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_pass)} error_message="Contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula"/>
                          <div className="col-4"></div>
                        </div>
                        <div className="row">
                          <div className="col-4 container-items">
                            <SelectCustom options={optionsRol} selected={rolValue} status={rolValidate} changeSelectStatus={setRolValidate} handleChangeSelect={handleChangeRol} placeholder="Rol" error_message="Rol es un campo obligatorio"/>
                          </div>
                          <div className="col-4 container-items">
                            <SelectCustom options={optionsState} selected={stateValue} status={stateValidate} changeSelectStatus={setStateValidate} handleChangeSelect={handleChangeState} placeholder="Estado" error_message="Estado es un campo obligatorio"/> 
                          </div>
                          <div className="col-4"></div>
                        </div>
                    </div>
                  </div>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                    {registerFormSubmited ?  <Navigate to="/usuarios" /> : null }
                </form>
            </Fragment>);
  };

export default RegisterUser;