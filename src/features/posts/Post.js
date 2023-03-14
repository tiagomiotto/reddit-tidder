import React from "react";
import { Votes } from "../../components/Votes";
import { PostFooter } from "../../components/PostFooter";
import "./Post.css";
import { useDispatch } from "react-redux";
import { voteOnPostId } from "./postsSlice";

export function Post({
  id,
  title,
  subreddit,
  author,
  score,
  num_comments,
  created,
  url_overridden_by_dest,
  is_video,
  media,
  voted,
}) {
  const dispatch = useDispatch();

  const handleUpVote = () => {
    if (voted !== "up") {
      dispatch(voteOnPostId({ id, vote: 1 }));
    }
  };

  const handleDownVote = () => {
    if (voted !== "down") {
      dispatch(voteOnPostId({ id, vote: -1 }));
    }
  };

  return (
    <div className="post-frame">
      <Votes
        score={score}
        handleDownVote={handleDownVote}
        handleUpVote={handleUpVote}
        voted={voted}
      />
      <div className="post-content-frame">
        <h2 className="post-title">{title}</h2>
        {url_overridden_by_dest &&
          (!is_video ? (
            <img
              src={url_overridden_by_dest}
              alt="Post "
              className="post-media-preview"
            ></img>
          ) : (
            <video
              src={media.reddit_video.fallback_url}
              type="video/mp4"
              controls
              className="post-media-preview"
            />
          ))}

        <PostFooter
          author={author}
          num_comments={num_comments}
          created={created}
        />
      </div>
    </div>
  );
}
