import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTable from './Components/MainTable';

const AddUser = ({desplegarFormulario, ocultarFormShowBtn}) => {
  return (<Fragment>
            <button className="btn btn-primary" id="btnAddUser" type="button" onClick={desplegarFormulario}>Añadir nuevo usuario</button>
            <form id="addUserForm">
                <h4>Formulario de registro de usuarios</h4>
                <label>Nombre</label><input className="form-control" placeholder="Nombre" name="name" required="required"></input>
                <label>Email</label><input className="form-control" placeholder="Email" name="email" required="required"></input>
                <label>Rol</label><select className="form-select" name="" required="required">
                  <option>Admin</option>
                  <option>User</option>
                </select>
                <button className="btn btn-primary" type="submit">Guardar</button>
                <button className="btn btn-danger" type="button" onClick={ocultarFormShowBtn}>Cancelar</button>
            </form>
          </Fragment>);
}

const ContainerMainTable = () => {

  const handleDesplegarFormulario = () => {
    document.getElementById("addUserForm").style.display = "block";
    document.getElementById("btnAddUser").style.display = "none";
  }
  
  const handleOcultarFormShowBtn = () => {
    document.getElementById("addUserForm").style.display = "none";
    document.getElementById("btnAddUser").style.display = "block";
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
