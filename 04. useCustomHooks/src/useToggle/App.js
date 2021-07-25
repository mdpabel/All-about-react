import React from "react";
import useToggle from "./useToggle";

const App = () => {
  const { state, toggleHandle } = useToggle();
  return (
    <>
      <button {...toggleHandle()}> {state ? "On" : "Off"} </button>
    </>
  );
};

export default App;
