import React, { useState, Fragment } from 'react';
import MainTable from './MainTable';

function ContainerMainTable () { 
    
    return (<Fragment>
            <div className="row">
                <div className="col-12">
                    <MainTable/>
                </div>
            </div>
          </Fragment>
    );   
}; 

export default ContainerMainTable;