import React from "react";

export function Post(props) {
  return (
    <div className="post-frame">
      <Votes score={props.score} />
      <div className="post-content-frame">
        <h2 className="post-title">{props.title}</h2>
        <img src="" alt="" className="post-image-preview"></img>
      </div>
      <PostFooter
        author_fullname={props.author_fullname}
        num_comments={props.num_comments}
        created={props.created}
      />
    </div>
  );
}
