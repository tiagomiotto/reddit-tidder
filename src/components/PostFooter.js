import React from "react";
import "./PostFooter.css";

export function PostFooter({ author_fullname, created, num_comments }) {
  return (
    <div className="post-footer">
      <div className="post-footer-author post-footer-item">
        By{" "}
        <a href={`https://reddit.com/u/${author_fullname}`}>
          {author_fullname}
        </a>
      </div>
      <div className="post-footer-created  post-footer-item">At {created}</div>
      <div className="post-footer-comments  post-footer-item">
        {num_comments} comments
      </div>
    </div>
  );
}
