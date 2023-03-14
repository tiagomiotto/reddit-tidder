import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post";
import { selectPosts } from "./postsSlice";
import "./PostList.css";

export function PostList(props) {
  const posts = useSelector(selectPosts);

  return (
    <div className="post-list-container">
      <div className="post-list">
        {Object.keys(posts).map((key) => {
          const post = posts[key];
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              subrreddit={post.subrreddit}
              author_fullname={post.author_fullname}
              score={post.score}
              num_comments={post.num_comments}
              created={post.created}
            />
          );
        })}
      </div>
    </div>
  );
}
