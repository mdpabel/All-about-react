import React, { useEffect, useState } from "react";
import { PostForm, fetchPosts, PostInfoFallback, PostDataView } from "../post";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import useAsync from "../utils/useAsync";

function PostInfo({ data }) {
  const { status, data: post, error } = data;
  if (status === "idle") {
    return `Please submit an Id`;
  } else if (status === "pending") {
    return <PostInfoFallback />;
  } else if (status === "rejected") {
    throw error;
  } else if (status === "resolved") {
    return <PostDataView post={post} />;
  }
}

const Posts = () => {
  const [id, setId] = useState("");

  const { state: data, run } = useAsync(null);

  useEffect(() => {
    if (!id) return;
    run(fetchPosts(id));
  }, [id, run]);

  function onSubmit(newId) {
    setId(newId);
  }

  return (
    <div className="post">
      <PostForm onSubmit={onSubmit} />
      <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[id]}>
        <PostInfo data={data} />
      </ErrorBoundary>
    </div>
  );
};

export default Posts;
