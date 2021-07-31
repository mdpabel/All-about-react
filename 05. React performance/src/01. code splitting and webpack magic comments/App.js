import React, { useState } from "react";
// import One from "./group/One";
// import Two from "./group/Two";
// import Prefetch from "./Prefetch";
// import Preload from "./Preload";

const One = React.lazy(() =>
  import(/* webpackChunkName : "Group" */ "./group/One")
);
const Two = React.lazy(() =>
  import(/* webpackChunkName : "Group" */ "./group/Two")
);

const Prefetch = React.lazy(() =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName : "Prefetch" */ "./Prefetch"
  )
);
const Preload = React.lazy(() =>
  import(
    /* webpackPreload : true */
    /* webpackChunkName : "Preload" */ "./Preload"
  )
);

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show ? (
        <React.Suspense fallback="loading...">
          <One />
          <Two />
          <Prefetch />
          <Preload />
        </React.Suspense>
      ) : null}
    </div>
  );
};

export default App;
