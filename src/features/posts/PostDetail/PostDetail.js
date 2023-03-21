import React from "react";
import { Votes } from "../../components/Votes/Votes";
import { PostFooter } from "../../components/PostFooter/PostFooter";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, voteOnPostId } from "./postsSlice";

export function Post({ id, postIndex = 0 }) {
  const dispatch = useDispatch();
  const postData = useSelector((state) => selectPostById(state, id));

  const handleUpVote = () => {
    if (postData.voted !== "up") {
      dispatch(voteOnPostId({ id, vote: "up" }));
    } else {
      dispatch(voteOnPostId({ id, vote: "" }));
    }
  };

  const handleDownVote = () => {
    if (postData.voted !== "down") {
      dispatch(voteOnPostId({ id, vote: "down" }));
    } else {
      dispatch(voteOnPostId({ id, vote: "" }));
    }
  };

  const postIndexStyle = {
    "--post-index": postIndex + 1,
  };

  return (
    <div className="post-frame" style={postIndexStyle}>
      <Votes
        score={postData.score}
        handleDownVote={handleDownVote}
        handleUpVote={handleUpVote}
        voted={postData.voted}
      />
      <div className="post-content-frame">
        <h2 className="post-title">{postData.title}</h2>
        {
          {
            link: postData.preview && (
              <div>
                <a
                  href={postData.url_overridden_by_dest}
                  alt="Post "
                  className="post-media-preview"
                >
                  <img
                    src={postData.preview.images[0].source.url.replace(
                      /&amp;/g,
                      "&"
                    )}
                    alt="Post "
                    className="post-media-preview"
                  ></img>
                </a>
              </div>
            ),
            image: (
              <img
                src={postData.url_overridden_by_dest}
                alt="Post "
                className="post-media-preview"
              ></img>
            ),
            "hosted:video": postData.is_video && (
              // Videos have no audio. Reddit API splits video and audio tracks
              <video
                src={postData.media.reddit_video.fallback_url}
                type="video/mp4"
                controls
                className="post-media-preview"
              />
            ),
            "rich:video": postData.secure_media_embed.media_domain_url && (
              <iframe
                title={"Post video"}
                width={postData.secure_media_embed.width}
                height={postData.secure_media_embed.height + 5}
                style={{
                  transform: "scale(0.8)",
                }}
                src={postData.secure_media_embed.media_domain_url}
              ></iframe>
            ),
          }[postData.post_hint]
        }
        <PostFooter
          author={postData.author}
          num_comments={postData.num_comments}
          created={postData.created}
        />
      </div>
    </div>
  );
}
