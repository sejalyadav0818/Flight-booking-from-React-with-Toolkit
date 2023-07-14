import React from 'react';

const RadioButton = ({ options, selectedOption, onOptionChange,error }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onOptionChange(option.value)}
          />
          {option.label}
        </label>
      ))}
       {error && (
      <span style={{ color: "red" }} className="error">
        {error}
      </span>
    )}
    </div>
  );
};

export default RadioButton;
