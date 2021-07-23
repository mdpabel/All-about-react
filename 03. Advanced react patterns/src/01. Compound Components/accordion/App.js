import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from "./Accordion";

const data = [
  {
    id: 1,
    button: "item -1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam.",
  },
  {
    id: 2,
    button: "item -2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam.",
  },
  {
    id: 3,
    button: "item -3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam.",
  },
];

const App = () => {
  return (
    <div>
      <Accordion initialOpen={1}>
        {data.map(({ button, text, id }) => {
          return (
            <AccordionItem collapsable key={id} id={id}>
              <AccordionButton>{button}</AccordionButton>
              <AccordionPanel>{text}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default App;
