import { createContext, useReducer } from "react";

const CountContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

function CountProvider({ children }) {
  const [count, dispatch] = useReducer(reducer, 0);
  const value = { count, dispatch };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

export { CountProvider, CountContext };
