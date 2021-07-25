import { useCallback, useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(!state), [state]);

  return {
    state,
    toggleHandle: {
      onClick: () => toggle(),
    },
  };
}

export default useToggle;
