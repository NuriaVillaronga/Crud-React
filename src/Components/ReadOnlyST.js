import React, { Fragment }from 'react';
import Icon from './Icon'; 

function ReadOnlyST ( props ) {   

    return (<Fragment>
      <tr>
                  <td>{props.direccion}</td>
                  <td>{props.cp}</td>
                  <td>{props.telefono}</td>
      <td>
          <button className="btnIcon" type="button" onClick={(event) => props.handleEditClick(event, props.element )}><Icon id="update" size="2x"/></button>
          <button className="btnIcon" type="button" onClick={() => props.handleDeleteClick(props.element.id)}><Icon id="delete" size="2x"/></button> 
      </td>
    </tr>
      </Fragment>); 
}

export default ReadOnlyST; 