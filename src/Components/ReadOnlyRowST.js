import React, { Fragment }from 'react';

function ReadOnlyRowST ( props ) {   

    return (<Fragment>
              <tr>
                <td>{props.element.address}</td> 
                <td>Piso 2º Puerta IZQ</td>
                <td>Vilagarcía de Arousa</td>
                <td>Pontevedra</td>
                <td>{props.element.cp}</td>
                <td>{props.element.phone}</td>
              </tr>
            </Fragment>); 
}

export default ReadOnlyRowST; 