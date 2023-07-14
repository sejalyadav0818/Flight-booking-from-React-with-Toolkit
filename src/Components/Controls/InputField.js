import { colors } from '@mui/material';
import "../../assets/style.css";
import React from 'react';
const InputField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error,
  placeholdder,
}) => (
  <div className="container">
    <label className="check">{label}:</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholdder={placeholdder}
    />
    {error && (
      <span style={{ color: "red" }} className="error">
        {error}
      </span>
    )}
  </div>
);

  
  export default InputField