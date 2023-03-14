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
  is_video,
  media,
}) {
  return (
    <div className="post-frame">
      <Votes score={score} />
      <div className="post-content-frame">
        <h2 className="post-title">{title}</h2>
        {url_overridden_by_dest &&
          (!is_video ? (
            <img
              src={url_overridden_by_dest}
              alt="Post "
              className="post-image-preview"
            ></img>
          ) : (
            <video
              src={media.reddit_video.fallback_url}
              type="video/mp4"
              controls
            />
          ))}

        <PostFooter
          author_fullname={author_fullname}
          num_comments={num_comments}
          created={created}
        />
      </div>
    </div>
  );
}
