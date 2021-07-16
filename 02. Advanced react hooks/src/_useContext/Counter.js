import React from "react";
import Count from "./Count";
import Button from "./Button";
import { CountProvider } from "./context/countContext";

const Counter = () => {
  return (
    <>
      <CountProvider>
        <Count />
        <Button />
      </CountProvider>
    </>
  );
};

export default Counter;
