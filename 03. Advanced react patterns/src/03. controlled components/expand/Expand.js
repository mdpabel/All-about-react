import { useExpand } from "./ExpandContext";

const Body = ({ children, ...otherProps }) => {
  const { getExpand } = useExpand();

  console.log(getExpand);

  return getExpand ? <div {...otherProps}>{children}</div> : null;
};

const Header = ({ children, ...otherProps }) => {
  const { getToggle } = useExpand();

  return (
    <button style={{ width: "500px" }} onClick={getToggle} {...otherProps}>
      {children}
    </button>
  );
};

export { Body, Header };
