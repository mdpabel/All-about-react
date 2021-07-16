import { useContext } from "react";
import { CountContext } from "./count-context";

function useCounter() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useContext must be used within CountProvider`);
  }
  return context;
}

export default useCounter;
