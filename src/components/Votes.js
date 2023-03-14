import React from "react";
import downVoteIcon from "../assets/downvote.svg";
import upVoteIcon from "../assets/upvote.svg";
import "./Votes.css";

export function Votes({ score, handleUpVote, handleDownVote }) {
  return (
    <div className="post-vote-buttons">
      <img
        src={upVoteIcon}
        className="upvote-icon"
        alt="Upvote button"
        onClick={handleUpVote}
      ></img>
      <div>{score}</div>
      <img
        src={downVoteIcon}
        className="downvote-icon"
        alt="Downvote icon"
        onClick={handleDownVote}
      ></img>
    </div>
  );
}
