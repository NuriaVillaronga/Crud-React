import React from 'react';
import Select from 'react-select';

function SelectCustom ( props ) {   
    return (<Select className={props.class} options={props.options} onChange={props.handleChangeSelect} value={props.value} placeholder={props.placeholder}/>); 
}

export default SelectCustom;  