import React, { useCallback, useEffect, useState } from "react";

const SlideShow = ({ children }) => {
  const [state, setState] = useState({
    current: 0,
    total: React.Children.count(children),
  });

  const showNext = useCallback(() => {
    const { current, total } = state;
    setState({
      ...state,
      current: current + 1 === total ? 0 : current + 1,
    });
  }, [state]);

  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [showNext]);

  function bullet() {
    const arr = React.Children.toArray(children).fill(" o ");
    arr[state.current] = " a ";
    return arr;
  }

  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={container}>
      <div>{React.Children.toArray(children)[state.current]}</div>
      {bullet()}
    </div>
  );
};

export default SlideShow;
