import React, { useState } from "react";

const hook = (letter) => {
  const [value, setValue] = useState(letter);
  return { value };
};

const Test = () => {
  hook("fuck you");
  return <>{hook.value}</>;
};

export default Test;
