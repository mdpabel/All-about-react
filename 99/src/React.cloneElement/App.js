import React from "react";

function Button({ text, color, fn }) {
  return (
    <button onClick={fn} style={{ color: color }}>
      {text}
    </button>
  );
}

function Parent({ children }) {
  function fn() {
    console.log("TEST");
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { color: "red", fn: fn });
      })}
    </div>
  );
}

const App = () => {
  return (
    <Parent>
      <Button text="On" />
      <Button text="Off" />
    </Parent>
  );
};

export default App;
