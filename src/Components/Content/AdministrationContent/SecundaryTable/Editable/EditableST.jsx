import React, { Fragment } from 'react';


function EditableRowST (props) {   
    return (<Fragment>
                <tr>
                    <td>
                        <input className="form-control" type="text" required="required" name="address" value={props.editionForm.address} onChange={props.handleEditChange}/>
                    </td>
                    <td>
                        <input className="form-control" type="text" required="required" name="apartment" value={props.editionForm.apartment} onChange={props.handleEditChange}/>
                    </td>
                    <td>
                        <input className="form-control" type="text" required="required" name="city" value={props.editionForm.city} onChange={props.handleEditChange}/>
                    </td>
                    <td>
                        <input className="form-control" type="text" required="required" name="provincia" value={props.editionForm.provincia} onChange={props.handleEditChange}/>
                    </td>
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