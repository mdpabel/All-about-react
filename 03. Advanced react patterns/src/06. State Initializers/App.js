import React, { useEffect, useRef } from "react";
import useCounter from "./useCounter";

const App = () => {
  const { count, setCount, reset, resetDef } = useCounter(12);

  const justMounted = useRef(true);

  useEffect(() => {
    if (!justMounted.current) {
      console.log("useEffect run after reset");
    }
    justMounted.current = false;
  }, [resetDef]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90vh",
      }}
    >
      <div>
        {Array.from({ length: count }).map((i, index) => (
          <img
            key={index}
            style={{ margin: "2rem" }}
            width="100px"
            src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0319%2Fr681030_1296x729_16%2D9.jpg"
            alt=""
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <button onClick={() => setCount(count + 1)}>Add more</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
