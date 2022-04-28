import React from 'react';
import Select from 'react-select';

function SelectALL ( props ) {  
    //onChange={props.handleEditChange}
    return (<Select name={props.name} options={props.options} value={props.value} placeholder={props.placeholder}/>); 
}

export default SelectALL;  