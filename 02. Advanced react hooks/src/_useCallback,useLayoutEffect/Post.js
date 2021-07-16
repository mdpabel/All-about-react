import React, { useEffect, useRef, useState } from "react";
import useAsync from "./useAsync";
import { fetchData } from "./fetchData";
import { ErrorBoundary } from "react-error-boundary";

const Post = () => {
  const [id, setId] = useState("");
  const { run, data, error, status } = useAsync();
  const idRef = useRef(null);

  useEffect(() => {
    run(() => fetchData(id));
  }, [id, run]);

  function renderingPost() {
    if (status === "pending") {
      return <h2>Loading...</h2>;
    } else if (status === "resolved") {
      return JSON.stringify(data);
    } else if (status === "rejected") {
      throw error;
    }
  }

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setId(e.target[0].value);
        }}
      >
        <input ref={idRef} type="number" />
        <button type="submit">Search</button>
      </form>

      <ErrorBoundary
        onReset={() => {
          setId("");
          idRef.current.focus();
        }}
        FallbackComponent={ErrorFallback}
        resetKeys={[id]}
      >
        <div>{renderingPost()}</div>
      </ErrorBoundary>
    </div>
  );
};

export default Post;
