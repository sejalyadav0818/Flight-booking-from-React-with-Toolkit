import React from 'react';

const CheckboxGroup = ({error, options, selectedValues, onChange }) => {
  const handleCheckboxChange = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((selectedValue) => selectedValue !== value)
      : [...selectedValues, value];
    onChange(newSelectedValues);
  };

  return (
    <div>
      {options.map((option) => (
     <div> <b><label key={option.value}> </label></b>  <br></br>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          {option.label}
       
        </div>
      ))}
     {error && (
        <span style={{ color: "red" }} className="error">
          {error}
        </span>)}

    </div>
  );
};

export default CheckboxGroup;
