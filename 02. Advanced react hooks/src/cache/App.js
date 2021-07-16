import React from "react";
import { PostProvider } from "./CacheContext";
import Posts from "./Posts";

const App = () => {
  return (
    <PostProvider>
      <Posts />
    </PostProvider>
  );
};

export default App;
