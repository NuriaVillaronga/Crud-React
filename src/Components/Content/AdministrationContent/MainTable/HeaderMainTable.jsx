import React from 'react';
import Icon from '../../../Icon';
 

function HeaderMainTable ( props ) { 

    const handleClickSort = (event, key) => { 

      var btn_icon_arrow = document.getElementById(`icon-sort-${key}`);

      var sortedList = [...props.users].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))  
      btn_icon_arrow.setAttribute("style", "transform: rotate(180deg)");

      if (sortedList[0] === props.arrayUsuarios[0]) {
        sortedList = [...props.users].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)) 
        btn_icon_arrow.setAttribute("style", "transform: rotate(360deg)");
      }

      props.setArrayUsuarios(sortedList)
    }
    
    return (<tr>
                <th><input type="checkbox"></input></th>
                <th className="col_nombre">
                Nombre (completo)
                <button className="icon-button-sort" type="button" id="icon-sort-name" onClick={(event) => handleClickSort(event, 'name')}><Icon id="arrowDown" size="1x"/></button>
                </th>
                <th className="col_email">
                Email
                <button className="icon-button-sort" type="button" id="icon-sort-email" onClick={(event) => handleClickSort(event, 'email')}><Icon id="arrowDown" size="1x"/></button>
                </th>
                <th className="col_contraseña">Contraseña</th>
                <th className="col_rol">
                Rol
                <button className="icon-button-sort" type="button" id="icon-sort-rol" onClick={(event) => handleClickSort(event, 'rol')}><Icon id="arrowDown" size="1x"/></button>
                </th>
                <th className="col_registro">
                Registro
                <button className="icon-button-sort" type="button" id="icon-sort-register_data" onClick={(event) => handleClickSort(event, 'register_data')}><Icon id="arrowDown" size="1x"/></button>
                </th>
                <th className="col_estado">
                Estado
                <button className="icon-button-sort" type="button" id="icon-sort-state" onClick={(event) => handleClickSort(event, 'state')}><Icon id="arrowDown" size="1x"/></button>
                </th>
                <th className="col_acciones">Acciones</th>
            </tr>);   
}; 


export default HeaderMainTable;