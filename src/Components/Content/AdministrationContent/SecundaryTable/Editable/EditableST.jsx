import React, { useState, Fragment } from 'react';
import InputALL from '../../InputALL';
import Select from 'react-select';


function EditableRowST (props) {  

    const [addressValue, setAddress] = useState({field:"", valid: null});
    const [apartmentValue, setApartment] = useState({field:"", valid: null});
    const [cpValue, setCP] = useState({field:"", valid: null});
    const [phoneValue, setPhone] = useState({field:"", valid: null});
  
    const regExp_cp = /^[0-9]{5}$/;
    const regExp_phone = /^[0-9]{9}$/;
    const regExp_required =/^$/;

    const optionsProvincia = [ { value: 'Pontevedra', label: 'Pontevedra' }, { value: 'Ourense', label: 'Ourense' }, { value: 'A Coruña', label: 'A Coruña' }, { value: 'Lugo', label: 'Lugo' } ]
    const optionsPontevedra = [ { value: 'Vilagarcía de Arousa', label: 'Vilagarcía de Arousa' }, { value: 'Illa de Arousa', label: 'Illa de Arousa' } ]
    const optionsCoruña = [ { value: 'Ortigueira', label: 'Ortigueira' }, { value: 'Muros', label: 'Muros' } ]
    const optionsLugo = [ { value: 'San Ciprián', label: 'San Ciprián' }, { value: 'Becerreá', label: 'Becerreá' } ]
    const optionsOurense = [ { value: 'Allariz', label: 'Allariz' }, { value: 'Verín', label: 'Verín' } ]

    //Hacer un if marcando las opciones por defecto iniciales en funcion del valor de los datos del formulario
    const [provinciaValue, setProvinceValue] = useState(optionsProvincia[0]);
    const [cityValue, setCityValue] = useState(optionsPontevedra[0]);
    const [optionsCity, setOptionsCity] = useState(optionsPontevedra);  
      
    const handleChangeSelect = ( {value} ) => {
  
        if (value === "Pontevedra") {
            setCityValue(optionsPontevedra[0]);
            setOptionsCity(optionsPontevedra);
            setProvinceValue(optionsProvincia[0])
        }
        else if(value === "A Coruña") {
            setCityValue(optionsCoruña[0]);
            setOptionsCity(optionsCoruña);
            setProvinceValue(optionsProvincia[2])
        }
        else if(value === "Lugo") {
            setCityValue(optionsLugo[0]);
            setOptionsCity(optionsLugo);
            setProvinceValue(optionsProvincia[3])
        }
        else if(value === "Ourense") {
            setCityValue(optionsOurense[0]);
            setOptionsCity(optionsOurense); 
            setProvinceValue(optionsProvincia[1])
        }
    }
  
    const handleChangeSelectCity = ( {value} ) => {
  
        console.log(optionsCity);
        /*
        for (let i=0; optionsCity.length; i++) {
            if(optionsCity[i].value == value) {
                setCityValue(optionsCity[i]);
            }
        }
        */
    }

    //<SelectALL name="provincia" options={optionsProvincia} estado={provinciaValue} setEstado={setProvinciaValue} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/>
    //<SelectCity name="city" provinciaSeleccionada={provinciaValue} city={props.editionForm.city} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/>
    return (<Fragment>
                <tr>
                    <td><InputALL name="address" value={props.editionForm.address} required="required" status={addressValue} changeStatus={setAddress} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_required)} error_message="Dirección es un campo obligatorio"/></td>
                    <td><InputALL name="apartment" value={props.editionForm.apartment} status={apartmentValue} changeStatus={setApartment} editionForm={props.editionForm} setEditionForm={props.setEditionForm}/></td>
                    <td>
                        <Select name="city" options={optionsCity} onChange={handleChangeSelectCity} value={cityValue}/>
                    </td>
                    <td>
                        <Select name="provincia" options={optionsProvincia} onChange={handleChangeSelect} value={provinciaValue}/>
                    </td>
                    <td><InputALL name="cp" value={props.editionForm.cp} required="required" status={cpValue} changeStatus={setCP} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_cp)} error_message="Código postal debe contener 5 números"/></td>
                    <td><InputALL name="phone" value={props.editionForm.phone} required="required" status={phoneValue} changeStatus={setPhone} editionForm={props.editionForm} setEditionForm={props.setEditionForm} regexp={new RegExp(regExp_phone)} error_message="Teléfono debe contener 9 números"/></td>
                </tr>
            </Fragment>); 
}

export default EditableRowST; 