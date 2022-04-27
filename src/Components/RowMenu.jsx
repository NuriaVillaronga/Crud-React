import React from 'react';

/**
 * Componente RowMenu para incorporarle filas al menú en función de la acción que se quiera llevar a cabo. 
 * Según la acción a realizar las propiedades de la componente cambiarán.
 * 
 * @param id Permite identificar la acción que representará la fila (obtener clientes, obtener admins...)
 * @param value Permite establecer el valor del botón.
 * @param global Booleano para identificar si la fila será una acción global (obtener todos los usuarios) o específica (obtener clientes, obtener admins).
 * @param add Booleano para identificar si la fila será una acción global (obtener todos los usuarios) o específica (obtener clientes, obtener admins).
 * @returns Fila del menú
 */
function RowMenu ( {id, value, global = false, add = false} ) { 

    let style_btn = "";

    if (global == false) {
      style_btn = "especific-btn";
      if(add == true) {
        style_btn = "add-especific-btn";
      }
    }
    if (global == true) {
      style_btn = "global-btn";
    }

    return(<div className="row" id={id}>
            <div className="col-12">
              <form>
                <button type="button" className={style_btn}>{value}</button>
              </form>
            </div>
          </div>); 
}

export default RowMenu;