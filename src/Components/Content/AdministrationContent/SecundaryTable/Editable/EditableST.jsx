import React, { useState, Fragment } from 'react';
import InputALL from '../../InputALL';


function EditableRowST (props) {  
    
    const [addressValue, setAddress] = useState({field:"", valid: null});
    const [apartmentValue, setApartment] = useState({field:"", valid: null});
    const [cpValue, setCP] = useState({field:"", valid: null});
    const [phoneValue, setPhone] = useState({field:"", valid: null});
  
    const regExp_cp = /^[0-9]{5}$/;
    const regExp_phone = /^[0-9]{9}$/;
    const regExp_required =/^$/;

    return (<Fragment>
                <tr>
                    <td><InputALL name="address" value={props.editionForm.address} required="required" status={addressValue} changeStatus={setAddress} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_required)} error_message="Dirección es un campo obligatorio"/></td>
                    <td><InputALL name="apartment" value={props.editionForm.apartment} status={apartmentValue} changeStatus={setApartment} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/></td>
                    <td>
                        <input className="form-control" type="text" required="required" name="city" value={props.editionForm.city} onChange={props.handleEditChange}/>
                    </td>
                    <td>
                        <input className="form-control" type="text" required="required" name="provincia" value={props.editionForm.provincia} onChange={props.handleEditChange}/>
                    </td>
                    <td><InputALL name="cp" value={props.editionForm.cp} required="required" status={cpValue} changeStatus={setCP} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_cp)} error_message="Código postal debe contener 5 números"/></td>
                    <td><InputALL name="phone" value={props.editionForm.phone} required="required" status={phoneValue} changeStatus={setPhone} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_phone)} error_message="Teléfono debe contener 9 números"/></td>
                </tr>
            </Fragment>); 
}

export default EditableRowST; 