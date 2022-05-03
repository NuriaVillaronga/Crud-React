import React, { Fragment } from 'react';


function InputCP ({type ="text", name, required = "", status, changeStatus, error_message}) { 

    var style_input ="";
    var style_error ="";
    var password_update = document.getElementById("password-update"); //Input del primer password
  
    const validation = (event) => { 
      if ( password_update.value != "") {
        if(password_update.value == event.target.value) { 
            changeStatus({...status, field: event.target.value, valid: "validado"})
        }
        else {
            changeStatus({...status, field: event.target.value, valid: "no_validado"})
        }
      }
      else if ( password_update.value == "" && event.target.value == "") {
          changeStatus({...status, field: event.target.value, valid: "validado"})
      }
      else if ( password_update.value == "" && event.target.value != "") {
        changeStatus({...status, field: event.target.value, valid: "no_validado"})
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
                <input className={`form-control ${style_input}`} type={type} name={name} required={required} onKeyUp={validation} onBlur={validation}/>
                <div className={style_error}>{error_message}</div>
            </Fragment>
      );
  }

export default InputCP; 