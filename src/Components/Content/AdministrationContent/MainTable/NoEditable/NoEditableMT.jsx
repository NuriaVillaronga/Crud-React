import React, { Fragment }from 'react';
import SecundaryTable from '../../SecundaryTable/SecundaryTable';
import Icon from '../../../../Icon';

function NoEditableMT ( props ) { 
    
    const handleSelection = () => {
        var tr = document.getElementById(`row-read-mainTable-${props.element.id}`);
        var input = document.getElementById(`input-read-password-${props.element.id}`);

        if (props.element.id == props.selected) {
            input.setAttribute("style", "color: black");
            tr.setAttribute("style", "color:black; background-color:rgba(216, 224, 233, 0.852)"); //Poner color del handleEditClick()
        }
        else {
            input.setAttribute("style", "color: white");
            tr.setAttribute("style", "color:white; background-color:rgba(25, 105, 180, 0.836)");
        }
    }

    const handleDeselection = () => {
        var input = document.getElementById(`input-read-password-${props.element.id}`);
        var tr = document.getElementById(`row-read-mainTable-${props.element.id}`);

        if (props.element.id == props.selected) {
            input.setAttribute("style", "color: black");
            tr.setAttribute("style", "color:black; background-color:rgba(216, 224, 233, 0.852)"); //Poner color del handleEditClick()
        }
        else {
            input.setAttribute("style", "color: black");
            tr.setAttribute("style", "color:black; background-color:transparent");
        }
    }
    

    return (<Fragment>
              <tr id={`row-read-mainTable-${props.element.id}`} className="tr-maintable-noeditable" onMouseOver={handleSelection} onMouseOut={handleDeselection}>
                <td>
                    <button className="icon-button" type="button" id={`icon-arrow-${props.element.id}`} onClick={() => props.handleDisplayClick(props.element.id)}>
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
                    <button className="icon-button" type="button" onClick={(event) => props.handleEditClick(event, props.element )}>
                        <Icon id="update" size="2x"/>
                    </button>
                    <button className="icon-button" type="button" onClick={() => props.handleDeleteClick(props.element.id)}>
                        <Icon id="delete" size="2x"/>
                    </button> 
                </td>
              </tr>
              <tr className='row-read-secundaryTable' id={`row-read-secundaryTable-${props.element.id}`}>
                  <td colSpan="7">
                      <div className='div-read-secundaryTable'> 
                          <SecundaryTable editionForm={props.editionForm} editedUserId={props.editedUserId} element={props.element}/>
                      </div>
                  </td>
              </tr>
            </Fragment>); 
}

export default NoEditableMT;
