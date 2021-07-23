import React from "react";
import {
  AccordionItemProvider,
  AccordionProvider,
  useAccordion,
  useAccordionItem,
} from "./accordionContext";

function AccordionButton({ children }) {
  const { id } = useAccordionItem();
  const { handleClick } = useAccordion();

  return (
    <button onClick={() => handleClick(id)} style={{ width: "100%" }}>
      {children}
    </button>
  );
}

function AccordionPanel({ children }) {
  const { id } = useAccordionItem();
  const { open } = useAccordion();
  if (id !== open) return null;
  return <p>{children}</p>;
}

function AccordionItem({ children, id }) {
  return (
    <div>
      <AccordionItemProvider value={id}>{children}</AccordionItemProvider>
    </div>
  );
}

function Accordion({ children }) {
  return (
    <AccordionProvider>
      <div style={{ width: "500px", margin: "0 auto" }}>{children}</div>
    </AccordionProvider>
  );
}

export { Accordion, AccordionItem, AccordionPanel, AccordionButton };
