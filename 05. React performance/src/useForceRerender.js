import { useCallback, useReducer } from "react";

let useForceRender = () => {
  const [, dispatch] = useReducer((x) => x + 1, 0);

  const forceRender = useCallback(() => dispatch(), [dispatch]);
  console.log(forceRender);

  return forceRender;
};

export { useForceRender };
