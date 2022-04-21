import React, { useState, Fragment } from 'react';
import MainTable from './MainTable';
import userData from "../users-data.json";

function ContainerMainTable () { 

    const [users, setUsers] = useState(userData);
  
    const [editUserId, setEditUserId] = useState(null);

    const [editionForm, setEditionForm] = useState({
        name : "",
        email: "",
        rol: "", 
      });

    const handleSaveFormSubmit = (event) => {
      event.preventDefault();
  
      const editedUser = {
        id : editUserId,
        name : editionForm.name,
        email: editionForm.email,
        rol: editionForm.rol, 
      }
  
      const newUsers = [...users];
      const index = users.findIndex((user) => user.id === editUserId);
  
  
      newUsers[index] = editedUser;
      setUsers(newUsers);
      setEditUserId(null);
    }
    
    return (<Fragment>
            <div className="row">
                <div className="col-12">
                  <form onSubmit={handleSaveFormSubmit}>
                    <MainTable/>
                  </form>
                </div>
            </div>
          </Fragment>
    );   
}; 

export default ContainerMainTable;