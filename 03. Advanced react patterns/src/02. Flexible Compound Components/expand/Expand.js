import { useExpand } from "./ExpandContext";

const Body = ({ children, ...otherProps }) => {
  const { expanded } = useExpand();

  return expanded ? <div {...otherProps}>{children}</div> : null;
};

const Header = ({ children, ...otherProps }) => {
  const { toggle } = useExpand();

  return (
    <button style={{ width: "500px" }} onClick={toggle} {...otherProps}>
      {children}
    </button>
  );
};

export { Body, Header };
