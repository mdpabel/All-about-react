import React from "react";
import { CountProvider } from "./count-context";
import CountController from "./CountController";
import CountDisplay from "./CountDisplay";

const App = () => {
  return (
    <CountProvider>
      <CountDisplay />
      <CountController />
    </CountProvider>
  );
};

export default App;
