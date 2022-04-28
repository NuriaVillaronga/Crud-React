import React, { Fragment } from 'react';
import SecundaryTable from '../../SecundaryTable/SecundaryTable';
import Icon from '../../../../Icon';

function EditableRowMT (props) {   
    return (<Fragment>
                <tr className="row-editable-mainTable">
                    <td>
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
                        <input className="form-control" type="text" required="required" name="register_data" value={props.editionForm.register_data} onChange={props.handleEditChange} readOnly/>
                    </td>
                    <td>
                        <select className="form-select" required="required" name="state" value={props.editionForm.state} onChange={props.handleEditChange}>
                            <option>Activo</option>
                            <option>Inactivo</option>
                        </select>
                    </td>
                    <td className="col_acciones">
                        <button className="icon-button save-cancel-button" type="submit">
                            <Icon id="save" size="2x"/>
                        </button>
                        <button className="icon-button save-cancel-button" type="button" onClick={props.handleCancelClick}>
                            <Icon id="cancel" size="2x"/>
                        </button>
                    </td>
                </tr>
                <tr className="row-editable-secundaryTable"> 
                    <td colSpan="7">
                        <div className='div-editable-secundaryTable'>
                            <SecundaryTable editionForm={props.editionForm} idUserEdit={props.idUserEdit} element={props.element} handleEditChange={props.handleEditChange}/>
                        </div>
                    </td>
                </tr>
            </Fragment>); 
}

export default EditableRowMT;