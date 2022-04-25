import React from 'react';
import Select from 'react-select';

function CustomSelect ( props ) {   

    return (<Select options={props.options} onChange={props.handleChangeSelect} value={props.value}/>); 
}

export default CustomSelect; 