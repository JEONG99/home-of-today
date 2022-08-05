import constate from "constate";
import { useState } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);
  return { posts, setPosts };
}

export const [PostsProvider, usePostsValue, usePostsUpdate] = constate(
  usePosts,
  (value) => value.posts,
  (value) => value.setPosts
);
