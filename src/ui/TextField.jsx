import React from "react";

function TextField({ label, value, onChange, name }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
