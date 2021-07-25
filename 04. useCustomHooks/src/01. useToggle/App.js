import React from "react";
import useToggle from "./useToggle";

const App = () => {
  const { state, toggleProps } = useToggle();
  return (
    <>
      <button {...toggleProps}> {state ? "Off" : "On"} </button>
    </>
  );
};

export default App;
