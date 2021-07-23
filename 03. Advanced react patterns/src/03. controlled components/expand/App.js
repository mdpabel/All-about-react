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
  const [isActive, setIsActive] = useState(null);

  function onExpand(e) {
    setIsActive(e.target.dataset.index);
  }

  return (
    <div className="App">
      {information.map(({ header, note }, index) => (
        <Expandable
          shouldExpand={+isActive === index}
          onExpand={onExpand}
          key={index}
        >
          <Expandable.Header data-index={index}>{header}</Expandable.Header>
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  );
}

export default App;
