import React from "react";

const Screen = ({ message, options, onOptionClick }) => {
  return (
    <div className="screen">
      <h1>{message}</h1>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => onOptionClick(option.nextScreen)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Screen;
