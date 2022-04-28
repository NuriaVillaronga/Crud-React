import React from 'react';
import EditableST from './Editable/EditableST'; 
import NoEditableST from './NoEditable/NoEditableST'; 

function SecundaryTable ( props ) {

    return (<table className='secundaryTable'>
              <thead>
                <tr>
                  <th className="col_direccion">Direccion</th>
                  <th className="col_apartamento">Apartamento</th>
                  <th className="col_ciudad">Ciudad</th>
                  <th className="col_provincia">Provincia</th>
                  <th className="col_cp">CP</th>
                  <th className="col_telefono">Teléfono</th>
                </tr>
              </thead>
              <tbody>
                { props.idUserEdit === props.element.id ? <EditableST editionForm={props.editionForm} handleEditChange={props.handleEditChange}/> : <NoEditableST element={props.element}/> }
              </tbody>
            </table>);
}

export default SecundaryTable;
