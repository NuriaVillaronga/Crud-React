import React, { Fragment, useState }from 'react';
import SecundaryTable from '../../SecundaryTable/SecundaryTable';
import Icon from '../../../../Icon';

function NoEditableMT ( props ) { 

    const [check, setCheck] = useState(true);
    const [visibility, setVisibility] = useState(false);
    
    const handleSelection = () => {
        var tr = document.getElementById(`row-read-mainTable-${props.element.id}`);
        var input = document.getElementById(`input-read-password-${props.element.id}`);

        input.setAttribute("style", "color: white");
        tr.setAttribute("style", "color:white; background-color:rgba(25, 105, 180, 0.836)");
    }

    const handleDeselection = () => {
        var input = document.getElementById(`input-read-password-${props.element.id}`);
        var tr = document.getElementById(`row-read-mainTable-${props.element.id}`);

        if (check == false) {
            input.setAttribute("style", "color: black");
            tr.setAttribute("style", "color:black; background-color:rgba(216, 224, 233, 0.852);");
        }
        else {
            input.setAttribute("style", "color: black");
            tr.setAttribute("style", "color:black; background-color:transparent");
        }
    }

    const handleCheck = () => {
        
        var tr = document.getElementById(`row-read-mainTable-${props.element.id}`);
        var input_password = document.getElementById(`input-read-password-${props.element.id}`);
        var row_read_ST = document.getElementById(`row-read-secundaryTable-${props.element.id}`); 

        if (check == true) {
            input_password.setAttribute("style", "color: black"); 
            tr.setAttribute("style", "color:black; background-color:rgba(216, 224, 233, 0.852);");
            if (visibility == true) {
                row_read_ST.setAttribute("style", "display:table-row; background-color:rgba(228, 233, 239, 0.852)");
            }
            if (visibility == false) {
                row_read_ST.setAttribute("style", "background-color:transparent");
            }
            
            setCheck(false);
        }
        if (check == false) {
            tr.setAttribute("style", "color:black; background-color:transparent;");
            if (visibility == true) {
                row_read_ST.setAttribute("style", "display:table-row; background-color:transparent");
            }
            if (visibility == false) {
                row_read_ST.setAttribute("style", "background-color:transparent");
            }
            setCheck(true);
        }

        props.tocado(check);
    }
    
    const handleDisplayClick = () => { 

      var icon_arrow = document.getElementById(`icon-arrow-${props.element.id}`);
      var input_password = document.getElementById(`input-read-password-${props.element.id}`);
      var row_read_ST = document.getElementById(`row-read-secundaryTable-${props.element.id}`); 
  
      if (visibility == true) {
        row_read_ST.style.display = "none";
        icon_arrow.setAttribute("style", "transform: rotate(360deg)");
        input_password.setAttribute("style", "color:black");
        setVisibility(false);
      }
      if(visibility == false) {
        icon_arrow.setAttribute("style", "transform: rotate(180deg)");
        input_password.setAttribute("style", "color:black");
        if (check == true) {
            row_read_ST.setAttribute("style", "display:table-row; background-color:transparent");
        }
        if (check == false) {
            row_read_ST.setAttribute("style", "display:table-row; background-color:rgba(228, 233, 239, 0.852)");
        }
        setVisibility(true);
      }
      
    }

    const handleDeleteClick = () => {

        const new_users_array = [...props.arrayUsuarios];
    
        const index = props.arrayUsuarios.findIndex((user) => user.id === props.element.id);
    
        new_users_array.splice(index, 1);
    
        props.setArrayUsuarios(new_users_array)
    }

    const handleEditClick = () => {

        props.setIdUserEdit(props.element.id);
    
        const formValues = { id : props.element.id, name : props.element.name, email: props.element.email, rol: props.element.rol, password: props.element.password, state: props.element.state, address : props.element.address, cp: props.element.cp, phone: props.element.phone, register_data: props.element.register_data, city: props.element.city, provincia: props.element.provincia, apartment: props.element.apartment };
    
        props.setEditionForm(formValues); 

        setCheck(false);
        if (check == false) {
            props.tocado(check);
        }
    }

    return (<Fragment>
              <tr id={`row-read-mainTable-${props.element.id}`} className="tr-maintable-noeditable" onMouseOver={handleSelection} onMouseOut={handleDeselection}>
                <td>
                    <input type="checkbox" id={`checkbox-${props.element.id}`} onChange={handleCheck}></input>
                </td>
                <td>
                    <button className="icon-button" type="button" id={`icon-arrow-${props.element.id}`} onClick={handleDisplayClick}>
                        <Icon id="angleDown" size="1x"/>
                    </button>
                    {props.element.name}
                </td>
                <td>{props.element.email}</td>
                <td><input className="form-control input-read-password" id={`input-read-password-${props.element.id}`} value={props.element.password} readOnly></input></td> 
                <td>{props.element.rol}</td> 
                <td>{props.element.register_data}</td>
                <td>{props.element.state}</td>
                <td className="col_acciones">
                    <button className="icon-button" type="button" onClick={handleEditClick}>
                        <Icon id="update" size="2x"/>
                    </button>
                    <button className="icon-button" type="button" onClick={handleDeleteClick}>
                        <Icon id="delete" size="2x"/>
                    </button> 
                </td>
              </tr>
              <tr className='row-read-secundaryTable' id={`row-read-secundaryTable-${props.element.id}`}>
                  <td colSpan="8">
                      <div className='div-read-secundaryTable'> 
                          <SecundaryTable editionForm={props.editionForm} editedUserId={props.editedUserId} element={props.element}/>
                      </div>
                  </td>
              </tr>
            </Fragment>); 
}

export default NoEditableMT;
