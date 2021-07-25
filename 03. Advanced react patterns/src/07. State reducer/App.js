import React, { useState, useEffect } from "react";
import Switch from "../Switch";
import { useToggle, internalReducer } from "./useToggle";
import { types } from "./types";

const App = () => {
  const [count, setCount] = useState(0);

  function ourReducer(state, action) {
    if (types.toggle) {
      if (count > 4) {
        return { on: true };
      }
      return { on: !state.on };
    }
    return internalReducer(state, action);
  }

  const { on, getToggleProps, getResetProps } = useToggle(false, ourReducer);
  return (
    <div>
      <Switch on={on} {...getToggleProps()} />
      {count > 4 ? <b>You clicked toooooo much!</b> : null} <br />
      <button
        disabled={count > 4}
        {...getToggleProps({
          onClick: () => setCount(count + 1),
        })}
      >
        {on ? "Off" : "On"}
      </button>{" "}
      <br />
      <button
        disabled={count < 1}
        {...getResetProps({
          onClick: () => setCount(0),
        })}
      >
        Reset
      </button>
    </div>
  );
};

export default App;

/*
eslint
  no-unused-vars: "off",
*/
