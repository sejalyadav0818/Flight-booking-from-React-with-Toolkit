import React, { useState } from "react";
import InputField from "../Controls/InputField";
import DropDownList from "../Controls/DropDownList";
import data from "../Options/data.json";
import "../../assets/style.css";
const ContactInformation = (props) => {
  console.log(props.contactInformation);

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
    props.setContactInformation((prevState) => ({
      ...prevState,
      currentaddress: {
        ...prevState.currentaddress,
        currentState: state,
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

    props.setContactInformation((prevState) => ({
      ...prevState,
      currentaddress: {
        ...prevState.currentaddress,
        currentCity: city,
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
        label="Mobile Phone"
        name="mobilePhone"
        value={props.contactInformation.mobilePhone}
        onChange={(e) => {
          props.setContactInformation((prevState) => ({
            ...prevState,

            mobilePhone: e.target.value,
          }));
        }}
        error={props.errors.mobilePhone}
      />
      <InputField
        label="Emergency Contact Number"
        name="emergencyContactNumber"
        value={props.contactInformation.emergencyContactNumber}
        onChange={(e) => {
          props.setContactInformation((prevState) => ({
            ...prevState,

            emergencyContactNumber: e.target.value,
          }));
        }}
        error={props.errors.emergencyContactNumber}
      />
      <InputField
        label="Emergency Contact Person name:"
        name="emergencyContactName"
        value={props.contactInformation.emergencyContactName}
        onChange={(e) => {
          props.setContactInformation((prevState) => ({
            ...prevState,

            emergencyContactName: e.target.value,
          }));
        }}
        error={props.errors.emergencyContactName}
      />
      <InputField
        label="Company's Phone"
        name="companyPhone"
        value={props.contactInformation.companyPhone}
        onChange={(e) => {
          props.setContactInformation((prevState) => ({
            ...prevState,

            companyPhone: e.target.value,
          }));
        }}
        error={props.errors.companyPhone}
      />
      {/* <label>Current Address : </label>
      <label>Street Address:</label>
      <InputField
        label="currentstreet"
        name="currentstreet"
        value={props.contactInformation.currentaddress.currentstreet}
        onChange={(e) => {
          props.setContactInformation((prevState) => ({
            ...prevState,
            currentaddress: {
              ...prevState.currentaddress,
              currentstreet: e.target.value,
            },
          }));
        }}
        error={props.errors.currentaddress?.currentstreet}

      />
      <label>states</label>
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
      />
      <label>Zip Code:</label>
      <InputField
        label="zipCode"
        name="currentZipcode"
        value={props.contactInformation.currentaddress.currentZipcode}
        onChange={(e) => {
          props.setContactInformation((prevState) => ({
            ...prevState,
            currentaddress: {
              ...prevState.currentaddress,
              currentZipcode: e.target.value,
            },
          }));
        }}
        error={props.errors.currentaddress?.currentZipcode}
      /> */}
    </div>
  );
};

export default ContactInformation;
