import React, { useState } from "react";
import useWhyDidYouUpdate from "./useWhyDidYouUpdate";

const Count = React.memo((props) => {
  useWhyDidYouUpdate("Count", props);
  return <b style={{ ...props.styles }}>{props.count}</b>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const styles = {
    color: "white",
    background: "red",
  };
  /**
  const styles = React.useMemo(() => {
    return {
      color: "white",
      background: "red",
    };
  }, []);
   */

  return (
    <div>
      <Count styles={styles} count={count} /> <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <br />
      <button onClick={() => setToggle((prev) => !prev)}>
        {!toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default App;
