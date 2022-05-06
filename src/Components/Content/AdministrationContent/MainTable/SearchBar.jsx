import React, { useState } from 'react';
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
    
    return (<div className="row">
                  <div className="col-8"></div>
                  <div className="col-4 col-search-users">
                    <input className="form-control input-search-users" placeholder='Introduce el valor que deseas buscar' value={busqueda} onChange={handleSearchChange}/>
                    <Icon id="lupa" size="1x"/>
                  </div>
                </div>);   
}; 


export default SearchBar;