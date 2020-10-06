import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => {
    console.log("Hello");
  };
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(sayHello, []);

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
};

export default App;
