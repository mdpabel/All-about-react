import React from "react";
import useCountConsumer from "./context/useCountConsumer";

const Count = () => {
  const { state } = useCountConsumer();

  return (
    <>
      <b>{state.val}</b>
      <br />
    </>
  );
};

export default Count;
