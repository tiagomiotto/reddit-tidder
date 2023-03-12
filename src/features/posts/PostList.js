import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post";
import { selectPosts } from "./postsSlice";

export function PostList(props) {
  const posts = useSelector(selectPosts);

  return (
    <div className="post-frame">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}
