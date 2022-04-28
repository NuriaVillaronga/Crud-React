import React from 'react';
import MenuContent from './Menu/MenuContent';
import AdministrationContent from './AdministrationContent/AdministrationContent';

function Content () { 

  return (<div className="row content-row">
            <MenuContent/>
            <AdministrationContent/>
          </div>);  
}; 


export default Content;