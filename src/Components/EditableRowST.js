import React, { Fragment } from 'react';


function EditableRowST (props) {   
    return (<Fragment>
                <tr>
                    <td>
                        <input className="form-control" type="text" required="required" name="address" value={props.editionForm.address} onChange={props.handleEditChange}/>
                    </td>
                    <td>Piso 2º Puerta IZQ</td>
                    <td>Vilagarcía de Arousa</td>
                    <td>Pontevedra</td>
                    <td>
                        <input className="form-control" type="text" required="required" name="cp" value={props.editionForm.cp} onChange={props.handleEditChange}/>
                    </td>
                    <td>
                        <input className="form-control" type="text" required="required" name="phone" value={props.editionForm.phone} onChange={props.handleEditChange}/>
                    </td>
                </tr>
            </Fragment>); 
}

export default EditableRowST; 