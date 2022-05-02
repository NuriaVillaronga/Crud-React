import React, { Fragment } from 'react';


function InputNP ({type ="text", name, required = "", status, changeStatus, regexp, error_message}) { 

    var style_input ="";
    var style_error ="";
  
    const validation = (event) => { 
        if (regexp) {
            if(regexp.test(event.target.value)) { 
              changeStatus({...status, field: event.target.value, valid: "validado"}) 
            }
            else if (event.target.value == "") {
              changeStatus({...status, field: event.target.value, valid: "validado"})
            }
            else {
              changeStatus({...status, field: event.target.value, valid: "no_validado"})
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
                <input className={`form-control ${style_input}`} type={type} required={required} name={name} onKeyUp={validation}/>
                <div className={style_error}>{error_message}</div>
            </Fragment>
      );
  }

export default InputNP; 