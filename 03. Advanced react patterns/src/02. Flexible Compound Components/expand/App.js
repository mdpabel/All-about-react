import React, { useState } from "react";
import { Expandable } from "./ExpandContext";

const information = [
  {
    header: "Why everyone should live forever",
    note: "This is highly sensitive information ... !!!!",
  },
  {
    header: "The internet disappears",
    note: "I just uncovered the biggest threat...",
  },
  {
    header: "The truth about Elon musk and Mars!",
    note: "Nobody tells you this...",
  },
];

function App() {
  return (
    <div className="App">
      {information.map(({ header, note }, index) => (
        <Expandable key={index}>
          <Expandable.Header>{header}</Expandable.Header>
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  );
}

export default App;
