import { useReducer, useRef } from "react";
import { types } from "./types";

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

function internalReducer(state, { type, initialState }) {
  switch (type) {
    case types.toggle:
      return {
        on: !state.on,
      };

    case types.reset:
      return initialState;

    default:
      throw new Error(`Unsupported action type ${type}`);
  }
}

function useToggle(userProvidedState = false, reducer = internalReducer) {
  const { current: initialState } = useRef(userProvidedState);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { on } = state;

  const toggle = () => dispatch({ type: "toggle" });
  const reset = () => dispatch({ type: "reset", initialState });

  function getToggleProps({ onClick, ...props } = {}) {
    return {
      onClick: callAll(toggle, onClick),
      ...props,
    };
  }

  function getResetProps({ onClick, ...props } = {}) {
    return {
      onClick: callAll(reset, onClick),
      ...props,
    };
  }

  return {
    on,
    getToggleProps,
    getResetProps,
  };
}

export { useToggle, internalReducer };
