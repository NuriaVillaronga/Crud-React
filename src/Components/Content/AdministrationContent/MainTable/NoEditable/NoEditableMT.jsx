import React, { Fragment }from 'react';
import SecundaryTable from '../../SecundaryTable/SecundaryTable';
import Icon from '../../../../Icon';

function NoEditableMT ( props ) {   

    return (<Fragment>
              <tr id={`row-read-mainTable-${props.element.id}`}>
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
