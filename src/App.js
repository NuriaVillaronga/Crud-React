import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomSelect from './Components/CustomSelect';
import RowMenu from './Components/RowMenu';
import ContainerMainTable from './Components/ContainerMainTable';
import userData from "./users-data.json";
import { nanoid } from "nanoid";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import moment from 'moment';
import Icon from './Components/Icon';



const Header = () => {
    return (<div className="row header-row">
              <div className="col-10">Logo</div>
              <div className="col-1">Imagen usuario</div>
              <div className="col-1">Exit</div>
            </div>);
}

const Content = () => {

  const [users, setUsers] = useState(userData);

  return (<div className="row content-row">
            <div className="col-2 menu-col">
              <RowMenu id="pedidos-row" value="PEDIDOS" global={true}/> 
              <RowMenu id="tramitados-row" value="Pedidos en trámite"/>
              <RowMenu id="finalizados-row" value="Pedidos finalizados"/>
              <Link to="/usuarios">
                <RowMenu id="usuarios-row" value="USUARIOS" global={true}/>
              </Link>
              <RowMenu id="clientes-row" value="Clientes"/>
              <RowMenu id="administradores-row" value="Administradores"/>
              <Link to="/registro_usuarios">
                <RowMenu id="registro-usuario-row" value="Registro nuevo usuario" add={true}/>
              </Link>
              <RowMenu id="catalogo-row" value="CATÁLOGO" global={true}/>
              <RowMenu id="clientes-row" value="Productos"/>
              <RowMenu id="administradores-row" value="Productos con oferta"/>
              <RowMenu id="registro-producto-row" value="Registro nuevo produto" add={true}/>
            </div>
            <div className="col-10 border administration-row">
              <Routes>
                <Route exact path="/usuarios" element={<ContainerMainTable id="container-main-table" users={users} setUsers={setUsers}/>}/>
                <Route exact path="/registro_usuarios" element={<ContainerAddUser id="container-add-user" users={users} setUsers={setUsers}/>}/>
              </Routes>
            </div>
          </div>);
};


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


const AddUser = ( props ) => {

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


  const [nombreValue, setNombre] = useState({campo:"", valido: null});
  const [apellidoValue, setApellido] = useState({campo:"", valido: null});
  const [phoneValue, setPhone] = useState({campo:"", valido: null});
  const [addressValue, setAddress] = useState({campo:"", valido: null});
  const [cpValue, setCP] = useState({campo:"", valido: null});
  const [apartmentValue, setApartment] = useState({campo:"", valido: null});
  const [emailValue, setEmail] = useState({campo:"", valido: null});
  const [passwordValue, setPassword] = useState({campo:"", valido: null});

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
                        <InputAUF placeholder="Nombre" name="nameAdd" required="required" estado={nombreValue} registerForm={registerForm} cambiarEstado={setNombre} setRegisterForm={setRegisterForm} expresion={new RegExp(regExp_letters)} mensaje="Nombre solo puede contener letras y espacios"/>
                        <InputAUF placeholder="Apellidos" name="lastNameAdd" required="required" estado={apellidoValue} registerForm={registerForm} cambiarEstado={setApellido} setRegisterForm={setRegisterForm} expresion={new RegExp(regExp_letters)} mensaje="Apellidos solo puede contener letras y espacios"/>
                        <InputAUF placeholder="Teléfono" name="phoneAdd" required="required" estado={phoneValue} registerForm={registerForm} cambiarEstado={setPhone} setRegisterForm={setRegisterForm} expresion={new RegExp(regExp_phone)} mensaje="Teléfono debe contener 9 números"/>
                      </div>
                      <div className="row">
                        <InputAUF placeholder="Dirección (Calle y número)" name="addressAdd" required="required" estado={addressValue} registerForm={registerForm} cambiarEstado={setAddress} setRegisterForm={setRegisterForm}/>
                        <InputAUF placeholder="Aparatmento, piso, etc" name="apartmentAdd" estado={apartmentValue} registerForm={registerForm} cambiarEstado={setApartment} setRegisterForm={setRegisterForm}/>
                        <InputAUF placeholder="Código postal" name="cpAdd" required="required" estado={cpValue} registerForm={registerForm} cambiarEstado={setCP} setRegisterForm={setRegisterForm} expresion={new RegExp(regExp_cp)} mensaje="Código postal debe contener 5 números"/>
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
                        <InputAUF placeholder="Email" name="emailAdd" required="required" estado={emailValue} registerForm={registerForm} cambiarEstado={setEmail} setRegisterForm={setRegisterForm} expresion={new RegExp(regExp_email)} mensaje="Email debe seguir el siguiente formato: foo-bar.baz@example.com"/>
                        <InputAUF type="password" placeholder="Contraseña" name="passwordAdd" required="required" estado={passwordValue} registerForm={registerForm} cambiarEstado={setPassword} setRegisterForm={setRegisterForm} expresion={new RegExp(regExp_pass)} mensaje="Contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula"/>
                        <div className="col-4"></div>
                      </div>
                      <div className="row">
                        <div className="col-4 container-items">
                          <CustomSelect options={optionsRol} handleChangeSelect={handleChangeRol} placeholder="Rol"/>
                        </div>
                        <div className="col-4 container-items">
                          <CustomSelect options={optionsState} handleChangeSelect={handleChangeStatus} placeholder="Estado"/>
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

const InputAUF = ({type ="text", placeholder, name, required = "", estado, cambiarEstado, setRegisterForm, registerForm, expresion, mensaje}) => {

  const handleRegisterFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormRegister = {...registerForm};
    newFormRegister[fieldName] = fieldValue;

    cambiarEstado({...estado, campo: event.target.value})
    setRegisterForm(newFormRegister);
  }

  var style_input ="";
  var style_error ="";
  var icon_error ="";

  const validacion = () => {
    if (expresion) {
      
        if(expresion.test(estado.campo)) {
          cambiarEstado({...estado, valido: "validado"})
        }
        else {
          cambiarEstado({...estado, valido: "no_validado"})
        }
    }
  }

  if(estado.valido == "no_validado") {
    style_input = "invalid_input";
    style_error = "show_error";
    icon_error ="error";
  }
  else if (estado.valido == "validado" || estado.valido == null) {
    style_input = "";
    style_error = "hidde_error";
    icon_error ="";
  }

    return (
      <div className="col-4 container-items-input">
          <input className={`form-control ${style_input}`} type={type} placeholder={placeholder} value={estado.campo} name={name} expresion={expresion} required={required} onKeyUp={validacion} onChange={handleRegisterFormChange}/>
          <Icon id={icon_error} size="1x"/>
          <div className={style_error}>{mensaje}</div>
      </div>
    );
}

const ContainerAddUser = ( { id, users, setUsers } ) => {

    return (<Fragment>
      <div className="row" id={id}>
          <div className="col-12 newUserCol">
            <AddUser users={users} setUser={setUsers}/>
          </div>
        </div>
      </Fragment>
  ); 
}


function App() {

  return (<Router>
        <div className="container-fluid container-panel">
          <Header/>
          <Content/>
      </div>
  </Router>
  );
}

export default App;
