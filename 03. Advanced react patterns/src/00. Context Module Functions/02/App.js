import React from "react";
import { UserProvider } from "./context/UserContext";
import DisplayData from "./DisplayData";
import UserInputs from "./UserInputs";

const App = () => {
  return (
    <UserProvider>
      <div
        style={{
          width: "400px",
          margin: "auto",
        }}
      >
        <UserInputs />
        <br />
        <DisplayData />
      </div>
    </UserProvider>
  );
};

export default App;
