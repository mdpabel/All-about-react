import { useRef, useEffect } from "react";

function usePrev(value) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current && ref.current;
}

export default usePrev;
