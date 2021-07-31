import React, { useState } from "react";
// import Test from "./Test";
// import Cards from "../components/Cards";
// import SyncCard from "../components/Local-Card";

// const load = () => import("../components/Local-Card");

const SyncCard = React.lazy(() =>
  import(
    /* webpackChunkName: "Card" */
    /* webpackPrefetch: true */
    "../components/Local-Card"
  )
);
const Test = React.lazy(() => import("./Test"));

const App = () => {
  const [on, SetOn] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <input
          checked={on}
          type="checkbox"
          id="checkbox"
          onChange={(e) => SetOn(e.target.checked)}
        />
        <label
          // onMouseEnter={load}
          // onFocus={load}
          htmlFor="checkbox"
        >
          {on ? "Hide" : "Show"}
        </label>
      </div>
      {/* <SyncCard /> */}
      {/* <Test /> */}
      <div>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          <Test />
        </React.Suspense>
      </div>

      <div>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          {on ? <SyncCard /> : null}
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;

// https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
// https://webpack.js.org/api/module-methods/#magic-comments
