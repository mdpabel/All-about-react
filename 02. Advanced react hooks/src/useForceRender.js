import { useReducer, useCallback } from "react";

function useForceRender() {
  const [, dispatch] = useReducer((x) => x + 1, 0);

  const forceRender = useCallback(() => {
    return dispatch();
  }, [dispatch]);

  return forceRender;
}

export { useForceRender };
