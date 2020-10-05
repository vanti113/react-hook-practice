import React, { useState } from "react";

const useInputer = (initailValue, validator) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInput = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInputer("Mr. BAE", maxLen);
  return (
    <div className="useInput">
      <h1>Hello</h1>
      <input
        placeholder="name"
        value={name.value}
        onChange={(event) => name.onChange(event)}
      />
    </div>
  );
};

export default UseInput;
