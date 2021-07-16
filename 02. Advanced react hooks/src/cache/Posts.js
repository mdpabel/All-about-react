import React, { useEffect, useState } from "react";
import { fetchPosts, PostForm } from "../post";
import useAsync from "../utils-useCallback-useLayoutEffect-useEffect-useReducer-useRef/useAsync";
import PostInfo from "./PostInfo";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { PostCacheContext, usePost } from "./CacheContext";
import Cached from "./Cached";

const Posts = () => {
  const [id, setId] = useState("");
  function handleSubmit(newId) {
    setId(newId);
  }
  const { cache, dispatch } = usePost(PostCacheContext);
  const { state, run, setData } = useAsync();

  useEffect(() => {
    if (!id) {
      return;
    } else if (cache[id]) {
      setData(cache[id]);
    } else {
      run(
        fetchPosts(id).then((post) => {
          dispatch({ type: "ADD_POST", post: post, id: id });
          return post;
        })
      );
    }
  }, [cache, dispatch, id, run, setData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <h4>Cached</h4>
          <Cached />
        </div>
        <div className="col-md-10">
          <PostForm val={id} onSubmit={handleSubmit} />
          <div className="post">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <PostInfo state={state} id={id} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
