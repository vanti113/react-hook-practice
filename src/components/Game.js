import React, { useState, useEffect } from "react";

class NumberGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputted: "",
      answer: Math.floor(Math.random() * (100 - 1)) + 1,
      message: "",
      isDisabled: false,
      reload: false,
    };
  }
  userAnswer = [];

  checkAnswer = (user, answer) => {
    let count = this.userAnswer.length + 1;
    if (count !== 10 && count < 10) {
      if (user === answer) {
        this.setState({
          isDisabled: true,
        });
        console.log(count);
        return "정답입니다!";
      } else if (user < answer) {
        return "너무 낮습니다";
      } else if (user > answer) {
        return "너무 높습니다.";
      }
    } else {
      this.setState({
        isDisabled: true,
      });
      return "게임종료! 10회 초과입니다.";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userNum = `${this.state.inputted} `;
    const message = this.checkAnswer(
      parseInt(this.state.inputted),
      this.state.answer
    );
    this.userAnswer.push(userNum);
    this.setState({
      inputted: "",
      message,
    });
  };
  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ inputted: value });
  };
  restart = () => {
    this.userAnswer = [];
    this.setState({
      reload: true,
      isDisabled: false,
      message: "",
    });
  };

  render() {
    return (
      <div className="game">
        <h1>수 맞추기 게임</h1>
        <p>
          우리는 1에서 100까지의 수를 고를수 있습니다. 아래의 입력창에 수를
          입력하고 제출하면, 프로그램이 가진 정답과 비교하여 높은지 낮은지를
          표시할거에요. 총 10번까지 입력이 가능해요
        </p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="submit">정답을 입력하세요 :</label>
            <input
              type="number"
              id="submit"
              value={this.state.inputted}
              onChange={this.handleInput}
              disabled={this.state.isDisabled}
            />
            <input
              type="submit"
              value="submit"
              disabled={this.state.isDisabled}
            />
          </form>

          <h3>{this.userAnswer}</h3>
          <h3>{this.state.message}</h3>
          <div>
            {this.state.isDisabled ? (
              <button onClick={this.restart}>재시작</button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default NumberGame;
