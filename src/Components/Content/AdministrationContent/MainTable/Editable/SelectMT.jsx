import React, { useEffect } from 'react';
import Select from 'react-select';

function SelectState ( props ) {  

    var valorGuardado = ""

    for (var i=0; i<props.options.length; i++) {
        if(props.options[i].value == props.property) {
            valorGuardado = props.options[i];
        }
    }

    const handleSelectChange = ( { value } ) => { 
    
        const fieldValue = value;
    
        const newFormData = {...props.editionForm};
        newFormData[props.name] = fieldValue;
    
        props.setEditionForm(newFormData);
        props.setEstado(fieldValue);
    }

    useEffect(() => {
        valorGuardado = props.estado;
    });

    return (<Select name={props.name} onChange={handleSelectChange} options={props.options} defaultValue={valorGuardado}/>); 
}

export default SelectState;  