import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  componentDidUpdate() {
    console.log("updtae")
  }
  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button type="button" name="Increment" onClick={this.increment}>Increment</button>
        <button type="button" name="Decrement" onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default App;
