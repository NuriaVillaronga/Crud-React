import React, { Fragment }from 'react';

function NoEditableST ( props ) {   

    return (<Fragment>
              <tr>
                <td>{props.element.address}</td> 
                <td>{props.element.apartment}</td>
                <td>{props.element.city}</td>
                <td>{props.element.provincia}</td>
                <td>{props.element.cp}</td>
                <td>{props.element.phone}</td>
              </tr>
            </Fragment>); 
}

export default NoEditableST;  