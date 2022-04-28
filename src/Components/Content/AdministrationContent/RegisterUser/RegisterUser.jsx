import React, { useState, Fragment } from 'react';
import CustomSelect from '../../../CustomSelect';
import InputAddUser from './InputAddUser';
import moment from 'moment';
import { nanoid } from "nanoid";
import { Navigate } from 'react-router-dom';


function RegisterUser ( props ) { 

    const options = [
        { value: 'pontevedra', label: 'Pontevedra' },
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
            setValueCity("");
            setOptionsCity([]);
            setProvinceValue("")
        }
        else if (value === "Pontevedra") {
            setValueCity(optionsPontevedra[0]);
            setOptionsCity(optionsPontevedra);
            setProvinceValue("Pontevedra")
        }
        else if(value === "A Coruña") {
            setValueCity(optionsCoruña[0]);
            setOptionsCity(optionsCoruña);
            setProvinceValue("A Coruña")
        }
        else if(value === "Lugo") {
            setValueCity(optionsLugo[0]);
            setOptionsCity(optionsLugo);
            setProvinceValue("Lugo")
        }
        else if(value === "Ourense") {
            setValueCity(optionsOurense[0]);
            setOptionsCity(optionsOurense); 
            setProvinceValue("Ourense")
        }
    }
  
    const handleChangeSelectCity = ( {value} ) => {
  
        for (let i=0; optionsCity.length; i++) {
            if(optionsCity[i].value === value) {
                setValueCity(optionsCity[i]);
            }
        }
    }
  
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
  
    const handleChangeStatus = ( {value} ) => {
  
      if (value === null) {
          setStatusValue("")
      }
      else if (value === "Activo") {
          setStatusValue("Activo")
      }
      else if(value === "Inactivo") {
          setStatusValue("Inactivo")
      }
    }
  
    const [registerForm, setRegisterForm] = useState({id : "", nameAdd : "", emailAdd: "", rolAdd: "", passwordAdd: "", stateAdd: "",  addressAdd: "", cpAdd: "", phoneAdd: "", cityAdd: "", provinciaAdd: "", apartmentAdd: ""});
  
    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
  
        var registerData = moment().format("DD/MM/YYYY");
  
        const newUser = {id : nanoid(), name : registerForm.nameAdd, email: registerForm.emailAdd, register_data: registerData, rol: rolValue, password: registerForm.passwordAdd, state: statusValue,  address: registerForm.addressAdd, cp: registerForm.cpAdd, phone: registerForm.phoneAdd, city: valueCity.value, provincia: provinceValue, apartment: registerForm.apartmentAdd};
        const newUsers = [...props.users, newUser];
        props.setUser(newUsers)
  
        setRegisterFormSubmited(true);
    }
  
    const [optionsCity, setOptionsCity] = useState([]);
    const [valueCity, setValueCity] = useState("");
    const [provinceValue, setProvinceValue] = useState("");
    const [rolValue, setRolValue] = useState("");
    const [statusValue, setStatusValue] = useState("");
    const [registerFormSubmited, setRegisterFormSubmited] = useState(false)
  
  
    const [nombreValue, setNombre] = useState({field:"", valid: null}); 
    const [apellidoValue, setApellido] = useState({field:"", valid: null});
    const [phoneValue, setPhone] = useState({field:"", valid: null});
    const [addressValue, setAddress] = useState({field:"", valid: null});
    const [cpValue, setCP] = useState({field:"", valid: null});
    const [apartmentValue, setApartment] = useState({field:"", valid: null});
    const [emailValue, setEmail] = useState({field:"", valid: null});
    const [passwordValue, setPassword] = useState({field:"", valid: null});
  
    const regExp_letters = /^[a-zA-ZÀ-ÿŸ\u00f1\u00d1\s]+$/;
    const regExp_cp = /^[0-9]{5}$/;
    const regExp_phone = /^[0-9]{9}$/;
    const regExp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const regExp_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  
    return (<Fragment>
              <form id="add-form" onSubmit={handleRegisterFormSubmit}>
                  <h5>Registro de nuevos usuarios</h5>
                  <div className="row">
                    <div className="col-12 info-contacto">
                        <div className="row title-contacto">
                          <div className="col-12"><u>Información de contacto</u></div>
                        </div>
                        <div className="row">
                          <InputAddUser placeholder="Nombre" name="nameAdd" required="required" status={nombreValue} registerForm={registerForm} changeStatus={setNombre} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_letters)} error_message="Nombre solo puede contener letras y espacios"/>
                          <InputAddUser placeholder="Apellidos" name="lastNameAdd" required="required" status={apellidoValue} registerForm={registerForm} changeStatus={setApellido} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_letters)} error_message="Apellidos solo puede contener letras y espacios"/>
                          <InputAddUser placeholder="Teléfono" name="phoneAdd" required="required" status={phoneValue} registerForm={registerForm} changeStatus={setPhone} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_phone)} error_message="Teléfono debe contener 9 números"/>
                        </div>
                        <div className="row">
                          <InputAddUser placeholder="Dirección (Calle y número)" name="addressAdd" required="required" status={addressValue} registerForm={registerForm} changeStatus={setAddress} setRegisterForm={setRegisterForm}/> 
                          <InputAddUser placeholder="Aparatmento, piso, etc" name="apartmentAdd" status={apartmentValue} registerForm={registerForm} changeStatus={setApartment} setRegisterForm={setRegisterForm}/> 
                          <InputAddUser placeholder="Código postal" name="cpAdd" required="required" status={cpValue} registerForm={registerForm} changeStatus={setCP} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_cp)} error_message="Código postal debe contener 5 números"/>
                        </div>
                        <div className="row">
                          <div className="col-4 container-items">
                            <CustomSelect handleChangeSelect={handleChangeSelect} options={options} placeholder="Provincia"/>
                          </div>
                          <div className="col-4 container-items">
                            <CustomSelect options={optionsCity} value={valueCity} handleChangeSelect={handleChangeSelectCity} placeholder="Ciudad"/>  
                          </div>
                          <div className="col-4"></div>
                        </div>
                    </div>
                    <div className="col-12 info-interna">
                        <div className="row title-interna">
                          <div className="col-12"><u>Información interna</u></div>
                        </div>
                        <div className="row">
                          <InputAddUser placeholder="Email" name="emailAdd" required="required" status={emailValue} registerForm={registerForm} changeStatus={setEmail} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_email)} error_message="Email debe seguir el siguiente formato: foo-bar.baz@example.com"/>
                          <InputAddUser type="password" placeholder="Contraseña" name="passwordAdd" required="required" status={passwordValue} registerForm={registerForm} changeStatus={setPassword} setRegisterForm={setRegisterForm} regexp={new RegExp(regExp_pass)} error_message="Contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula"/>
                          <div className="col-4"></div>
                        </div>
                        <div className="row">
                          <div className="col-4 container-items">
                            <CustomSelect options={optionsRol} handleChangeSelect={handleChangeRol} placeholder="Rol"/>
                          </div>
                          <div className="col-4 container-items">
                            <CustomSelect options={optionsState} handleChangeSelect={handleChangeStatus} placeholder="status"/>
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