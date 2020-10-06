import React, { useState, useEffect } from "react";

let userNum = [];

const CheckGame = (count, answer) => {
  const userNumber = userNum[count];

  if (count !== 9 && count < 9) {
    if (userNumber === answer) {
      return { result: true, message: "정답입니다." };
    } else if (userNumber < answer) {
      return { result: false, message: "너무 낮습니다." };
    } else {
      return { result: false, message: "너무 높습니다." };
    }
  } else {
    return { result: true, message: "10회 초과로 게임오버!" };
  }
};

const HookGame = () => {
  const [answer, setAnswer] = useState(
    Math.floor(Math.random() * (100 - 1)) + 1
  );
  const [num, setNum] = useState("");
  const [count, setCount] = useState(0);
  const [isFinished, setGame] = useState(false);
  const [message, setMessage] = useState("");

  const handleGame = (result, msg) => {
    setGame(result);
    setMessage(msg);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    userNum.push(parseInt(num));
    setNum("");
    const { result, message } = CheckGame(count, answer);
    setCount(count + 1);
    handleGame(result, message);
    console.log(result, message);
  };
  const resetGame = () => {
    setCount(0);
    setGame(false);
    setMessage("");
    setAnswer(Math.floor(Math.random() * (100 - 1)) + 1);
    userNum = [];
  };

  return (
    <div className="game">
      <h1>수 맞추기 게임</h1>
      <p>
        우리는 1에서 100까지의 수를 고를수 있습니다. 아래의 입력창에 수를
        입력하고 제출하면, 프로그램이 가진 정답과 비교하여 높은지 낮은지를
        표시할거에요. 총 10번까지 입력이 가능해요
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="submit">정답을 입력하세요 :</label>
          <input
            type="number"
            id="submit"
            value={num}
            onChange={(event) => setNum(event.target.value)}
            disabled={isFinished}
          />
          <input type="submit" value="submit" disabled={isFinished} />
        </form>
        <div>
          {userNum.map((num, index) => {
            return <span key={index}>{num} </span>;
          })}
        </div>
        <div>{message}</div>
        <div>
          {isFinished ? <button onClick={resetGame}>Restart</button> : null}
        </div>
      </div>
    </div>
  );
};

export default HookGame;
