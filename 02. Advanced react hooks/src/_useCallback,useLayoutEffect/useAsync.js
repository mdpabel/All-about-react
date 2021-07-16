import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return {
        status: "pending",
        data: null,
        error: null,
      };
    case "resolved":
      return {
        ...state,
        status: "resolved",
        data: action.data,
      };
    case "rejected":
      return {
        ...state,
        status: "rejected",
        error: action.error,
      };

    default:
      return new Error(`Unsupported action type ${action.type}`);
  }
}

function useAsync(initialState) {
  const [state, unsafeDispatch] = React.useReducer(reducer, {
    status: "idl",
    data: null,
    error: null,
    ...initialState,
  });

  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const dispatch = React.useCallback((...args) => {
    if (mountedRef.current) {
      return unsafeDispatch(...args);
    }
  }, []);

  const run = React.useCallback(
    (promise) => {
      dispatch({
        type: "pending",
      });
      promise().then(
        (data) =>
          dispatch({
            type: "resolved",
            data: data,
          }),
        (error) =>
          dispatch({
            type: "rejected",
            error: error,
          })
      );
    },
    [dispatch]
  );

  const { data, error, status } = state;
  return { data, error, status, run };
}

export default useAsync;
