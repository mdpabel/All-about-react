import React from "react";

function fetchPosts(id) {
  return window
    .fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    })
    .then(async (res) => {
      if (res.ok) {
        await new Promise((res) => setTimeout(res, 2000));
        return res.json();
      } else {
        return Promise.reject(
          new Error(`No post with the id of ${id}.\n1 < id < 100 `)
        );
      }
    });
}

function PostForm({ onSubmit, val, initialState = val || "" }) {
  const [id, setId] = React.useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post">Search Post</label>
      <div>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          name=""
          id="post"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

function PostDataView({ post, img }) {
  return (
    <div className="card">
      {/* <img
        src={img || "https://random.imagecdn.app/500/300"}
        alt=""
        width="100%"
        className="card-img-top"
      /> */}
      <div className="card-body">
        <div className="card-title">{post.title}</div>
        <div className="card-text">{post.body}</div>
      </div>
    </div>
  );
}

function PostInfoFallback() {
  const post = {
    title: "Loading...",
    body: "XXXXXXXXXXXXXXXXXXX",
    image: "/images/default.jpg",
  };
  return <PostDataView post={post} />;
}

export { PostForm, PostDataView, PostInfoFallback, fetchPosts };
