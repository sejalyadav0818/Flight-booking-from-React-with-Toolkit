import React, { useState } from "react";
import InputField from "../Controls/InputField";
import RadioButton from "../Controls/RadioButton";
import DropDownList from "../Controls/DropDownList";
import data from "../Options/data.json";
import { genderOptions } from "../Options/options";
import "../../assets/style.css";
const BasicDetails = (props) => {
  const handleAddressChange = (name, value) => {
    props.setBasicDetails((prevDetails) => ({
      ...prevDetails,
      address: {
        ...prevDetails.address,
        [name]: value,
      },
    }));
  };
  console.log(
    props.errors,
    "jhvgjmhkvhvjkvjukvvvvvvvvvvvvvvv    console.log(newErrors);    console.log(newErrors);    console.log(newErrors);    console.log(newErrors);    console.log(newErrors);"
  );
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
    props.setBasicDetails((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        state: state,
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

    props.setBasicDetails((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        city: city,
      },
    }));

    setState({
      ...state,
      selectedCity: city,
      isCitySelected: setIsCitySelected,
    });
  };

  const handleFileChange = (event) => {
    console.log("in handlechange");
    const picture = event.target.files[0];
    console.log(picture);
    //  const maxSize = 2 * 1024 * 1024;
    //  let newErr = [{}];
    //  if (file && file.size > maxSize) {
    //    newErr[0].file = "File size exceeds";
    //    setErrors(newErr);
    //  } else {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log("in onloadklfdjlk");
      var base64Image = reader.result;
      console.log(base64Image);
      props.setBasicDetails((prevState) => ({
        ...prevState,

        picture: base64Image,
      }));
    };

    //  newArr[0].file = "";
    //  setErrors(newArr);

    if (picture) {
      reader.readAsDataURL(picture);
    }
  };

  return (
    <>
      <h2>Basic Details</h2>
      <InputField
        label="Firstname"
        name="firstname"
        value={props.basicDetails.firstname}
        error={props.errors.firstname}
        onChange={(e) => {
          props.setBasicDetails((prevState) => ({
            ...prevState,

            firstname: e.target.value,
          }));
        }}
      />
      <InputField
        label="Lastname"
        name="lastname"
        value={props.basicDetails.lastname}
        onChange={(e) => {
          props.setBasicDetails((prevState) => ({
            ...prevState,

            lastname: e.target.value,
          }));
        }}
        error={props.errors.lastname}
      />
      <InputField
        label="Phone"
        name="phone"
        value={props.basicDetails.phone}
        onChange={(e) => {
          props.setBasicDetails((prevState) => ({
            ...prevState,

            phone: e.target.value,
          }));
        }}
        error={props.errors.phone}
      />
      <label>Street Address:</label>
      <InputField
        label="street"
        name="street"
        value={props.basicDetails.address.street}
        onChange={(e) => handleAddressChange("street", e.target.value)}
        error={props.errors.street}
      />
      <label>states</label>
      <DropDownList
        source={states}
        selectedValue={props.basicDetails.address.selectedCountry}
        onDataChange={onCountryChange}
        placeHolder="country"
        error={props.errors.state}
      />
      <label>Cities</label>
      <DropDownList
        source={cities}
        selectedValue={props.basicDetails.address.selectedCity}
        onDataChange={onCityChange}
        placeHolder="city"
        error={props.errors.city}
        isCountrySelected={state.isCountrySelected}
      />
      <InputField
        label="zipCode"
        name="zipCode"
        value={props.basicDetails.address.zipCode}
        onChange={(e) => {
          props.setBasicDetails((prevState) => ({
            ...prevState,
            address: {
              ...prevState.address,
              zipCode: e.target.value,
            },
          }));
        }}
        error={props.errors.zipCode}
      />
      <label>Gender:</label>
      <RadioButton
        options={genderOptions}
        selectedOption={props.basicDetails.gender}
        error={props.errors.gender}
        onOptionChange={(selectedOption) =>
          props.setBasicDetails((prevDetails) => ({
            ...prevDetails,
            gender: selectedOption,
          }))
        }
      />
      <InputField
        label="Email"
        name="email"
        value={props.basicDetails.email}
        type="email"
        onChange={(e) => {
          props.setBasicDetails((prevState) => ({
            ...prevState,
            email: e.target.value,
          }));
        }}
        error={props.errors.email}
      />
      <InputField
        type="file"
        onChange={handleFileChange}
        value={console.log(props.basicDetails.picture)}
        name="picture"
        id="upload-button"
        accept="image/*"
        hidden
        error={(props.errors.picture)}
      />
      <img
        src={props.basicDetails?.picture}
        alt="pict"
        style={{ height: 90, width: 90 }}
      />
    </>
  );
};

export default BasicDetails;
