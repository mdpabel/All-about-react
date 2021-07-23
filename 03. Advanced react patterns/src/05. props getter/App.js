import React, { useCallback, useState } from "react";
import Switch from "../Switch";

function useToggle() {
  const [on, setOn] = useState(false);

  const toggle = React.useCallback(() => setOn(!on), [on]);

  const getToggleProps = useCallback(
    ({ onClick, ...props }) => {
      return {
        ...props,
        onClick: () => {
          onClick && onClick();
          toggle();
        },
      };
    },
    [toggle]
  );

  return {
    on,
    getToggleProps,
  };
}

const App = () => {
  const { on, getToggleProps } = useToggle();
  return (
    <div>
      <Switch
        {...getToggleProps({
          on,
          onClick: () => {
            console.log("Hello");
          },
        })}
      />
      <button {...getToggleProps({})}>{on ? "Off" : "On"}</button>
    </div>
  );
};

export default App;
