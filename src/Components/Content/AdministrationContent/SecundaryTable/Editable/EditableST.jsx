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
    const regExp_required = /^$/;

    const optionsProvincia = [ { value: 'Pontevedra', label: 'Pontevedra' }, { value: 'Ourense', label: 'Ourense' }, { value: 'A Coruña', label: 'A Coruña' }, { value: 'Lugo', label: 'Lugo' } ]
    const optionsPontevedra = [ { value: 'Vilagarcía de Arousa', label: 'Vilagarcía de Arousa' }, { value: 'Illa de Arousa', label: 'Illa de Arousa' } ]
    const optionsCoruña = [ { value: 'Ortigueira', label: 'Ortigueira' }, { value: 'Muros', label: 'Muros' } ]
    const optionsLugo = [ { value: 'San Ciprián', label: 'San Ciprián' }, { value: 'Becerreá', label: 'Becerreá' } ]
    const optionsOurense = [ { value: 'Allariz', label: 'Allariz' }, { value: 'Verín', label: 'Verín' } ]

    //Marcar los seleccionados inicialmente (falta acabar de seleccionar las distintas provincias)

    var provinciaSeleccionada = "";
    var arraySeleccionado = "";
    var ciudadSeleccionada ="";

    if (props.editionForm.provincia == "Pontevedra") {
        provinciaSeleccionada = optionsProvincia[0];
        arraySeleccionado = optionsPontevedra;

        for (var i=0; i<optionsPontevedra.length; i++) {
            if (optionsPontevedra[i].value == props.editionForm.city) {
                ciudadSeleccionada = optionsPontevedra[i];
            }
        }
    }
    else if (props.editionForm.provincia == "Ourense") {
        provinciaSeleccionada = optionsProvincia[1];
        arraySeleccionado = optionsOurense;

        for (var i=0; i<optionsOurense.length; i++) {
            if (optionsOurense[i].value == props.editionForm.city) {
                ciudadSeleccionada = optionsOurense[i];
            }
        }
    }
    else if (props.editionForm.provincia == "Lugo") {
        provinciaSeleccionada = optionsProvincia[3];
        arraySeleccionado = optionsLugo;

        for (var i=0; i<optionsLugo.length; i++) {
            if (optionsLugo[i].value == props.editionForm.city) {
                ciudadSeleccionada = optionsLugo[i];
            }
        }
    }
    else if (props.editionForm.provincia == "A Coruña") {
        provinciaSeleccionada = optionsProvincia[2];
        arraySeleccionado = optionsCoruña;

        for (var i=0; i<optionsCoruña.length; i++) {
            if (optionsCoruña[i].value == props.editionForm.city) {
                ciudadSeleccionada = optionsCoruña[i];
            }
        }
    }

    //Establecer los estados iniciales que tendrán los selects
    
    const [provinciaValue, setProvinceValue] = useState(provinciaSeleccionada);
    const [cityValue, setCityValue] = useState(ciudadSeleccionada);
    const [optionsCity, setOptionsCity] = useState(arraySeleccionado);  
      
    const handleChangeSelect = ( {value} ) => {

        var ciudadGuardada = "";
  
        if (value === "Pontevedra") {
            setCityValue(optionsPontevedra[0]);
            setOptionsCity(optionsPontevedra);
            setProvinceValue(optionsProvincia[0])
            ciudadGuardada = optionsPontevedra[0].value;
        }
        else if(value === "A Coruña") {
            setCityValue(optionsCoruña[0]);
            setOptionsCity(optionsCoruña);
            setProvinceValue(optionsProvincia[2]);
            ciudadGuardada = optionsCoruña[0].value;
        }
        else if(value === "Lugo") {
            setCityValue(optionsLugo[0]);
            setOptionsCity(optionsLugo);
            setProvinceValue(optionsProvincia[3]);
            ciudadGuardada = optionsLugo[0].value;
        }
        else if(value === "Ourense") {
            setCityValue(optionsOurense[0]);
            setOptionsCity(optionsOurense); 
            setProvinceValue(optionsProvincia[1]);
            ciudadGuardada = optionsOurense[0].value;
        }
    
        const newFormData = {...props.editionForm};
        newFormData["provincia"] = value;
        newFormData["city"] = ciudadGuardada;
    
        props.setEditionForm(newFormData);
        //El Value es lo que se guardará en el formulario de la provincia
    }
  
    const handleChangeSelectCity = ( {value} ) => {
        
        //Value es lo que se guardará en el formulario de la ciudad

        if (provinciaValue.value == "Pontevedra") {
    
            for (var i=0; i<optionsPontevedra.length; i++) {
                if (optionsPontevedra[i].value == value) {
                    setCityValue(optionsPontevedra[i]);
                }
            }
        }
        else if (provinciaValue.value == "A Coruña") {
    
            for (var i=0; i<optionsCoruña.length; i++) {
                if (optionsCoruña[i].value == value) {
                    setCityValue(optionsCoruña[i]);
                }
            }
        }
        else if (provinciaValue.value == "Ourense") {
    
            for (var i=0; i<optionsOurense.length; i++) {
                if (optionsOurense[i].value == value) {
                    setCityValue(optionsOurense[i]);
                }
            }
        }
        else if (provinciaValue.value == "Lugo") {
    
            for (var i=0; i<optionsLugo.length; i++) {
                if (optionsLugo[i].value == value) {
                    setCityValue(optionsLugo[i]);
                }
            }
        }

        const newFormData = {...props.editionForm};
        newFormData["city"] = value;
    
        props.setEditionForm(newFormData);
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