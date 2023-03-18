import React from "react";
import "./PostFooter.css";
import { formatDistance } from "date-fns";

export function PostFooter({ author, created, num_comments }) {
  return (
    <div className="post-footer">
      <div className="post-footer-author post-footer-item">
        By <a href={`https://reddit.com/u/${author}`}>{author}</a>
      </div>
      <div className="post-footer-created  post-footer-item">
        {formatDistance(new Date(created * 1000), new Date(), {
          addSuffix: true,
        })}
      </div>
      <div className="post-footer-comments  post-footer-item">
        {num_comments} comments
      </div>
    </div>
  );
}
