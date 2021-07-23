import React, { useRef, useState } from "react";

function AccordionButton({ children, handleClick, id }) {
  return (
    <button onClick={() => handleClick(id)} style={{ width: "100%" }}>
      {children}
    </button>
  );
}

function AccordionPanel({ children, open, id }) {
  if (id !== open) return null;
  return <p>{children}</p>;
}

function AccordionItem({ children, handleClick, id, open }) {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { handleClick, id, open });
      })}
    </div>
  );
}

function Accordion({ children }) {
  const [open, setOpen] = useState(null);
  const ref = useRef();

  function handleClick(id) {
    ref.current = id;
    if (ref.current === open) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  }

  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      {React.Children.map(children, (child) => {
        const newChild = React.cloneElement(child, {
          open: open,
          handleClick: handleClick,
        });

        return newChild;
      })}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionPanel, AccordionButton };
