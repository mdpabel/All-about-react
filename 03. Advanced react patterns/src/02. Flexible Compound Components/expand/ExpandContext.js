import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Header, Body } from "./Expand";

const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand, ...otherProps }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted) {
      onExpand(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded, onExpand]);

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return (
    <Provider value={value}>
      <div {...otherProps}>{children}</div>
    </Provider>
  );
};

function useExpand() {
  const context = useContext(ExpandableContext);
  if (!context) {
    throw new Error(`useExpand must used within <Expandable />`);
  }
  return context;
}

Expandable.Header = Header;
Expandable.Body = Body;

export { Expandable, useExpand };
