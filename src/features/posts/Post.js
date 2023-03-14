import React from "react";
import { Votes } from "../../components/Votes";
import { PostFooter } from "../../components/PostFooter";
import "./Post.css";

export function Post({
  id,
  title,
  subreddit,
  author_fullname,
  score,
  num_comments,
  created,
  url_overridden_by_dest,
}) {
  return (
    <div className="post-frame">
      <Votes score={score} />
      <div className="post-content-frame">
        <h2 className="post-title">{title}</h2>
        {url_overridden_by_dest && (
          <img
            src={url_overridden_by_dest}
            alt="Post "
            className="post-image-preview"
          ></img>
        )}

        <PostFooter
          author_fullname={author_fullname}
          num_comments={num_comments}
          created={created}
        />
      </div>
    </div>
  );
}
