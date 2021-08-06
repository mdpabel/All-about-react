import React, { useState } from "react";
import { useForceRender } from "../useForceRerender";
import SyncCard from "../components/Local-Card";

const App = () => {
  const [search, setSearch] = useState("");
  const forceRender = useForceRender();

  return (
    <div>
      <button onClick={forceRender}>force Render</button>
      <form>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search..."
        />
      </form>
      <div>
        <SyncCard search={search} />
      </div>
    </div>
  );
};

export default App;
