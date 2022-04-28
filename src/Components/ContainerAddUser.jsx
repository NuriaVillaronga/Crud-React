import React, { Fragment } from 'react';
import RegisterUser from './RegisterUser';

function ContainerAddUser ( { id, users, setUsers } ) { 
  
    return (<Fragment>
        <div className="row" id={id}>
            <div className="col-12 newUserCol">
              <RegisterUser users={users} setUser={setUsers}/>
            </div>
          </div>
        </Fragment>
    );   
}; 


export default ContainerAddUser;