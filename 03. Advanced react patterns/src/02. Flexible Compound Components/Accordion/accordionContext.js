import { createContext, useContext, useRef, useState } from "react";

const AccordionContext = createContext();
AccordionContext.displayName = "AccordionContext";

const AccordionItemContext = createContext();
AccordionItemContext.displayName = "AccordionItemContext";

function AccordionProvider({ props, children }) {
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
  const value = { open, handleClick };
  return (
    <AccordionContext.Provider value={value} {...props}>
      {children}
    </AccordionContext.Provider>
  );
}

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(`useAccordion must be used within <AccordionProvider />`);
  }
  return context;
}

// ITEM
function AccordionItemProvider({ props, value, children }) {
  return (
    <AccordionItemContext.Provider value={{ id: value }} {...props}>
      {children}
    </AccordionItemContext.Provider>
  );
}
function useAccordionItem() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      `useAccordionItem must be used within <AccordionItemProvider />`
    );
  }
  return context;
}

export {
  AccordionProvider,
  useAccordion,
  AccordionItemProvider,
  useAccordionItem,
};
