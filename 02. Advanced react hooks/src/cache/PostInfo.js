import { PostDataView, PostInfoFallback } from "../post";

function PostForm({ id, state }) {
  const { data, error, status } = state;
  if (!id) {
    return "Please submit an ID";
  } else if (status === "pending") {
    return <PostInfoFallback />;
  } else if (status === "rejected") {
    throw error;
  } else if (status === "resolved") {
    return <PostDataView post={data} />;
  }
  return <h1>Hello</h1>;
}
export default PostForm;
