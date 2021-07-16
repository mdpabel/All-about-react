import React from "react";
import useCountConsumer from "./context/useCountConsumer";

const Button = () => {
  const { dispatch } = useCountConsumer();
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Decrement
      </button>
    </>
  );
};

export default Button;
