import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "./Post";
import { selectPosts, loadPosts } from "./postsSlice";
import "./PostList.css";

export function PostList(props) {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

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
              subreddit={post.subreddit}
              author={post.author}
              score={post.score}
              num_comments={post.num_comments}
              created={post.created}
              url_overridden_by_dest={post.url_overridden_by_dest}
              is_video={post.is_video}
              media={post.media}
            />
          );
        })}
      </div>
    </div>
  );
}
