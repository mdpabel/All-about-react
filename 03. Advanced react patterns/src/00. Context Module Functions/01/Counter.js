import React from "react";
import { useCounter, increment, decrement } from "./context/Counter";

const Counter = () => {
  const [state, dispatch] = useCounter();

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => decrement(dispatch)}>-</button>
      <button onClick={() => increment(dispatch)}>+</button>
    </div>
  );
};

export default Counter;
