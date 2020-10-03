import React, { useState, useEffect } from "react";

function Example() {
  //카운트라는 새로운 상태 변수를 선언한다.
  // 두번째 변수, 즉 함수는 첫번째 변수의 상태에 대해서 관여하는 함수이다. 즉, 값을 늘리거나 대입하거나 하는
  // useState는 한쌍으로 밖에 구현이 안된다.
  const [count, setCount] = useState(0);
  const [message, setMsg] = useState("welcome!!");
  let [time, setTime] = useState(0);
  //여태까지 내부 함수를 사용할수 있으리라고는 생각도 못했다....
  //함수 내부에 함수를 또 선언할줄은 생각도 못함...

  function outsideFunc() {
    setMsg("fuck That!!");
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <h1>{time}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>{message}</h1>
      <button onClick={() => setMsg(`Thank you!`)}>And Click me</button>
      <button onClick={() => outsideFunc()}>Really want??</button>
    </>
  );
}

export default Example;
