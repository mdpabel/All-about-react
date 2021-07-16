import React, { useEffect, useState } from "react";
// import ErrorBoundaries from "./ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import { PostForm, PostDataView, fetchPosts, PostInfoFallback } from "./post";

const Hooks = () => {
  const [state, setState] = useState({
    id: "",
    status: "idle",
    post: null,
    error: null,
  });

  const { status, post, error, id } = state;

  const onSubmit = (newId) => {
    setState({ ...state, id: newId });
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    setState({ status: "pending" });
    fetchPosts(id).then(
      (post) => {
        setState({
          status: "resolved",
          post: post,
        });
      },
      (error) => {
        setState({
          status: "rejected",
          error: error,
        });
      }
    );
  }, [id]);

  function PostInfo({ post }) {
    if (status === "idle") {
      return "Submit an ID";
    } else if (status === "pending") {
      return <PostInfoFallback post={post} />;
    } else if (status === "rejected") {
      throw error;
    } else if (status === "resolved") {
      return (
        <PostDataView img="https://random.imagecdn.app/500/300" post={post} />
      );
    }
  }

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  function handleReset() {
    setState({ ...state, id: 0 });
  }

  return (
    <div className="post">
      <PostForm val={id} onSubmit={onSubmit} />
      <hr />
      <div className="postView">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={handleReset}
          resetKeys={[id]}
        >
          <PostInfo post={post} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Hooks;
