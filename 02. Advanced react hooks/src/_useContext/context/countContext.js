import { createContext, useReducer } from "react";

const CountContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        val: state.val + 1,
      };
    case "decrement":
      return {
        val: state.val - 1,
      };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

function CountProvider({ ...params }) {
  const [state, dispatch] = useReducer(countReducer, {
    val: 0,
  });

  const value = {
    state,
    dispatch,
  };

  return <CountContext.Provider value={value} {...params} />;
}

export { CountProvider, CountContext };
