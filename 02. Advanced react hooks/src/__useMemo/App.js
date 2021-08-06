import React, { useEffect, useMemo, useState } from "react";
import { useForceRender } from "../useForceRender";

function sleep(time) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate < time + date);
}

const App = () => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState();
  const forceRender = useForceRender();

  useEffect(() => {
    setWordIndex(0);
  }, []);

  const words = ["hello", "test", "hi"];
  const word = words[wordIndex];

  const length = (word) => {
    sleep(2000);
    return word.length;
  };

  const letterCount = useMemo(() => word && length(word), [word]);

  return (
    <div>
      <div>
        <button onClick={forceRender}>forceRender</button>
      </div>
      <div>
        <h3>Slow</h3>
        <p>
          {word} has {letterCount} character{" "}
        </p>
        <button
          onClick={() => {
            const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
            setWordIndex(next);
          }}
        >
          next
        </button>
      </div>

      <div>
        <h3>Fast</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </div>
    </div>
  );
};

export default App;
