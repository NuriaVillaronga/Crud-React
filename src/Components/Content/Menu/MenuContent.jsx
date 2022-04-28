import React from 'react';
import RowMenu from './RowMenu';
import { Link } from 'react-router-dom';

function MenuContent () { 
  
    return (<div className="col-2 menu-col">
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
            </div>);  
};

export default MenuContent;