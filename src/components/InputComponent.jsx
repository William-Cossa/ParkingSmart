import React from "react";

const InputComponent = ({ id, type, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input py-[0.9rem] px-4  rounded-xl outline-none w-[100%]"
    />
  );
};

export default InputComponent;