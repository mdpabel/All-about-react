import React, { useCallback, useEffect } from "react";

function useDynamicTIme(params) {
  const [date, setDate] = React.useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  // function formatCountDebugValue() {
  //   return new Date().toDateString(); // Calculate expensive tasks
  // }

  React.useDebugValue(
    "Dynamic Time hooks which return hours, minutes and seconds"
    // formatCountDebugValue
  );

  const getTIme = useCallback(() => {
    setDate({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => getTIme(), [1000]);
    return () => clearInterval(intervalID); // cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    // index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  }, [getTIme]);

  return date;
}

function ShowTime({ show }) {
  const date = useDynamicTIme();

  const { hours, minutes, seconds } = date;

  return (
    <div>
      <b> {hours + " : " + minutes + " : " + seconds} </b>
    </div>
  );
}

const App = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      <hr />
      {show && <ShowTime show={show} />}
    </div>
  );
};

export default App;
