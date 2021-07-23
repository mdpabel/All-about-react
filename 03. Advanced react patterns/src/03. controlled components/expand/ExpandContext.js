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

const Expandable = ({ children, onExpand, shouldExpand, ...otherProps }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const isControlled = shouldExpand !== undefined;
  const getExpand = isControlled ? shouldExpand : expanded;
  const getToggle = isControlled ? onExpand : toggle;

  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted && !shouldExpand) {
      onExpand(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded, onExpand, shouldExpand]);

  const value = useMemo(
    () => ({ getExpand, getToggle }),
    [getExpand, getToggle]
  );

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
