import React from "react";
import useCounter from "./useCounter";

const CountController = () => {
  const { dispatch } = useCounter();
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default CountController;
