import React, { useState } from 'react';
import RowMenu from './RowMenu';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ContainerMainTable from './ContainerMainTable';
import { Link } from 'react-router-dom';
import ContainerAddUser from './ContainerAddUser';
import userData from "../users-data.json";

function Content () { 
  
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


export default Content;