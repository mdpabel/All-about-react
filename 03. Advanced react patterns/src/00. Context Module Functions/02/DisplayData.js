import React from "react";
import { useUser } from "./context/UserContext";

const DisplayData = () => {
  const [{ data }] = useUser();

  return (
    <div style={{ border: "1px solid gray", padding: "2rem" }}>
      {JSON.stringify(data)}
    </div>
  );
};

export default DisplayData;
