import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTable from './Components/MainTable';
import CustomSelect from './Components/CustomSelect';

const options = [
  { value: 'pontevedra', label: 'Pontevedra' },
  { value: 'ourense', label: 'Ourense' },
  { value: 'coruña', label: 'A Coruña' },
  { value: 'lugo', label: 'Lugo' }
]

const optionsPontevedra = [
  { value: 'vilaxoan', label: 'Vilaxoán' },
  { value: 'illa', label: 'Illa de Arousa' }
]

const optionsCoruña = [
  { value: 'ortigueira', label: 'Ortigueira' },
  { value: 'muros', label: 'Muros' }
]

const optionsLugo = [
  { value: 'ciprian', label: 'San Ciprián' },
  { value: 'becerrea', label: 'Becerreá' }
]

const optionsOurense = [
  { value: 'allariz', label: 'Allariz' },
  { value: 'verin', label: 'Verín' }
]

const nullOption = { label: "Todavía no has seleccionado provincia", value: null };

const AddUser = ({desplegarFormulario, ocultarFormShowBtn}) => {
  const handleChangeSelect = ( {value} ) => {

      if (value === null) {
          setValueCity(nullOption);
          setOptionsCity([]);
      }
      else if (value === "pontevedra") {
          setValueCity(optionsPontevedra[0]);
          setOptionsCity(optionsPontevedra);
      }
      else if(value === "coruña") {
          setValueCity(optionsCoruña[0]);
          setOptionsCity(optionsCoruña);
      }
      else if(value === "lugo") {
          setValueCity(optionsLugo[0]);
          setOptionsCity(optionsLugo);
      }
      else if(value === "ourense") {
          setValueCity(optionsOurense[0]);
          setOptionsCity(optionsOurense); 
      }
  }

  const handleChangeSelectCity = ( {value} ) => {

      console.log(value);
      console.log(optionsCity);

      for (let i=0; optionsCity.length; i++) {
          if(optionsCity[i].value === value) {
              setValueCity(optionsCity[i]);
          }
      }

  }

  const [optionsCity, setOptionsCity] = useState([]);
  const [valueCity, setValueCity] = useState(nullOption);

  return (<Fragment>
            <button className="btn btn-primary" id="add-btn" type="button" onClick={desplegarFormulario}>Añadir nuevo usuario</button>
            <form id="add-form">
                <h5>Registro de nuevos usuarios</h5>
                <div className="row">
                  <div className="col-12 info-contacto">
                      <div className="row title-contacto">
                        <div className="col-12"><u>Información de contacto</u></div>
                      </div>
                      <div className="row">
                        <div className="col-4 container-items"><input className="form-control" placeholder="Nombre" name="nameAdd" required="required"></input></div>
                        <div className="col-4 container-items"><input className="form-control" placeholder="Apellidos" name="lastNameAdd" required="required"></input></div>
                        <div className="col-4 container-items"><input className="form-control" placeholder="Teléfono" name="phoneAdd" required="required"></input></div>
                      </div>
                      <div className="row">
                        <div className="col-4 container-items"><input className="form-control" placeholder="Dirección (Calle y número)" name="addressAdd" required="required"></input></div>
                        <div className="col-4 container-items"><input className="form-control" placeholder="Aparatmento, piso, etc" name="apartmentAdd" required="required"></input></div>
                        <div className="col-4 container-items"><input className="form-control" placeholder="Código postal" name="cpAdd" required="required"></input></div>
                      </div>
                      <div className="row">
                        <div className="col-4 container-items">
                          <CustomSelect handleChangeSelect={handleChangeSelect} options={options}/>
                        </div>
                        <div className="col-4 container-items">
                          <CustomSelect options={optionsCity} value={valueCity} handleChangeSelect={handleChangeSelectCity}/>
                        </div>
                        <div className="col-4"></div>
                      </div>
                  </div>
                  <div className="col-12 info-interna">
                      <div className="row title-interna">
                        <div className="col-12"><u>Información interna</u></div>
                      </div>
                      <div className="row">
                        <div className="col-4 container-items"><input className="form-control" placeholder="Email" name="emailAdd" required="required"></input></div>
                        <div className="col-4 container-items"><input className="form-control" type="password" placeholder="Password" name="passwordValue" required="required"></input></div>
                      </div>
                      <div className="row">
                        <div className="col-4 container-items">
                                                <select className="form-select" name="rolAdd" required="required">
                                                  <option>Admin</option>
                                                  <option>User</option>
                                                </select>
                        </div>
                        <div className="col-4 container-items">
                                                <select className="form-select" name="stateAdd" required="required">
                                                  <option>Activo</option>
                                                  <option>Inactivo</option>
                                                </select>
                        </div>
                      </div>
                  </div>
                </div>
                
                <button className="btn btn-primary" type="submit">Guardar</button>
                <button className="btn btn-danger" type="button" onClick={ocultarFormShowBtn}>Cancelar</button>
              </form>
          </Fragment>);
}

const ContainerMainTable = () => {

  const handleDesplegarFormulario = () => {
    document.getElementById("add-form").style.display = "block";
    document.getElementById("add-btn").style.display = "none";
  }
  
  const handleOcultarFormShowBtn = () => {
    document.getElementById("add-form").style.display = "none"; 
    document.getElementById("add-btn").style.display = "block";
  }

    return (<Fragment>
      <div className="row">
          <div className="col-12 newUserCol">
            <AddUser desplegarFormulario={handleDesplegarFormulario} ocultarFormShowBtn={handleOcultarFormShowBtn}/>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
              <MainTable/>
            </div>
        </div>
      </Fragment>
  ); 
}


function App() {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <ContainerMainTable/>
          </div>
          <div className="col-1"></div>
        </div>
    </div>
  );
}

export default App;
