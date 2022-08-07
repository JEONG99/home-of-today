import constate from "constate";
import { useState } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);
  return { posts, setPosts };
}
function useSkrapPosts() {
  const [skrapPosts, setSkrapPosts] = useState([]);
  return { skrapPosts, setSkrapPosts };
}

export const [PostsProvider, usePostsValue, usePostsUpdate] = constate(
  usePosts,
  (value) => value.posts,
  (value) => value.setPosts
);

export const [SkrapPostsProvider, useSkrapPostsValue, useSkrapPostsUpdate] =
  constate(
    useSkrapPosts,
    (value) => value.skrapPosts,
    (value) => value.setSkrapPosts
  );
