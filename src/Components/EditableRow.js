import React, { Fragment } from 'react';
import Icon from './Icon'; 
import SecundaryTable from './SecundaryTable';

function EditableRow (props) {   
    return (<Fragment>
    <tr>
                <td><button className="btnIcon" type="button" id={`angleDown-${props.editionForm.id}`} onClick={() => props.handleDisplayClick(props.editionForm.id)}><Icon id="angleDown" size="1x"/></button>
                    <input className="form-control" type="text" required="required" name="name" value={props.editionForm.name} onChange={props.handleEditChange}/> 
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="email" value={props.editionForm.email} onChange={props.handleEditChange}/>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="password" value={props.editionForm.password} onChange={props.handleEditChange}/>
                </td>
                <td> 
                    <select className="form-select" required="required" name="rol" value={props.editionForm.rol} onChange={props.handleEditChange}>
                    <option>Admin</option>
                    <option>User</option>
                    </select>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="register_data" value={props.editionForm.register_data} onChange={props.handleEditChange}/>
                </td>
                <td>
                    <select className="form-select" required="required" name="state" value={props.editionForm.state} onChange={props.handleEditChange}>
                    <option>Habilitado</option>
                    <option>Deshabilitado</option>
                    </select>
                </td>
                <td>
                    <button className="btnIcon" type="submit"><Icon id="save" size="2x"/></button>
                    <button className="btnIcon" type="button" onClick={props.handleCancelClick}><Icon id="cancel" size="2x"/></button>
                </td>
            </tr>
            <tr className='row-suplementary-table' id={`row-suplementary${props.element.id}`}> 
            <td colSpan="7">
              <div className='div-suplementary-table'>
                <SecundaryTable direccion={props.element.direccion} telefono={props.element.telefono} cp={props.element.cp}/>
              </div>
            </td>
        </tr>
        </Fragment>); 
}

export default EditableRow;