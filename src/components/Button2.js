import React, { useState, useEffect } from "react";

function Example() {
  const [secondNum, setSecondNum] = useState(10);

  return (
    <>
      {secondNum}
      <div>
        <button onClick={() => setSecondNum(50 + secondNum)}>PUSH</button>
      </div>
    </>
  );
}
export default Example;
