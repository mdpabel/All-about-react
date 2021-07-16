import React, { useRef } from "react";

function FancyButton(props) {
  return <button className="FancyButton">{props.children}</button>;
}

const App = () => {
  const _inputRef = useRef();

  function handleClick() {
    return _inputRef.current.focus();
  }

  return (
    <div>
      <button onClick={handleClick}>Functional component</button> <br />
      <input ref={_inputRef} type="text" name="" id="" />
    </div>
  );
};

export default App;
