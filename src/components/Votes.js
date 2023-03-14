import React from "react";
import downVoteIcon from "../assets/downvote.svg";
import upVoteIcon from "../assets/upvote.svg";
import "./Votes.css";

export function Votes({ score, voted, handleUpVote, handleDownVote }) {
  return (
    <div className="post-vote-buttons">
      <img
        src={upVoteIcon}
        className={voted === "up" ? "upvote-icon active" : "upvote-icon"}
        alt="Upvote button"
        onClick={handleUpVote}
      ></img>
      <div>{score}</div>
      <img
        src={downVoteIcon}
        className={voted === "down" ? "downvote-icon active" : "downvote-icon"}
        alt="Downvote icon"
        onClick={handleDownVote}
      ></img>
    </div>
  );
}
