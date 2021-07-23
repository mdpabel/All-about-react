import React, { Component, useEffect, useRef, useState } from "react";

function Button2({ onStateChange }) {
  const [count, setCount] = useState(0);

  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted.current) {
      onStateChange(count);
    }
    componentJustMounted.current = false;
  }, [componentJustMounted, count, onStateChange]);

  return (
    <div>
      <h3>Functional Component</h3>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

class Button extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h3>Using Class Component</h3>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 }, () => {
              this.props.onStateChange(this.state.count);
            })
          }
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

class HandlingStateChangeCallbacks extends Component {
  render() {
    return (
      <>
        <Button
          onStateChange={(count) => console.log("Class component ", count)}
        />
        <Button2
          onStateChange={(count) => console.log("Functional Component ", count)}
        />
      </>
    );
  }
}

export default HandlingStateChangeCallbacks;
