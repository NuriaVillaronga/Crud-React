import React from 'react';
import Icon from '../../../Icon';
 

function HeaderMainTable ( props ) { 

    const handleClickSortDown = (event, key) => { 

      var btn = document.getElementById(`sortdown`);
      var btn_up = document.getElementById(`sortup`);

      var sortedList = [...props.users].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)) 
      
      btn.setAttribute("style", "color: rgb(22, 98, 160) !important");
          btn_up.setAttribute("style", "color: grey !important");

      props.setArrayUsuarios(sortedList)
    }

    const handleClickSortUp = (event, key) => { 

      var btn = document.getElementById(`sortup`);
      var btn_down = document.getElementById(`sortdown`);

      var sortedList = [...props.users].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)) 
      btn.setAttribute("style", "color:rgb(22, 98, 160) !important");
      btn_down.setAttribute("style", "color: grey !important");  

      props.setArrayUsuarios(sortedList)
    }
    
    return (<tr>
                <th><input type="checkbox"></input></th>
                <th className="col_nombre">
                <div id="div-button">
                Nombre (completo)
                  <button onClick={(event) => handleClickSortUp(event, 'name')} id="btn-up"><Icon id="sortup" size="1x"/></button>
                  <button onClick={(event) => handleClickSortDown(event, 'name')} id="btn-down"><Icon id="sortdown" size="1x"/></button>
                </div>
                </th>
                <th className="col_email">Email</th>
                <th className="col_contraseña">Contraseña</th>
                <th className="col_rol">Rol</th>
                <th className="col_registro">Registro</th>
                <th className="col_estado">Estado</th>
                <th className="col_acciones">Acciones</th>
            </tr>);   
}; 


export default HeaderMainTable;