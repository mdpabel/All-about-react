import React from "react";

const useSafeDispatch = (unsafeDispatch) => {
  const mountRef = React.useRef(false);

  React.useEffect(() => {
    mountRef.current = true;
    return () => {
      mountRef.current = false;
    };
  }, []);

  return React.useCallback(
    (...args) => {
      if (mountRef.current) {
        unsafeDispatch(...args);
      }
    },
    [unsafeDispatch]
  );
};

const asyncReducer = function (state, action) {
  switch (action.type) {
    case "pending":
      return { status: "pending", data: null, error: null };
    case "resolved":
      return { status: "resolved", data: action.data, error: null };
    case "rejected":
      return { status: "rejected", error: action.error, data: null };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

function useAsync(initialState = "") {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = React.useCallback(
    (promise) => {
      if (!promise) {
        throw new Error(
          `the argument passed through run must be a Promise, Your argument is ${promise}`
        );
      }
      dispatch({ type: "pending" });
      promise.then(
        (data) => dispatch({ type: "resolved", data: data }),
        (error) => dispatch({ type: "rejected", error: error })
      );
    },
    [dispatch]
  );

  const setData = React.useCallback(
    (data) => {
      dispatch({ type: "resolved", data });
    },
    [dispatch]
  );

  return { state, run, setData };
}

export default useAsync;
