import React from 'react';

const Dropdown = ({ value, onChange, options, label,error }) => {
  return (
    <>
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      >
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span style={{ color: "red" }} className="error">
          {error}
        </span>)}
    </>
  );
};

export default Dropdown;
