import React from 'react';
import Icon from '../../../Icon';
import SelectCustom from '../../../SelectCustom';


function SelectRU ({ placeholder, name, required = "", status, changeStatus, setRegisterForm, registerForm, regexp, error_message }) { 

    const handleRegisterFormChange = (event) => { 
      event.preventDefault();
  
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
  
      const newFormRegister = {...registerForm};
      newFormRegister[fieldName] = fieldValue;
  
      changeStatus({...status, field: event.target.value})
      setRegisterForm(newFormRegister);  
    }
  
    var style_input ="";
    var style_error ="";
    var icon_error ="";
  
    const validation = () => { 
      if (regexp) {
        
          if(regexp.test(status.field)) { 
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
      icon_error ="error";
    }
    else if (status.valid == "validado" || status.valid == null) {
      style_input = "";
      style_error = "hidde_error";
      icon_error ="";
    }
  
      return (
        <div className="col-4 container-items-input">
            <SelectCustom class={`form-control ${style_input}`} placeholder={placeholder} value={status.field} name={name} regexp={regexp} onBlur={validation} required={required} onChange={handleRegisterFormChange}/>
            <Icon id={icon_error} size="1x"/>
            <div className={style_error}>{error_message}</div>
        </div>
      );
  }

export default InputRU;