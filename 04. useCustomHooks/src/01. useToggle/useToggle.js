import { useCallback, useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(!state), [state]);

  return {
    state,
    toggleProps: {
      onClick: () => toggle(),
      "aria-pressed": state,
    },
  };
}

export default useToggle;
