import React, { Fragment } from 'react';
import MainTable from './MainTable';

function ContainerMT ( {id, users, setUsers } ) { 
    
    
    return (<Fragment>
            <div className="row containerMT" id={id}>
                <div className="col-12">
                    <MainTable users={users} setUsers={setUsers}/>
                </div>
            </div>
          </Fragment>
    );   
}; 

export default ContainerMT; 