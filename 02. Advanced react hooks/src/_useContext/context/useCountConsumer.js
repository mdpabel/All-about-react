import { useContext } from "react";
import { CountContext } from "./countContext";

function useCountConsumer() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within the CountProvider`);
  }
  return context;
}

export default useCountConsumer;
