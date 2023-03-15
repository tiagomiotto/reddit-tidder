import React from "react";
import { Votes } from "../../components/Votes";
import { PostFooter } from "../../components/PostFooter";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, voteOnPostId } from "./postsSlice";

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
  const postData = useSelector((state) => selectPostById(state, id));

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
        {
          {
            link: <div>Link</div>,
            image: (
              <img
                src={url_overridden_by_dest}
                alt="Post "
                className="post-media-preview"
              ></img>
            ),
            "hosted:video": is_video && (
              <video
                src={media.reddit_video.fallback_url}
                type="video/mp4"
                controls
                className="post-media-preview"
              />
            ),
            "rich:video": <div>Rich video</div>,
          }[postData.post_hint]
        }
        <PostFooter
          author={author}
          num_comments={num_comments}
          created={created}
        />
      </div>
    </div>
  );
}
