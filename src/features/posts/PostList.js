import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "./Post";
import { selectPosts, loadPosts, selectIsLoading } from "./postsSlice";
import "./PostList.css";
import { Loading } from "../../components/Loading/Loading";

export function PostList(props) {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  let currentPostIndex = 0;

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(loadPosts());
    }

    function handleScroll(e) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (!ignore) {
          dispatch(loadPosts());
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ignore = true;
    };
  }, [dispatch]);

  return (
    <div className="post-list-container">
      <div className="post-list">
        {Object.keys(posts).map((key) => {
          if (currentPostIndex >= 25) {
            currentPostIndex = 0;
          }
          const post = posts[key];
          const postIndex = currentPostIndex;
          currentPostIndex += 1;
          return <Post key={post.id} id={post.id} postIndex={postIndex} />;
        })}
        {isLoading && <Loading />}
      </div>
    </div>
  );
}
