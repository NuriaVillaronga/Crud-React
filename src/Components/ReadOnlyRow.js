import React, { Fragment }from 'react';
import SecundaryTable from './SecundaryTable';
import Icon from './Icon'; 

function ReadOnlyRow ( element, handleEditClick, handleDeleteClick, handleDisplayClick ) { 

    return (<Fragment>
      <tr>
      <td><button className="btnIcon" id={`angleDown-${element.id}`} onClick={() => handleDisplayClick(element.id)}><Icon id="angleDown" size="1x"/></button>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.password}</td> 
      <td>{element.rol}</td> 
      <td>{element.register_data}</td>
      <td>{element.state}</td>
      <td>
          <button className="btnIcon" type="button" onClick={(event) => handleEditClick(event, element)}><Icon id="update" size="2x"/></button>
          <button className="btnIcon" type="button" onClick={() => handleDeleteClick(element.id)}><Icon id="delete" size="2x"/></button> 
      </td>
    </tr>
    <tr className='row-suplementary-table' id={`row-suplementary${element.id}`}>
        <td colspan="7">
          <div className='div-suplementary-table'>
            <SecundaryTable/>
          </div>
        </td>
      </tr>
      </Fragment>); 
}

export default ReadOnlyRow;