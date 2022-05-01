import React from 'react';
import Select from 'react-select';

function SelectALL ( props ) {  

    var valorGuardado = props.estado;

    for (var i=0; i<props.options.length; i++) {
        if(props.options[i].value == valorGuardado) {
            valorGuardado = props.options[i];
        }
    }

    const handleSelectChange = ( { value } ) => { 
    
        const newFormData = {...props.editionForm};
        newFormData[props.name] = value;
    
        props.setEditionForm(newFormData);
        props.setEstado(value);
    }

    return (<Select name={props.name} onChange={handleSelectChange} options={props.options} defaultValue={valorGuardado}/>); 
}

export default SelectALL;   