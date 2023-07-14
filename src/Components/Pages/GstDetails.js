import React, { useState } from "react";
import InputField from "../Controls/InputField";
import DropDownList from "../Controls/DropDownList";
import data from "../Options/data.json";
import "../../assets/style.css";
const GstDetails = (props) => {
  console.log(props.gstDetails);
  const [state, setState] = useState({
    selectedCountry: "",
    isCountrySelected: false,
    selectedCity: "",
    isCitySelected: false,
  });

  const countryList = data.states;
  const states = countryList.map((c) => {
    return c.state;
  });
  const cities = state.isCountrySelected
    ? countryList
        .filter((d) => d.state === state.selectedCountry)
        .map((c) => {
          return c.cities;
        })[0]
    : [];
  const onCountryChange = (state) => {
    let setIsCountrySelected = state !== "" ? true : false;
    props.setGstDetails((prevState) => ({
      ...prevState,
      companyaddress: {
        ...prevState.companyaddress,
        companyState: state,
      },
    }));

    setState({
      selectedCountry: state,
      isCountrySelected: setIsCountrySelected,
      selectedCity: "",
      isCitySelected: false,
    });
  };
  const onCityChange = (city) => {
    let setIsCitySelected = city !== "" ? true : false;

    props.setGstDetails((prevState) => ({
      ...prevState,
      companyaddress: {
        ...prevState.companyaddress,
        companyCity: city,
      },
    }));

    setState({
      ...state,
      selectedCity: city,
      isCitySelected: setIsCitySelected,
    });
  };
  return (
    <div>

      <InputField
        label="GST Number"
        name="gstNumber"
        placeholdder="Format should be 06BZAHM6385P6Z2"
        value={props.gstDetails.gstNumber}
        onChange={(e) => {
          props.setGstDetails((prevState) => ({
            ...prevState,

            gstNumber: e.target.value,
          }));
        }}
        error={props.errors.gstNumber}
      />
      <InputField
        label="Company Name"
        name="companyName"
        value={props.gstDetails.companyName}
        onChange={(e) => {
          props.setGstDetails((prevState) => ({
            ...prevState,

            companyName: e.target.value,
          }));
        }}
        error={props.errors.companyName}
      />
      <InputField
        label="Company's Email ID"
        name="companyID"
        value={props.gstDetails.companyID}
        onChange={(e) => {
          props.setGstDetails((prevState) => ({
            ...prevState,

            companyID: e.target.value,
          }));
        }}
        error={props.errors.companyID}
      />
      <label>Company Address : </label>
      <label>Street Address:</label>
      <InputField
        name="companystreet"
        value={props.gstDetails.companyaddress.companystreet}
      
        onChange={(e) => {
          props.setGstDetails((prevState) => ({
            ...prevState,
            companyaddress: {
              ...prevState.companyaddress,
              companystreet: e.target.value,
            },
          }));
      }}
      error={props.errors.companystreet}
      />

      {/* <label>states</label>
      <DropDownList
        source={states}
        selectedValue={state.selectedCountry}
        onDataChange={onCountryChange}
        placeHolder="country"
      />
      <label>Cities</label>
      <DropDownList
        source={cities}
        selectedValue={state.selectedCity}
        onDataChange={onCityChange}
        placeHolder="city"
        isCountrySelected={state.isCountrySelected}
      /> */}
      <label>states</label>
      <DropDownList
        source={states}
        selectedValue={state.selectedCountry}
        onDataChange={onCountryChange}
        placeHolder="country"
        error={props.errors.companyState}
      />
      <label>Cities</label>
      <DropDownList
        source={cities}
        selectedValue={state.selectedCity}
        onDataChange={onCityChange}
        placeHolder="city"
        error={props.errors.companyCity}
        isCountrySelected={state.isCountrySelected}
      />
      <label>Zip Code:</label>
      <InputField
        label="zipCode"
        name="companyZipcode"
        value={props.gstDetails.companyaddress.companyZipcode}
        
        onChange={(e) => {
          props.setGstDetails((prevState) => ({
            ...prevState,
            companyaddress: {
              ...prevState.companyaddress,
              companyZipcode: e.target.value,
            },
          }));
        }}
        error={props.errors.companyZipcode}
      />
      

    </div>
  );
};

export default GstDetails;
