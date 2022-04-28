import React, { Fragment } from 'react';


function InputALL ({type ="text", placeholder, name, required = "", status, value, changeStatus, setEditionForm, editionForm, regexp, error_message}) { 

    const handleEditChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = {...editionForm};
        newFormData[fieldName] = fieldValue;
    
        setEditionForm(newFormData);
    }
  
    var style_input ="";
    var style_error ="";
  
    const validation = () => { 
      if (regexp) {
        
          if(regexp.test(value)) { 
            changeStatus({...status, valid: "validado"}) 
          }
          else {
            changeStatus({...status, valid: "no_validado"})
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
                <input className={`form-control ${style_input}`} type={type} placeholder={placeholder} value={value} name={name} regexp={regexp} required={required} onKeyUp={validation} onChange={handleEditChange}/>
                <div className={style_error}>{error_message}</div>
            </Fragment>
      );
  }

export default InputALL;