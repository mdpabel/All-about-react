import React from "react";
import { PostCacheContext, usePost } from "./CacheContext";

const Cached = () => {
  const { cache } = usePost(PostCacheContext);

  return (
    <ul>
      {Object.keys(cache).map((item) => (
        <li key={item}>
          {item + ": " + cache[item].title.substring(0, 15)}...
        </li>
      ))}
    </ul>
  );
};

export default Cached;
