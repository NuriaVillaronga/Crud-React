import React, { useState, Fragment } from 'react';
import Icon from '../../../Icon';
 

function SearchBar ( props ) {  

    const [busqueda, setBusqueda] = useState(""); 

    const handleSearchChange =  (event) => {
      setBusqueda(event.target.value);
      filtrar(event.target.value);
    }

    //Si no encuentra ningun elemento se tiene que ocultar la tabla y la paginacion (cuando la haya) y mostrar un mensaje --> añadir clasesName
    const filtrar = (terminoBusqueda) => {
      var resultadoBusqueda = props.users.filter((elemento)=>{
        if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return elemento;
        }
      });
      props.setArrayUsuarios(resultadoBusqueda);
    }
    
    return (<Fragment>
                <input className="form-control input-search-users" placeholder='Busqueda' value={busqueda} onChange={handleSearchChange}/>
                <Icon id="lupa" size="1x"/>
              </Fragment>);   
}; 


export default SearchBar;