import React from 'react';

function EditableST (props) {   
    return (<tr>
                <td> 
                    <input className="form-control" type="text" required="required" name="name"/> 
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="email"/>
                </td>
                <td>
                    <input className="form-control" type="text" required="required" name="password"/>
                </td>
            </tr>); 
}

export default EditableST; 