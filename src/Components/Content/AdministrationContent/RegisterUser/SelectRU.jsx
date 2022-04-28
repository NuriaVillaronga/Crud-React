import React, { Fragment } from 'react';
import Select from 'react-select';

function SelectRU ( props ) {  
    
    let invalid = ""
    let style_error ="" 

    const validation = () => { 
      
          if(props.selected == "" && props.status == props.selected) {
            props.changeSelectStatus("no_validado")
          }
          else {
            props.changeSelectStatus("validado")
          }
    }
  
    if(props.status == "no_validado") {
        invalid = "invalid-select";
        style_error = "show_error";
    }
    else if (props.status == "validado" || props.status == "") {
        invalid = ""; 
        style_error = "hidde_error";
    }

    return (<Fragment>
                <Select className={invalid} options={props.options} onChange={props.handleChangeSelect} value={props.value} onBlur={validation} placeholder={props.placeholder}/>
                <div className={style_error}>{props.error_message}</div>
            </Fragment>); 
}

export default SelectRU;  