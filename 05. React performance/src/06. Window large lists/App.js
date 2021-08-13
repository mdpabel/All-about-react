import React from "react";
import Card from "../components/Local-Card";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Card />
    </div>
  );
};

export default App;
