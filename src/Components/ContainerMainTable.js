import React, { Fragment } from 'react';
import MainTable from './MainTable';

function ContainerMainTable ( {id} ) { 
    
    return (<Fragment>
            <div className="row" id={id}>
                <div className="col-12">
                    <MainTable/>
                </div>
            </div>
          </Fragment>
    );   
}; 

export default ContainerMainTable;