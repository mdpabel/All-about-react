import React from "react";
import Card from "../components/Local-Card-v2";
import { useForceRender } from "../useForceRerender";

const App = () => {
  const forceRender = useForceRender();
  return (
    <div>
      <button onClick={forceRender}>Re-render</button>
      <Card />
    </div>
  );
};

export default App;
