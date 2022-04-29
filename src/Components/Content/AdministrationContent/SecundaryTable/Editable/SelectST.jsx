import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function SelectST ( props ) {  

    const optionsPontevedra = [ { value: 'Vilagarcía de Arousa', label: 'Vilagarcía de Arousa' }, { value: 'Illa de Arousa', label: 'Illa de Arousa' } ]
    const optionsCoruña = [ { value: 'Ortigueira', label: 'Ortigueira' }, { value: 'Muros', label: 'Muros' } ]
    const optionsLugo = [ { value: 'San Ciprián', label: 'San Ciprián' }, { value: 'Becerreá', label: 'Becerreá' } ]
    const optionsOurense = [ { value: 'Allariz', label: 'Allariz' }, { value: 'Verín', label: 'Verín' } ]

    const [cityValue, setCityValue] = useState(props.city);

    var opciones = "";
    var valorGuardado = cityValue

    if (props.provinciaSeleccionada == "Pontevedra") {
        opciones = optionsPontevedra;
    }
    if (props.provinciaSeleccionada == "A Coruña") {
        opciones = optionsCoruña;
    }
    if (props.provinciaSeleccionada == "Ourense") {
        opciones = optionsOurense;
    }
    if (props.provinciaSeleccionada == "Lugo") {
        opciones = optionsLugo;
    }

    var valorGuardado = cityValue;

    for (var i=0; i<opciones.length; i++) {
        if (opciones[i].value == cityValue) {
            valorGuardado = opciones[i];
        }
    }

    const handleSelectChange = ( { value } ) => { 
    
        const fieldValue = value;
    
        const newFormData = {...props.editionForm};
        newFormData[props.name] = fieldValue;
    
        props.setEditionForm(newFormData);
        setCityValue(fieldValue);
    }

    console.log(valorGuardado);

    return (<Select name={props.name} onChange={handleSelectChange} options={opciones} defaultValue={valorGuardado}/>); 
}

export default SelectST;   