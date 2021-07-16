import React from "react";
import useCounter from "./useCounter";

const CountDisplay = () => {
  const { count } = useCounter();

  console.log(count);

  return <div>{count}</div>;
};

export default CountDisplay;
