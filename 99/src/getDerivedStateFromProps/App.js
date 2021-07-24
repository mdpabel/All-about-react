import React, { Component } from "react";

class App extends Component {
  state = {
    number: 10,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      number: 100009,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Render");
    return <div>number : {this.state.number}</div>;
  }
}

export default App;

// this method is called (or invoked) before the component is rendered to the
// DOM on initial mount.
