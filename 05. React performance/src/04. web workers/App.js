import React, { useState } from "react";

import Card from "../components/Local-Card-v2";
// import Card from "../components/Local-Card";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <form>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search..."
        />
      </form>

      <Card search={search} />
    </div>
  );
};

export default App;
