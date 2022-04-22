import React from 'react';
import Icon from './Icon'; 
import ReadOnlyST from './ReadOnlyST';
import EditableST from './EditableST';

function SecundaryTable ( props ) {

    return (<table className='suplementary-table'>
              <thead>
                <tr>
                  <th>Direccion</th>
                  <th>CP</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.direccion}</td>
                  <td>{props.cp}</td>
                  <td>{props.telefono}</td>
                </tr>
              </tbody>
            </table>);
}

export default SecundaryTable;

/*{
  props.editUserId === props.id ? <EditableST editionForm={props.editionForm}/> : <ReadOnlyST element={props}/>
}
*/