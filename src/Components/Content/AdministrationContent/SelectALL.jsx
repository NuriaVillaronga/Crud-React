import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function SelectALL ( props ) {  

    const optionsState = [ { value: 'Activo', label: 'Activo' }, { value: 'Inactivo', label: 'Inactivo' } ]

    var valorGuardado = ""

    for (var i=0; i<optionsState.length; i++) {
        if(optionsState[i].value == props.state) {
            valorGuardado = optionsState[i];
        }
    }
 
    const [stateValue, setStateValue] = useState(""); 

    const handleEditChange = ( { value } ) => {
    
        const fieldValue = value;
    
        const newFormData = {...props.editionForm};
        newFormData["state"] = fieldValue;
    
        props.setEditionForm(newFormData);
        setStateValue(fieldValue);
    }

    useEffect(() => {
        console.log(valorGuardado)
        valorGuardado = stateValue;
    });

    return (<Select name={props.name} onChange={handleEditChange} options={optionsState} defaultValue={valorGuardado}/>); 
}

export default SelectALL;  