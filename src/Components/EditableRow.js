import React from 'react';
import Icon from './Icon'; 

function EditableRow (editionForm, handleEditChange, handleCancelClick) {   
    return (<tr>
                <td>
                    <input className="form-control" type="text" required="required" name="name" value={editionForm.name} onChange={handleEditChange}/>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="email" value={editionForm.email} onChange={handleEditChange}/>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="password" value={editionForm.password} onChange={handleEditChange}/>
                </td>
                <td> 
                    <select className="form-select" required="required" name="rol" value={editionForm.rol} onChange={handleEditChange}>
                    <option>Admin</option>
                    <option>User</option>
                    </select>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="register_data" value={editionForm.register_data} onChange={handleEditChange}/>
                </td>
                <td>
                    <select className="form-select" required="required" name="state" value={editionForm.state} onChange={handleEditChange}>
                    <option>Habilitado</option>
                    <option>Deshabilitado</option>
                    </select>
                </td>
                <td>
                    <button className="btnIcon" type="submit"><Icon id="save" size="2x"/></button>
                    <button className="btnIcon" type="button" onClick={handleCancelClick}><Icon id="cancel" size="2x"/></button>
                </td>
            </tr>); 
}

export default EditableRow;