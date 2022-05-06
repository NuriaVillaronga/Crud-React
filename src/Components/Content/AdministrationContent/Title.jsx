import React, { Fragment } from 'react';
import Icon from '../../Icon';
 

function Title () { 

    return (<Fragment>
        <div className="row">
                <div className="col-12">
                <h1>GESTIÓN DE USUARIOS</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 title-info-users">
                <span>Gestión de información de acceso e información personal de todos los usuarios de la aplicación</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 help-info-users">
                <Icon id="error" size="1x"/>
                <span>En el caso de que se presente una <b>visualización incompleta</b> de alguno de los <b>campos</b>, habrá que seleccionar dicho campo y este se deslizará hacia la derecha hasta mostrar el valor por completo</span>
                </div>
            </div>
        </Fragment>);   
}; 


export default Title;