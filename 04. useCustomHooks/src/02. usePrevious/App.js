import React, { useState } from "react";
import usePrev from "./usePrev";

const App = () => {
  const [count, setCount] = useState(0);

  const prev = usePrev(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <br />
      <b>{prev}</b>
    </>
  );
};

export default App;
