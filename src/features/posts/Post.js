import React from "react";
import { Votes } from "../../components/Votes";
import { PostFooter } from "../../components/PostFooter";
import "./Post.css";

export function Post({
  id,
  title,
  subrreddit,
  author_fullname,
  score,
  num_comments,
  created,
}) {
  return (
    <div className="post-frame">
      <Votes score={score} />
      <div className="post-content-frame">
        <h2 className="post-title">{title}</h2>
        <img
          src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png"
          alt=""
          className="post-image-preview"
        ></img>

        <PostFooter
          author_fullname={author_fullname}
          num_comments={num_comments}
          created={created}
        />
      </div>
    </div>
  );
}
