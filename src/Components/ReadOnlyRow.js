import React, { Fragment }from 'react';
import SecundaryTable from './SecundaryTable';
import Icon from './Icon'; 

function ReadOnlyRow ( props ) {   

    return (<Fragment>
      <tr>
        <td><button className="btnIcon" type="button" id={`angleDown-${props.element.id}`} onClick={() => props.handleDisplayClick(props.element.id)}><Icon id="angleDown" size="1x"/></button>{props.element.name}</td>
        <td>{props.element.email}</td>
        <td>{props.element.password}</td> 
        <td>{props.element.rol}</td> 
        <td>{props.element.register_data}</td>
        <td>{props.element.state}</td>
        <td>
            <button className="btnIcon" type="button" onClick={(event) => props.handleEditClick(event, props.element )}><Icon id="update" size="2x"/></button>
            <button className="btnIcon" type="button" onClick={() => props.handleDeleteClick(props.element.id)}><Icon id="delete" size="2x"/></button> 
        </td>
      </tr>
      <tr className='row-suplementary-table' id={`row-suplementary${props.element.id}`}>
          <td colSpan="7">
            <div className='div-suplementary-table'>
              <SecundaryTable direccion={props.element.direccion} telefono={props.element.telefono} cp={props.element.cp}/>
            </div>
          </td>
      </tr>
      </Fragment>); 
}

export default ReadOnlyRow;

//Tienen que ejecutarse estos dos eventos cuando pulsas en el onClick : props.handleEditClick(event, props.element );  // (event) => props.handleDisplayLoadEdit(props.element.id)