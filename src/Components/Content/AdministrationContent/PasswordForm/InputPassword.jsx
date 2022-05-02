import React, { Fragment } from 'react';


function InputPassword ({type ="text", placeholder, name, required = "", status, changeStatus, regexp, error_message}) { 

    /*
    const handleEditChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editionForm};
        newFormData[fieldName] = fieldValue;
    
        setEditionForm(newFormData);
    }
    */
  
    var style_input ="";
    var style_error ="";
  
    const validation = (event) => { 
      if (regexp) {
          if(regexp == "/^$/") {
            if(!regexp.test(event.target.value)) { 
              changeStatus({...status, field: event.target.value, valid: "validado"}) 
            }
            else {
              changeStatus({...status, field: '', valid: "no_validado"})
            } 
          }
          else {
            if(regexp.test(event.target.value)) { 
              changeStatus({...status, field: event.target.value, valid: "validado"}) 
            }
            else {
              changeStatus({...status, field: '', valid: "no_validado"})
            }
          }
      }
    }
  
    if(status.valid == "no_validado") {
      style_input = "invalid_input";
      style_error = "show_error";
    }
    else if (status.valid == "validado" || status.valid == null) {
      style_input = "";
      style_error = "hidde_error";
    }
  
      return (<Fragment>
                <input className={`form-control ${style_input}`} type={type} placeholder={placeholder} name={name} regexp={regexp} required={required} onKeyUp={validation} onClick={console.log(status)}/>
                <div className={style_error}>{error_message}</div>
            </Fragment>
      );
  }

export default InputPassword;