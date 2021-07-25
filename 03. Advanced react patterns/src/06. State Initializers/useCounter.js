import { useCallback, useMemo, useState, useRef } from "react";

// 1 :- Allow for configurable initial state
function useCounter(initialState = 1) {
  const [count, setCount] = useState(initialState);

  const countRef = useRef(0);

  // 2 :- Expose a reset function handler to the consumer
  const reset = useCallback(() => {
    setCount(initialState);
    // 3 :-  Allow for performing any side effects just after a reset
    ++countRef.current;
  }, [initialState]);

  return useMemo(
    () => ({
      count,
      setCount,
      reset,
      resetDef: countRef.current,
    }),
    [count, reset]
  );
}

export { useCounter as default };

// Allow for configurable initial state
// Expose a reset function handler to the consumer
// Allow for performing any side effects just after a reset

// https://blog.logrocket.com/simplifying-state-initializers-with-react-hooks/
