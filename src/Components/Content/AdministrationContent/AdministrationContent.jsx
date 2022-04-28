import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ContainerAddUser from './RegisterUser/ContainerAddUser';
import ContainerMainTable from './MainTable/ContainerMainTable';
import userData from "../../../users-data.json";

function AdministrationContent () { 
  
    const [users, setUsers] = useState(userData);
  
    return (<div className="col-10 border administration-row">
                <Routes>
                  <Route exact path="/usuarios" element={<ContainerMainTable id="container-main-table" users={users} setUsers={setUsers}/>}/>
                  <Route exact path="/registro_usuarios" element={<ContainerAddUser id="container-add-user" users={users} setUsers={setUsers}/>}/>
                </Routes>
            </div>);  
};

export default AdministrationContent;