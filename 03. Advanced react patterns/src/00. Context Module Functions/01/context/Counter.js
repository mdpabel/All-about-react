import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
CounterContext.displayName = "CounterContext";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

function CounterProvider({ initialValue = 0, ...props }) {
  const [state, dispatch] = useReducer(counterReducer, {
    count: initialValue,
  });

  /**Recommended:- kentcdodds 
  const increment = React.useCallback(() => {
    return dispatch({
      type: "increment",
    });
  }, [dispatch]);

  const decrement = React.useCallback(() => {
    return dispatch({
      type: "decrement",
    });
  }, [dispatch]);
   const value = [state, increment, decrement];

   */

  const value = [state, dispatch];

  return <CounterContext.Provider value={value} {...props} />;
}

function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(`useCounter must be used within CounterProvider`);
  }

  return context;
}

// Dan recommends (and what Facebook does) is pass dispatch as we had originally.
const increment = (dispatch) => dispatch({ type: "increment" });
const decrement = (dispatch) => dispatch({ type: "decrement" });

export { CounterProvider, useCounter, increment, decrement };
