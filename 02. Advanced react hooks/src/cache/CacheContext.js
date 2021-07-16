import { createContext, useContext, useReducer } from "react";

const PostCacheContext = createContext();

function postReducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, [action.id]: action.post };

    default:
      throw new Error(`The action type ${action.type} is invalid`);
  }
}

function PostProvider({ children }) {
  const [cache, dispatch] = useReducer(postReducer, {});

  return (
    <PostCacheContext.Provider value={{ cache, dispatch }}>
      {children}
    </PostCacheContext.Provider>
  );
}

function usePost() {
  const postContext = useContext(PostCacheContext);
  if (!postContext) {
    throw new Error(`usePost must be used within the context`);
  }
  return postContext;
}

export { PostProvider, PostCacheContext, usePost };
