import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setButton = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  componentDidMount() {}

  render() {
    const { count } = this.state;
    return (
      <>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Click
        </button>
        <h1>{count}</h1>
      </>
    );
  }
}

export default Example;
