import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomSelect from './Components/CustomSelect';
import RowMenu from './Components/RowMenu';
import ContainerMainTable from './Components/ContainerMainTable';


const Header = () => {
    return (<div className="row header-row">
              <div className="col-10">Logo</div>
              <div className="col-1">Imagen usuario</div>
              <div className="col-1">Exit</div>
            </div>);
}

const Content = () => {

  const handleUsuariosClick = () => {
    var containerAddUser = document.getElementById("container-add-user");
    var containerMainTable = document.getElementById("container-main-table");
    containerAddUser.style.display = "none";
    containerMainTable.style.display = "block";
  }

  const handleRegistroUsuariosClick = () => {
    var containerAddUser = document.getElementById("container-add-user");
    var containerMainTable = document.getElementById("container-main-table");
    containerAddUser.style.display = "block";
    containerMainTable.style.display = "none";
  }

  return (<div className="row content-row">
            <div className="col-2 menu-col">
              <RowMenu id="pedidos-row" value="PEDIDOS" global={true}/> 
              <RowMenu id="tramitados-row" value="Pedidos en trámite"/>
              <RowMenu id="finalizados-row" value="Pedidos finalizados"/>
              <RowMenu id="usuarios-row" value="USUARIOS" global={true} handleUsuariosClick={handleUsuariosClick}/>
              <RowMenu id="clientes-row" value="Clientes"/>
              <RowMenu id="administradores-row" value="Administradores"/>
              <RowMenu id="registro-usuario-row" value="Registro nuevo usuario" add={true} handleRegistroUsuariosClick={handleRegistroUsuariosClick}/>
              <RowMenu id="catalogo-row" value="CATÁLOGO" global={true}/>
              <RowMenu id="clientes-row" value="Productos"/>
              <RowMenu id="administradores-row" value="Productos con oferta"/>
              <RowMenu id="registro-producto-row" value="Registro nuevo produto" add={true}/>
            </div>
            <div className="col-10 border">
              <ContainerAddUser id="container-add-user"/>
              <ContainerMainTable id="container-main-table"/>
            </div>
          </div>);
}


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

const AddUser = () => {
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
              </form>
          </Fragment>);
}

const ContainerAddUser = ( {id} ) => {

    return (<Fragment>
      <div className="row" id={id}>
          <div className="col-12 newUserCol">
            <AddUser/>
          </div>
        </div>
      </Fragment>
  ); 
}


function App() {
  return (
    <div className="container-fluid">
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
