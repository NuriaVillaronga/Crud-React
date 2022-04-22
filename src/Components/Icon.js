import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Componente Icon para utilizar iconos en función de la acción que se quiera llevar a cabo. 
 * Según la acción a realizar el icono (icon_type) y su color (icon_color), cambiarán.
 * 
 * @param id Permite identificar la acción que el icono representará 
 * @param size Permite establecer el tamaño del icono. Valores posibles (por defecto 2x): ["xs","lg","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"];
 * @returns FontAwesomeIcon
 */
function Icon ({ id, size = '2x' }) { 

    let icon_type = '';
    let icon_color = '';   
  
    if(id == "delete") {
        icon_type = faTrashCan;
        icon_color = "rgb(185, 9, 9)";
    }
    else if(id == "save") {
        icon_type = faFloppyDisk;
        icon_color = "rgb(40, 122, 177)";
    }
    else if(id == "update") {
        icon_type = faPenToSquare;
        icon_color = "rgb(63, 109, 69)";
    }
    else if(id == "angleDown") { 
      icon_type = faAngleDown;
      icon_color = "grey";
    }
    else if(id == "cancel") {
        icon_type = faXmark;
        icon_color = "rgb(185, 9, 9)"; 
    }
  
    return (<FontAwesomeIcon id={id} icon={icon_type} size={size} color={icon_color} className="iconsCrud"/>);   
}

export default Icon;