import React, { useState, Fragment } from 'react';
import Icon from '../../../Icon';
import Select from 'react-select';
 

function SearchBar ( props ) {  

    const [busqueda, setBusqueda] = useState(""); 

    const [switched, setSwitch] = useState(false);

    const [optionsBusqueda, setOptions] = useState([]);

    const [valueS, setValueS] = useState([]);

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

    const handleSwitch = () => {
      var bus_av = document.getElementById("busqueda-avanzada-cont");
      if (switched == false) {
        bus_av.style.visibility = "visible";
        setSwitch(true);
      }
      if (switched == true) {
        bus_av.style.visibility = "hidden";
        setSwitch(false);
      }
    }

    const optionsAc = [ { value: 'name', label: 'Nombre' }, { value: 'email', label: 'Email' }, { value: 'registro', label: 'Registro' }, { value: 'rol', label: 'Rol' } ]
    const optionsC = [ { value: 'dir', label: 'Direccion' }, { value: 'apart', label: 'Apartamento' }, { value: 'cp', label: 'Codio postal' } ]
    const optionsAm = [ { value: 'acceso', label: 'Acceso' }, { value: 'contacto', label: 'Contacto' } ]

    const handleRadioAcceso = () => {
        console.log("Tocaste acceso");
        setOptions(optionsAc);
        setValueS([]);
    }

    const handleRadioContacto = () => {
        console.log("Tocaste contacto");
        setOptions(optionsC);
        setValueS([]);
    }

    const handleRadioAmbos = () => {
        console.log("Tocaste el btn ambos");
        setOptions(optionsAm);
        setValueS([]);
    }


   const handleSelect = (value) => {
      setValueS(...valueS, value)
      console.log(value);
   }
    
    return (<Fragment>
              <div className='row row-search border'>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-2 border'></div>
                    <div className='col-6 border'></div>
                    <div className="col-4 col-search-users border">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" onChange={handleSwitch}/>Busqueda avanzada
                        </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-2 border'></div>
                    <div className='col-6 border' id='busqueda-avanzada-cont'>
                      <div className='row'>
                          <div className='col-3'>Filtrar busqueda por:</div>
                          <div className='col-3'><input type="radio" name="radio-check" id="radio-acceso" onClick={handleRadioAcceso}></input>Informacion acceso</div>
                          <div className='col-4'><input type="radio" name="radio-check" id="radio-contacto" onClick={handleRadioContacto}></input>Informacion contacto</div>
                          <div className='col-2'><input type="radio" name="radio-check" id="ambos" onClick={handleRadioAmbos}></input>Ambos</div>
                      </div>
                      <div className='row'>
                          <div className='col-3'></div>
                          <div className='col-7'><Select isMulti name="select" id="select-busq" options={optionsBusqueda} value={valueS} onChange={handleSelect}/></div>
                          <div className='col-2'><input type="checkbox"></input>Todos</div>
                      </div>
                    </div>
                    <div className="col-4 col-search-users border">
                      <input className="form-control input-search-users" placeholder='Busqueda' value={busqueda} onChange={handleSearchChange}/>
                      <Icon id="lupa" size="1x"/>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>);   
}; 


export default SearchBar;