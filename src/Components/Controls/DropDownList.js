import React from "react";
export default function DropDownList(props) {
  const {
    selectedValue,
    source,
    onDataChange,
    placeHolder,
    isCountrySelected,
    error
  } = props;

  const handleChange = (e) => {
    onDataChange(e.target.value);
  };

  let isDisabled = false;

  if (placeHolder === "city" && !isCountrySelected) {
    isDisabled = true;
  }

  return (
    <>
       <select
      className="dropDownList"
      value={selectedValue}
      onChange={handleChange}
        disabled={isDisabled}
        error={props.error}>
      <option value="">Select a {placeHolder}</option>
      {source.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}

    </select>
      {props.error && (
        <span style={{ color: "red" }} className="error">
          {props.error}
        </span>)}
      
    </>
   
  );
}
