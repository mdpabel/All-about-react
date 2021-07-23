import React from "react";
import Switch from "../../Switch";

function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const fn = () => setOn(!on);

  return React.Children.map(children, (child) => {
    if (allowedChild.includes(child.type)) {
      return React.cloneElement(child, { on: on, toggle: fn });
    }
    return child;
  });
}

function ToggleOn({ children, on }) {
  return on ? children : null;
}

function ToggleOff({ children, on }) {
  return on ? null : children;
}

function ToggleButton({ on, toggle }) {
  return <Switch on={on} onClicked={toggle} />;
}

const allowedChild = [Toggle, ToggleOn, ToggleOff, ToggleButton];

const App = () => {
  return (
    <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <span>Hello</span>
      <ToggleButton />
    </Toggle>
  );
};

export default App;
