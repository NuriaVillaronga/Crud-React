import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

function MenuContent () { 
  
    return (<div className="col-2 menu-col"> 
                <MenuItem id="pedidos-row" value="PEDIDOS" global={true}/> 
                <MenuItem id="tramitados-row" value="Pedidos en trámite"/>
                <MenuItem id="finalizados-row" value="Pedidos finalizados"/>
                <Link to="/usuarios">
                <MenuItem id="usuarios-row" value="USUARIOS" global={true}/>
                </Link>
                <MenuItem id="clientes-row" value="Clientes"/>
                <MenuItem id="administradores-row" value="Administradores"/>
                <Link to="/registro_usuarios">
                <MenuItem id="registro-usuario-row" value="Registro nuevo usuario" add={true}/>
                </Link>
                <MenuItem id="catalogo-row" value="CATÁLOGO" global={true}/>
                <MenuItem id="clientes-row" value="Productos"/>
                <MenuItem id="administradores-row" value="Productos con oferta"/>
                <MenuItem id="registro-producto-row" value="Registro nuevo produto" add={true}/>
            </div>);  
};

export default MenuContent;