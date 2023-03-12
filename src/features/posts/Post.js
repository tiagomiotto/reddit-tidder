import React from "react";
import { Votes } from "../../components/Votes";
import { PostFooter } from "../../components/PostFooter";

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
        <img src="" alt="" className="post-image-preview"></img>
      </div>
      <PostFooter
        author_fullname={author_fullname}
        num_comments={num_comments}
        created={created}
      />
    </div>
  );
}
