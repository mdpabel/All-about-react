import React, { useState } from "react";
import Posts from "./Posts";

const App = () => {
  const [mountApp, setMoundApp] = useState(true);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={mountApp}
            onChange={(e) => setMoundApp(e.target.checked)}
          />{" "}
          Mount Component
        </label>
      </div>
      {mountApp ? <Posts /> : null}
    </div>
  );
};

export default App;
