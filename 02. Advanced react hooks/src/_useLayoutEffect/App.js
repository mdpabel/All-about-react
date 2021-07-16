import React, { useState } from "react";
import Chat from "./Chat";
import data from "./data";

import "./style.css";

function sleep(time = 0) {
  const wakeUpTime = Date.now() + time;
  while (Date.now() < wakeUpTime) {}
}

function SlooooowSibling() {
  // try this with useLayoutEffect as well to see
  // how it impacts interactivity of the page before updates.
  React.useEffect(() => {
    // increase this number to see a more stark difference
    sleep(300);
  });
  return null;
}

const App = () => {
  const [message, setMessage] = useState(data.slice(0, 8));

  const addMessage = () =>
    message.length < data.length
      ? setMessage(data.slice(0, message.length + 1))
      : null;
  const removeMessage = () =>
    message.length > 0 ? setMessage(data.slice(0, message.length - 1)) : null;

  return (
    <div className="message-app">
      <div className="btn-group">
        <button onClick={addMessage}>Add message</button>
        <button onClick={removeMessage}>Remove message</button>
      </div>
      <Chat message={message} />
      <SlooooowSibling />
    </div>
  );
};

export default App;
