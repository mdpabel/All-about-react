import React, { useCallback, useEffect, useMemo, useState } from "react";

// Referential equality
const Ref = ({ func, arr }) => {
  useEffect(() => {
    func();
    console.log(arr);
  }, [arr, func]);

  return null;
};

// Computationally expensive calculations
const Expensive = ({ sleep }) => {
  useEffect(() => {
    sleep(5000);
  }, [sleep]);

  return null;
};

const App = () => {
  const [count, setCount] = useState(0);

  const func = useCallback(() => {
    console.log("Func");
  }, []);

  const arr = useMemo(() => [], []);

  function sleep(time) {
    const currentTime = Date.now();
    let newTime = null;
    do {
      newTime = Date.now();
    } while (currentTime + time > newTime);
    return "Expansive function";
  }

  const memoizedSleep = useCallback(() => {
    return sleep();
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <Ref func={func} arr={arr} />
      <Expensive sleep={memoizedSleep} />
    </div>
  );
};

export default App;
