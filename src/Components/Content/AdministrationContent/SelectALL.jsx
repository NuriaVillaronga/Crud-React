import React, { useEffect } from 'react';
import Select from 'react-select';

function SelectALL ( props ) {  

    var valorGuardado = props.estado;

    for (var i=0; i<props.options.length; i++) {
        if(props.options[i].value == valorGuardado) {
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

export default SelectALL;   