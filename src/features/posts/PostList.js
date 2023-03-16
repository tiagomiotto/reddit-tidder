import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "./Post";
import { selectPosts, loadPosts, selectIsLoading } from "./postsSlice";
import "./PostList.css";
import { Loading } from "../../components/Loading";

export function PostList(props) {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="post-list-container">
      <div className="post-list">
        {isLoading ? (
          <Loading />
        ) : (
          Object.keys(posts).map((key) => {
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
                voted={post.voted}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
